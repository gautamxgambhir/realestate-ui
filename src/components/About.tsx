"use client";

import React from "react";
import styles from "./About.module.css";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className="container">
        
        <div className={styles.grid}>
          {/* Visual Side */}
          <motion.div 
            className={styles.visualColumn}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.imageWrapper}>
              {/* Founder Image */}
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80" 
                alt="Amit Vikram, Founder of Propiedad" 
                className={styles.founderImg} 
              />
              <div className={styles.goldFrame} />
              
              {/* Floating Stat Overlay */}
              <div className={styles.overlayStat}>
                <h4 className={styles.statNum}>100%</h4>
                <p className={styles.statLabel}>Legally Audited Listings</p>
              </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            className={styles.textColumn}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            <span className="label-gold subtitle">Established Trust</span>
            <h2 className={styles.title}>A New Paradigm in Real Estate Consulting</h2>
            
            <div className={styles.content}>
              <p className={styles.paragraph}>
                At Propiedad, we believe that real estate transactions should be built on absolute clarity and trust. Our journey began with a simple observation: the Greater Noida West and Ghaziabad property markets were expanding rapidly, but buyers lacked access to neutral, highly-verified advisory services.
              </p>
              <p className={styles.paragraph}>
                We established Propiedad to operate as a high-end advisory rather than a standard brokerage. We perform rigorous structural, financial, and legal background checks on every single developer and project before listing them in our collection.
              </p>
              <p className={styles.paragraph}>
                Whether you are securing a home for your family's next generation, establishing corporate offices, or securing high-yield commercial assets, Propiedad ensures your path is secure, transparent, and legally sound.
              </p>
            </div>

            <div className={styles.signatureBox}>
              <div>
                <h4 className={styles.founderName}>Amit Vikram</h4>
                <p className={styles.founderTitle}>Founder &amp; Managing Director</p>
              </div>
              <div className={styles.brandSign}>PROPIEDAD</div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
