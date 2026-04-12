/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client";

import React from "react";

const problems = [
  { text: "Learning is often theoretical", rotate: "-5deg" },
  { text: "Skills are disconnected from application", rotate: "-1deg" },
  { text: "Decision-making is learned too late", rotate: "-3deg" },
  {
    text: "Employers need better thinkers, not just qualifications",
    rotate: "3deg",
  },
  {
    text: "Individuals face increasing complexity and uncertainty",
    rotate: "-2deg",
  },
  {
    text: "Systems lack tools to continuously develop human capability",
    rotate: "-2deg",
  },
];

const solutions = [
  "Making learning applied and interactive",
  "Connecting knowledge to real decisions",
  "Building systems that adapt to each individual",
  "Unified learning journey",
  "Compounding capabilities",
];

const capabilities = [
  "Clear Thinking",
  "Structured Reasoning",
  "Effective Decision Making",
];

export default function MissingLayerSection() {
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

      <section className="missing-layer-bg relative w-full overflow-hidden py-10 px-4 sm:px-8 lg:px-30">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 mb-10 text-center">
          <span className="inline-flex items-center justify-center px-6 py-1 bg-white rounded-full">
            <span
              className="text-sm sm:text-base font-semibold"
              style={{ fontFamily: "Poppins, sans-serif", color: "#0298C7" }}
            >
              Why This Matters?
            </span>
          </span>

          <h2
            className="text-2xl sm:text-3xl lg:text-[40px] font-normal leading-tight lg:leading-13 max-w-3xl"
            style={{ fontFamily: "Poppins, sans-serif", color: "#1D1D1D" }}
          >
            The Missing Layer in Human Development
          </h2>
          <p
            className="text-sm sm:text-base font-normal max-w-4xl"
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
        </div>

        {/* Two-column cards */}
        <div className="flex flex-col lg:flex-row gap-6 w-full max-w-300 mx-auto">
          {/* Problems card */}
          <div
            className="flex flex-col items-center flex-1 rounded-3xl pt-7 px-4 pb-6 gap-5"
            style={{
              background: "rgba(255,255,255,0.3)",
              border: "1px solid #E34446",
            }}
          >
            {/* Label */}
            <div className="flex items-center justify-center px-4 py-2 bg-white rounded-full w-full max-w-[320px]">
              <span
                className="text-sm sm:text-base font-normal text-center"
                style={{ fontFamily: "Poppins, sans-serif", color: "#E34446" }}
              >
                The problem today
              </span>
            </div>

            {/* Pills — stacked with slight rotation, no absolute positioning */}
            <div className="flex flex-col gap-3 w-full">
              {problems.map((p, i) => (
                <div
                  key={i}
                  className="flex items-center px-4 py-2.5 rounded-[270px] w-fit max-w-full"
                  style={{
                    background: "rgba(255,255,255,0.55)",
                    transform: `rotate(${p.rotate})`,
                    alignSelf: i % 2 === 0 ? "flex-start" : "flex-end",
                  }}
                >
                  <span
                    className="text-sm sm:text-base font-normal text-black whitespace-normal"
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      lineHeight: "150%",
                    }}
                  >
                    {p.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions card */}
          <div
            className="flex flex-col flex-1 rounded-3xl pt-7 px-4 pb-6 gap-5"
            style={{
              background: "rgba(255,255,255,0.3)",
              border: "1px solid #35ADD2",
            }}
          >
            {/* Label */}
            <div className="flex items-center justify-center px-4 py-2 bg-white rounded-full w-full max-w-[320px] mx-auto">
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
            <div className="flex flex-col items-center gap-2 w-full">
              {solutions.map((s, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center px-4 py-2.5 rounded-[270px] w-full"
                  style={{ background: "#0298C7" }}
                >
                  <span
                    className="text-sm sm:text-base font-normal text-white text-center"
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      lineHeight: "150%",
                    }}
                  >
                    {s}
                  </span>
                </div>
              ))}
            </div>

            {/* Capabilities list */}
            <div className="flex flex-col gap-3 mt-2 pl-4">
              {capabilities.map((c, i) => (
                <div key={i} className="flex flex-row items-center gap-3">
                  <div
                    className="flex items-center justify-center rounded-full shrink-0"
                    style={{
                      width: "20px",
                      height: "20px",
                      background: "rgba(4,114,148,0.1)",
                      border: "1px solid #0298C7",
                    }}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2.5 6L5 8.5L9.5 3.5"
                        stroke="#0298C7"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span
                    className="font-bold text-sm"
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      color: "#0298C7",
                      lineHeight: "150%",
                    }}
                  >
                    {c}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
