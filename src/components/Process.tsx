"use client";

import React from "react";
import styles from "./Process.module.css";
import { motion } from "framer-motion";

interface Step {
  number: string;
  title: string;
  description: string;
}

const STEPS_DATA: Step[] = [
  {
    number: "1",
    title: "Initial Consultation",
    description: "Book an advisory slot to outline your requirements, budget preferences, and property desires.",
  },
  {
    number: "2",
    title: "Vetting & Discovery",
    description: "Receive a tailored list of verified properties that match your description and goals.",
  },
  {
    number: "3",
    title: "Curated Site Visits",
    description: "Experience private VIP site tours of short-listed homes or offices, examining structural quality.",
  },
  {
    number: "4",
    title: "Paperwork & Handover",
    description: "We navigate title checks, registrations, bank financing support, and the key possession.",
  },
];

export default function Process() {
  return (
    <section className={styles.section}>
      <div className="container">
        
        {/* Section Header */}
        <div className={styles.header}>
          <span className="label-gold subtitle">Methodology</span>
          <h2 className={styles.title}>Our Process</h2>
          <p className={styles.intro}>
            We simplify the complex Indian real estate journey into four clear, stress-free stages of property acquisition.
          </p>
        </div>

        {/* Timeline Container */}
        <div className={styles.timelineContainer}>
          {/* Connecting Line (Desktop only) */}
          <div className={styles.timelineLine} />

          {/* Grid of Steps */}
          <div className={styles.grid}>
            {STEPS_DATA.map((step, index) => (
              <motion.div
                key={index}
                className={styles.stepRow}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Clean numbered circle */}
                <div className={styles.node}>
                  {step.number}
                </div>

                {/* Step Card */}
                <div className={styles.stepCard}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
