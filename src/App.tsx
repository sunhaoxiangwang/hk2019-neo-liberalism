import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";

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
    "Ho, Kelly, and Kelly Ho. \"Almost 3,000 People, Including 517 Minors, Prosecuted so Far Over 2019 Hong Kong Protests.\" Hong Kong Free Press HKFP, 27 Oct. 2022, hongkongfp.com/2022/10/27/almost-3000-people-including-517-minors-prosecuted-so-far-over-2019-hong-kong-protests.",
    "BBC News. Hong Kong Protest: \"Nearly Two Million\" Join Demonstration. 17 June 2019, www.bbc.com/news/world-asia-china-48656471.",
  ];

  const contextSources = [
    "\"Hong Kong’s Protests Explained.\" Amnesty International, 24 Sept. 2019, www.amnesty.org/en/latest/news/2019/09/hong-kong-protests-explained/. Accessed 2 Mar. 2026.",
    "Little, Becky. \"How Hong Kong Came under ‘One Country, Two Systems’ Rule | HISTORY.\" HISTORY, 3 Sept. 2019, www.history.com/articles/hong-kong-china-great-britain. Accessed 3 Mar. 2026.",
    "News, BBC. \"Hong Kong-China Extradition Plans Explained.\" Bbc.com, BBC News, 8 Apr. 2019, www.bbc.com/news/world-asia-china-47810723. Accessed 5 Mar. 2026.",
    "\"Opium Wars | Timeline | Britannica.\" Encyclopedia Britannica, 2026, www.britannica.com/summary/Opium-Wars-Timeline. Accessed 1 Mar. 2026.",
    "Tam, Gina Anne. \"Colonialism and Nationalism in Hong Kong: Towards True Decolonization.\" The Historical Journal, vol. 67, no. 1, 8 Jan. 2024, pp. 169–177, www.cambridge.org/core/journals/historical-journal/article/colonialism-and-nationalism-in-hong-kong-towards-true-decolonization/2B4872312A3E0BB90957E2E428BB5386?, https://doi.org/10.1017/s0018246x2300033x. Accessed 1 Mar. 2026.",
  ];

  const outcomeSources = [
    "CNBC. \"Hong Kong Protests' Impact on Economy, Stock Market in Five Charts.\" 26 Dec. 2019. https://www.cnbc.com/2019/12/26/hong-kong-protests-impact-on-economy-stock-market-in-five-charts.html",
    "ResearchGate. \"The Synthetic Control Method with Nonlinear Outcomes: Estimating the Impact of the 2019 Anti-Extradition Law Amendments Bill Protests on Hong Kong's Economy.\" https://www.researchgate.net/publication/371311609",
    "Reuters. \"Hong Kong August Visitors Plunge 40% Year-on-Year; Hotels Half Full.\" 2019. https://www.reuters.com/article/us-hongkong-protests-tourism/hong-kong-august-visitors-plunge-40-year-on-year-hotels-half-full-finance-chief-idUSKCN1VU0GO/",
    "CBRE. \"Hong Kong SAR.\" China Real Estate Market Outlook, 2020. https://www.cbre.com.cn/en/insights/books/china-real-estate-market-outlook-2020/06-hong-kong-sar",
    "BNP Paribas Economic Research. \"Hong Kong: Difficult Normalisation of Economic Growth.\" 2023. https://economic-research.bnpparibas.com/html/en-US/Hong-Kong-Difficult-normalisation-economic-growth-10/16/2023,48992",
    "CNN. \"Hong Kong Protesters Face PTSD.\" 2020. https://www.cnn.com/2020/01/10/health/hong-kong-protest-ptsd-intl-hnk",
    "South China Morning Post. \"Hong Kong Protests: How the City's Reddit Forum LIHKG Has Become a Key Organizing Space.\" https://www.scmp.com/news/hong-kong/society/article/3021224/hong-kong-protests-how-citys-reddit-forum-lihkg-has-become",
    "CNN. \"China Restricts Apple's AirDrop Function Amid Protests.\" 2022. https://www.cnn.com/2022/11/11/business/china-apple-airdrop-function-restricted-hnk-intl",
    "The Guardian. \"Hong Kong's Lennon Walls Protest Goes On in Colourful Collages of Sticky Labels.\" 2019. https://www.theguardian.com/world/2019/jul/12/hong-kongs-lennon-walls-protest-goes-on-in-colourful-collages-of-sticky-labels",
    "Council on Foreign Relations. \"Hong Kong's Freedoms and the China Crackdown.\" https://www.cfr.org/backgrounders/hong-kong-freedoms-democracy-protests-china-crackdown",
  ];

  const goalsSources = [
    "The Guardian, 2019: https://www.theguardian.com/world/2019/sep/04/hong-kong-lam-to-withdraw-extradition-bill-say-reports",
    "https://www.theguardian.com/world/2019/sep/04/hong-kong-will-scrapping-extradition-bill-end-the-protests",
    "Amnesty International, 2019: https://www.amnesty.org/en/latest/news/2019/09/hong-kong-protests-explained/",
    "Hong Kong Free Press, 2019: https://hongkongfp.com/2019/12/23/explainer-hong-kongs-five-demands-withdrawal-extradition-bill/",
    "https://i.guim.co.uk/img/media/71ed39c533cf79c37aef2466052d0ac52108df2e/0_0_4000_2667/master/4000.jpg?width=1900&dpr=2&s=none&crop=none",
    "https://time.com/5603754/hong-kong-carrie-lam-china-extradition-bill-more-protests/",
    "Amnesty International, 2019: https://www.amnesty.org/en/latest/press-release/2019/09/hong-kong-arbitrary-arrests-brutal-beatings-and-torture-in-police-detention-revealed/",
    "The Guardian, Aug 2019: https://www.theguardian.com/world/2019/aug/13/what-do-the-hong-kong-protesters-want",
    "The Guardian, Dec 2019: https://www.theguardian.com/world/2019/dec/11/foreign-experts-quit-hong-kong-police-brutality-inquiry-over-lack-of-powers",
    "Amnesty International, 2020: https://www.amnesty.org/en/latest/news/2020/05/hong-kong-impotent-and-biased-ipcc-report-into-protests-fails-to-bring-justice-any-closer/",
    "High Court of Hong Kong, 2020: https://www.doj.gov.hk/en/notable_judgments/pdf/HCAL_1747_1753_2671_2703_2915_2019e.pdf",
    "Human Rights Watch, 2024: https://www.hrw.org/news/2024/06/10/hong-kong-no-accountability-5-years-after-mass-protests",
    "U.S. State Department, 2020: https://www.state.gov/reports/2020-country-reports-on-human-rights-practices/china/hong-kong/",
    "https://hongkongfp.com/2019/12/26/explainer-hong-kongs-five-demands-universal-suffrage",
    "https://www.cnn.com/2019/08/13/asia/hong-kong-airport-protest-explained-hnk-intl",
    "https://www.law.georgetown.edu/law-asia/wp-content/uploads/sites/31/2023/10/GCAL-HK-2019-ARREST-DATA-REPORT-FINAL-OCT-2023.pdf",
    "https://www.amnesty.org/fr/wp-content/uploads/2021/05/ASA1702572019ENGLISH.pdf",
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
  } else if (pathname === "/outcome") {
    sources = outcomeSources;
  } else if (pathname === "/goals") {
    sources = goalsSources;
  } else {
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
                <p key={i} className="text-sm font-medium leading-relaxed text-white/20 transition-colors duration-300 hover:text-white/40 break-words">
                  {source}
                </p>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-col items-center gap-6 border-t border-white/[0.04] pt-12 text-center">
          <p className="max-w-2xl text-lg font-semibold leading-relaxed text-white">
            This project on the 2019 Hong Kong protests was created for History of Neoliberalism 12B (Winter 2026).
          </p>
          <p className="max-w-2xl text-sm leading-relaxed text-white/40">
            Discussion Group 1M &middot; Teaching Assistant: Lucia Alvarez &middot; Course Instructor: Professor Robin D. G. Kelley &middot; Department of History, UCLA
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
