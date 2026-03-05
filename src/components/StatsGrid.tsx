import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface StatCard {
  figure: string;
  label: string;
  description: string;
}

const stats: StatCard[] = [
  {
    figure: "2M+",
    label: "Peak March Turnout",
    description: "An estimated two million people took to the streets on June 16, 2019.",
  },
  {
    figure: "5",
    label: "Core Demands",
    description:
      'The movement unified around five non-negotiable demands, crystallized in the slogan "Five demands, not one less."',
  },
  {
    figure: "9,000+",
    label: "Arrests Made",
    description:
      "Over nine thousand individuals were arrested in connection with the protests between June 2019 and early 2021.",
  },
  {
    figure: "180+",
    label: "Days of Protest",
    description:
      "Sustained demonstrations lasted over half a year, making it one of the longest protest movements in modern history.",
  },
  {
    figure: "1997",
    label: "Handover Year",
    description:
      'Hong Kong was returned to China under a "One Country, Two Systems" framework—the very framework protesters sought to defend.',
  },
  {
    figure: "2020",
    label: "National Security Law",
    description:
      "Beijing imposed sweeping security legislation that fundamentally transformed Hong Kong's legal and political landscape.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
} as const;

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
} as const;

export default function StatsGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-24 sm:py-32" ref={ref}>
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-2xl"
        >
          <p className="mb-3 text-xs font-semibold tracking-[0.3em] uppercase text-[var(--color-accent)]">
            Key Figures
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
            The Movement in Numbers
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--color-text-secondary)] sm:text-lg">
            A quantitative snapshot of the scale, duration, and consequences of
            the 2019 protests.
          </p>
        </motion.div>

        {/* Featured image: The digital battle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-8 overflow-hidden rounded-2xl"
        >
          <a
            href="https://www.technologyreview.com/2019/09/10/102646/the-new-battle-in-hong-kong-isnt-on-the-streets-its-in-the-apps/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block aspect-[21/9] overflow-hidden"
          >
            <img
              src="/images/stats-apps.jpg"
              alt="Protesters using apps and technology during the 2019 Hong Kong protests"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 sm:p-8">
              <p className="mb-2 text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-accent)]">
                MIT Technology Review
              </p>
              <p className="max-w-lg text-sm font-semibold leading-relaxed text-white/90 sm:text-base">
                The new battle in Hong Kong isn't on the streets; it's in the
                apps
              </p>
            </div>
          </a>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {stats.map((stat) => (
            <motion.article
              key={stat.label}
              variants={item}
              className="group relative overflow-hidden rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-surface-elevated)] p-8 transition-all duration-500 hover:-translate-y-1 hover:border-[var(--color-accent)]/30 hover:shadow-[0_0_40px_rgba(230,57,70,0.08)]"
            >
              {/* Accent corner glow on hover */}
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[var(--color-accent)] opacity-0 blur-[40px] transition-opacity duration-500 group-hover:opacity-20" />

              <p className="text-4xl font-black tracking-tight text-[var(--color-text-primary)] sm:text-5xl">
                {stat.figure}
              </p>
              <p className="mt-2 text-sm font-bold uppercase tracking-[0.15em] text-[var(--color-accent)]">
                {stat.label}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                {stat.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
