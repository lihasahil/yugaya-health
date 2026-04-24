"use client";

import Image from "next/image";
import { useState } from "react";

interface HeroSectionProps {
  onEmailSubmit?: (email: string) => void;
}

function HeroSection({ onEmailSubmit }: HeroSectionProps) {
  const [email, setEmail] = useState("");

  const handleConnectClick = () => {
    if (email.trim()) {
      // Pass email to parent component
      onEmailSubmit?.(email);

      // Scroll to contact section
      const contactSection = document.getElementById("contactus");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleConnectClick();
    }
  };

  return (
    <div className="relative min-h-screen w-full">
      {/* Background Image */}
      <Image
        src="/assets/hero.gif"
        alt="Hero Background"
        fill
        priority
        className="object-cover pt-0 md:pt-20"
      />

      {/* Content */}
      <div className="absolute inset-0 z-10 flex flex-col pt-24 px-6 sm:px-10 max-w-4xl mx-auto text-[#1D1D1D] text-center items-center justify-center space-y-6 sm:space-y-8 lg:space-y-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-medium leading-tight">
          Powering Cognitive and Decision Health
        </h1>

        <p className="text-base font-normal leading-[150%] max-w-lg">
          Yugaya Health builds intelligent platforms that improve how people
          learn, think, and make decisions — from foundational learning in
          children to strategic decision-making in adults, powered by
          proprietary AI and behavioral science.
        </p>

        {/* Email input — stacked on mobile, pill on sm+ */}
        <div className="w-full max-w-xl flex flex-col sm:flex-row sm:items-center sm:rounded-full sm:py-1.5 sm:pr-1.5 sm:pl-9 sm:h-16 sm:shadow-[0_4px_9.3px_rgba(2,152,199,0.12)] sm:border sm:border-[#053D4E47] sm:bg-white gap-3 sm:gap-0">
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1 min-w-0 bg-white sm:bg-transparent border border-[#053D4E47] sm:border-none outline-none placeholder:text-[#1D1D1D99] font-medium text-sm sm:text-base rounded-full px-6 py-4 sm:p-0"
          />
          <button
            onClick={handleConnectClick}
            className="w-full sm:w-auto flex items-center justify-center font-semibold text-sm sm:text-base bg-[#0298C7] rounded-full px-7 py-4 text-white transition-all hover:scale-[1.02] shrink-0"
          >
            Connect with us
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
