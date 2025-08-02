"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-[#faedcd] pt-8 pb-4 mx-[-4rem] md:mx-[-5rem] lg:mx-[-7.5rem]">
      <div className="text-center px-[3rem] text-white">
        <h1 className="text-[1.5rem] 2xl:text-[1.7rem] font-bold text-[#0096C7] ">
          CENTURY EDUCATION ACADEMY SCHOOL
        </h1>

        <h3 className="text-[1rem] 2xl:text-[1.5rem] font-bold text-[#07617E]">
          Kohalpur 3, Banke
        </h3>
      </div>

      <div className="2xl:text-[1.2rem] text-[1rem] flex items-center justify-between pt-[1rem] px-[7.5rem] text-black font-bold md:flex hidden">
        <h1>LOGO</h1>
        <ul className="flex gap-[2rem]">
          <li>
            <Link
              href="/"
              className={`${pathname === "/" ? "text-[#c1121f]" : ""}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/About-Us"
              className={`${pathname === "/About-Us" ? "text-[#c1121f]" : ""}`}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/School-Gallery"
              className={`${
                pathname === "/School-Gallery" ? "text-[#c1121f]" : ""
              }`}
            >
              School Gallery
            </Link>
          </li>
          <li>
            <Link
              href="/Notice"
              className={`${pathname === "/Notice" ? "text-[#c1121f]" : ""}`}
            >
              Notice
            </Link>
          </li>
          <li>
            <Link
              href="/Feedback"
              className={`${pathname === "/Feedback" ? "text-[#c1121f]" : ""}`}
            >
              Feedback
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
