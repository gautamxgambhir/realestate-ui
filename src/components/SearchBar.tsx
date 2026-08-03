"use client";
import React, { useState, useRef, useEffect } from "react";
import { Search, MapPin, DollarSign, Building2, BedDouble, ChevronDown, Check } from "lucide-react";
import styles from "./SearchBar.module.css";
import { motion, AnimatePresence } from "framer-motion";

interface Option { label: string; value: string; }

interface DropdownProps {
  label: string;
  icon: React.ReactNode;
  options: Option[];
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
}

function CustomDropdown({ label, icon, options, value, onChange, placeholder }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const selected = options.find(o => o.value === value);
  const displayText = selected ? selected.label : placeholder;

  return (
    <div className={styles.dropdownWrap} ref={ref}>
      <button
        type="button"
        className={`${styles.dropdownTrigger} ${open ? styles.dropdownOpen : ""}`}
        onClick={() => setOpen(p => !p)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className={styles.label}>
          {icon} {label}
        </span>
        <span className={`${styles.triggerValue} ${!value ? styles.placeholder : ""}`}>
          {displayText}
        </span>
        <ChevronDown
          size={13}
          strokeWidth={2.5}
          className={`${styles.chevron} ${open ? styles.chevronUp : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            className={styles.dropdownPanel}
            role="listbox"
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {options.map(opt => {
              const isSelected = opt.value === value;
              return (
                <li
                  key={opt.value}
                  role="option"
                  aria-selected={isSelected}
                  className={`${styles.dropdownItem} ${isSelected ? styles.dropdownItemActive : ""}`}
                  onClick={() => { onChange(opt.value); setOpen(false); }}
                >
                  <span>{opt.label}</span>
                  {isSelected && <Check size={13} strokeWidth={2.5} className={styles.checkIcon} />}
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

interface SearchBarProps {
  onSearch: (f: { location: string; budget: string; type: string; bhk: string }) => void;
}

const LOCATIONS: Option[] = [
  { value: "", label: "Any Location" },
  { value: "noida-west", label: "Miami Beach" },
  { value: "noida-ext", label: "Brickell" },
  { value: "ghaziabad", label: "Fort Lauderdale" },
  { value: "indirapuram", label: "Coral Gables" },
  { value: "raj-nagar", label: "Aventura" },
];

const BUDGETS: Option[] = [
  { value: "", label: "Any Budget" },
  { value: "u-1.5cr", label: "Under $2M" },
  { value: "1.5-3cr", label: "$2M – $4M" },
  { value: "3-5cr", label: "$4M – $6M" },
  { value: "5cr+", label: "$6M+" },
];

const TYPES: Option[] = [
  { value: "", label: "All Types" },
  { value: "villa", label: "Villa" },
  { value: "penthouse", label: "Penthouse" },
  { value: "apartment", label: "Apartment" },
  { value: "commercial", label: "Commercial" },
];

const BEDROOMS: Option[] = [
  { value: "", label: "Any Beds" },
  { value: "2", label: "2 Beds" },
  { value: "3", label: "3 Beds" },
  { value: "4", label: "4 Beds" },
  { value: "5", label: "5+ Beds" },
];

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [form, setForm] = useState({ location: "", budget: "", type: "", bhk: "" });

  const handle = (key: string, val: string) => setForm(p => ({ ...p, [key]: val }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(form);
    const el = document.getElementById("properties");
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 88, behavior: "smooth" });
  };

  return (
    <motion.div
      className={styles.wrapper}
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <form className={styles.bar} onSubmit={submit} role="search">

        <CustomDropdown
          label="Location"
          icon={<MapPin size={12} strokeWidth={2.5} />}
          options={LOCATIONS}
          value={form.location}
          onChange={v => handle("location", v)}
          placeholder="Any Location"
        />

        <div className={styles.divider} />

        <CustomDropdown
          label="Budget"
          icon={<DollarSign size={12} strokeWidth={2.5} />}
          options={BUDGETS}
          value={form.budget}
          onChange={v => handle("budget", v)}
          placeholder="Any Budget"
        />

        <div className={styles.divider} />

        <CustomDropdown
          label="Property Type"
          icon={<Building2 size={12} strokeWidth={2.5} />}
          options={TYPES}
          value={form.type}
          onChange={v => handle("type", v)}
          placeholder="All Types"
        />

        <div className={styles.divider} />

        <CustomDropdown
          label="Beds"
          icon={<BedDouble size={12} strokeWidth={2.5} />}
          options={BEDROOMS}
          value={form.bhk}
          onChange={v => handle("bhk", v)}
          placeholder="Any Beds"
        />

        <button type="submit" className={styles.searchBtn} aria-label="Search properties">
          <Search size={16} strokeWidth={2.5} />
          <span>Search</span>
        </button>

      </form>
    </motion.div>
  );
}
