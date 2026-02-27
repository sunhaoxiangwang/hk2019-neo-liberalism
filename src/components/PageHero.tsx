import { motion } from "framer-motion";

interface PageHeroProps {
  label: string;
  title: string;
  titleAccent?: string;
  subtitle: string;
  backgroundImage?: string;
}

const ease = [0.22, 1, 0.36, 1] as const;

export default function PageHero({
  label,
  title,
  titleAccent,
  subtitle,
  backgroundImage,
}: PageHeroProps) {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {backgroundImage ? (
          <>
            {/* Photo background with parallax-like zoom on load */}
            <motion.div
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <img
                src={backgroundImage}
                alt=""
                className="h-full w-full object-cover"
              />
            </motion.div>
            {/* Dark overlay so text stays legible */}
            <div className="absolute inset-0 bg-black/60" />
            {/* Gradient fade at the bottom for smooth transition to content */}
            <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[var(--color-surface)] to-transparent" />
          </>
        ) : (
          <>
            {/* Default gradient background for sub-pages */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#0a0a0a]" />
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                backgroundSize: "40px 40px",
              }}
            />
            <div className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-accent)] opacity-[0.05] blur-[180px]" />
          </>
        )}
      </div>

      {/* Vertical accent */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, ease }}
        className="absolute left-8 top-1/4 hidden h-32 w-[2px] origin-top bg-[var(--color-accent)] lg:block"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 text-xs font-semibold tracking-[0.4em] uppercase text-[var(--color-accent)]"
        >
          {label}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease }}
          className={`text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl ${
            backgroundImage
              ? "drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]"
              : ""
          }`}
        >
          {title}
          {titleAccent && (
            <>
              <br />
              <span className="bg-gradient-to-r from-[var(--color-accent)] to-[#ff6b6b] bg-clip-text text-transparent">
                {titleAccent}
              </span>
            </>
          )}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className={`mx-auto mt-6 max-w-2xl px-2 text-base font-medium leading-relaxed sm:mt-8 sm:text-lg md:text-xl ${
            backgroundImage
              ? "text-white/80 drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)]"
              : "text-[var(--color-text-secondary)]"
          }`}
        >
          {subtitle}
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-white/60">
            Scroll
          </span>
          <div className="h-8 w-[1px] bg-gradient-to-b from-white/60 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
