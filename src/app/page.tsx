"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import Stats from "@/components/Stats";
import FeaturedProperties from "@/components/FeaturedProperties";
import WhyChoose from "@/components/WhyChoose";
import AreasWeServe from "@/components/AreasWeServe";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";
import PageLoader from "@/components/PageLoader";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"consultation" | "visit">("consultation");
  const [modalLocation, setModalLocation] = useState("");

  const [searchFilters, setSearchFilters] = useState({
    type: "all",
    budget: "all",
    location: "all",
    bedrooms: "all",
  });

  const handleOpenModal = (type: "consultation" | "visit", location = "") => {
    setModalType(type);
    setModalLocation(location);
    setIsModalOpen(true);
  };

  const handleSearch = (filters: { location: string; budget: string; type: string; bhk: string }) => {
    setSearchFilters({
      type: filters.type || "all",
      budget: filters.budget || "all",
      location: filters.location || "all",
      bedrooms: filters.bhk || "all",
    });
  };

  const handleSelectArea = (areaKey: string) => {
    setSearchFilters({
      type: "all",
      budget: "all",
      location: areaKey,
      bedrooms: "all",
    });
  };

  const handleExplore = () => {
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
    <>
      <PageLoader />
      <SmoothScroll />
      
      <Navbar onOpenModal={() => handleOpenModal("consultation")} />
      
      <main>
        <Hero 
          onOpenModal={() => handleOpenModal("consultation")} 
          onExplore={handleExplore} 
        />

        <SearchBar onSearch={handleSearch} />
        
        <Stats />
        
        <FeaturedProperties 
          searchFilters={searchFilters} 
          onOpenScheduleVisit={(type, loc) => handleOpenModal(type, loc)}
        />
        
        <WhyChoose />
        
        <AreasWeServe onSelectArea={handleSelectArea} />
        
        <Testimonials />
        
        <Process />
        
        <About />
        
        <FAQ />
        
        <FinalCTA onOpenModal={(type) => handleOpenModal(type)} />
      </main>

      <Footer />

      <ConsultationModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        type={modalType}
        initialLocation={modalLocation}
      />
    </>
  );
}
