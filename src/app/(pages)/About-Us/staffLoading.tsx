import defaultImage from "@/images/M A Y O N A K A   N O   Y U M E.jpg";
import Image from "next/image";

const animateSpin =
  "animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full";

export default function StaffLoading() {
  return (
    <div className="bg-[#bb9457] h-auto text-center rounded-lg shadow-xl/20">
      <Image
        src={defaultImage}
        alt="Staff"
        width={800}
        height={600}
        className="w-[10rem] h-[10rem] mt-[-5rem] rounded-[5rem] object-cover object-center mx-auto"
      />

      <div className="py-4 px-2">
        <h1 className="text-[1.1rem] font-bold text-[#9d0208] flex items-center gap-[1rem]">
          <svg className={animateSpin} viewBox="0 0 24 24"></svg>
          Loading
        </h1>
        <p className="text-gray-800 flex items-center gap-[1rem]">
          <svg className={animateSpin} viewBox="0 0 24 24"></svg>
          Loading
        </p>
        <p className="mt-[1rem] text-[1.1rem] flex items-center gap-[1rem]">
          <svg className={animateSpin} viewBox="0 0 24 24"></svg>
          Loading
        </p>
      </div>
    </div>
  );
}
