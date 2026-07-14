"use client";

import React from "react";
import styles from "./Stats.module.css";
import { motion } from "framer-motion";

const STATS_DATA = [
  { value: "500+", label: "Properties Sold" },
  { value: "150+", label: "Happy Clients" },
  { value: "₹250 Cr+", label: "Transaction Volume" },
  { value: "10+", label: "Years Experience" },
];

export default function Stats() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.grid}>
          {STATS_DATA.map((stat, idx) => (
            <motion.div
              key={idx}
              className={styles.statBox}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: idx * 0.1 }}
            >
              <h3 className={styles.number}>{stat.value}</h3>
              <p className={styles.label}>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
