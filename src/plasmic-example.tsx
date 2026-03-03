/**
 * ─── INTEGRATION EXAMPLE ───
 *
 * This file shows how to replace a hard-coded section of your app
 * with a Plasmic-managed one. Your teammates can then edit that
 * specific section visually in Plasmic Studio while the rest of
 * the page remains hard-coded.
 *
 * DO NOT import this file — it's a reference only. Copy the
 * pattern into whichever page you want to make editable.
 */

import { PlasmicComponent, PlasmicRootProvider } from "@plasmicapp/loader-react";
import { PLASMIC } from "./plasmic-init";
import PageHero from "./components/PageHero";
import StatsGrid from "./components/StatsGrid";

/**
 * STRATEGY: Replace one section of a page with <PlasmicComponent>.
 *
 * In this example, the About page hero and footer stay hard-coded,
 * but the middle content area is managed by Plasmic Studio.
 *
 * Steps in Plasmic Studio:
 *   1. Create a new component called "AboutContent"
 *   2. Drag in the registered "Content Block" component
 *   3. Fill in props visually
 *   4. Publish
 *
 * The <PlasmicComponent> will fetch that published content at runtime.
 */
export default function AboutPageWithPlasmic() {
  return (
    <PlasmicRootProvider loader={PLASMIC}>
      {/* Hard-coded hero — stays in your control */}
      <PageHero
        label="About the Movement"
        title="A City's Defining Moment"
        subtitle="How a proposed extradition bill ignited the largest protest movement in Hong Kong's history."
        backgroundImage="/images/hero-about.jpg"
      />

      {/* ── THIS SECTION IS PLASMIC-MANAGED ──
          "AboutContent" is the name of a component you create in Plasmic Studio.
          Teammates can edit it visually. The fallback shows while loading. */}
      <PlasmicComponent
        component="AboutContent"
        componentProps={{
          // You can pass hard-coded props that override Plasmic defaults
          className: "py-20",
        }}
      />

      {/* Hard-coded stats — stays in your control */}
      <StatsGrid />
    </PlasmicRootProvider>
  );
}

/**
 * ─── FULL-PAGE PLASMIC ROUTE ───
 *
 * If you want an entire page designed in Plasmic Studio:
 */
export function FullPlasmicPage() {
  return (
    <PlasmicRootProvider loader={PLASMIC}>
      <PlasmicComponent component="MyFullPage" />
    </PlasmicRootProvider>
  );
}

/**
 * ─── CATCH-ALL ROUTE ───
 *
 * If you want Plasmic to handle any route not matched by your
 * existing hard-coded routes (like a CMS):
 *
 *   <Route path="/*" element={<CatchAllPlasmicPage />} />
 */
export function CatchAllPlasmicPage() {
  const pathname = window.location.pathname;
  return (
    <PlasmicRootProvider loader={PLASMIC}>
      <PlasmicComponent component={pathname} />
    </PlasmicRootProvider>
  );
}
