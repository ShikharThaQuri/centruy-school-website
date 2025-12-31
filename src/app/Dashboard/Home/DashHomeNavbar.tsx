"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const linkBoxStyle = "px-[1rem] py-[0.6rem]  text-[1.2rem] font-bold";

export default function DashHomeNavbar() {
  const pathname = usePathname();

  return (
    <div className="fixed top-0 left-0 md:left-[15.8rem] right-0 h-[5rem] bg-[#f2e9e4] flex justify-center items-center">
      <ul className=" flex justify-center items-center gap-5 md:gap-10">
        <li>
          <Link
            href={"/Dashboard/Home/Teachers"}
            className={`${linkBoxStyle} ${
              pathname === "/Dashboard/Home/Teachers"
                ? "bg-[#386641]"
                : "bg-[#a7c957]"
            }`}
          >
            Teachers
          </Link>
        </li>

        <li>
          <Link
            href={"/Dashboard/Home/Notice"}
            className={`${linkBoxStyle} ${
              pathname === "/Dashboard/Home/Notice"
                ? "bg-[#386641]"
                : "bg-[#a7c957]"
            }`}
          >
            Notice
          </Link>
        </li>

        <li>
          <Link
            href={"/Dashboard/Home/Gallery"}
            className={`${linkBoxStyle} ${
              pathname === "/Dashboard/Home/Gallery"
                ? "bg-[#386641]"
                : "bg-[#a7c957]"
            }`}
          >
            Gallery
          </Link>
        </li>

        <li>
          <Link
            href={"/Dashboard/Home/BLOG"}
            className={`${linkBoxStyle} ${
              pathname === "/Dashboard/Home/BLOG"
                ? "bg-[#386641]"
                : "bg-[#a7c957]"
            }`}
          >
            Blog
          </Link>
        </li>
      </ul>
    </div>
  );
}
