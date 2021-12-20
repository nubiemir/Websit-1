import React from "react";
import FaqSection from "../components/faq";
import AboutSection from "../components/aboutus";
import ServicesSection from "../components/services";

export default function HomePage() {
  return (
    <>
      <AboutSection />
      <FaqSection />
      <ServicesSection />
    </>
  );
}
