import { CircleCheck } from "lucide-react";

function SupportSection() {
  const supports = [
    {
      id: 1,
      title: "For Individuals",
      description:
        "Yugaya gives people visibility into how they think, speak, and perform. Through intuitive feedback and adaptive experiences, individuals can:",
      features: [
        "Improve learning and communication skills",
        "Build emotional awareness and confidence",
        "Track progress over time with data driven insights",
        "Strengthen cognitive and personal growth",
      ],
      card: "Whether in school, at work, or in everyday life, Yugaya helps people take an active role in their development and long-term well-being.",
    },
    {
      id: 2,
      title: "For Institutions and Professionals",
      description:
        "Our platform provides actionable intelligence to educators, enterprises, and health and wellness professionals. By combining voice analytics with cognitive and behavioural insights, Yugaya helps organizations to:",
      features: [
        "Monitor learning, communication, and engagement",
        "Identify areas of difficulty or stress early",
        "Personalize development and diagnostics support",
        "Improve outcomes at scale",
      ],
      card: "This creates a data-driven foundation for learning and future care delivery.",
    },
  ];
  return (
    <div className="min-h-screen max-w-5xl mx-auto flex flex-col items-center justify-center space-y-10">
      <div className="bg-[#0298C71F] text-[#0298C7] text-sm w-fit rounded-full py-2 px-6 font-semibold">
        Support
      </div>
      <div className="text-center space-y-6">
        <h1 className="text-4xl text-[#1D1D1D]">
          How We <span className="text-[#0298C7]">Support </span>You
        </h1>
        <p className="text-sm text-[#1D1D1DCC] text-center max-w-3xl">
          Yugaya enables organizations and individuals to better understand,
          develop, and support human intelligence across learning,
          communication, and well-being.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-10">
        {supports.map((support) => (
          <div
            key={support.id}
            className="border-[3px] flex-1 border-[#009ACA] rounded-xl p-6 space-y-6"
          >
            <h1 className="text-[#051733] text-xl font-bold">{support.title}</h1>
            <div>
              <h3 className="text-[#005772] text-sm">{support.description}</h3>
              <div className="py-4 space-y-2 text-[#051733] text-xs">
                {support.features.map((feat) => (
                  <span key={feat} className="flex gap-3 items-center">
                    <CircleCheck
                      fill="#0472941A"
                      strokeWidth="1"
                      className="text-[#0298C7]"
                    />{" "}
                    {feat}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-[#E9FAFF] font-semibold text-sm text-[#0298C7] rounded-xl p-4">
              {support.card}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SupportSection;
