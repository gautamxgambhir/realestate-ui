"use client";

import React, { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const handleFooterLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        
        {/* Main Columns Grid */}
        <div className={styles.grid}>
          
          {/* Brand Info */}
          <div className={styles.brandCol}>
            <h3 className={styles.logo}>PROPIEDAD</h3>
            <p className={styles.tagline}>"Where Vision Becomes Address"</p>
            <p className={styles.aboutText}>
              Propiedad is a premier luxury real estate advisory firm serving discerning families and businesses looking for verified properties in Noida and Ghaziabad.
            </p>
            {/* Social Links */}
            <div className={styles.socials}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Facebook">
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram">
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Twitter">
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Quick Links</h4>
            <ul className={styles.linksList}>
              <li><a href="#hero" onClick={(e) => handleFooterLinkClick(e, "hero")}>Home</a></li>
              <li><a href="#properties" onClick={(e) => handleFooterLinkClick(e, "properties")}>Properties</a></li>
              <li><a href="#about" onClick={(e) => handleFooterLinkClick(e, "about")}>About Us</a></li>
              <li><a href="#services" onClick={(e) => handleFooterLinkClick(e, "services")}>Services</a></li>
              <li><a href="#locations" onClick={(e) => handleFooterLinkClick(e, "locations")}>Locations</a></li>
              <li><a href="#contact" onClick={(e) => handleFooterLinkClick(e, "contact")}>Contact</a></li>
            </ul>
          </div>

          {/* Areas Served */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Locations Served</h4>
            <ul className={styles.linksList}>
              <li><a href="#locations" onClick={(e) => handleFooterLinkClick(e, "locations")}>Greater Noida West</a></li>
              <li><a href="#locations" onClick={(e) => handleFooterLinkClick(e, "locations")}>Noida Extension</a></li>
              <li><a href="#locations" onClick={(e) => handleFooterLinkClick(e, "locations")}>Ghaziabad Central</a></li>
              <li><a href="#locations" onClick={(e) => handleFooterLinkClick(e, "locations")}>Indirapuram</a></li>
              <li><a href="#locations" onClick={(e) => handleFooterLinkClick(e, "locations")}>Raj Nagar Extension</a></li>
            </ul>
          </div>

          {/* Contacts & Newsletter */}
          <div className={styles.contactCol}>
            <h4 className={styles.colTitle}>Contact Advisor</h4>
            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <MapPin size={14} className={styles.contactIcon} />
                <span>Sector 16, Greater Noida West, Uttar Pradesh 201306, India</span>
              </div>
              <div className={styles.contactItem}>
                <Phone size={14} className={styles.contactIcon} />
                <span>+91 98765 43210</span>
              </div>
              <div className={styles.contactItem}>
                <Mail size={14} className={styles.contactIcon} />
                <span>advisor@propiedad.in</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className={styles.newsletter}>
              <h5 className={styles.newsTitle}>Subscribe to Catalogue</h5>
              {!subscribed ? (
                <form onSubmit={handleSubscribe} className={styles.newsForm}>
                  <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                  <input 
                    id="newsletter-email"
                    type="email" 
                    required 
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button type="submit" aria-label="Subscribe to newsletter">
                    <Send size={14} />
                  </button>
                </form>
              ) : (
                <p className={styles.subscribedMsg}>✓ Subscribed to our VIP catalog updates.</p>
              )}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Propiedad. All rights reserved. Designed for Luxury Real Estate Markets.
          </p>
          <div className={styles.bottomLinks}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">RERA Disclaimers</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
