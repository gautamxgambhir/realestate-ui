"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import styles from "./FAQ.module.css";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS_DATA: FAQItem[] = [
  {
    question: "How do I schedule a site visit with Elara Estates?",
    answer: "Scheduling a site visit is simple. Click the 'Schedule Site Visit' button on the hero section or 'Schedule Private Tour' inside a property's details page. Fill in your name and phone, and our senior property advisor will call you within 2 hours to coordinate the dates, local transportation, and developer meetings."
  },
  {
    question: "Do you assist with securing home financing and loans?",
    answer: "Yes, we provide end-to-end financing support. Elara Estates has corporate tie-ups with leading financial institutions and mortgage brokers across Florida. Our financial specialists help you prepare documentation, submit applications, check eligibility, and secure the most competitive rates at zero extra cost to you."
  },
  {
    question: "Are all property listings on your site verified?",
    answer: "Yes, 100% of our properties are legally and physically verified. Before listing any project, our legal consultants audit the developer's title clearance, purchase agreements, local municipal licenses, and structural compliance. Every listing meets Florida real estate regulatory standards."
  },
  {
    question: "Can I invest in pre-construction projects through you?",
    answer: "Absolutely. We represent some of the most reliable and high-growth pre-construction projects in Miami Beach and Fort Lauderdale. We help you assess construction progress, evaluate payment schedules, audit developer registry details, and verify escrow account protections."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className={styles.section}>
      <div className="container">
        
        {/* Section Header */}
        <div className={styles.header}>
          <span className="label-gold subtitle">Frequently Asked Questions</span>
          <h2 className={styles.title}>Property Advisory FAQ</h2>
          <p className={styles.intro}>
            Find clear answers to common inquiries regarding site visits, property verifications, housing loans, and secure investments.
          </p>
        </div>

        {/* Accordions */}
        <div className={styles.faqList}>
          {FAQS_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <motion.div 
                key={index} 
                className={`${styles.accordionItem} ${isOpen ? styles.openItem : ""}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Trigger Row */}
                <button 
                  className={styles.questionBtn} 
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.questionText}>{faq.question}</span>
                  <div className={styles.iconWrapper}>
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                </button>

                {/* Answer Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className={styles.answerWrapper}
                    >
                      <div className={styles.answerContent}>
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
