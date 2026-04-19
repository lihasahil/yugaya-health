import Image from "next/image";

function FocusSection() {
  const focuses = [
    {
      id: "01",
      title: "Learning Health",
      description:
        "How effectively a person builds foundational skills — in language, reasoning, and clear expression. The bedrock of all future capability.",
      icon: "/assets/book.svg",
    },
    {
      id: "02",
      title: "Cognitive Health",
      description:
        "Decision health reflects how well a person evaluates choices, manages uncertainty, and responds under pressure.",
      icon: "/assets/brain.svg",
    },
    {
      id: "03",
      title: "Decision Health",
      description:
        "How a person makes choices under complexity and uncertainty. The highest-order capability — and the one most neglected by traditional education",
      icon: "/assets/diamond.svg",
    },
  ];
  return (
    <div
      id="focus"
      className="min-h-screen max-w-7xl lg:mt-10 xl:mt-0 mx-auto p-6 flex flex-col items-center justify-center space-y-10"
    >
            <div className="bg-[#0298C71F] text-[#0298C7] text-sm w-fit rounded-full py-2 px-6 font-medium">
        Our Focus
      </div>
      <div className="text-center space-y-6">
        <h1 className="text-2xl sm:text-3xl text-[#1D1D1D]">
          Health, <span className="text-[#0298C7]">reimagined</span> for how
          humans perform
        </h1>
        <p className="text-base text-[#1D1D1DCC] text-center max-w-3xl">
          At Yugaya, health goes beyond physical or clinical care. We focus on
          the capabilities that shape real-world outcomes — and bring them
          together into a single, continuous system of development.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
        {focuses.map((focus) => (
          <div
            key={focus.id}
            className="bg-[#0298C7] rounded-xl flex flex-col p-8"
          >
            <div className="flex justify-between items-center">
              <div className="bg-[#FFFFFF80] p-4 rounded-md">
                <Image
                  src={focus.icon}
                  alt={focus.title}
                  height={0}
                  width={0}
                  className="w-full"
                />
              </div>
              <span className="text-[#FFFFFF80] text-6xl font-extrabold">
                {focus.id}
              </span>
            </div>
            <div className="text-[#F2F2F2] space-y-4 text-left">
              <h3 className="text-xl font-semibold">{focus.title}</h3>
              <p className="text-base">{focus.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#E9FAFF] text-[#046381] text-base p-4 text-center rounded-xl">
    These capabilities are often developed inconsistently, measured poorly, 
    and treated as separate problems.

</div>
      {/* <div className="text-[#1D1D1DCC] text-sm text-center space-y-2">
        <h5>
          These are the underlying drivers of success across, yet today, they
          are:
        </h5>
        <h6 className="">
          Developed inconsistently <span>|</span> Measured poorly <span>|</span>{" "}
          Treated as separate problems
        </h6>
        <p>
          Yugaya brings them together into a{" "}
          <span className="font-bold">
            single, continuous system of development.
          </span>
        </p>
      </div> */}
    </div>
  );
}

export default FocusSection;
