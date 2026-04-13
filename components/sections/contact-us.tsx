"use client";

import Image from "next/image";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    designation: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contactus" className="bg-[#E0F3F9] w-full px-3 md:px-10 py-12 flex flex-col items-center gap-8">
      {/* Badge */}
      <div className="bg-[rgba(2,152,199,0.12)] rounded-full px-7 py-1.5">
        <span className="text-[#0298C7] font-semibold text-base font-[Poppins]">
          Connect with us
        </span>
      </div>

      {/* Main Row */}
      <div className="flex flex-col lg:flex-row gap-10 w-full max-w-7xl items-start">
        {/* Left Column */}
        <div className="flex flex-col gap-8 flex-1">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/assets/title-logo.svg"
              alt="Logo"
              height={0}
              width={0}
              className="w-50"
            />
          </div>

          {/* Heading */}
          <h2 className="text-[40px] leading-[1.29] font-normal text-black font-[Poppins]">
            Build the Next Generation of{" "}
            <span className="text-[#0298C7]">Thinkers</span> and{" "}
            <span className="text-[#0298C7]">Decision-Makers</span>
          </h2>

          {/* Subtext */}
          <p className="text-[rgba(29,29,29,0.8)] text-base font-[Poppins]">
            We are working with select partners and early adopters to shape the
            future of education.
          </p>

          {/* Interest List */}
          <div>
            <p className="text-sm text-[rgba(29,29,29,0.8)] font-[Poppins] mb-3">
              If you&apos;re interested in:
            </p>
            <ul className="flex flex-col gap-3">
              {[
                "Collaborating",
                "Piloting our platforms",
                "Exploring partnerships",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-[rgba(2,152,199,0.1)] flex items-center justify-center shrink-0">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2 6L5 9L10 3"
                        stroke="#0298C7"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-sm text-[rgba(29,29,29,0.8)] font-[Poppins]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Text */}
          <p className="text-[#0298C7] font-semibold text-xl font-[Poppins]">
            We would love to hear about your ideas.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white border border-[rgba(26,89,109,0.37)] rounded-[22px] flex-1 p-4 md:p-10 w-full lg:w-140 flex flex-col gap-6 shrink-0">
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label className="text-black font-medium text-lg font-[Poppins]">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              className="bg-[#F8FAFF] border border-[rgba(0,54,143,0.5)] rounded-lg px-4 py-2.5 text-base font-[Poppins] text-[rgba(0,54,143,0.7)] placeholder-[rgba(0,54,143,0.45)] outline-none focus:border-[#0298C7] focus:ring-2 focus:ring-[rgba(2,152,199,0.15)] transition"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-black font-medium text-lg font-[Poppins]">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="johndoe@gmail.com"
              value={formData.email}
              onChange={handleChange}
              className="bg-[#F8FAFF] border border-[rgba(0,54,143,0.5)] rounded-lg px-4 py-2.5 text-base font-[Poppins] text-[rgba(0,54,143,0.7)] placeholder-[rgba(0,54,143,0.45)] outline-none focus:border-[#0298C7] focus:ring-2 focus:ring-[rgba(2,152,199,0.15)] transition"
            />
          </div>

          {/* Organization + Designation */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex flex-col gap-2 flex-1">
              <label className="text-black font-medium text-lg font-[Poppins]">
                Organization
              </label>
              <input
                type="text"
                name="organization"
                placeholder="Organization"
                value={formData.organization}
                onChange={handleChange}
                className="bg-[#F8FAFF] border border-[rgba(0,54,143,0.5)] rounded-lg px-4 py-2.5 text-base font-[Poppins] text-[rgba(0,54,143,0.7)] placeholder-[rgba(0,54,143,0.45)] outline-none focus:border-[#0298C7] focus:ring-2 focus:ring-[rgba(2,152,199,0.15)] transition w-full"
              />
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <label className="text-black font-medium text-lg font-[Poppins]">
                Designation
              </label>
              <input
                type="text"
                name="designation"
                placeholder="Director"
                value={formData.designation}
                onChange={handleChange}
                className="bg-[#F8FAFF] border border-[rgba(0,54,143,0.5)] rounded-lg px-4 py-2.5 text-base font-[Poppins] text-[rgba(0,54,143,0.7)] placeholder-[rgba(0,54,143,0.45)] outline-none focus:border-[#0298C7] focus:ring-2 focus:ring-[rgba(2,152,199,0.15)] transition w-full"
              />
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label className="text-black font-medium text-lg font-[Poppins]">
              What would you like to discuss?
            </label>
            <textarea
              name="message"
              placeholder="Tell us about your interest..."
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="bg-[#F8FAFF] border border-[rgba(0,54,143,0.5)] rounded-lg px-4 py-4 text-base font-[Poppins] text-[rgba(0,54,143,0.7)] placeholder-[rgba(0,54,143,0.45)] outline-none focus:border-[#0298C7] focus:ring-2 focus:ring-[rgba(2,152,199,0.15)] transition resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="bg-[#0298C7] hover:bg-[#0280a8] active:scale-[0.98] transition-all rounded-[15px] py-4.5 px-6 flex items-center justify-center gap-3 w-full cursor-pointer"
          >
            <span className="text-white font-semibold text-base font-[Poppins]">
              Send a message
            </span>
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 2L11 13"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22 2L15 22L11 13L2 9L22 2Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
