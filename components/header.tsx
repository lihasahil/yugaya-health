import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <nav className="fixed z-999999 flex justify-around items-center p-4 top-0 left-0 w-full bg-[#FFFFFF1A]">
      <div>
        <Image
          src="/assets/title-logo.svg"
          alt="Yugaya Health"
          width={0}
          height={0}
          className="w-full"
        />
      </div>
      <div className="flex gap-8 bg-[#FFFFFF] shadow-[0px_4px_4px_0px_#00000014] text-sm rounded-full py-4 px-8 text-[#1D1D1D]">
        <Link href="#focus">Focus</Link>
        <Link href="#focus">Approach</Link>
        <Link href="#focus">Platform</Link>
        <Link href="#focus">Products</Link>
        <Link href="#focus">Support</Link>
        <Link href="#focus">Philosophy</Link>
      </div>
      <div>
        <button className="bg-[#0298C7] flex py-4 px-8 rounded-full gap-4">
          Get in Touch <ArrowUpRight />
        </button>
      </div>
    </nav>
  );
}

export default Header;
