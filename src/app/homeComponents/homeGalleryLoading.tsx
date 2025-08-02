import Image from "next/image";
import defaultImage from "@/images/M A Y O N A K A   N O   Y U M E.jpg";

const imageDivStyles = "bg-gray-200 w-full h-[15rem] rounded-lg shadow-md";

export default function HomeGalleryLoading() {
  return (
    <section className="flex justify-evenly items-center gap-x-[1rem]">
      <div className={imageDivStyles}>
        <Image
          src={defaultImage}
          width={900}
          height={600}
          alt="Gallery Item 1"
          className="w-full h-[16rem] rounded-lg object-cover object-center"
        />
      </div>
      <div className={imageDivStyles}>
        <Image
          src={defaultImage}
          width={900}
          height={600}
          alt="Gallery Item 1"
          className="w-full h-[16rem] rounded-lg object-cover object-center"
        />
      </div>
      <div className={imageDivStyles}>
        <Image
          src={defaultImage}
          width={900}
          height={600}
          alt="Gallery Item 1"
          className="w-full h-[16rem] rounded-lg object-cover object-center"
        />
      </div>
      ;
    </section>
  );
}
