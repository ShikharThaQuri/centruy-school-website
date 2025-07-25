import Image from "next/image";
import Image1 from "@/images/profile-6.jpg";
import Image2 from "@/images/profile-7.jpg";

export default function Herosection() {
  return (
    <>
      <section className="flex justify-between items-center py-15">
        <Image
          src={Image1}
          alt="About Us"
          width={800}
          height={600}
          className="max-w-[25rem] max-h-[25rem] object-cover object-center"
        />

        <div className="max-w-[40rem]">
          <h1 className="text-3xl font-bold text-[#c1121f]">
            Lokendra Chand ThaQuri
          </h1>
          <p className="text-gray-700">Founder</p>
          <p className="mt-4 text-[1.2rem]">
            Welcome to our school! We are dedicated to providing a nurturing and
            inclusive environment for all students. Our mission is to foster
            academic excellence, personal growth, and a love for learning.
          </p>
        </div>
      </section>

      <section className="flex justify-between items-center py-10">
        <div className="max-w-[40rem]">
          <h1 className="text-3xl font-bold text-[#c1121f]">
            Aayush Chaudhary
          </h1>
          <p className="text-gray-700 ">Principle</p>
          <p className="mt-4 text-[1.2rem]">
            Welcome to our school! We are dedicated to providing a nurturing and
            inclusive environment for all students. Our mission is to foster
            academic excellence, personal growth, and a love for learning.
          </p>
        </div>
        <Image
          src={Image2}
          alt="About Us"
          width={800}
          height={600}
          className="max-w-[25rem] max-h-[25rem] object-cover object-center"
        />
      </section>
    </>
  );
}
