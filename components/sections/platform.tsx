import { CircleCheck } from "lucide-react";

/* eslint-disable @next/next/no-img-element */
export default function PlatformSection() {
  return (
    <div className="min-h-screen max-w-7xl mx-auto p-6 mt-10 flex flex-col items-center justify-center space-y-10">
      <div className="bg-[#FFFFFF] text-[#0298C7] text-sm w-fit rounded-full py-2 px-6 font-semibold">
        Our Platform
      </div>
      <div className="text-center space-y-6">
        <h1 className="text-4xl text-[#1D1D1D]">
          A Unified <span className="text-[#0298C7]">Intelligence </span>Layer
        </h1>
        <p className="text-sm text-[#1D1D1DCC] max-w-2xl">
          At the core of Yugaya is an adaptive intelligence system that
          understands:
        </p>
      </div>
      <section className="relative w-full xl:w-7xl min-h-150 overflow-hidden">
        {/* Top-left label with pointer */}
        <div className="absolute top-[5] left-10 z-10">
          <div className="relative bg-white rounded-2xl shadow-[0_0_3.4px_0_#00000054] px-5 py-3  max-w-60">
            <p className="text-sm font-semibold text-gray-800">
              How an Individual <span className="text-[#0298C7]">learn.</span>
            </p>
            {/* Pointer arrow pointing down-right */}
            <div className="absolute -bottom-2 left-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white"></div>
          </div>
        </div>

        {/* Top-right label with pointer */}
        <div className="absolute top-8 right-30 z-10">
          <div className="relative bg-white rounded-2xl shadow-[0_0_3.4px_0_#00000054] px-5 py-3 max-w-60">
            <p className="text-sm font-semibold text-gray-800">
              Where they struggle and{" "}
              <span className="text-[#0298C7]">improve</span> over time.
            </p>
            {/* Pointer arrow pointing down-left */}
            <div className="absolute -left-1.75 top-4 w-3 h-3 bg-white rotate-45 shadow-[-2px_2px_3px_0_#00000020]" />{" "}
          </div>
        </div>

        {/* Bottom-left label with pointer */}
        <div className="absolute bottom-30 left-30 z-10">
          <div className="relative bg-white rounded-2xl shadow-[0_0_3.4px_0_#00000054]  px-5 py-3 max-w-55">
            <p className="text-sm font-semibold text-gray-800">
              How they <span className="text-[#0298C7]">respond</span> to
              complexity.
            </p>
            {/* Pointer arrow pointing up-right */}
            <div className="absolute -right-2 top-4 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-white" />
          </div>
        </div>

        {/* Bottom-right label with pointer */}
        <div className="absolute bottom-40 right-70 z-10 shadow-lg rounded-xl">
          <div className="relative bg-white rounded-2xl shadow-[0_0_3.4px_0_#00000054]  px-5 py-3 max-w-55">
            <p className="text-sm font-semibold text-gray-800">
              How they <span className="text-[#0298C7]">process</span>{" "}
              information.
            </p>
            {/* Pointer arrow pointing down */}
            <div className="absolute -right-2 top-4 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-white" />
          </div>
        </div>

        {/* Images remain the same */}
        <div className="absolute top-10 left-8 w-65 h-65 rounded-full overflow-hidden border-4 border-[#A9EBFF]">
          <img
            src="/assets/platform1.svg"
            alt="Children learning"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute top-4 left-1/2 w-60 h-60 rounded-full overflow-hidden border-6 border-[#A9EBFF]">
          <img
            src="/assets/platform3.svg"
            alt="Professionals working"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute bottom-8 left-[30%] w-65 h-65 rounded-full overflow-hidden border-6 border-[#A9EBFF]">
          <img
            src="/assets/platform2.svg"
            alt="Students collaborating"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute bottom-4 right-8 w-60 h-60 rounded-full overflow-hidden border-6 border-[#A9EBFF]">
          <img
            src="/assets/platform4.svg"
            alt="Professional speaking"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <div className="bg-[#F8FBFD] w-full rounded-xl border border-[#0000000F] space-y-4 p-4">
        <h1 className="text-[#0F172A] max-w-5xl mx-auto">
          This intelligence layer powers all Yugaya products, enabling:
        </h1>
        <div className="grid grid-cols-2 gap-4 text-sm text-[#475569] max-w-5xl mx-auto">
          <span className="flex gap-3 items-center">
            <CircleCheck
              fill="#0472941A"
              strokeWidth="1"
              className="text-[#0298C7] font-extralight"
            />{" "}
            Interactive learning systems
          </span>
          <span className="flex gap-3 items-center">
            <CircleCheck
              fill="#0472941A"
              strokeWidth="1"
              className="text-[#0298C7]"
            />{" "}
            Simulation-based environments
          </span>
          <span className="flex gap-3 items-center">
            <CircleCheck
              fill="#0472941A"
              strokeWidth="1"
              className="text-[#0298C7]"
            />{" "}
            AI-driven feedback and adaptation
          </span>
          <span className="flex gap-3 items-center">
            <CircleCheck
              fill="#0472941A"
              strokeWidth="1"
              className="text-[#0298C7]"
            />{" "}
            Continuous capability tracking
          </span>
        </div>
        <div className="bg-[#E9FAFF] text-[#046381] text-sm p-4 text-center rounded-xl">
          Over time, this evolves into a comprehensive human intelligence system
          across learning, performance, and decision-making.
        </div>
      </div>
    </div>
  );
}
