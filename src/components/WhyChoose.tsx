"use client";

import React from "react";
import styles from "./WhyChoose.module.css";
import { motion } from "framer-motion";

const FEATURES_DATA = [
  {
    num: "01",
    title: "Verified Listings Only",
    description: "Every listing undergoes strict legal checks to guarantee authentic, title-clear properties.",
  },
  {
    num: "02",
    title: "Expert Local Advisory",
    description: "Our advisors possess unmatched hyper-local insights into Noida and Ghaziabad luxury zones.",
  },
  {
    num: "03",
    title: "Seamless Experience",
    description: "From custom VIP visits to legal paper coordination, we guide you through the entire purchase.",
  },
];

export default function WhyChoose() {
  return (
    <section id="services" className={styles.section}>
      <div className="container">
        
        {/* Section Header */}
        <div className={styles.header}>
          <span className="label-gold subtitle">Our Guarantee</span>
          <h2 className={styles.title}>Why Choose Propiedad</h2>
        </div>

        {/* Feature Grid */}
        <div className={styles.grid}>
          {FEATURES_DATA.map((item, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className={styles.numBadge}>{item.num}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
