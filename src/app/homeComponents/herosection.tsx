import Image from "next/image";
import heroImage from "@/images/School-cover-photo.jpg";

export default function HeroSection() {
  return (
    <div className="h-[90vh]">
      <Image
        src={heroImage}
        alt="Hero Image"
        width={900}
        height={300}
        className="h-full w-full object-cover object-top"
      />
    </div>
  );
}
