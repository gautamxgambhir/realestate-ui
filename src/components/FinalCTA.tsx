"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import styles from "./FinalCTA.module.css";
import { motion } from "framer-motion";

interface FinalCTAProps {
  onOpenModal: (type: "consultation" | "visit") => void;
}

export default function FinalCTA({ onOpenModal }: FinalCTAProps) {
  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        
        <div className={styles.box}>
          <div className={styles.grid}>
            
            {/* Info Column */}
            <div className={styles.infoCol}>
              <span className={styles.tag}>Connect With Elara Estates</span>
              <h2 className={styles.title}>Where Vision Becomes Your Address.</h2>
              <p className={styles.desc}>
                Unlock exclusive off-market listings, legal consultations, and bespoke private tours in Miami Beach &amp; Fort Lauderdale with our seasoned advisory team.
              </p>

              <button 
                type="button" 
                onClick={() => onOpenModal("consultation")} 
                className={styles.ctaBtn}
              >
                <span>Book Consultation</span>
                <ArrowRight size={16} className={styles.arrow} />
              </button>
            </div>

            {/* Visual Column */}
            <motion.div 
              className={styles.visualCol}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <img 
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80" 
                alt="Luxury Villa Estate" 
                loading="lazy"
              />
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
