"use client";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";

export default function FooterSocialLinks() {
  return (
    <div className="flex justify-evenly">
      <Link href={"#"}>
        <FacebookIcon className="text-[#0077b6] cursor-pointer" />
      </Link>
      <Link href={"#"}>
        <InstagramIcon className="text-[#f72585] cursor-pointer" />
      </Link>
      <Link href={"#"}>
        <LinkedInIcon className="text-[#0077b6] cursor-pointer" />
      </Link>
    </div>
  );
}
