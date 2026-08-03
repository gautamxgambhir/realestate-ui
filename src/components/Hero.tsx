"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, BedDouble, Maximize2, MapPin } from "lucide-react";
import styles from "./Hero.module.css";

interface HeroProps {
  onOpenModal: () => void;
  onExplore: () => void;
}

const FEATURED = {
  name: "The Grand Horizon",
  location: "1 Collins Ave, Miami Beach",
  price: "$4.2M",
  beds: "4 BD",
  area: "3,850 sq.ft.",
  image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=900&q=85",
  thumbs: [
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=200&q=70",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=200&q=70",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=200&q=70",
  ],
};

const fadeUp: any = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }),
};

const titleContainer: any = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const titleWord: any = {
  hidden: { opacity: 0, y: "110%" },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Hero({ onOpenModal, onExplore }: HeroProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [activeLine, setActiveLine] = useState(1);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const line1 = "Where Vision";
    const line2 = "Becomes";
    const line3 = "Address.";

    let index = 0;
    let currentText = "";

    const typeLine1 = () => {
      if (index < line1.length) {
        currentText += line1[index];
        setText1(currentText);
        index++;
        setTimeout(typeLine1, 75);
      } else {
        index = 0;
        currentText = "";
        setActiveLine(2);
        typeLine2();
      }
    };

    const typeLine2 = () => {
      if (index < line2.length) {
        currentText += line2[index];
        setText2(currentText);
        index++;
        setTimeout(typeLine2, 75);
      } else {
        index = 0;
        currentText = "";
        setActiveLine(3);
        typeLine3();
      }
    };

    const typeLine3 = () => {
      if (index < line3.length) {
        currentText += line3[index];
        setText3(currentText);
        index++;
        setTimeout(typeLine3, 75);
      } else {
        setActiveLine(4);
        setTimeout(() => setShowCursor(false), 2500);
      }
    };

    const startTimer = setTimeout(() => {
      typeLine1();
    }, 2400);

    return () => {
      clearTimeout(startTimer);
    };
  }, []);

  return (
    <section id="hero" ref={ref} className={styles.section}>
      <div className={`container ${styles.inner}`}>

        {/* ── LEFT ─────────────────────────── */}
        <div className={styles.left}>
          <motion.span
            className={`${styles.chip} label-gold`}
            variants={fadeUp} custom={0} initial="hidden" animate="show"
          >
            Miami Beach &amp; Fort Lauderdale
          </motion.span>

          <motion.h1
            className={styles.headline}
            variants={titleContainer}
            initial="hidden"
            animate="show"
          >
            <span style={{ display: "block" }}>
              {text1}
              {activeLine === 1 && showCursor && <span className={styles.cursor}>|</span>}
            </span>
            <span style={{ display: "block" }}>
              <em>{text2}</em>
              {activeLine === 2 && showCursor && <span className={styles.cursor}>|</span>}
            </span>
            <span style={{ display: "block" }}>
              {text3}
              {activeLine >= 3 && showCursor && <span className={styles.cursor}>|</span>}
            </span>
          </motion.h1>

          <motion.p
            className={styles.sub}
            variants={fadeUp} custom={2} initial="hidden" animate="show"
          >
            Exceptional residences for investors,<br />
            families and international buyers — legally verified,<br />
            curated for the discerning few.
          </motion.p>

          <motion.div
            className={styles.ctas}
            variants={fadeUp} custom={3} initial="hidden" animate="show"
          >
            <button className="btn-primary" onClick={onExplore}>
              Explore Properties <ArrowRight size={15} />
            </button>
            <button className="btn-ghost" onClick={onOpenModal}>
              Book Consultation
            </button>
          </motion.div>

          <motion.div
            className={styles.socialProof}
            variants={fadeUp} custom={4} initial="hidden" animate="show"
          >
            <div className={styles.avatars}>
              {[
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=48&q=70",
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=48&q=70",
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=48&q=70",
              ].map((src, i) => (
                <img key={i} src={src} alt="" className={styles.avatar} />
              ))}
            </div>
            <div>
              <p className={styles.proofNum}>500+</p>
              <p className={styles.proofLabel}>Happy Clients</p>
            </div>
          </motion.div>
        </div>

        {/* ── RIGHT — Featured property card ── */}
        <motion.div
          className={styles.right}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.card}>
            {/* Main image */}
            <div className={styles.imgWrap}>
              <motion.img
                src={FEATURED.image}
                alt={FEATURED.name}
                className={styles.mainImg}
                style={{ y: imgY }}
              />
              <div className={styles.imgBadge}>Featured</div>
            </div>

            {/* Card body */}
            <div className={styles.cardBody}>
              <div className={styles.cardTop}>
                <div>
                  <p className={styles.cardName}>{FEATURED.name}</p>
                  <p className={styles.cardLoc}>
                    <MapPin size={12} strokeWidth={2} /> {FEATURED.location}
                  </p>
                </div>
                <p className={styles.cardPrice}>{FEATURED.price}</p>
              </div>

              <div className={styles.cardSpecs}>
                <span className={styles.spec}>
                  <BedDouble size={13} strokeWidth={2} /> {FEATURED.beds}
                </span>
                <span className={styles.specDot} />
                <span className={styles.spec}>
                  <Maximize2 size={13} strokeWidth={2} /> {FEATURED.area}
                </span>
                <span className={styles.specDot} />
                <span className={styles.specVerified}>✓ Verified</span>
              </div>

              {/* Thumbs */}
              <div className={styles.thumbs}>
                {FEATURED.thumbs.map((t, i) => (
                  <div key={i} className={styles.thumbWrap}>
                    <img src={t} alt="" className={styles.thumb} />
                  </div>
                ))}
                <button className={styles.viewMore}>View all</button>
              </div>

              {/* Agent row */}
              <div className={styles.agentRow}>
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=64&q=70"
                  alt="Agent"
                  className={styles.agentAvatar}
                />
                <div>
                  <p className={styles.agentName}>James Harlow</p>
                  <p className={styles.agentRole}>Senior Advisor, Elara Estates</p>
                </div>
                <button className={styles.tourBtn} onClick={onOpenModal}>
                  Schedule Tour
                </button>
              </div>
            </div>
          </div>

          {/* Floating stat pill */}
          <div className={styles.floatStat}>
            <span className={styles.floatNum}>$2B+</span>
            <span className={styles.floatLabel}>Transactions Completed</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
