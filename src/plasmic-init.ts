import { initPlasmicLoader } from "@plasmicapp/loader-react";
import PageHero from "./components/PageHero";
import PageContent from "./components/PageContent";
import StatsGrid from "./components/StatsGrid";

// ─── Initialize the Plasmic loader ───
// Replace these with your actual Plasmic project ID and token.
// Find them at: https://studio.plasmic.app → your project → Settings → API tokens
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "mCgSKqoCZfXdgUpVB4rK7X",
      token: "fCuLoExvNdNWLSvTUmy5i9tge3pH0LIplnJTCUkBMh301wV3N5ncUIDvjrD7QCHbNhHEXiwAH2FU5Y3Ss4EbA",
    },
  ],
  preview: true, // Set to false in production for published-only content
});

// ─── Register existing components ───
// Each registration makes a .tsx component available as a
// drag-and-drop block in Plasmic Studio. The `props` object
// maps TypeScript prop names → Plasmic editor controls.

// 1. PageHero — full-viewport hero with optional background image
PLASMIC.registerComponent(PageHero, {
  name: "PageHero",
  displayName: "Page Hero",
  props: {
    label: {
      type: "string",
      defaultValue: "Section Label",
      description: "Small uppercase label above the title (e.g. 'About the Movement')",
    },
    title: {
      type: "string",
      defaultValue: "Page Title",
      description: "Main headline text",
    },
    titleAccent: {
      type: "string",
      defaultValue: "",
      description: "Optional second line rendered in gradient accent color",
    },
    subtitle: {
      type: "string",
      defaultValue: "A compelling subtitle goes here.",
      description: "Descriptive text below the headline",
    },
    backgroundImage: {
      type: "string",
      defaultValue: "",
      description: "URL or path to a background photo. Leave empty for dark gradient.",
    },
  },
  importPath: "./components/PageHero",
});

// 2. PageContent — pull-quote + body text layout
PLASMIC.registerComponent(PageContent, {
  name: "PageContent",
  displayName: "Content Block",
  props: {
    sections: {
      type: "object",
      defaultValue: [
        {
          heading: "Section Heading",
          body: [
            "First paragraph of body text.",
            "Second paragraph of body text.",
          ],
          pullQuote: "A compelling pull quote goes here.",
          reversed: false,
        },
      ],
      description:
        "Array of content sections. Each has heading, body paragraphs, pullQuote, and optional reversed layout.",
    },
  },
  importPath: "./components/PageContent",
});

// 3. StatsGrid — 6-card stats grid with featured image
PLASMIC.registerComponent(StatsGrid, {
  name: "StatsGrid",
  displayName: "Stats Grid",
  props: {},
  importPath: "./components/StatsGrid",
});

// Header is NOT registered — it's a global layout element that uses
// react-router NavLink, so it must stay hard-coded in App.tsx.
// Plasmic should only control page-level content sections.
