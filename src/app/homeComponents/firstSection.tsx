import Image from "next/image";
import photo1 from "@/images/cover-photo.jpg";
import photo2 from "@/images/photo2.jpeg";
import photo3 from "@/images/School-cover-photo.jpg";

const boxStyles =
  "h-[18rem] cursor-pointer w-[18rem] mt-[-3rem] mb-[3rem] rounded-lg shadow-xl/30 hover:h-[19rem] hover:mt-[-4rem] transition-all duration-200 ";

export default function FirstSection() {
  return (
    <section className="px-[2rem] flex justify-evenly gap-[1rem]">
      <div className={`${boxStyles} bg-[#c1121f]`}>
        <Image
          src={photo1}
          alt="img"
          className="w-full h-[50%]  object-center items-center"
        />
        first
      </div>
      <div className={`${boxStyles} bg-[#0077b6]`}>
        <Image
          src={photo2}
          alt="img"
          className="w-full h-[50%]  object-center items-center"
        />
        second
      </div>
      <div className={`${boxStyles} bg-[#fb8500]`}>
        <Image
          src={photo3}
          alt="img"
          className="w-full h-[50%]  object-center items-center"
        />
        third
      </div>
    </section>
  );
}
