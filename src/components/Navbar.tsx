"use client";
import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { AnimatePresence, motion } from "framer-motion";
import { Compass, Sun, Moon } from "lucide-react";

interface NavbarProps {
  onOpenModal: () => void;
}

export default function Navbar({ onOpenModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      } else {
        setScrollProgress(0);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Initialize theme from localStorage or system setting
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (systemPrefersDark ? "dark" : "light");
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 88;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <>
      <div className={styles.scrollProgress} style={{ width: `${scrollProgress}%` }} />
      <header className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.inner}>
          <button className={styles.logo} onClick={() => scrollTo("hero")}>
            Propiedad
          </button>

          <nav className={styles.links}>
            {[["Properties","properties"],["About","about"],["Locations","locations"],["Contact","contact"]].map(([label, id]) => (
              <button key={id} className={styles.link} onClick={() => scrollTo(id)}>
                {label}
              </button>
            ))}
          </nav>

          <div className={styles.right}>
            <button className={`${styles.iconBtn} ${styles.themeToggle}`} onClick={toggleTheme} aria-label="Toggle Theme">
              {theme === "light" ? <Moon size={16} strokeWidth={2} /> : <Sun size={16} strokeWidth={2} />}
            </button>
            <button className={styles.iconBtn} onClick={() => scrollTo("properties")} aria-label="Explore Locations">
              <Compass size={16} strokeWidth={2} />
            </button>
            <button className={styles.consultBtn} onClick={onOpenModal}>
              Book Consultation
            </button>
            <button className={styles.burger} onClick={() => setMenuOpen(true)} aria-label="Open menu">
              <span /><span />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.mobileHeader}>
              <span className={styles.logo}>Propiedad</span>
              <button className={styles.close} onClick={() => setMenuOpen(false)} aria-label="Close menu">✕</button>
            </div>
            <nav className={styles.mobileLinks}>
              {[["Properties","properties"],["About","about"],["Locations","locations"],["Contact","contact"]].map(([label, id]) => (
                <button key={id} className={styles.mobileLink} onClick={() => scrollTo(id)}>
                  {label}
                </button>
              ))}
            </nav>
            <button className={styles.mobileConsult} onClick={() => { setMenuOpen(false); onOpenModal(); }}>
              Book Consultation
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
