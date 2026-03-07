import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import PageHero from "../components/PageHero";
import StatsGrid from "../components/StatsGrid";

const pages = [
  {
    to: "/context",
    label: "01",
    title: "Historical Context",
    description: "Section Summary/Description",
  },
  {
    to: "/goals",
    label: "02",
    title: "Movement Goals",
    description: "Section Summary/Description",
  },
  {
    to: "/outcome",
    label: "03",
    title: "Protest Outcomes",
    description: "Section Summary/Description",
  },
];

function PageLinks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-xs font-semibold tracking-[0.3em] uppercase text-[var(--color-accent)]"
        >
          Explore
        </motion.p>

        <div className="grid grid-cols-1 gap-6">
          {pages.map((page, i) => (
            <motion.div
              key={page.to}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.1 + i * 0.1,
                ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
              }}
            >
              <Link
                to={page.to}
                className="group flex flex-col justify-between rounded-2xl border border-white/[0.06] bg-[var(--color-surface-elevated)] p-10 transition-all duration-400 hover:-translate-y-1 hover:border-[var(--color-accent)]/20 hover:shadow-[0_8px_40px_rgba(230,57,70,0.06)] sm:flex-row sm:items-center"
              >
                <div className="flex-1">
                  <span className="text-xs font-bold tracking-widest text-[var(--color-accent)]">
                    {page.label}
                  </span>
                  <h3 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl">
                    {page.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-base leading-relaxed text-[var(--color-text-secondary)]">
                    {page.description}
                  </p>
                </div>
                <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)] opacity-60 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100 sm:mt-0">
                  Read more
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <PageHero
        label="A Digital Historical Project"
        title="HONG KONG"
        titleAccent="2019"
        subtitle="Dramatic/impactful description - group decides in class"
        backgroundImage="/images/hero-protest.jpeg"
      />
      <PageLinks />
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
      <StatsGrid />
    </>
  );
}
