// Original fictional template concepts. Page counts describe proposed layouts, not a shipped editor catalog.
export type Template = {
  id: string;
  name: string;
  category: "Minimal" | "Editorial" | "Bold" | "Organic";
  description: string;
  pages: number;
  colors: string[];
  image: string;
};

export const templates: Template[] = [
  {
    id: "forma",
    name: "Forma",
    category: "Minimal",
    description:
      "A quiet, structured identity with generous space and a confident mint palette.",
    pages: 16,
    colors: ["#D9ECE3", "#173D33", "#F4F5EE"],
    image: "/templates/forma.svg",
  },
  {
    id: "offscript",
    name: "Offscript",
    category: "Bold",
    description:
      "Oversized typography, electric contrast and a personality that refuses to blend in.",
    pages: 20,
    colors: ["#D4FF3F", "#171915", "#F4F5EE"],
    image: "/templates/offscript.svg",
  },
  {
    id: "terrace",
    name: "Terrace",
    category: "Organic",
    description:
      "Warm, tactile colors and graceful typography for considered lifestyle brands.",
    pages: 18,
    colors: ["#E9E0CD", "#5A3F2E", "#A7AA80"],
    image: "/templates/terrace.svg",
  },
  {
    id: "common-ground",
    name: "Common Ground",
    category: "Editorial",
    description:
      "An editorial brand book built around human stories and purposeful typography.",
    pages: 24,
    colors: ["#F2EDE2", "#B7472F", "#262920"],
    image: "/templates/common-ground.svg",
  },
  {
    id: "sonder",
    name: "Sonder",
    category: "Bold",
    description:
      "Expressive lettering and rich purple tones for brands with a distinct point of view.",
    pages: 22,
    colors: ["#D2BCF4", "#43226B", "#F8EEAA"],
    image: "/templates/sonder.svg",
  },
  {
    id: "studio-north",
    name: "Studio North",
    category: "Minimal",
    description:
      "A precise typographic system with a crisp grid and a focused monochrome palette.",
    pages: 16,
    colors: ["#E9ECEE", "#202B37", "#F8FAFB"],
    image: "/templates/studio-north.svg",
  },
  {
    id: "morrow",
    name: "Morrow",
    category: "Editorial",
    description:
      "A fresh perspective on the brand manual, balancing bold type and playful blue.",
    pages: 20,
    colors: ["#2356DB", "#EFF5EC", "#D0E49A"],
    image: "/templates/morrow.svg",
  },
  {
    id: "fieldwork",
    name: "Fieldwork",
    category: "Organic",
    description:
      "Grounded greens, open space and botanical forms for nature-minded identities.",
    pages: 18,
    colors: ["#D8DBBC", "#283D2E", "#718064"],
    image: "/templates/fieldwork.svg",
  },
  {
    id: "baseline",
    name: "Baseline",
    category: "Minimal",
    description:
      "Confident grids, stripped-back layouts and a practical system for every brand detail.",
    pages: 14,
    colors: ["#F0F0EC", "#242725", "#E9A98A"],
    image: "/templates/baseline.svg",
  },
  {
    id: "kanso",
    name: "Kanso",
    category: "Minimal",
    description:
      "A restrained, warm identity system that gives every element room to breathe.",
    pages: 16,
    colors: ["#E8E4DB", "#403F38", "#A4AB96"],
    image: "/templates/kanso.svg",
  },
  {
    id: "good-things",
    name: "Good Things",
    category: "Bold",
    description:
      "An optimistic, color-forward brand book with friendly type and an independent spirit.",
    pages: 22,
    colors: ["#F05F39", "#4A261C", "#FFE2A6"],
    image: "/templates/good-things.svg",
  },
  {
    id: "monogram",
    name: "Monogram",
    category: "Editorial",
    description:
      "A refined editorial identity with timeless serif typography and elegant proportions.",
    pages: 24,
    colors: ["#3C2529", "#EEE0CF", "#B9957D"],
    image: "/templates/monogram.svg",
  },
];
