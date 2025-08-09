import Image from "next/image";
import Link from "next/link";

import sports from "@/images/PlayOn _ The Future of School Athletics and Activities.jpeg";
import AcademicActivities from "@/images/What Is Multimedia Technology in Education_ Benefits Uses.jpeg";
import Tour from "@/images/How Much to Tip a Tour Guide _ ExperienceFirst.jpeg";
import Programs from "@/images/Yuvabharathi Public School Annual Day Celebrations 2013.jpeg";

const divStyle = "h-[12rem] rounded relative overflow-hidden drop-shadow-lg";
const imageStyle =
  "brightness-50 w-full h-full object-cover object-center rounded cursor-pointer hover:scale-[1.1] transition-all duration-200 ";
const headingStyle =
  "absolute top-[1rem] left-[1rem] text-white font-bold text-[1.2rem]";

export default function SchoolGalleryPage() {
  return (
    <main className="min-h-screen py-[2rem]">
      <h1 className="text-center font-bold text-[2.5rem] text-[red] mb-[1.5rem]">
        School Gallery
      </h1>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className={divStyle}>
          <Link href={"/School-Gallery/Sports-Events"}>
            <Image
              src={sports}
              alt="sport Image"
              width={600}
              height={300}
              className={imageStyle}
            />
          </Link>
          <h1 className={headingStyle}>Sports Events</h1>
        </div>

        <div className={divStyle}>
          <Link href={"/School-Gallery/Academic-Activities"}>
            <Image
              src={AcademicActivities}
              alt="sport Image"
              width={600}
              height={300}
              className={imageStyle}
            />
          </Link>
          <h1 className={headingStyle}>Academic Activities</h1>
        </div>

        <div className={divStyle}>
          <Link href={"/School-Gallery/Tour"}>
            <Image
              src={Tour}
              alt="sport Image"
              width={600}
              height={300}
              className={imageStyle}
            />
          </Link>
          <h1 className={headingStyle}>Tours</h1>
        </div>

        <div className={divStyle}>
          <Link href={"/School-Gallery/Programs"}>
            <Image
              src={Programs}
              alt="sport Image"
              width={600}
              height={300}
              className={imageStyle}
            />
          </Link>
          <h1 className={headingStyle}>Programs</h1>
        </div>
      </section>
    </main>
  );
}
