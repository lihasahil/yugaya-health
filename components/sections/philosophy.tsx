"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

const CLOCKWISE_ORDER = [0, 1, 3, 2];

function PhilosophySection() {
  const [step, setStep] = useState(0);

  const philosophys = useMemo(
    () => [
      {
        id: 1,
        title: "Human-Centered",
        description:
          "We design for how people actually learn, think, and perform.",
        icon: "/assets/man.svg",
        bg: "#0298C7",
        iconBg: "#FFFFFF",
        titleColor: "#FFFFFF",
        descColor: "rgba(255,255,255,0.5)",
      },
      {
        id: 2,
        title: "Outcome-Driven",
        description: "We focus on real capability, not just engagement.",
        icon: "/assets/flower.svg",
        bg: "#E0F3F9",
        iconBg: "#0298C7",
        titleColor: "#0298C7",
        descColor: "#5CA1B7",
      },
      {
        id: 3,
        title: "Integrity & Trust",
        description:
          "We operate with the highest standards of data ethics, transparency, and responsibility. As a platform, trust is fundamental, for users, partners, and institutions alike.",
        icon: "/assets/flower.svg",
        bg: "#E0F3F9",
        iconBg: "#0298C7",
        titleColor: "#0298C7",
        descColor: "#5CA1B7",
      },
      {
        id: 4,
        title: "Continuous Innovation",
        description:
          "Our platform is built to evolve, supporting today's needs while enabling tomorrow's solutions, improving continuously as users grow.",
        icon: "/assets/direction.svg",
        bg: "#0298C7",
        iconBg: "#FFFFFF",
        titleColor: "#FFFFFF",
        descColor: "rgba(255,255,255,0.5)",
      },
    ],
    [],
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % CLOCKWISE_ORDER.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const getGridPos = (cardIndex: number) => {
    const clockwiseIndex = (cardIndex + step) % CLOCKWISE_ORDER.length;
    return CLOCKWISE_ORDER[clockwiseIndex];
  };

  const gridPositionClass: Record<number, string> = {
    0: "md:col-start-1 md:row-start-1",
    1: "md:col-start-2 md:row-start-1",
    2: "md:col-start-1 md:row-start-2",
    3: "md:col-start-2 md:row-start-2",
  };

  return (
    <section
      id="philosophy"
      className="relative py-10 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `radial-gradient(85.92% 50% at 50% 50%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.95) 100%), url('/assets/philosophy-bg.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="min-h-screen max-w-5xl mx-auto flex flex-col items-center justify-center space-y-6 sm:space-y-8 lg:space-y-10 py-12 sm:py-16 lg:py-0">
              <div className="bg-[#0298C71F] text-[#0298C7] text-sm w-fit rounded-full py-2 px-6 font-medium">
          Our Philosophy
        </div>

        {/* Mobile: Vertical stack */}
        <div className="flex flex-col gap-4 sm:gap-6 w-full md:hidden">
          {philosophys.map((philosophy) => (
            <motion.div
              key={philosophy.id}
              style={{ backgroundColor: philosophy.bg }}
              className="px-4 sm:px-6 py-6 sm:py-8 space-y-4 sm:space-y-6 text-center flex flex-col justify-center items-center rounded-lg"
            >
              <div
                style={{ backgroundColor: philosophy.iconBg }}
                className="w-12 h-12 sm:w-15 sm:h-15 flex items-center justify-center rounded-full"
              >
                <Image
                  src={philosophy.icon}
                  alt={philosophy.title}
                  height={0}
                  width={0}
                  className="w-4 sm:w-5 object-center"
                />
              </div>

              <h2
                style={{ color: philosophy.titleColor }}
                className="text-lg sm:text-xl lg:text-2xl font-semibold"
              >
                {philosophy.title}
              </h2>

              <p
                style={{ color: philosophy.descColor }}
                className="text-base"
              >
                {philosophy.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Desktop/Tablet: 2x2 Grid with animation */}
        <div className="hidden md:grid relative max-w-4xl w-full mx-auto grid-cols-2 grid-rows-2 gap-6 lg:gap-10">
          {philosophys.map((philosophy, cardIndex) => {
            const gridPos = getGridPos(cardIndex);

            return (
              <motion.div
                key={philosophy.id}
                layout
                style={{ backgroundColor: philosophy.bg }}
                transition={{
                  layout: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
                }}
                className={`${gridPositionClass[gridPos]} px-4 lg:px-6 py-6 lg:py-8 space-y-4 lg:space-y-6 h-80 lg:h-92 text-center flex flex-col justify-center items-center rounded-lg`}
              >
                <div
                  style={{ backgroundColor: philosophy.iconBg }}
                  className="w-12 h-12 lg:w-15 lg:h-15 flex items-center justify-center rounded-full"
                >
                  <Image
                    src={philosophy.icon}
                    alt={philosophy.title}
                    height={0}
                    width={0}
                    className="w-4 lg:w-5 object-center"
                  />
                </div>

                <h2
                  style={{ color: philosophy.titleColor }}
                  className="text-xl lg:text-2xl font-semibold"
                >
                  {philosophy.title}
                </h2>

                <p
                  style={{ color: philosophy.descColor }}
                  className="text-base"
                >
                  {philosophy.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default PhilosophySection;
