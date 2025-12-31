"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

export default function Navbar() {
  const pathname = usePathname();

  const [navIcon, isNavIcon] = useState<boolean>(false);

  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <main className="mx-[-4rem] md:mx-[-7.5rem]">
      <nav className={`bg-[#0096C7] pt-8 pb-4 `}>
        {/* --------- Hamburger Icon ---------- */}
        <div className="block md:hidden fixed top-[4.5rem] right-[1rem] z-[105]">
          {navIcon ? (
            <div className="px-[0.8rem] py-[0.8rem] rounded-full backdrop-blur-md bg-white/30">
              <CloseIcon
                className="text-[2.5rem] text-black"
                onClick={() => isNavIcon(false)}
              />
            </div>
          ) : (
            <div className="px-[0.8rem] py-[0.8rem] rounded-full backdrop-blur-md bg-white/30">
              <MenuIcon
                className="text-[2.5rem] text-black"
                onClick={() => isNavIcon(true)}
              />
            </div>
          )}
        </div>

        {/* ---------- Nav Heading ----------- */}
        <div ref={ref} className="text-center px-[3rem] text-white">
          <h1 className="text-[1rem] md:text-[1.5rem] xl:text-[1.7rem] font-bold text-inherit ">
            CENTURY EDUCATION ACADEMY SCHOOL
          </h1>

          <h3 className="text-[0.8rem] 2xl:text-[1.5rem] font-bold text-[#edf6f9]">
            Kohalpur 3, Banke
          </h3>
        </div>

        {/* --------- navbar links -------------- */}
        <div
          className={`${
            inView ? "" : "md:opacity-0"
          } 2xl:text-[1.2rem] text-[1rem] md:flex items-center justify-between 
                   px-[4rem] pt-[1rem] md:px-[5rem] xl:px-[7.5rem] text-black font-bold hidden duration-150`}
        >
          <h1>LOGO</h1>
          <ul className="flex gap-[2rem]">
            <li>
              <Link
                href="/"
                className={`${pathname === "/" ? "text-[#d00000]" : ""}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/School-Gallery"
                className={`${
                  pathname === "/School-Gallery" ? "text-[#d00000]" : ""
                }`}
              >
                School Gallery
              </Link>
            </li>
            <li>
              <Link
                href="/Blog"
                className={`${pathname === "/Blog" ? "text-[#d00000]" : ""}`}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/Notice"
                className={`${pathname === "/Notice" ? "text-[#d00000]" : ""}`}
              >
                Notice
              </Link>
            </li>
            <li>
              <Link
                href="/About-Us"
                className={`${
                  pathname === "/About-Us" ? "text-[#d00000]" : ""
                }`}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/Feedback"
                className={`${
                  pathname === "/Feedback" ? "text-[#d00000]" : ""
                }`}
              >
                Feedback
              </Link>
            </li>
          </ul>
        </div>

        {/* ---------- mobile version ----------- */}
        <div
          className={`block md:hidden fixed top-0 left-0 right-0 z-[100] bg-[#252422] flex flex-col items-center justify-center gap-[1rem] font-bold ${
            navIcon ? "h-full" : "h-0"
          }  transtion-all duration-600 text-white text-[1.3rem]`}
        >
          <ul className="flex flex-col gap-[1rem] overflow-hidden">
            <li>
              <Link
                href="/"
                className={`${pathname === "/" ? "text-[#c1121f]" : ""}`}
                onClick={() => isNavIcon(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/About-Us"
                className={`${
                  pathname === "/About-Us" ? "text-[#c1121f]" : ""
                }`}
                onClick={() => isNavIcon(false)}
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
                onClick={() => isNavIcon(false)}
              >
                School Gallery
              </Link>
            </li>
            <li>
              <Link
                href="/Notice"
                className={`${pathname === "/Notice" ? "text-[#c1121f]" : ""}`}
                onClick={() => isNavIcon(false)}
              >
                Notice
              </Link>
            </li>
            <li>
              <Link
                href="/Feedback"
                className={`${
                  pathname === "/Feedback" ? "text-[#c1121f]" : ""
                }`}
                onClick={() => isNavIcon(false)}
              >
                Feedback
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* --------- glass effect navbar links -------------- */}
      <div
        className={`fixed top-[0.5rem] w-full 2xl:text-[1.2rem] text-[1rem]  text-black font-bold hidden md:inline z-100`}
      >
        <div
          className={`${
            inView ? "md:opacity-0 md:hidden" : ""
          }  md:flex items-center justify-between 
          py-[1.5rem] px-[3rem] mx-[4rem] backdrop-blur-sm bg-white/30 shadow-md rounded duration-150`}
        >
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
                className={`${
                  pathname === "/About-Us" ? "text-[#c1121f]" : ""
                }`}
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
                className={`${
                  pathname === "/Feedback" ? "text-[#c1121f]" : ""
                }`}
              >
                Feedback
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
