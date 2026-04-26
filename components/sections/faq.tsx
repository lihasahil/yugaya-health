"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is Yugaya Health and what does it do?",
    answer:
      "Yugaya Health is a platform focused on powering cognitive and decision health. It combines learning, decision-making, and intelligence capabilities to help individuals, professionals, and organizations develop stronger thinking and reasoning over time.",
  },
  {
    question: "What are the core capabilities of the platform?",
    answer:
      "The platform is built around three pillars: Learning Health, which supports personalized and pedagogically sound learning; Cognitive Health, which tracks and develops capabilities like working memory, focus, and problem-solving; and Decision Health, which improves judgment and decision-making quality through structured tools and feedback.",
  },
  {
    question:
      "How does Yugaya support continuous learning and decision-making?",
    answer:
      "Yugaya treats learning and decision-making as one continuous journey. From foundational learning through adaptive capability-building to high-quality decision support, the platform moves with users at every stage — not as separate tools, but as a unified, evolving system.",
  },
  {
    question: "Who is Yugaya Health designed for?",
    answer:
      "Yugaya serves individuals, mentors and professionals, and organizations. For individuals, it helps build self-knowledge and learning habits. For professionals, it surfaces deep insights to support coaching and mentoring. For organizations, it equips teams with structured approaches to decision-making and knowledge development.",
  },
  {
    question: "What products are available within the Yugaya ecosystem?",
    answer:
      "Yugaya's ecosystem includes Spell Wizards, an engaging tool for foundational language and grammar skills, and Shankh.ai, an intelligence tool for managing complexity and supporting high-stakes decisions. Additional products are developed continuously across the human development lifecycle.",
  },
  {
    question: "What makes Yugaya different from other learning platforms?",
    answer:
      "Unlike traditional learning platforms that address learning, cognition, and decision support as separate concerns, Yugaya builds them together as a unified intelligence layer. Its capabilities are developed iteratively, tested rigorously, and integrated so users experience genuine progression — not isolated, standalone features.",
  },
  {
    question: "How can I get started or get in touch?",
    answer:
      "You can connect with the Yugaya team through the contact form on the website or by entering your email to be notified about upcoming products and partnerships. The team is open to working with individuals, professionals, institutions, and organizations looking to develop thinkers and decision-makers.",
  },
];

function PlusIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <span
      className={`flex items-center justify-center w-7 h-7 rounded-full border shrink-0 transition-colors duration-200 ${
        isOpen
          ? "bg-[#0298C7] border-[#0298C7]"
          : "bg-transparent border-gray-300"
      }`}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"}`}
      >
        <path
          d="M7 2v10M2 7h10"
          stroke={isOpen ? "#ffffff" : "#9ca3af"}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

function FAQAccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`rounded-xl border mb-2.5 overflow-hidden bg-white transition-colors duration-200 ${
        isOpen ? "border-[#0298C7]" : "border-gray-200"
      }`}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex justify-between items-center px-5 py-4 gap-4 bg-transparent text-left cursor-pointer hover:bg-gray-50 transition-colors duration-150"
      >
        <span className="text-[15px] font-medium text-gray-900 leading-snug">
          {item.question}
        </span>
        <PlusIcon isOpen={isOpen} />
      </button>

      <div
        className={`overflow-hidden transition-all duration-350 ease-in-out px-5 ${
          isOpen ? "max-h-100 pb-4" : "max-h-0"
        }`}
      >
        <p className="text-sm text-gray-500 leading-relaxed border-t border-gray-100 pt-3.5 m-0">
          {item.answer}
        </p>
      </div>
    </div>
  );
}

export default function YugayaHealthFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="min-h-screen max-w-7xl mx-auto p-6 flex flex-col items-center justify-center space-y-5">
      {/* Badge */}
      <span className="bg-[#0298C71F] text-[#0298C7] text-sm w-fit rounded-full py-2 px-6 font-medium">
        FAQ
      </span>

      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl text-[#1D1D1D] xl:text-nowrap">
        Questions we often hear
      </h2>

      {/* Subheading */}
      <p className="text-[#1D1D1DCC] text-base">
        Everything you need to know about Yugaya&apos;s approach to cognitive
        and decision health.
      </p>

      {/* Accordion */}
      <div role="list">
        {faqs.map((item, index) => (
          <div key={index} role="listitem">
            <FAQAccordionItem
              item={item}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
