"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

function ProductsSection() {
  const products = [
    {
      id: 1,
      badge: "Children (6–14)",
      title: "Spell Wizards",
      feature:
        "A structured, engaging platform focused on building foundations:",
      featureList: [
        "Spelling, phonics, vocabulary, and grammar",
        "Cognitive skill development through gameplay",
        "Building clarity in thinking and expression",
      ],
      bg: "/assets/spell-wizz.svg",
      cardDescription:
        "Spell Wizards strengthens the foundations of learning health, enabling children to think and communicate effectively from an early age.",
      hoverGradient: "linear-gradient(131.13deg, #6A32BC 0%, #9B61FF 98.79%)",
      hoverColor: null,
      hoverTextColor: "white",
      buttonHoverTextColor: "#7C3AED",
      badgeHover:
        "group-hover:bg-white/20 group-hover:text-white group-hover:border group-hover:border-white",
    },
    {
      id: 2,
      badge: "Adults and Professionals",
      title: "Shankh.ai",
      feature:
        "A simulation-driven platform for learning different facets of business management.",
      bg: "/assets/sankh.svg",
      cardDescription:
        "Shankh transforms how people learn by placing them inside interactive decision environments. It is designed to build decision health — the ability to think clearly and act effectively under real-world complexity.",
      hoverGradient: null,
      hoverColor: "#EDEDED",
      hoverTextColor: "#505050",
      buttonHoverTextColor: "#626262",
      badgeHover:
        "group-hover:bg-white/20 group-hover:text-[#505050] group-hover:border group-hover:border-[#505050]",
    },
  ];

  return (
    <div id="product" className="min-h-screen max-w-7xl  mb-10 mx-auto p-6 flex flex-col items-center justify-center space-y-10">
     <div className="bg-[#0298C71F] text-[#0298C7] text-sm w-fit rounded-full py-2 px-6 font-medium">
        Our Products
      </div>
      <div className="text-center space-y-6">
        <h1 className="text-2xl sm:text-3xl text-[#1D1D1D]">
          Built across the
          <span className="text-[#0298C7]"> human </span>
          development lifecycle
        </h1>
        <p className="text-base text-[#1D1D1DCC]">
          Multiple products, One shared intelligence layer.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {products.map((prod) => (
          <div
            key={prod.id}
            className="group relative bg-[#74DEFF] xl:h-127 text-[#1D1D1DCC] p-4 rounded-xl overflow-hidden flex flex-col transition-all duration-300"
            onMouseEnter={(e) => {
              e.currentTarget.style.background =
                prod.hoverGradient ?? prod.hoverColor ?? "#74DEFF";
              e.currentTarget.style.color = prod.hoverTextColor;
              const btn = e.currentTarget.querySelector("button");
              if (btn) {
                btn.style.backgroundColor = "white";
                btn.style.color = prod.buttonHoverTextColor;
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#74DEFF";
              e.currentTarget.style.color = "";
              const btn = e.currentTarget.querySelector("button");
              if (btn) {
                btn.style.backgroundColor = "white";
                btn.style.color = "#0298C7";
              }
            }}
          >
            {/* Background image */}
            <Image
              src={prod.bg}
              alt={prod.title}
              height={0}
              width={0}
              className="w-100 right-0 object-cover absolute"
            />

            {/* Content */}
            <div className="relative z-10 flex flex-col flex-1 gap-3">
              <div
                className={`bg-white text-[#0298C7] w-fit px-4 py-2 text-xs rounded-full transition-all duration-300 ${prod.badgeHover}`}
              >
                {prod.badge}
              </div>
              <h1 className="text-3xl font-bold">{prod.title}</h1>
              <p>{prod.feature}</p>
              {prod.featureList?.map((li, index) => (
                <li key={index} className="ml-10">
                  {li}
                </li>
              ))}
              <p className="text-base bg-[#FFFFFF80] p-4 rounded-xl">
                {prod.cardDescription}
              </p>
              <button
                style={{ backgroundColor: "white", color: "#0298C7" }}
                className="flex items-center justify-center w-full gap-1 p-4 rounded-full mt-auto transition-all duration-300"
              >
                Know More <ArrowUpRight />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsSection;
