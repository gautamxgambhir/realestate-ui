"use client";

import React, { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./Testimonials.module.css";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  avatar: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Vikramaditya Roy",
    role: "Managing Director, V-Tech Solutions",
    quote: "Finding a premium commercial showroom that checked all legal and accessibility boxes in Ghaziabad seemed impossible. Propiedad streamlined the search beautifully. Their verification audit is iron-clad and their transparency is refreshing.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
  },
  {
    id: "test-2",
    name: "Priya & Anish Goel",
    role: "Homeowners, Greater Noida West",
    quote: "We purchased our dream duplex villa in Noida Extension through Propiedad. Their local market knowledge is profound. They handled the paperwork, home financing, and developer coordination seamlessly. Simply outstanding support!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80"
  },
  {
    id: "test-3",
    name: "Dr. Sameer Malhotra",
    role: "Senior Consultant, Max Healthcare",
    quote: "As an investor seeking high-yield residential assets, trust was my primary concern. Propiedad's legal advisory and project vetting gave me the security I needed. They don't just broker; they consult with absolute integrity.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80"
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  useEffect(() => {
    const autoPlay = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(autoPlay);
  }, [current]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  // Animation variants
  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 80 : -80,
      opacity: 0
    })
  };

  return (
    <section className={styles.section}>
      <div className="container">
        
        {/* Section Header */}
        <div className={styles.header}>
          <span className="label-gold subtitle">Valued Endorsements</span>
          <h2 className={styles.title}>Client Testimonials</h2>
          <p className={styles.intro}>
            Hear directly from the families and business owners who placed their trust in our elite consulting services.
          </p>
        </div>

        {/* Carousel Content */}
        <div className={styles.sliderContainer}>
          <Quote className={styles.bgQuoteIcon} />
          
          <div className={styles.sliderFrame}>
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={styles.slide}
              >
                
                {/* Quote details */}
                <p className={styles.quoteText}>"{TESTIMONIALS[current].quote}"</p>

                {/* Rating */}
                <div className={styles.rating}>
                  {[...Array(TESTIMONIALS[current].rating)].map((_, i) => (
                    <Star key={i} size={14} fill="var(--accent)" color="var(--accent)" />
                  ))}
                </div>

                {/* Reviewer Meta */}
                <div className={styles.meta}>
                  <img 
                    src={TESTIMONIALS[current].avatar} 
                    alt={TESTIMONIALS[current].name} 
                    className={styles.avatar} 
                  />
                  <div>
                    <h4 className={styles.name}>{TESTIMONIALS[current].name}</h4>
                    <p className={styles.role}>{TESTIMONIALS[current].role}</p>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className={styles.controls}>
            <button onClick={handlePrev} className={styles.controlBtn} aria-label="Previous testimonial">
              <ChevronLeft size={16} />
            </button>
            
            {/* Pagination Indicators */}
            <div className={styles.indicators}>
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > current ? 1 : -1);
                    setCurrent(index);
                  }}
                  className={`${styles.indicator} ${current === index ? styles.activeIndicator : ""}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button onClick={handleNext} className={styles.controlBtn} aria-label="Next testimonial">
              <ChevronRight size={16} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
