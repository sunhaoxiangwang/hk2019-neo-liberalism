import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { Suspense, useRef, useEffect, lazy } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Context from "./pages/Context";
import Goals from "./pages/Goals";
import Outcome from "./pages/Outcome";

// Lazy-load Plasmic host so its ~200KB runtime doesn't bloat the main bundle
const PlasmicHostPage = lazy(() => import("./pages/PlasmicHost"));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <footer
      ref={ref}
      className="border-t border-white/[0.06] py-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-6xl px-6 text-center lg:px-8"
      >
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="h-2.5 w-2.5 rounded-full bg-[var(--color-accent)] shadow-[0_0_10px_rgba(230,57,70,0.5)]" />
            <span className="text-sm font-extrabold tracking-[0.25em] uppercase">
              HK 2019
            </span>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[var(--color-text-secondary)]">
            A digital historical project examining the 2019 Hong Kong protests
            through the lens of neoliberalism and political resistance.
          </p>
          <p className="mt-4 text-xs text-white/30">
            Created for academic purposes. Winter 2026.
          </p>
        </div>
      </motion.div>
    </footer>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/context" element={<Context />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/outcome" element={<Outcome />} />
        </Routes>
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}

function AppRoutes() {
  const location = useLocation();

  // Plasmic host page gets a bare render — no header, footer, or animations
  if (location.pathname === "/plasmic-host") {
    return (
      <Suspense>
        <PlasmicHostPage />
      </Suspense>
    );
  }

  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen bg-[var(--color-surface)] text-[var(--color-text-primary)]">
        <Header />
        <main>
          <AnimatedRoutes />
        </main>
      </div>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
