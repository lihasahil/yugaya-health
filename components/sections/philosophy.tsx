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
    0: "col-start-1 row-start-1",
    1: "col-start-2 row-start-1",
    2: "col-start-1 row-start-2",
    3: "col-start-2 row-start-2",
  };

  return (
    <div className="min-h-screen max-w-5xl mx-auto flex flex-col items-center justify-center space-y-10">
      <div className="bg-[#0298C71F] text-[#0298C7] text-sm w-fit rounded-full py-2 px-6 font-semibold">
        Our Philosophy
      </div>

      <div className="relative grid max-w-4xl w-full mx-auto grid-cols-2 grid-rows-2 gap-10">
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
              className={`${gridPositionClass[gridPos]} px-6 py-8 space-y-6 h-92 text-center flex flex-col justify-center items-center rounded-lg`}
            >
              <div
                style={{ backgroundColor: philosophy.iconBg }}
                className="w-15 h-15 flex items-center justify-center rounded-full"
              >
                <Image
                  src={philosophy.icon}
                  alt={philosophy.title}
                  height={0}
                  width={0}
                  className="w-5 object-center"
                />
              </div>

              <h2
                style={{ color: philosophy.titleColor }}
                className="text-2xl font-semibold"
              >
                {philosophy.title}
              </h2>

              <p style={{ color: philosophy.descColor }} className="text-base">
                {philosophy.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default PhilosophySection;
