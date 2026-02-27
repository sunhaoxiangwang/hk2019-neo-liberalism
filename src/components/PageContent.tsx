import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface PageContentProps {
  sections: {
    heading: string;
    body: string[];
    pullQuote: string;
    reversed?: boolean;
  }[];
}

export default function PageContent({ sections }: PageContentProps) {
  return (
    <div className="py-20 sm:py-28">
      {sections.map((section, idx) => (
        <ContentBlock key={idx} {...section} />
      ))}
    </div>
  );
}

function ContentBlock({
  heading,
  body,
  pullQuote,
  reversed,
}: PageContentProps["sections"][number]) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="mb-24 last:mb-0">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div
          className={`grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16 ${
            reversed ? "direction-rtl" : ""
          }`}
        >
          {/* Pull quote + image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: reversed ? 40 : -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.9,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
            }}
            className={`lg:col-span-5 ${reversed ? "lg:order-2" : "lg:order-1"}`}
            style={{ direction: "ltr" }}
          >
            {/* Image placeholder */}
            <div className="mb-8 aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] ring-1 ring-white/5">
              <div
                className="h-full w-full opacity-20"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, transparent 25%, rgba(230,57,70,0.1) 25%, rgba(230,57,70,0.1) 50%, transparent 50%, transparent 75%, rgba(230,57,70,0.1) 75%)",
                  backgroundSize: "20px 20px",
                }}
              />
            </div>

            <blockquote className="border-l-2 border-[var(--color-accent)] pl-6">
              <p className="text-lg font-semibold italic leading-relaxed sm:text-xl">
                {pullQuote}
              </p>
            </blockquote>
          </motion.div>

          {/* Body text */}
          <div
            className={`lg:col-span-7 ${reversed ? "lg:order-1" : "lg:order-2"}`}
            style={{ direction: "ltr" }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-8 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl"
            >
              {heading}
            </motion.h2>

            <div className="space-y-6">
              {body.map((paragraph, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.3 + i * 0.12 }}
                  className="text-base leading-[1.85] text-[var(--color-text-secondary)] sm:text-lg"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
