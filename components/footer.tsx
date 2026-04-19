import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-[#041D25] px-5 pt-15 pb-10 bottom-0 left-0 right-0">
      <div className="flex flex-col md:flex-row gap-10 justify-around items-start">
        <div className="flex flex-col gap-4">
          <Image
            src="/assets/title-logo.svg"
            alt="Logo"
            height={0}
            width={0}
            className="w-50"
          />
          <p className="text-base max-w-[200] mx-auto text-[#FFFFFF99]">
            Powering Cognitive and Decision Health for the next generation.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="mb-2 text-base font-semibold">Navigations</h1>
          <Link href="#platform" className="text-base text-[#FFFFFF99]">
            Platform
          </Link>
          <Link href="#solutions" className="text-base text-[#FFFFFF99]">
            Solutions
          </Link>
          <Link href="#philosophy" className="text-base text-[#FFFFFF99]">
            Philosophy
          </Link>
          <Link href="#contactus" className="text-base text-[#FFFFFF99]">
            Contact Us
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="mb-2 text-base font-semibold">Products</h1>
          <Link href="#product" className="text-base text-[#FFFFFF99]">
            Spell Wizzards
          </Link>
          <Link href="#product" className="text-base text-[#FFFFFF99]">
            Sankh.Ai(soon)
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="mb-2 text-base font-semibold">Socials</h1>
          <Link href="#" className="text-base text-[#FFFFFF99]">
            LinkedIn
          </Link>
          <Link href="#" className="text-base text-[#FFFFFF99]">
            Twitter (X)
          </Link>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border my-4 border-[#FFFFFF33]" />
      <div className="flex flex-col md:flex-row gap-4 justify-between max-w-7xl mx-auto text-[#FFFFFF99] text-base">
        <span>
          © {new Date().getFullYear()} Yugaya Health. All rights reserved.
        </span>
        <div className="flex justify-around gap-4">
          <Link href="#">Twitter</Link>
          <Link href="#">Instagram</Link>
          <Link href="#">Facebook</Link>
          <Link href="#">YouTube</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
