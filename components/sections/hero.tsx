import Image from "next/image";

function HeroSection() {
  return (
    <div className="relative min-h-screen w-full">
      {/* Background Image */}
      <Image
        src="/assets/hero.gif"
        alt="Hero Background"
        fill
        priority
        className="object-cover pt-20"
      />

      {/* Content */}
      <div className="absolute inset-0 z-10 flex flex-col pt-20 max-w-4xl mx-auto  text-[#1D1D1D] text-center items-center justify-center space-y-10">
        <h1 className="text-6xl font-medium">
          Powering
          <br />
          Cognitive and Decision Health
        </h1>
        <p className="text-base font-normal leading-[150%] tracking-[0%]">
          Yugaya Health builds intelligent platforms that improve how people
          learn, think, and make decisions.
        </p>
        <p className="text-base font-normal leading-[150%] tracking-[0%]">
          From foundational learning in children to real-world strategic
          decision-making in adults, we are creating a unified ecosystem for
          cognitive and decision health, powered by proprietary AI models,
          behavioral science, and adaptive systems.
        </p>

        <div className="flex items-center font-poppins rounded-full py-1.5 pr-1.5 pl-9 w-xl h-20 shadow-[0_4px_9.3px_rgba(2,152,199,0.12)] border border-[#053D4E47] bg-[#FFFFFF]">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 min-w-0 bg-transparent border-none outline-none placeholder:text-[#1D1D1D99] font-medium text-base"
          />
          <button className="flex items-center justify-center font-semibold text-base bg-[#0298C7] rounded-full px-7 py-4.5 text-white transition-all hover:scale-[1.02] shrink-0">
            Connect with us
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
