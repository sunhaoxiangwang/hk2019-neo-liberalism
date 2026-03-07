import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", to: "/about" },
  { label: "Historical Context", to: "/context" },
  { label: "Movement Goals", to: "/goals" },
  { label: "Protest Outcomes", to: "/outcome" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* Header bar */}
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || mobileOpen
            ? "border-b border-white/[0.06] bg-black/80 shadow-[0_4px_30px_rgba(0,0,0,0.5)] backdrop-blur-2xl"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-8">
          {/* Logo */}
          <NavLink to="/" className="group relative z-10 flex items-center gap-3">
            <div className="h-2.5 w-2.5 rounded-full bg-[var(--color-accent)] shadow-[0_0_10px_rgba(230,57,70,0.5)] transition-transform duration-300 group-hover:scale-125" />
            <span className="text-sm font-extrabold tracking-[0.25em] uppercase">
              HK 2019
            </span>
          </NavLink>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link, i) => (
              <motion.li
                key={link.to}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
              >
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `relative block rounded-lg px-4 py-2 text-[13px] font-semibold tracking-wide transition-all duration-300 ${
                      isActive
                        ? "text-white"
                        : "text-[var(--color-text-secondary)] hover:text-white"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {isActive && (
                        <motion.div
                          layoutId="nav-indicator"
                          className="absolute inset-x-2 -bottom-0.5 h-[2px] rounded-full bg-[var(--color-accent)]"
                          transition={{
                            type: "spring",
                            stiffness: 350,
                            damping: 30,
                          }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </motion.li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-10 flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-white/5 md:hidden"
            aria-label="Toggle menu"
          >
            <div className="flex w-5 flex-col gap-[5px]">
              <motion.span
                animate={
                  mobileOpen
                    ? { rotate: 45, y: 7, width: 20 }
                    : { rotate: 0, y: 0, width: 20 }
                }
                transition={{ duration: 0.3 }}
                className="block h-[1.5px] bg-white"
              />
              <motion.span
                animate={
                  mobileOpen ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }
                }
                transition={{ duration: 0.2 }}
                className="block h-[1.5px] w-3 bg-white"
              />
              <motion.span
                animate={
                  mobileOpen
                    ? { rotate: -45, y: -7, width: 20 }
                    : { rotate: 0, y: 0, width: 20 }
                }
                transition={{ duration: 0.3 }}
                className="block h-[1.5px] w-4 bg-white"
              />
            </div>
          </button>
        </nav>
      </motion.header>

      {/* Mobile overlay — OUTSIDE header to avoid transform stacking context */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-black/[0.97] backdrop-blur-3xl md:hidden"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ delay: i * 0.06, duration: 0.35 }}
                >
                  <NavLink
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `text-2xl font-bold tracking-wide transition-colors ${
                        isActive
                          ? "text-[var(--color-accent)]"
                          : "text-white/70 hover:text-white"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
