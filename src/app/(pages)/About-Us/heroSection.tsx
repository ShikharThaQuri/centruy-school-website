import Image from "next/image";
import Image1 from "@/images/download.jpeg";

export default function Herosection() {
  return (
    <>
      <section className="flex md:flex-row flex-col gap-[1rem] md:gap-[4rem] justify-between items-center py-15">
        <Image
          src={Image1}
          alt="About Us"
          width={800}
          height={600}
          className="max-w-[15rem] md:max-w-[25rem] max-h-[15rem] md:max-h-[25rem] object-cover object-center"
        />

        <div className="max-w-[40rem] text-center md:text-left">
          <h1 className="text-lg md:text-3xl font-bold text-[#c1121f]">
            Lokendra Chand ThaQuri
          </h1>
          <p className="text-[#c1121f] ">Founder</p>
          <p className="mt-4 text-[1rem] md:text-[1.2rem]">
            Welcome to our school! We are dedicated to providing a nurturing and
            inclusive environment for all students. Our mission is to foster
            academic excellence, personal growth, and a love for learning.
          </p>
        </div>
      </section>

      <section className="flex md:flex-row flex-col-reverse gap-[1.5rem] md:gap-[4rem] justify-between items-center  py-10">
        <div className="max-w-[40rem] text-center md:text-left">
          <h1 className="text-lg md:text-3xl font-bold text-[#c1121f]">
            Aayush Chaudhary
          </h1>
          <p className="text-[#c1121f] ">Principle</p>
          <p className="mt-4 text-[1rem] md:text-[1.2rem]">
            Welcome to our school! We are dedicated to providing a nurturing and
            inclusive environment for all students. Our mission is to foster
            academic excellence, personal growth, and a love for learning.
          </p>
        </div>
        <Image
          src={Image1}
          alt="About Us"
          width={800}
          height={600}
          className="max-w-[15rem] md:max-w-[25rem] max-h-[15rem] md:max-h-[25rem]  object-cover object-center"
        />
      </section>
    </>
  );
}
