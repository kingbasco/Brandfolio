import { test, expect } from "@playwright/test";
test("gallery filtering, restoration, sorting and reset", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator(".template-card")).toHaveCount(9);
  await page.getByRole("button", { name: "More to discover" }).click();
  await expect(page.locator(".template-card")).toHaveCount(12);
  await expect(page.locator(".template-cover").nth(9)).toBeFocused();
  await expect(page.getByRole("status")).toHaveText(
    "Showing 12 of 12 template concepts",
  );
  await page.getByRole("button", { name: "Minimal", exact: true }).click();
  await expect(page.locator(".template-card")).toHaveCount(4);
  await expect(page).toHaveURL(/style=Minimal/);
  await page.reload();
  await expect(
    page.getByRole("button", { name: "Minimal", exact: true }),
  ).toHaveAttribute("aria-pressed", "true");
  await page.getByRole("searchbox").fill("nothing-matches-this");
  await expect(
    page.getByRole("heading", { name: "No templates found" }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Reset filters" }).click();
  await expect(page.locator(".template-card")).toHaveCount(9);
  await expect(page.getByRole("searchbox")).toBeFocused();
  await page.getByLabel("Sort templates").selectOption("az");
  await expect(page.locator(".template-card h3").first()).toHaveText(
    "Baseline",
  );
  await page.getByRole("searchbox").fill("Morrow");
  await expect(page.locator(".template-card")).toHaveCount(1);
  await page.getByRole("button", { name: "Clear search" }).click();
  await expect(page.getByRole("searchbox")).toBeFocused();
});
test("preview has keyboard focus management and real downloadable cover", async ({
  page,
}) => {
  await page.goto("/");
  const trigger = page
    .locator(".template-card")
    .first()
    .getByRole("button", { name: "Preview Forma template" });
  await trigger.click();
  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  await expect(
    dialog.getByRole("heading", { name: "Forma", exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Close template preview" }),
  ).toBeFocused();
  await page.keyboard.press("Shift+Tab");
  await expect(
    dialog.getByRole("button", { name: "Keep exploring" }),
  ).toBeFocused();
  const download = page.waitForEvent("download");
  await dialog.getByRole("link", { name: "Download cover" }).click();
  expect((await download).suggestedFilename()).toBe("forma-cover.svg");
  await page.keyboard.press("Escape");
  await expect(dialog).not.toBeVisible();
  await expect(trigger).toBeFocused();
});
test("failed artwork stays navigable", async ({ page }) => {
  await page.route("**/templates/forma.svg", (route) => route.abort());
  await page.goto("/");
  await expect(page.locator(".artwork-fallback").first()).toContainText(
    "Cover preview unavailable",
  );
  await page
    .locator(".template-card")
    .first()
    .getByRole("button", { name: "Preview Forma template" })
    .click();
  await expect(page.getByRole("dialog")).toBeVisible();
});
for (const width of [390, 768, 1440])
  test(`responsive layout and assets at ${width}`, async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (e) => errors.push(e.message));
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
    for (const image of await page.locator("img").all()) {
      await image.scrollIntoViewIfNeeded();
    }
    await expect
      .poll(() =>
        page
          .locator("img")
          .evaluateAll((images) =>
            images.every(
              (img) =>
                (img as HTMLImageElement).complete &&
                (img as HTMLImageElement).naturalWidth > 0,
            ),
          ),
      )
      .toBe(true);
    if (width === 390) {
      await page.getByRole("button", { name: "Open navigation" }).click();
      await page
        .getByRole("navigation")
        .getByRole("link", { name: "FAQs" })
        .click();
      await expect(
        page.getByRole("button", { name: "Open navigation" }),
      ).toHaveAttribute("aria-expanded", "false");
    }
    await page
      .getByText("Can I use these templates today?", { exact: true })
      .click();
    await expect(
      page.getByText(/You can explore the concepts and download/),
    ).toBeVisible();
    expect(errors).toEqual([]);
  });
