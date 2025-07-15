"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-[#faedcd] ">
      <div className="text-center pt-4 px-[3rem] text-white">
        <h1 className="text-[23px] tablet:text-[25px] max400:text-[20px] font-bold text-[#0096C7] ">
          CENTURY EDUCATION ACADEMY SCHOOL
        </h1>

        <h3 className="text-[15px] tablet:text-[15px] max400:text-[12px] font-bold text-[#07617E]">
          Kohalpur 3, Banke
        </h3>
      </div>

      <div className="flex items-center justify-between py-4 px-[3rem] text-black font-bold text-[17px]">
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
