/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const problems = [
  { text: "Learning is often <strong>theoretical</strong>", rotate: "-9deg" },
  {
    text: "Skills are <strong>disconnected</strong> from application",
    rotate: "-1deg",
  },
  {
    text: "Decision-making is learned <strong>too late</strong>",
    rotate: "-5deg",
  },
  {
    text: "Employers <strong>need better thinkers</strong>, not just qualifications",
    rotate: "3deg",
  },
  {
    text: "Individuals face increasing complexity and <strong>uncertainty</strong>",
    rotate: "-5deg",
  },
  {
    text: "Systems <strong>lack tools</strong> to continuously develop human capability",
    rotate: "-5deg",
  },
];

const solutions = [
  "Making learning <strong>applied and interactive</strong>",
  "Connecting knowledge to <strong>real decisions</strong>",
  "Building systems that adapt to <strong>each individual</strong>",
  "<strong>Unified learning</strong> journey",
  "Compounding <strong>capabilities</strong>",
];

const capabilities = [
  "Clear Thinking",
  "Structured Reasoning",
  "Effective Decision Making",
];

function ProblemPill({
  text,
  rotate,
  index,
}: {
  text: string;
  rotate: string;
  index: number;
}) {
  return (
    <div
      className="flex items-center px-4 py-2.5 rounded-[270px] w-fit max-w-full"
      style={{
        background: "rgba(255,255,255,0.55)",
        transform: `rotate(${rotate})`,
        alignSelf: index % 2 === 0 ? "flex-start" : "flex-end",
      }}
    >
      <span
        className="text-sm sm:text-base font-normal text-black whitespace-normal"
        style={{ fontFamily: "Poppins, sans-serif", lineHeight: "150%" }}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
  );
}

function SolutionPill({
  text,
  index,
  inView,
}: {
  text: string;
  index: number;
  inView: boolean;
}) {
  const fromLeft = index % 2 === 0;
  return (
    <motion.div
      initial={{ opacity: 0, x: fromLeft ? -80 : 80 }}
      animate={
        inView ? { opacity: 1, x: 0 } : { opacity: 0, x: fromLeft ? -80 : 80 }
      }
      transition={{
        duration: 0.55,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="flex items-center justify-center px-4 py-2.5 rounded-[270px] w-fit"
      style={{ background: "#0298C7" }}
    >
      <span
        className="text-sm sm:text-base font-normal text-white text-center"
        style={{ lineHeight: "150%" }}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </motion.div>
  );
}

export default function MissingLayerSection() {
  const sectionRef = useRef(null);
  const problemsRef = useRef(null);
  const solutionsRef = useRef(null);

  const sectionInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const problemsInView = useInView(problemsRef, { once: false, amount: 0.3 });
  const solutionsInView = useInView(solutionsRef, { once: false, amount: 0.3 });

  return (
    <>
      <style>{`
        @keyframes gradientShift {
          0%   { background-position: 50% 50%; }
          25%  { background-position: 0% 0%; }
          50%  { background-position: 100% 100%; }
          75%  { background-position: 100% 0%; }
          100% { background-position: 50% 50%; }
        }
        .missing-layer-bg {
          background-color: #74DEFF;
          background-image: radial-gradient(
            ellipse 80% 70% at 50% 50%,
            rgba(255, 220, 240, 0.85) 0%,
            rgba(255, 180, 220, 0.45) 20%,
            rgba(116, 222, 255, 0.4) 50%,
            rgba(2, 152, 199, 0.25) 75%,
            transparent 100%
          );
          background-size: 250% 250%;
          animation: gradientShift 8s ease-in-out infinite;
        }
      `}</style>

      <section
        ref={sectionRef}
        id="solutions"
        className="missing-layer-bg relative w-full overflow-hidden py-10 px-4 sm:px-8 xl:px-30"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center gap-4 mb-10 text-center"
        >
          <div className="bg-white text-[#0298C7] text-sm w-fit rounded-full py-2 px-6 font-medium">
            Why This Matters?
          </div>

          <h2 className="text-2xl sm:text-3xl font-normal leading-tight lg:leading-13 max-w-3xl text-[#1D1D1D]">
            The Missing Layer in Human Development
          </h2>
          <p
            className="text-base font-normal max-w-4xl"
            style={{
              fontFamily: "Poppins, sans-serif",
              color: "rgba(29,29,29,0.8)",
              lineHeight: "150%",
            }}
          >
            Across education and professional systems, critical capabilities are
            measured poorly, developed inconsistently, and treated as separate
            problems.
          </p>
        </motion.div>

        {/* Two-column cards */}
        <div className="flex flex-col lg:flex-row gap-6 w-full">
          {/* Problems card */}
          <div
            className="flex flex-col items-center flex-1 rounded-3xl pt-7 px-4 pb-6 gap-5 overflow-hidden border border-[#E34446]"
            style={{
              background: "rgba(255,255,255,0.3)",
            }}
          >
            {/* Label */}
            <div className="flex items-center justify-center px-4 py-2 bg-white rounded-full w-full">
              <span className="text-sm sm:text-base font-normal text-center text-[#E34446]">
                The problem today
              </span>
            </div>

            {/* Pills wrapper */}
            <div
              className="flex flex-col gap-3 w-full"
              style={{ padding: "8px 12px" }}
            >
              <motion.div
                initial={{ y: "-110%" }}
                animate={problemsInView ? { y: "0%" } : { y: "-110%" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col gap-3 w-full"
              >
                {problems.map((p, i) => (
                  <ProblemPill
                    key={i}
                    text={p.text}
                    rotate={p.rotate}
                    index={i}
                  />
                ))}
              </motion.div>
            </div>
            <div ref={problemsRef} style={{ height: 0 }} />
          </div>

          {/* Solutions card */}
          <div
            className="flex flex-col flex-1 rounded-3xl pt-7 px-4 gap-5"
            style={{
              background: "rgba(255,255,255,0.3)",
              border: "1px solid #35ADD2",
              justifyContent: "space-between",
            }}
          >
            {/* Label */}
            <div className="flex items-center justify-center px-4 py-2 bg-white rounded-full w-full">
              <div className="flex items-center gap-1 flex-wrap justify-center">
                <span
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    color: "#0298C7",
                    fontSize: "16px",
                  }}
                >
                  The
                </span>
                <span
                  className="flex gap-1 items-center"
                  style={{
                    color: "#0298C7",
                    fontSize: "16px",
                    fontWeight: 700,
                  }}
                >
                  <img src="/assets/logo.svg" className="w-6" />
                  Yugaya
                </span>
                <span
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    color: "#0298C7",
                    fontSize: "16px",
                  }}
                >
                  Solution
                </span>
              </div>
            </div>

            {/* Solution pills */}
            <div className="flex flex-col items-center gap-2 w-full overflow-hidden">
              {solutions.map((s, i) => (
                <SolutionPill
                  key={i}
                  text={s}
                  index={i}
                  inView={solutionsInView}
                />
              ))}
            </div>

            {/* Capabilities list */}
            <div
              ref={solutionsRef}
              className="flex flex-row items-center justify-center bg-white gap-4 mt-auto py-4 rounded-b-3xl -mx-4 flex-wrap"
            >
              {capabilities.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    solutionsInView
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 30 }
                  }
                  transition={{
                    duration: 0.45,
                    delay: 0.4 + i * 0.1,
                    ease: "easeOut",
                  }}
                  className="flex flex-row items-center gap-2"
                >
                  {i !== 0 && (
                    <span className="text-[#0298C7] font-black">●</span>
                  )}
                  <span className="text-sm font-bold text-[#0298C7]">{c}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
