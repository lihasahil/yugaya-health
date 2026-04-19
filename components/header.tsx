"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "#focus", label: "Focus" },
  { href: "#approach", label: "Approach" },
  { href: "#platform", label: "Platform" },
  { href: "#product", label: "Products" },
  { href: "#support", label: "Support" },
  { href: "#philosophy", label: "Philosophy" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed z-999999 top-0 left-0 w-full bg-[#FFFFFF1A] backdrop-blur-sm">
      {/* Main bar */}
      <div className="flex justify-between items-center p-4 px-6">
        {/* Logo */}
        <div className="shrink-0">
          <Image
            src="/assets/title-logo.svg"
            alt="Yugaya Health"
            width={0}
            height={0}
            className="w-auto h-9"
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 bg-white shadow-[0px_4px_4px_0px_#00000014] text-base rounded-full py-4 px-8 text-[#1D1D1D]">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="hover:text-[#0298C7] transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* CTA */}
          <button
            onClick={() => {
              document
                .getElementById("contactus")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="hidden md:flex bg-[#0298C7] cursor-pointer text-white py-4 px-8 rounded-full gap-2 items-center text-base"
          >
            Get in Touch <ArrowUpRight size={16} />
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden p-2 rounded-full bg-white shadow-sm text-[#1D1D1D]"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4 text-[#1D1D1D] text-base shadow-md">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="py-1 hover:text-[#0298C7] transition-colors"
            >
              {label}
            </Link>
          ))}
          <button
            onClick={() => {
              document
                .getElementById("contactus")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="mt-2 bg-[#0298C7] text-white py-3 px-6 rounded-full flex items-center justify-center gap-2 text-base"
          >
            Get in Touch <ArrowUpRight size={16} />
          </button>
        </div>
      )}
    </nav>
  );
}

export default Header;
