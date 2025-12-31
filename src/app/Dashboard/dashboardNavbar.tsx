"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

export default function DashboardNavbar() {
  const pathname = usePathname();

  const [navIcon, isNavIcon] = useState<boolean>(false);

  const sideDesign =
    "pr-[2rem] pl-[1rem] py-[0.7rem] my-[0.5rem] text-[1.3rem] font-bold rounded-l-[2rem]";

  const sideDesignMobile = "text-[1.3rem] font-bold";

  return (
    <>
      {/* --------- Hamburger Icon ---------- */}
      <div className="block md:hidden fixed top-[4.5rem] right-[1rem] z-[200]">
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

      <div className="pl-[2rem] pt-[5rem] fixed top-0 bottom-0 left-0 bg-[#D9D9D9] z-50 hidden md:block">
        <Link href="/Dashboard/Home">
          <h1
            className={`${
              pathname === "/Dashboard/Home" ? "bg-[#BC6C25]" : "bg-[#DDA15E]"
            } ${sideDesign}`}
          >
            Dashboard Home
          </h1>
        </Link>

        <Link href="/Dashboard/Add-Notice">
          <h1
            className={`${
              pathname === "/Dashboard/Add-Notice"
                ? "bg-[#BC6C25]"
                : "bg-[#DDA15E]"
            } ${sideDesign}`}
          >
            Add Notice
          </h1>
        </Link>

        <Link href="/Dashboard/Add-Teacher">
          <h1
            className={`${
              pathname === "/Dashboard/Add-Teacher"
                ? "bg-[#BC6C25]"
                : "bg-[#DDA15E]"
            } ${sideDesign}`}
          >
            Add Teacher
          </h1>
        </Link>

        <Link href="/Dashboard/Add-Gallery">
          <h1
            className={`${
              pathname === "/Dashboard/Add-Gallery"
                ? "bg-[#BC6C25]"
                : "bg-[#DDA15E]"
            } ${sideDesign}`}
          >
            Add Gallery
          </h1>
        </Link>

        <Link href="/Dashboard/Add-Blog">
          <h1
            className={`${
              pathname === "/Dashboard/Add-Blog"
                ? "bg-[#BC6C25]"
                : "bg-[#DDA15E]"
            } ${sideDesign}`}
          >
            Add Blog
          </h1>
        </Link>
      </div>

      <div
        className={`block md:hidden fixed top-0 left-0 right-0 z-[100] bg-[#252422] flex flex-col items-center justify-center gap-[1rem] font-bold ${
          navIcon ? "h-full" : "h-0"
        }  transtion-all duration-800 text-white text-[1.3rem] overflow-hidden`}
      >
        <h1
          className={`${
            pathname === "/Dashboard/Home" ? "text-[red]" : "text-white"
          } ${sideDesignMobile}`}
          onClick={() => isNavIcon(false)}
        >
          <Link href="/Dashboard/Home">Dashboard Home</Link>
        </h1>

        <h1
          className={`${
            pathname === "/Dashboard/Add-Notice" ? "text-[red]" : "text-white"
          } ${sideDesignMobile}`}
          onClick={() => isNavIcon(false)}
        >
          <Link href="/Dashboard/Add-Notice">Add Notice</Link>
        </h1>

        <h1
          className={`${
            pathname === "/Dashboard/Add-Teacher" ? "text-[red]" : "text-white"
          } ${sideDesignMobile}`}
          onClick={() => isNavIcon(false)}
        >
          <Link href="/Dashboard/Add-Teacher">Add Teacher</Link>
        </h1>

        <h1
          className={`${
            pathname === "/Dashboard/Add-Gallery" ? "text-[red]" : "text-white"
          } ${sideDesignMobile}`}
          onClick={() => isNavIcon(false)}
        >
          <Link href="/Dashboard/Add-Gallery">Add Gallery</Link>
        </h1>
      </div>
    </>
  );
}
