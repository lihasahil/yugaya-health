import { CircleCheck } from "lucide-react";
import Image from "next/image";

function ApproachSection() {
  return (
    <div
      id="approach"
      className="min-h-screen max-w-7xl mx-auto p-6 flex flex-col items-center justify-center space-y-10"
    >
      <div className="bg-[#0298C71F] text-[#0298C7] text-sm w-fit rounded-full py-2 px-6 font-medium">
        Our Approach
      </div>
      <div className="flex flex-col lg:flex-row relative gap-15 text-left space-y-6">
        <div className="flex-flex-col space-y-4">
          <h1 className="text-2xl sm:text-3xl text-[#1D1D1D] xl:text-nowrap">
            From Learning to
            <span className="text-[#0298C7]"> Decision-Making,</span>
            <br />
            One Continuous <span className="text-[#0298C7]">Journey</span>
          </h1>
          <p className="text-[#1D1D1DCC] text-base">
            Human development is not linear, it compounds.
          </p>
        </div>

<div className="bg-[#F8FBFD] flex flex-col space-y-6 border border-[#0298C7] rounded-xl p-4">
  <div className="bg-[#0298C7] w-fit px-6 py-3 rounded-full mx-auto text-white">
    How the platform works
  </div>
  <div className="text-[#1D1D1DCC] space-y-2">
    <h1 className="font-medium">
      We move beyond passive learning into active capability building
    </h1>
    <p>Learning by thinking, deciding, and experiencing outcomes.</p>
  </div>
  <div className="text-[#1D1D1DCC] space-y-3">
    <p>Yugaya is designed to support this entire journey through:</p>
    <div className="relative pl-12">
      {/* Vertical line */}
      <div className="absolute left-3.75 top-5 bottom-5 w-0.5 bg-[#0298C7]"></div>
      
      <div className="space-y-4">
        <span className="flex gap-3 border border-[#0298C7] w-fit p-2 rounded-md items-center relative">
          <div className="absolute -left-12 w-8 h-8 rounded-full bg-[#0298C7] text-white flex items-center justify-center font-medium">
            1
          </div>
          Interactive learning systems
        </span>
        <span className="flex gap-3 border border-[#0298C7] w-fit p-2 rounded-md items-center relative">
          <div className="absolute -left-12 w-8 h-8 rounded-full bg-[#0298C7] text-white flex items-center justify-center font-medium">
            2
          </div>
          Simulation-based environments
        </span>
        <span className="flex gap-3 border border-[#0298C7] w-fit p-2 rounded-md items-center relative">
          <div className="absolute -left-12 w-8 h-8 rounded-full bg-[#0298C7] text-white flex items-center justify-center font-medium">
            3
          </div>
          AI-driven feedback and adaptation
        </span>
        <span className="flex gap-3 border border-[#0298C7] w-fit p-2 rounded-md items-center relative">
          <div className="absolute -left-12 w-8 h-8 rounded-full bg-[#0298C7] text-white flex items-center justify-center font-medium">
            4
          </div>
          Continuous capability tracking
        </span>
      </div>
    </div>
  </div>
</div>
        <Image
          src="/assets/path.svg"
          alt="Path"
          height={0}
          width={0}
          priority
          className="absolute w-full xl:w-[70%] -bottom-40 md:-bottom-80 lg:-bottom-40"
        />
      </div>
    </div>
  );
}

export default ApproachSection;
