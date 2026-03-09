import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import History from "./pages/History";
import Context from "./pages/Context";
import Goals from "./pages/Goals";
import Outcome from "./pages/Outcome";

// Register Builder.io components (side-effect import)
import "./builder-registry";

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
  const { pathname } = useLocation();

  const homeSources = [
    "(1) Ho, Kelly, and Kelly Ho. \"Almost 3,000 People, Including 517 Minors, Prosecuted so Far Over 2019 Hong Kong Protests.\" Hong Kong Free Press HKFP, 27 Oct. 2022, hongkongfp.com/2022/10/27/almost-3000-people-including-517-minors-prosecuted-so-far-over-2019-hong-kong-protests.",
    "(2) BBC News. Hong Kong Protest: \"Nearly Two Million\" Join Demonstration. 17 June 2019, www.bbc.com/news/world-asia-china-48656471.",
  ];

  const contextSources = [
    "“Hong Kong’s Protests Explained.” Amnesty International, 24 Sept. 2019, www.amnesty.org/en/latest/news/2019/09/hong-kong-protests-explained/. Accessed 2 Mar. 2026.",
    "Little, Becky. “How Hong Kong Came under “One Country, Two Systems” Rule | HISTORY.” HISTORY, 3 Sept. 2019, www.history.com/articles/hong-kong-china-great-britain. Accessed 3 Mar. 2026.",
    "News, BBC. “Hong Kong-China Extradition Plans Explained.” Bbc.com, BBC News, 8 Apr. 2019, www.bbc.com/news/world-asia-china-47810723. Accessed 5 Mar. 2026.",
    "“Opium Wars | Timeline | Britannica.” Encyclopedia Britannica, 2026, www.britannica.com/summary/Opium-Wars-Timeline. Accessed 1 Mar. 2026.",
    "Tam, Gina Anne. “Colonialism and Nationalism in Hong Kong: Towards True Decolonization.” The Historical Journal, vol. 67, no. 1, 8 Jan. 2024, pp. 169–177, www.cambridge.org/core/journals/historical-journal/article/colonialism-and-nationalism-in-hong-kong-towards-true-decolonization/2B4872312A3E0BB90957E2E428BB5386?, https://doi.org/10.1017/s0018246x2300033x. Accessed 1 Mar. 2026.",
  ];

  const fillerSources = [
    "Filler Source: Lastname, Firstname. \"The Evolution of Digital Protests.\" Academic Journal of Social Change, 2024.",
    "Filler Source: Global Policy Institute. \"Case Studies in Political Resistance: Hong Kong 2019.\" research-repository.org, 2025.",
    "Filler Source: Urban Studies Collective. (2026). Neoliberalism and Local Autonomy in Modern Cities. Open Press.",
  ];

  let sources: string[] = [];
  if (pathname === "/") {
    sources = homeSources;
  } else if (pathname === "/context") {
    sources = contextSources;
  } else if (pathname !== "/history") {
    sources = fillerSources;
  }

  return (
    <footer
      ref={ref}
      className="border-t border-white/[0.06] py-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-6xl px-6 lg:px-8"
      >
        {/* Works Cited Section */}
        {sources.length > 0 && (
          <div className="mb-16 text-left">
            <h3 className="mb-6 text-xs font-bold tracking-[0.3em] uppercase text-white/40">
              Works Cited
            </h3>
            <div className="space-y-4">
              {sources.map((source, i) => (
                <p key={i} className="text-sm font-medium leading-relaxed text-white/20 transition-colors duration-300 hover:text-white/40">
                  {source}
                </p>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-col items-center gap-4 border-t border-white/[0.04] pt-12">
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
          <Route path="/history" element={<History />} />
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
