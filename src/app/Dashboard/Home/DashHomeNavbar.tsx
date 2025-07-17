import Link from "next/link";

const linkBoxStyle =
  "px-[1rem] py-[0.6rem] bg-[#a7c957] text-[1.2rem] font-bold";

export default function DashHomeNavbar() {
  return (
    <div className="absolute top-0 left-[15.7rem] right-0 h-[5rem] bg-[#f2e9e4] flex justify-center items-center">
      <ul className=" flex justify-center items-center gap-10">
        <li>
          <Link href={"/Dashboard/Home/Teachers"} className={linkBoxStyle}>
            Teachers
          </Link>
        </li>
        <li>
          <Link href={"/Dashboard/Home/Notice"} className={linkBoxStyle}>
            Notice
          </Link>
        </li>
      </ul>
    </div>
  );
}
