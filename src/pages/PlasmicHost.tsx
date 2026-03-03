import { PlasmicCanvasHost } from "@plasmicapp/loader-react";

// Import plasmic-init so all component registrations run
import "../plasmic-init";

// This page is the "bridge" between your local dev server and Plasmic Studio.
// In Plasmic Studio, set the "App host" URL to:
//   http://localhost:5173/plasmic-host
//
// Plasmic Studio will load this page in an iframe, which gives it access
// to all your registered components with their real styles and logic.

export default function PlasmicHostPage() {
  return <PlasmicCanvasHost />;
}
