import { defineConfig } from "@playwright/test";
export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  use: {
    baseURL: "http://127.0.0.1:4180",
    browserName: "chromium",
    launchOptions: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH
      ? { executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH }
      : {},
    reducedMotion: "reduce",
  },
  webServer: {
    command: "npm run dev -- --port 4180",
    url: "http://127.0.0.1:4180",
    reuseExistingServer: !process.env.CI,
  },
  reporter: "list",
});
