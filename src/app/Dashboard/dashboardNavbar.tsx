"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardNavbar() {
  const pathname = usePathname();

  const sideDesign =
    "pr-[2rem] pl-[1rem] py-[0.7rem] my-[0.5rem] text-[1.3rem] font-bold rounded-l-[2rem]";

  return (
    <div className="pl-[2rem] pt-[5rem] fixed top-0 bottom-0 left-0 bg-[#D9D9D9] z-50 hidden md:block">
      <h1
        className={`${
          pathname === "/Dashboard/Home" ? "bg-[#BC6C25]" : "bg-[#DDA15E]"
        } ${sideDesign}`}
      >
        <Link href="/Dashboard/Home">Dashboard Home</Link>
      </h1>

      <h1
        className={`${
          pathname === "/Dashboard/Add-Notice" ? "bg-[#BC6C25]" : "bg-[#DDA15E]"
        } ${sideDesign}`}
      >
        <Link href="/Dashboard/Add-Notice">Add Notice</Link>
      </h1>

      <h1
        className={`${
          pathname === "/Dashboard/Add-Teacher"
            ? "bg-[#BC6C25]"
            : "bg-[#DDA15E]"
        } ${sideDesign}`}
      >
        <Link href="/Dashboard/Add-Teacher">Add Teacher</Link>
      </h1>

      <h1
        className={`${
          pathname === "/Dashboard/Add-Gallery"
            ? "bg-[#BC6C25]"
            : "bg-[#DDA15E]"
        } ${sideDesign}`}
      >
        <Link href="/Dashboard/Add-Gallery">Add Gallery</Link>
      </h1>
    </div>
  );
}
