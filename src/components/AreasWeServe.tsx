"use client";

import React from "react";
import { ArrowUpRight, MapPin } from "lucide-react";
import styles from "./AreasWeServe.module.css";
import { motion } from "framer-motion";

interface AreaItem {
  name: string;
  key: "noida-west" | "noida-ext" | "ghaziabad" | "indirapuram" | "raj-nagar";
  propertiesCount: string;
  image: string;
  description: string;
}

const AREAS_DATA: AreaItem[] = [
  {
    name: "Greater Noida West",
    key: "noida-west",
    propertiesCount: "120+ Listings",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800&q=80",
    description: "The crown jewel of residential high-rises and integrated smart townships with vast expressways."
  },
  {
    name: "Noida Extension",
    key: "noida-ext",
    propertiesCount: "95+ Listings",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
    description: "Affordable luxury apartments, green corridors, excellent metro connectivity, and modern shopping malls."
  },
  {
    name: "Ghaziabad Central",
    key: "ghaziabad",
    propertiesCount: "60+ Listings",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80",
    description: "Premium established sectors hosting expansive luxury commercial plazas and heritage villas."
  },
  {
    name: "Indirapuram",
    key: "indirapuram",
    propertiesCount: "45+ Listings",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    description: "High-end gated residential societies, top-tier schools, premium hospitals, and gourmet hubs."
  },
  {
    name: "Raj Nagar Extension",
    key: "raj-nagar",
    propertiesCount: "35+ Listings",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    description: "Rising hotbed of designer mid-rise residential towers and sports stadiums along elevated roads."
  }
];

interface AreasWeServeProps {
  onSelectArea: (areaKey: string) => void;
}

export default function AreasWeServe({ onSelectArea }: AreasWeServeProps) {
  
  const handleAreaClick = (key: string) => {
    onSelectArea(key);
    
    // Scroll to properties section
    const propertiesSection = document.getElementById("properties");
    if (propertiesSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = propertiesSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="locations" className={styles.section}>
      <div className="container">
        
        {/* Section Header */}
        <div className={styles.header}>
          <div>
            <span className="label-gold subtitle">Prime Locations</span>
            <h2 className={styles.title}>Areas We Serve</h2>
            <p className={styles.intro}>
              Explore high-potential real estate investment corridors across Greater Noida West and Ghaziabad. Click any location to filter available properties.
            </p>
          </div>
        </div>

        {/* Grid Layout */}
        <div className={styles.grid}>
          {AREAS_DATA.map((area, index) => {
            const gridClass = index === 0 || index === 3 ? styles.gridLarge : styles.gridNormal;
            
            return (
              <motion.div
                key={area.key}
                className={`${styles.card} ${gridClass}`}
                onClick={() => handleAreaClick(area.key)}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Visual Cover */}
                <div className={styles.imgWrapper}>
                  <img src={area.image} alt={area.name} className={styles.bgImg} />
                  <div className={styles.overlay} />
                </div>

                {/* Card Content Overlay */}
                <div className={styles.cardContent}>
                  <div className={styles.meta}>
                    <div className={styles.pinWrapper}>
                      <MapPin size={12} className={styles.pin} />
                      <span>{area.propertiesCount}</span>
                    </div>
                    <div className={styles.arrowWrapper}>
                      <ArrowUpRight size={16} className={styles.arrow} />
                    </div>
                  </div>

                  <div className={styles.info}>
                    <h3 className={styles.areaName}>{area.name}</h3>
                    <p className={styles.desc}>{area.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
