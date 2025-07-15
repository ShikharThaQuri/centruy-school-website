import Image from "next/image";
import Image1 from "@/images/profile-6.jpg";
import Image2 from "@/images/profile-7.jpg";
import Image3 from "@/images/profile-9.jpg";

export default function AboutUsPage() {
  return (
    <main className="bg-white text-black px-[120px]">
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

      <section className="py-[2rem]">
        <h1 className="text-center text-[#fb5607] text-[2rem] font-bold">
          Our Staffs
        </h1>

        <div className="mt-[8rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 bg-transparant">
          <div className="bg-[#dda15e] h-auto text-center rounded-lg shadow-xl/30">
            <Image
              src={Image3}
              alt="Staff"
              width={800}
              height={600}
              className="w-[10rem] h-[10rem] mt-[-5rem] rounded-[5rem] object-cover object-center mx-auto"
            />

            <div className="py-4 px-2">
              <h1 className="text-[1.4rem] font-bold">Sabita Rawal</h1>
              <p className="text-gray-800">Accountain</p>
              <p className="mt-[1rem] text-[1.1rem]">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          <div className="bg-[#dda15e] h-auto text-center rounded-lg shadow-xl/30">
            <Image
              src={Image3}
              alt="Staff"
              width={800}
              height={600}
              className="w-[10rem] h-[10rem] mt-[-5rem] rounded-[5rem] object-cover object-center mx-auto"
            />

            <div className="py-4 px-2">
              <h1 className="text-[1.4rem] font-bold">Sabita Rawal</h1>
              <p className="text-gray-800">Accountain</p>
              <p className="mt-[1rem] text-[1.1rem]">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="bg-[#dda15e] h-auto text-center rounded-lg shadow-xl/30">
            <Image
              src={Image3}
              alt="Staff"
              width={800}
              height={600}
              className="w-[10rem] h-[10rem] mt-[-5rem] rounded-[5rem] object-cover object-center mx-auto"
            />

            <div className="py-4 px-2">
              <h1 className="text-[1.4rem] font-bold">Sabita Rawal</h1>
              <p className="text-gray-800">Accountain</p>
              <p className="mt-[1rem] text-[1.1rem]">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="bg-[#dda15e] h-auto text-center rounded-lg shadow-xl/30">
            <Image
              src={Image3}
              alt="Staff"
              width={800}
              height={600}
              className="w-[10rem] h-[10rem] mt-[-5rem] rounded-[5rem] object-cover object-center mx-auto"
            />

            <div className="py-4 px-2">
              <h1 className="text-[1.4rem] font-bold">Sabita Rawal</h1>
              <p className="text-gray-800">Accountain</p>
              <p className="mt-[1rem] text-[1.1rem]">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-[2rem]">
          <button className="px-[1rem] py-[0.8rem] bg-[#48cae4]">
            Show More
          </button>
        </div>
      </section>
    </main>
  );
}
