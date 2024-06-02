"use client";

import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Expertise from "../../components/Expertise/Expertise";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import React, { useRef } from "react";

export default function Home() {
  const contactRef = useRef(null);
  const expertiseRef = useRef(null);
  const whyChooseUsRef = useRef(null);

  const scrollToSection = (e, section) => {
    e.preventDefault();
    if (section === "contact") {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "ourExpertise") {
      expertiseRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "whyChooseUs") {
      whyChooseUsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Header scrollToContact={scrollToSection} />
      <main style={{ marginTop: "80px" }}>
        <Hero />
        <Expertise ref={expertiseRef} />
        <WhyChooseUs ref={whyChooseUsRef} />
        <Contact ref={contactRef} />
      </main>
      <Footer />
    </>
  );
}
