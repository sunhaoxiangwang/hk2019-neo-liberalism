import { Builder } from "@builder.io/react";
import PageHero from "./components/PageHero";
import PageContent from "./components/PageContent";
import StatsGrid from "./components/StatsGrid";

// ─── Builder.io Public API Key ───
export const BUILDER_API_KEY = "d701d1deef3448218324fe57b8da5cda";

// ─── Register components for the visual editor ───
// Each registration makes a component available as a
// drag-and-drop block in Builder.io's visual editor.

Builder.registerComponent(PageHero, {
  name: "PageHero",
  friendlyName: "Page Hero",
  inputs: [
    {
      name: "label",
      type: "string",
      defaultValue: "Section Label",
      helperText: "Small uppercase label above the title",
    },
    {
      name: "title",
      type: "string",
      defaultValue: "Page Title",
      helperText: "Main headline text",
    },
    {
      name: "titleAccent",
      type: "string",
      defaultValue: "",
      helperText: "Optional second line in gradient accent color",
    },
    {
      name: "subtitle",
      type: "string",
      defaultValue: "A compelling subtitle goes here.",
      helperText: "Descriptive text below the headline",
    },
    {
      name: "backgroundImage",
      type: "file",
      allowedFileTypes: ["jpeg", "jpg", "png", "webp"],
      defaultValue: "",
      helperText: "Background photo. Leave empty for dark gradient.",
    },
  ],
});

Builder.registerComponent(PageContent, {
  name: "PageContent",
  friendlyName: "Content Block",
  inputs: [
    {
      name: "sections",
      type: "list",
      subFields: [
        { name: "heading", type: "string", defaultValue: "Section Heading" },
        {
          name: "body",
          type: "list",
          subFields: [{ name: "paragraph", type: "longText" }],
        },
        { name: "pullQuote", type: "string", defaultValue: "A pull quote." },
        { name: "reversed", type: "boolean", defaultValue: false },
      ],
    },
  ],
});

Builder.registerComponent(StatsGrid, {
  name: "StatsGrid",
  friendlyName: "Stats Grid",
  inputs: [],
});
