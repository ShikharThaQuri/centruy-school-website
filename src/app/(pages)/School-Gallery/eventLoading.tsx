import Image from "next/image";
import defaultImage from "@/images/M A Y O N A K A   N O   Y U M E.jpg";

const animateSpin =
  "animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full";

export default function EventLoading() {
  return (
    <section className="border border-[black] shadow-xl/20 bg-[#fefae0] p-[1rem] mb-[3rem]">
      <div className="flex flex-col lg:flex-row-reverse justify-between gap-[1rem] md:gap-[2rem]">
        <div className="w-full lg:w-[45%]">
          <div className="flex justify-between items-center mb-[0.5rem]">
            <h1 className="font-bold text-[0.9rem] md:text-[1.2rem] text-[#c1121f] flex items-center gap-[1rem]">
              <svg className={animateSpin} viewBox="0 0 24 24"></svg>
              Loading
            </h1>

            <h1 className="font-bold text-[0.7rem] md:text-[1.1rem] text-[#c1121f] flex items-center gap-[1rem]">
              <svg className={animateSpin} viewBox="0 0 24 24"></svg>
              Loading
            </h1>
          </div>
          <p className="text-[0.7rem] md:text-[1rem] text-[#c1121f] px-[1rem] flex items-center gap-[1rem]">
            <svg className={animateSpin} viewBox="0 0 24 24"></svg>
            Loading
          </p>
        </div>

        {/* ----- Image Section ----- */}
        <div className="grid grid-flow-col grid-rows-2 gap-3 justify-start w-full lg:w-[50%] overflow-x-scroll">
          <div className="w-[15.5rem] lg:w-[18rem] 2xl:w-[20rem]">
            <Image
              src={defaultImage}
              alt="Image"
              width={400}
              height={200}
              className="w-full h-[8rem] 2xl:h-[12rem] object-cover object-center"
            />
          </div>
          <div className="w-[15.5rem] lg:w-[18rem] 2xl:w-[20rem]">
            <Image
              src={defaultImage}
              alt="Image"
              width={400}
              height={200}
              className="w-full h-[8rem] 2xl:h-[12rem] object-cover object-center"
            />
          </div>
          <div className="w-[15.5rem] lg:w-[18rem] 2xl:w-[20rem]">
            <Image
              src={defaultImage}
              alt="Image"
              width={400}
              height={200}
              className="w-full h-[8rem] 2xl:h-[12rem] object-cover object-center"
            />
          </div>
          <div className="w-[15.5rem] lg:w-[18rem] 2xl:w-[20rem]">
            <Image
              src={defaultImage}
              alt="Image"
              width={400}
              height={200}
              className="w-full h-[8rem] 2xl:h-[12rem] object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
