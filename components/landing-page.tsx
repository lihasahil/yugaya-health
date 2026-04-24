"use client";

import { useState } from "react";
import Footer from "./footer";
import Header from "./header";
import ApproachSection from "./sections/approach";
import ContactSection from "./sections/contact-us";
import FocusSection from "./sections/focus";
import HeroSection from "./sections/hero";
import MissingLayerSection from "./sections/matters";
import PhilosophySection from "./sections/philosophy";
import PlatformSection from "./sections/platform";
import ProductsSection from "./sections/products";
import SupportSection from "./sections/support";

function LandingPage() {
  const [emailFromHero, setEmailFromHero] = useState("");

  const handleEmailSubmit = (email: string) => {
    setEmailFromHero(email);
  };

  return (
    <>
      <Header />
      <HeroSection onEmailSubmit={handleEmailSubmit} />
      <FocusSection />
      <div
        className="relative overflow-hidden"
        style={{
          backgroundImage: "url('/assets/approach-platform.svg')",
          backgroundSize: "contain",
          backgroundPosition: "center 60vh",
          backgroundRepeat: "no-repeat",
        }}
      >
        <ApproachSection />
        <PlatformSection />
        <ProductsSection />
      </div>
      <MissingLayerSection />
      <SupportSection />
      <PhilosophySection />
      <ContactSection prefillEmail={emailFromHero} />
      <Footer />
    </>
  );
}

export default LandingPage;
