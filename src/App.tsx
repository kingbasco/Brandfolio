import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowUpRight,
  ArrowDown,
  ArrowRight,
  Search,
  X,
  Menu,
  ChevronDown,
  Download,
  Layers,
  SlidersHorizontal,
} from "lucide-react";
import { Button } from "../packages/ui/Button";
import { Dialog } from "../packages/ui/Dialog";
import { templates, type Template } from "./data/templates";

const categories = ["All templates", "Minimal", "Editorial", "Bold", "Organic"];
function readFilters() {
  const p = new URLSearchParams(location.search);
  return {
    query: p.get("q") || "",
    category: categories.includes(p.get("style") || "")
      ? p.get("style")!
      : "All templates",
    sort: p.get("sort") === "az" ? "az" : "featured",
  };
}
function Artwork({
  template,
  hero = false,
}: {
  template: Template;
  hero?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  return failed ? (
    <div className="artwork-fallback">
      <Layers size={36} />
      <span>{template.name}</span>
      <small>Cover preview unavailable</small>
    </div>
  ) : (
    <img
      src={template.image}
      alt={`${template.name} — ${template.category.toLowerCase()} brand guideline cover concept`}
      width="800"
      height="600"
      loading={hero ? "eager" : "lazy"}
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}
function App() {
  const [filters, setFilters] = useState(readFilters);
  const [limit, setLimit] = useState(9);
  const [selected, setSelected] = useState<Template | null>(null);
  const [menu, setMenu] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const appendedIndex = useRef<number | null>(null);
  useEffect(() => {
    if (appendedIndex.current === null) return;
    const target =
      galleryRef.current?.querySelectorAll<HTMLButtonElement>(
        ".template-cover",
      )[appendedIndex.current];
    appendedIndex.current = null;
    target?.focus({ preventScroll: true });
    target?.scrollIntoView({ block: "nearest" });
  }, [limit]);
  useEffect(() => {
    const onBack = () => {
      setFilters(readFilters());
      setLimit(9);
    };
    window.addEventListener("popstate", onBack);
    return () => window.removeEventListener("popstate", onBack);
  }, []);
  function update(next: Partial<typeof filters>) {
    const value = { ...filters, ...next };
    setFilters(value);
    setLimit(9);
    const url = new URL(location.href);
    for (const key of ["q", "style", "sort"]) url.searchParams.delete(key);
    if (value.query) url.searchParams.set("q", value.query);
    if (value.category !== "All templates")
      url.searchParams.set("style", value.category);
    if (value.sort === "az") url.searchParams.set("sort", "az");
    history.replaceState(null, "", url);
  }
  const results = useMemo(() => {
    const q = filters.query.trim().toLowerCase();
    const found = templates.filter(
      (t) =>
        (filters.category === "All templates" ||
          t.category === filters.category) &&
        `${t.name} ${t.category} ${t.description}`.toLowerCase().includes(q),
    );
    return filters.sort === "az"
      ? [...found].sort((a, b) => a.name.localeCompare(b.name))
      : found;
  }, [filters]);
  const shown = results.slice(0, limit);
  const featured = templates[0];
  function reset() {
    update({ query: "", category: "All templates", sort: "featured" });
    searchRef.current?.focus();
  }
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <a className="wordmark" href="#" aria-label="Brandfolio home">
          <span className="brand-symbol" aria-hidden="true">
            b
          </span>
          brandfolio<span className="wordmark-dot">.</span>
        </a>
        <nav
          className={menu ? "main-nav is-open" : "main-nav"}
          aria-label="Main navigation"
        >
          <a href="#templates" onClick={() => setMenu(false)}>
            Templates
          </a>
          <a href="#how-it-works" onClick={() => setMenu(false)}>
            How it works
          </a>
          <a href="#questions" onClick={() => setMenu(false)}>
            FAQs
          </a>
        </nav>
        <a className="button button--dark nav-cta" href="#templates">
          Find your template <ArrowUpRight size={17} />
        </a>
        <button
          className="icon-button menu-toggle"
          aria-label={menu ? "Close navigation" : "Open navigation"}
          aria-expanded={menu}
          onClick={() => setMenu(!menu)}
        >
          {menu ? <X /> : <Menu />}
        </button>
      </header>
      <main id="main">
        <section className="hero" aria-labelledby="hero-heading">
          <div className="hero-copy">
            <h1 id="hero-heading">
              Your brand.
              <br />
              By the book<span className="hero-period">.</span>
            </h1>
            <p>
              Find the right template for your brand guidelines.
              <br className="desktop-break" /> Your logo, colours, type, and
              story—all in one place.
            </p>
            <div className="hero-actions">
              <a className="button button--dark" href="#templates">
                Explore templates <ArrowUpRight size={20} />
              </a>
              <a className="hero-text-link" href="#how-it-works">
                Meet Brandfolio <ArrowRight size={17} />
              </a>
            </div>
          </div>
          <button
            className="hero-feature"
            onClick={() => setSelected(featured)}
            aria-label={`Preview ${featured.name} template`}
          >
            <div className="folio-label">
              <span>BRAND GUIDELINES</span>
              <span>001 — {featured.name.toUpperCase()}</span>
            </div>
            <div className="hero-art">
              <Artwork template={featured} hero />
            </div>
            <div className="folio-footer">
              <span>
                A little structure.
                <br />A lot of personality.
              </span>
              <span className="round-arrow">
                <ArrowUpRight size={25} />
              </span>
            </div>
          </button>
          <div className="hero-bottom">
            <span>Made for the people behind the brands.</span>
            <a href="#templates">
              Find your starting point <ArrowDown size={16} />
            </a>
          </div>
        </section>
        <section
          id="templates"
          className="gallery-section"
          aria-labelledby="gallery-heading"
        >
          <div className="gallery-heading">
            <div>
              <h2 id="gallery-heading">
                Good design starts here<span>.</span>
              </h2>
              <p>A considered collection. An unmistakably you finish.</p>
            </div>
            <div className="collection-label">
              <span className="status-dot" />
              The concept collection{" "}
              <span className="count-badge">{templates.length}</span>
            </div>
          </div>
          <div className="filter-bar">
            <div className="categories" aria-label="Filter templates by style">
              {categories.map((category) => (
                <button
                  key={category}
                  className={
                    filters.category === category
                      ? "filter-chip active"
                      : "filter-chip"
                  }
                  aria-pressed={filters.category === category}
                  onClick={() => update({ category })}
                >
                  {category}
                  {category === "All templates" && (
                    <span>{templates.length}</span>
                  )}
                </button>
              ))}
            </div>
            <div className="search-field">
              <Search size={18} aria-hidden="true" />
              <input
                ref={searchRef}
                type="search"
                aria-label="Search templates"
                placeholder="Find your style…"
                value={filters.query}
                onChange={(e) => update({ query: e.target.value })}
              />
              {filters.query && (
                <button
                  className="icon-button"
                  aria-label="Clear search"
                  onClick={() => {
                    update({ query: "" });
                    searchRef.current?.focus();
                  }}
                >
                  <X size={16} />
                </button>
              )}
            </div>
          </div>
          <div className="gallery-meta">
            <p role="status" aria-live="polite">
              {results.length === 0
                ? "No matching concepts"
                : `Showing ${shown.length} of ${results.length} template concept${results.length === 1 ? "" : "s"}`}
            </p>
            <label className="sort-control">
              <SlidersHorizontal size={15} />
              <span className="sr-only">Sort templates</span>
              <select
                aria-label="Sort templates"
                value={filters.sort}
                onChange={(e) => update({ sort: e.target.value })}
              >
                <option value="featured">Curated order</option>
                <option value="az">Name: A–Z</option>
              </select>
              <ChevronDown size={14} aria-hidden="true" />
            </label>
          </div>
          {shown.length > 0 ? (
            <div className="template-grid" ref={galleryRef}>
              {shown.map((template) => (
                <article className="template-card" key={template.id}>
                  <button
                    className="template-cover"
                    onClick={() => setSelected(template)}
                    aria-label={`Preview ${template.name} template`}
                  >
                    <Artwork template={template} />
                    <span className="cover-action">
                      Explore template <ArrowUpRight size={17} />
                    </span>
                  </button>
                  <div className="card-meta">
                    <div>
                      <h3>
                        <button onClick={() => setSelected(template)}>
                          {template.name}
                        </button>
                      </h3>
                      <p>
                        {template.category} <span aria-hidden="true">/</span>{" "}
                        Brand guidelines
                      </p>
                    </div>
                    <span className="card-index" aria-label="Concept preview">
                      Concept <ArrowUpRight size={15} />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <Search size={32} />
              <h3>No templates found</h3>
              <p>Try another name or explore all styles.</p>
              <Button onClick={reset}>Reset filters</Button>
            </div>
          )}
          {results.length > limit && (
            <div className="load-more">
              <Button
                variant="secondary"
                onClick={() => {
                  appendedIndex.current = shown.length;
                  setLimit(limit + 9);
                }}
              >
                More to discover <ArrowDown size={18} />
              </Button>
              <p>
                Showing {shown.length} of {results.length} concepts
              </p>
            </div>
          )}
          <p className="gallery-note">
            Original cover concepts for the upcoming Brandfolio collection. The
            guideline editor is in development.
          </p>
        </section>
        <section className="how-section" id="how-it-works">
          <div className="how-intro">
            <h2>
              Less formatting.
              <br />
              More creating.
            </h2>
            <p>
              We’re building a simpler way to turn your identity into a brand
              book. Here’s the workflow we’re working toward.
            </p>
            <a className="text-link" href="#templates">
              Start with a visual direction <ArrowUpRight size={18} />
            </a>
          </div>
          <ol className="steps">
            <li>
              <span>01</span>
              <div>
                <h3>Bring your brand</h3>
                <p>
                  Your logo, colour palette, typography, and story. The
                  ingredients are already yours.
                </p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h3>Make it your own</h3>
                <p>
                  Choose a template, arrange your sections, and refine the
                  details.
                </p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h3>Send it into the world</h3>
                <p>
                  The goal: a polished guideline you can share with your team
                  and your clients.
                </p>
              </div>
            </li>
          </ol>
        </section>
        <section className="faq-section" id="questions">
          <h2>A few good questions.</h2>
          <div className="faq-list">
            <details>
              <summary>
                What is Brandfolio?
                <ChevronDown size={20} />
              </summary>
              <p>
                Brandfolio is a brand-guideline builder in development. It’s
                designed to bring your existing logo, colours, fonts, and usage
                rules together in an editable brand book.
              </p>
            </details>
            <details>
              <summary>
                Can I use these templates today?
                <ChevronDown size={20} />
              </summary>
              <p>
                You can explore the concepts and download their original SVG
                covers today. These are visual starting points, not full
                editable guidelines. The editor and complete templates are still
                being built.
              </p>
            </details>
            <details>
              <summary>
                Will I be able to use my own brand assets?
                <ChevronDown size={20} />
              </summary>
              <p>
                Yes—that’s the plan. Your logo, colours, fonts, and content will
                define the guideline. The template provides the structure.
              </p>
            </details>
            <details>
              <summary>
                Is Brandfolio free?
                <ChevronDown size={20} />
              </summary>
              <p>
                Browsing and downloading these concept covers is free. Plans for
                the guideline builder haven’t been announced yet.
              </p>
            </details>
          </div>
        </section>
        <section className="closing-banner">
          <h2>
            Make your brand
            <br />
            an open book.
          </h2>
          <a className="button button--dark" href="#templates">
            Find your starting point <ArrowUpRight size={20} />
          </a>
        </section>
      </main>
      <footer>
        <div className="footer-top">
          <a className="wordmark" href="#">
            brandfolio.
          </a>
          <p>For brands with something to say.</p>
          <a href="#main">
            Back to top <ArrowUpRight size={16} />
          </a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Brandfolio</span>
          <span>
            Design foundations adapted from{" "}
            <a href="https://www.figma.com/design/2To7iHU0ouUB2HarbFHM8z/">
              TapTap
            </a>{" "}
            ·{" "}
            <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>
          </span>
          <a href="https://github.com/kingbasco/Brandfolio">
            Follow the build <ArrowUpRight size={14} />
          </a>
        </div>
      </footer>
      <Dialog
        open={selected !== null}
        onClose={() => setSelected(null)}
        titleId="preview-title"
      >
        {selected && (
          <div className="preview-content">
            <div className="preview-art">
              <Artwork key={selected.id} template={selected} />
            </div>
            <div className="preview-details">
              <span className="preview-category">
                {selected.category} / Cover concept
              </span>
              <h2 id="preview-title">{selected.name}</h2>
              <p>{selected.description}</p>
              <div className="preview-palette" aria-label="Concept palette">
                {selected.colors.map((color) => (
                  <span key={color} style={{ background: color }} title={color}>
                    <span className="sr-only">{color}</span>
                  </span>
                ))}
              </div>
              <p className="preview-note">
                An original visual concept, not a complete editable guideline.
                Download the SVG cover to explore the direction.
              </p>
              <a
                className="button button--dark"
                href={selected.image}
                download={`${selected.id}-cover.svg`}
              >
                <Download size={18} />
                Download cover
              </a>
              <Button variant="ghost" onClick={() => setSelected(null)}>
                Keep exploring <ArrowRight size={17} />
              </Button>
            </div>
          </div>
        )}
      </Dialog>
    </>
  );
}
export default App;
