"use client";

import React, { useState } from "react";
import { X, Calendar, User, Phone, Mail, MapPin, Building2, ArrowRight, Check } from "lucide-react";
import styles from "./ConsultationModal.module.css";
import { motion, AnimatePresence } from "framer-motion";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "consultation" | "visit";
  initialLocation?: string;
}

export default function ConsultationModal({ isOpen, onClose, type, initialLocation = "" }: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    propertyType: "villa",
    location: initialLocation || "noida-west",
    date: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      propertyType: "villa",
      location: "noida-west",
      date: "",
      message: "",
    });
    setIsSubmitted(false);
  };

  const closeAndReset = () => {
    onClose();
    // Delay resetting state to prevent jarring transitions during fade-out
    setTimeout(() => {
      handleReset();
    }, 400);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className={styles.overlay} onClick={closeAndReset}>
          <motion.div 
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <button className={styles.closeBtn} onClick={closeAndReset} aria-label="Close modal">
              <X size={16} />
            </button>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.header}>
                  <span className={`${styles.tag} label-gold`}>Elara Estates Luxury</span>
                  <h3 className={styles.title}>
                    {type === "consultation" ? "Private Consultation" : "VIP Site Visit"}
                  </h3>
                  <p className={styles.subtitle}>
                    {type === "consultation" 
                      ? "Connect with our senior advisors to map out your real estate goals."
                      : "Experience architectural masterworks in Miami Beach & Fort Lauderdale first-hand."}
                  </p>
                </div>

                <div className={styles.grid}>
                  {/* Name */}
                  <div className={styles.inputGroup}>
                    <label htmlFor="modal-name">Full Name</label>
                    <div className={styles.inputWrapper}>
                      <User size={14} className={styles.inputIcon} />
                      <input 
                        id="modal-name"
                        type="text" 
                        required 
                        placeholder="e.g. James Smith"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className={styles.inputGroup}>
                    <label htmlFor="modal-phone">Phone Number</label>
                    <div className={styles.inputWrapper}>
                      <Phone size={14} className={styles.inputIcon} />
                      <input 
                        id="modal-phone"
                        type="tel" 
                        required 
                        placeholder="e.g. +1 (305) 555-0192"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className={styles.inputGroup}>
                    <label htmlFor="modal-email">Email Address</label>
                    <div className={styles.inputWrapper}>
                      <Mail size={14} className={styles.inputIcon} />
                      <input 
                        id="modal-email"
                        type="email" 
                        required 
                        placeholder="e.g. james@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>

                  {/* Date */}
                  <div className={styles.inputGroup}>
                    <label htmlFor="modal-date">Preferred Date</label>
                    <div className={styles.inputWrapper}>
                      <Calendar size={14} className={styles.inputIcon} />
                      <input 
                        id="modal-date"
                        type="date" 
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                      />
                    </div>
                  </div>

                  {/* Property Type */}
                  <div className={styles.inputGroup}>
                    <label htmlFor="modal-prop-type">Property Interest</label>
                    <div className={styles.inputWrapper}>
                      <Building2 size={14} className={styles.inputIcon} />
                      <select 
                        id="modal-prop-type"
                        value={formData.propertyType}
                        onChange={(e) => setFormData({...formData, propertyType: e.target.value})}
                      >
                        <option value="villa">Luxury Villa</option>
                        <option value="penthouse">Modern Penthouse</option>
                        <option value="apartment">Premium Apartment</option>
                        <option value="commercial">Commercial Space</option>
                      </select>
                    </div>
                  </div>

                  {/* Location */}
                  <div className={styles.inputGroup}>
                    <label htmlFor="modal-location">Preferred Location</label>
                    <div className={styles.inputWrapper}>
                      <MapPin size={14} className={styles.inputIcon} />
                      <select 
                        id="modal-location"
                        value={formData.location}
                        onChange={(e) => setFormData({...formData, location: e.target.value})}
                      >
                        <option value="noida-west">Miami Beach</option>
                        <option value="noida-ext">Brickell</option>
                        <option value="ghaziabad">Fort Lauderdale</option>
                        <option value="indirapuram">Coral Gables</option>
                        <option value="raj-nagar">Aventura</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className={styles.inputGroup}>
                  <label htmlFor="modal-message">Special Notes / Requirements</label>
                  <textarea 
                    id="modal-message"
                    rows={3} 
                    placeholder="Describe your property expectations..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className={styles.spinner}></span>
                  ) : (
                    <>
                      <span>{type === "consultation" ? "Secure Consultation Slot" : "Confirm VIP Site Visit"}</span>
                      <ArrowRight size={14} />
                    </>
                  )}
                </button>
              </form>
            ) : (
              <motion.div 
                className={styles.successScreen}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className={styles.successIconWrapper}>
                  <Check size={32} className={styles.successIcon} />
                </div>
                <h3 className={styles.successTitle}>Reservation Confirmed</h3>
                <p className={styles.successSubtitle}>
                  Thank you, <strong>{formData.name}</strong>. Your request for a {type === "consultation" ? "private consultation" : "site visit"} has been successfully scheduled.
                </p>
                <div className={styles.successSummary}>
                  <div className={styles.summaryRow}>
                    <span>Location:</span>
                    <strong>
                      {formData.location === "noida-west" && "Miami Beach"}
                      {formData.location === "noida-ext" && "Brickell"}
                      {formData.location === "ghaziabad" && "Fort Lauderdale"}
                      {formData.location === "indirapuram" && "Coral Gables"}
                      {formData.location === "raj-nagar" && "Aventura"}
                    </strong>
                  </div>
                  <div className={styles.summaryRow}>
                    <span>Preferred Date:</span>
                    <strong>
                      {formData.date 
                        ? new Date(formData.date).toLocaleDateString("en-IN", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
                        : "Not Specified"}
                    </strong>
                  </div>
                  <div className={styles.summaryRow}>
                    <span>Type:</span>
                    <strong style={{ textTransform: "capitalize" }}>{formData.propertyType}</strong>
                  </div>
                </div>
                <p className={styles.successNotice}>
                  A senior luxury real estate consultant will contact you at <strong>{formData.phone}</strong> within 2 hours to confirm your advisor and exact timings.
                </p>
                <button className={styles.successBtn} onClick={closeAndReset}>
                  Return to Site
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
