"use client";

import React, { useState, useMemo } from "react";
import { MapPin, BedDouble, Maximize2, ArrowRight, X } from "lucide-react";
import styles from "./FeaturedProperties.module.css";
import { motion, AnimatePresence } from "framer-motion";

interface Property {
  id: string;
  name: string;
  category: "villa" | "penthouse" | "apartment" | "commercial";
  location: string;
  locationKey: "noida-west" | "noida-ext" | "ghaziabad" | "indirapuram" | "raj-nagar";
  price: string;
  priceNum: number; // in millions USD
  bedrooms: string;
  area: string;
  image: string;
  description: string;
  highlights: string[];
}

const PROPERTIES_DATA: Property[] = [
  {
    id: "prop-1",
    name: "The Grand Horizon Penthouse",
    category: "penthouse",
    location: "Miami Beach",
    locationKey: "noida-west",
    price: "$4.2M",
    priceNum: 4.2,
    bedrooms: "4 BD",
    area: "3,850 sq.ft.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
    description: "A stunning glass-facade duplex penthouse featuring a private sky garden, a heated plunge pool, and breathtaking panoramic views of the Miami skyline. Designed with custom Italian cabinetry and luxury smart-automation.",
    highlights: ["Private Plunge Pool", "24/7 Concierge", "Duplex Layout", "Sky Bar & Deck"],
  },
  {
    id: "prop-2",
    name: "Aurelia Whispering Meadows Villa",
    category: "villa",
    location: "Coral Gables",
    locationKey: "indirapuram",
    price: "$7.1M",
    priceNum: 7.1,
    bedrooms: "5 BD",
    area: "5,400 sq.ft.",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1000&q=80",
    description: "Premium architectural masterpiece styled in Spanish hacienda themes. Expansive wrap-around decks, high ceilings, private elevator, home cinema, and state-of-the-art kitchen. Surrounded by serene manicured lawns.",
    highlights: ["Private Elevator", "Home Cinema Room", "Manicured Gardens", "4 Car Garage"],
  },
  {
    id: "prop-3",
    name: "Elysian Heights Premium Suite",
    category: "apartment",
    location: "Brickell",
    locationKey: "noida-ext",
    price: "$2.0M",
    priceNum: 2.0,
    bedrooms: "3 BD",
    area: "2,150 sq.ft.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80",
    description: "Elegantly crafted high-rise luxury apartment suite featuring Italian marble floors, bespoke walnut paneling, and an expansive walk-in closet. Comes with an exclusive 5-year membership to the elite Club Elysium.",
    highlights: ["Club Membership", "Italian Marble Floors", "Double-Height Ceilings", "Smart Climate Control"],
  },
  {
    id: "prop-4",
    name: "The Corporate Crest Hub",
    category: "commercial",
    location: "Fort Lauderdale",
    locationKey: "ghaziabad",
    price: "$9.0M",
    priceNum: 9.0,
    bedrooms: "Retail / Office",
    area: "6,800 sq.ft.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80",
    description: "Grade-A premium retail showroom and office floor plate situated in a high-traffic urban core. Excellent visibility, central HVAC, double-height storefront glazing, and LEED certified energy efficient design.",
    highlights: ["High-Footfall Zone", "LEED Certified", "Central HVAC", "Bespoke Glazing"],
  },
  {
    id: "prop-5",
    name: "Sovereign Estate Villa",
    category: "villa",
    location: "Miami Beach",
    locationKey: "noida-west",
    price: "$5.4M",
    priceNum: 5.4,
    bedrooms: "4 BD",
    area: "4,200 sq.ft.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80",
    description: "A contemporary architectural statement villa characterized by stark minimalist lines, extensive wood and glass elements, and a private infinity-edge swimming pool. Features high-security access control.",
    highlights: ["Infinity Pool", "Minimalist Architecture", "Bespoke Lighting", "Biometric Access Control"],
  },
  {
    id: "prop-6",
    name: "The Zenith Sky Duplex",
    category: "penthouse",
    location: "Aventura",
    locationKey: "raj-nagar",
    price: "$3.2M",
    priceNum: 3.2,
    bedrooms: "3 BD",
    area: "2,950 sq.ft.",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1000&q=80",
    description: "Elegant duplex penthouse layout presenting a fluid transition between indoor living areas and a 1,000 sq.ft. private sky terrace. Furnished with designer fittings and premium energy efficient elements.",
    highlights: ["1,000 sq.ft. Sky Terrace", "Designer Kitchen Fitments", "Solar Hybrid Backup", "VRV Air Conditioning"],
  },
];

