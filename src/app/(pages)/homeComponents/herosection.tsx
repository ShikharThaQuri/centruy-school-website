import Image from "next/image";
import heroImage from "@/images/School-cover-photo.jpg";

export default function HeroSection() {
  return (
    <div className="h-[50vh] md:h-[70vh] lg:h-[80vh] 2xl:h-[90vh] mx-[-4rem] md:mx-[-7.5rem] ">
      <Image
        src={heroImage}
        alt="Hero Image"
        width={900}
        height={300}
        className="h-full w-full object-cover object-top brightness-[0.7]"
      />
    </div>
  );
}