interface FeaturedPropertiesProps {
  searchFilters: {
    type: string;
    budget: string;
    location: string;
    bedrooms: string;
  };
  onOpenScheduleVisit: (type: "consultation" | "visit", location: string) => void;
}

export default function FeaturedProperties({ searchFilters, onOpenScheduleVisit }: FeaturedPropertiesProps) {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Apply both Section Filter Tabs and Hero Search Filters
  const filteredProperties = useMemo(() => {
    return PROPERTIES_DATA.filter((prop) => {
      // 1. Tab Filter
      if (activeTab !== "all" && prop.category !== activeTab) {
        return false;
      }

      // 2. Hero Type Filter
      if (searchFilters.type !== "all" && prop.category !== searchFilters.type) {
        return false;
      }

      // 3. Hero Location Filter
      if (searchFilters.location !== "all" && prop.locationKey !== searchFilters.location) {
        return false;
      }

      // 4. Hero Bedrooms Filter
      if (searchFilters.bedrooms !== "all") {
        if (searchFilters.bedrooms === "5") {
          const bdNum = parseInt(prop.bedrooms);
          if (isNaN(bdNum) || bdNum < 5) return false;
        } else {
          if (!prop.bedrooms.startsWith(`${searchFilters.bedrooms} BD`)) return false;
        }
      }

      // 5. Hero Budget Filter
      if (searchFilters.budget !== "all") {
        const price = prop.priceNum;
        if (searchFilters.budget === "u-1.5cr" && price >= 2.0) return false;
        if (searchFilters.budget === "1.5-3cr" && (price < 2.0 || price > 4.0)) return false;
        if (searchFilters.budget === "3-5cr" && (price < 4.0 || price > 6.0)) return false;
        if (searchFilters.budget === "5cr+" && price <= 6.0) return false;
      }

      return true;
    });
  }, [activeTab, searchFilters]);

  const handleTabChange = (tab: string) => {
    if (tab === activeTab) return;
    setIsLoading(true);
    setActiveTab(tab);
    setTimeout(() => {
      setIsLoading(false);
    }, 550);
  };

  const handleReset = () => {
    handleTabChange("all");
  };

  return (
    <section id="properties" className={styles.section}>
      <div className="container">
        
        {/* Header */}
        <div className={styles.header}>
          <div>
            <span className={`${styles.subtitle} label-gold`}>Exclusive Collection</span>
            <h2 className={styles.title}>Featured Properties</h2>
            <p className={styles.intro}>
              Handpicked premium residences, commercial developments, and high-yielding real estate opportunities in premium sectors.
            </p>
          </div>
        </div>

        {/* Tab Filters */}
        <div className={styles.tabs}>
          {["all", "villa", "penthouse", "apartment", "commercial"].map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`${styles.tabBtn} ${activeTab === tab ? styles.activeTab : ""}`}
            >
              {tab === "all" ? "All Collections" : tab + "s"}
            </button>
          ))}
        </div>

        {/* Magazine Grid Wrapper */}
        <div className={styles.gridContainer}>
          {isLoading ? (
            <div className={styles.grid}>
              {[1, 2, 3].map((n) => (
                <div key={n} className={`${styles.card} ${styles.skeletonCard} ${n === 1 ? styles.largeCard : ""}`}>
                  <div className={`${styles.imgContainer} ${styles.skeletonImg}`} />
                  <div className={styles.cardContent}>
                    <div className={styles.skeletonText} style={{ width: "40%", height: "12px", marginBottom: "12px" }} />
                    <div className={styles.skeletonText} style={{ width: "80%", height: "24px", marginBottom: "12px" }} />
                    <div className={styles.skeletonText} style={{ width: "30%", height: "18px", marginBottom: "20px" }} />
                    <div className={styles.skeletonText} style={{ width: "100%", height: "1px", marginBottom: "16px" }} />
                    <div className={styles.skeletonText} style={{ width: "50%", height: "16px", marginBottom: "20px" }} />
                    <div className={styles.skeletonText} style={{ width: "35%", height: "20px", marginTop: "auto" }} />
                  </div>
                </div>
              ))}
            </div>
          ) : filteredProperties.length === 0 ? (
            <div className={styles.noResults}>
              <h3>No Properties Match Your Search</h3>
              <p>Try clearing your filters or selecting a different location / property type.</p>
              <button className="btn-ghost" onClick={handleReset}>
                Reset Filter
              </button>
            </div>
          ) : (
            <div className={styles.grid}>
              {filteredProperties.map((property, idx) => {
                const isLarge = idx === 0; // The first item spans 2 columns in desktop
                return (
                  <motion.div
                    key={property.id}
                    className={`${styles.card} ${isLarge ? styles.largeCard : ""}`}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: idx * 0.08 }}
                  >
                    {/* Image container */}
                    <div className={styles.imgContainer}>
                      <img 
                        src={property.image} 
                        alt={property.name} 
                        className={styles.propertyImg}
                        loading="lazy"
                      />
                      <div className={styles.categoryBadge}>
                        {property.category}
                      </div>
                    </div>

                    {/* Content details */}
                    <div className={styles.cardContent}>
                      <div className={styles.location}>
                        <MapPin size={12} className={styles.pinIcon} />
                        <span>{property.location}</span>
                      </div>
                      <h3 className={styles.propertyName}>{property.name}</h3>
                      <p className={styles.price}>{property.price}</p>
                      
                      <div className={styles.specs}>
                        <div className={styles.spec}>
                          <BedDouble size={14} />
                          <span>{property.bedrooms}</span>
                        </div>
                        <div className={styles.spec}>
                          <Maximize2 size={14} />
                          <span>{property.area}</span>
                        </div>
                      </div>

                      <button 
                        className={styles.detailBtn}
                        onClick={() => setSelectedProperty(property)}
                      >
                        <span>View Details</span>
                        <ArrowRight size={14} className={styles.arrow} />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>

      </div>

      {/* Property Details Modal */}
      <AnimatePresence>
        {selectedProperty && (
          <div className={styles.modalOverlay} onClick={() => setSelectedProperty(null)}>
            <motion.div 
              className={styles.propertyModal}
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <button 
                className={styles.modalCloseBtn}
                onClick={() => setSelectedProperty(null)}
                aria-label="Close details"
              >
                <X size={16} />
              </button>

              <div className={styles.modalGrid}>
                {/* Visual Cover */}
                <div className={styles.modalVisual}>
                  <img src={selectedProperty.image} alt={selectedProperty.name} />
                  <div className={styles.modalTag}>{selectedProperty.category}</div>
                </div>

                {/* Details Story */}
                <div className={styles.modalBody}>
                  <div className={styles.modalLocation}>
                    <MapPin size={14} className={styles.pinIcon} />
                    <span>{selectedProperty.location}</span>
                  </div>
                  <h3 className={styles.modalTitle}>{selectedProperty.name}</h3>
                  <p className={styles.modalPrice}>{selectedProperty.price}</p>
                  
                  <div className={styles.modalSpecs}>
                    <div className={styles.modalSpecItem}>
                      <span className={styles.specLabel}>Configuration</span>
                      <strong className={styles.specVal}>{selectedProperty.bedrooms}</strong>
                    </div>
                    <div className={styles.modalSpecItem}>
                      <span className={styles.specLabel}>Salable Area</span>
                      <strong className={styles.specVal}>{selectedProperty.area}</strong>
                    </div>
                    <div className={styles.modalSpecItem}>
                      <span className={styles.specLabel}>Legal Status</span>
                      <strong className={styles.specVal} style={{ color: "var(--accent)" }}>Verified</strong>
                    </div>
                  </div>

                  <p className={styles.modalDesc}>{selectedProperty.description}</p>

                  <div className={styles.highlightsBox}>
                    <h4>Key Highlights</h4>
                    <ul className={styles.highlightsList}>
                      {selectedProperty.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.modalActions}>
                    <button 
                      className="btn-primary" 
                      onClick={() => {
                        const loc = selectedProperty.locationKey;
                        setSelectedProperty(null);
                        onOpenScheduleVisit("visit", loc);
                      }}
                    >
                      Schedule Private Tour
                    </button>
                    <button 
                      className="btn-ghost" 
                      onClick={() => setSelectedProperty(null)}
                    >
                      Close Details
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
