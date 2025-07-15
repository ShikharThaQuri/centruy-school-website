import Image from "next/image";
import photo1 from "@/images/cover-photo.jpg";
import photo2 from "@/images/photo2.jpeg";
import photo3 from "@/images/School-cover-photo.jpg";

const boxStyles =
  "h-[24rem] cursor-pointer w-[18rem] mt-[-3rem] mb-[3rem] rounded-lg shadow-xl/30 hover:h-[24rem] hover:mt-[-4rem] transition-all duration-200 ";

export default function FirstSection() {
  return (
    <section className="px-[2rem] flex justify-evenly gap-[1rem]">
      <div className={`${boxStyles} bg-[#c1121f] text-center`}>
        <Image
          src={photo1}
          alt="img"
          className="w-full h-[50%]  object-center items-center"
        />

        <div className="mx-[0.5rem] my-[1rem]">
          <h1 className="font-bold text-[1.4rem] text-white ">+400 Students</h1>
          <p className="mt-[1rem] text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            faucibus est tempus, lobortis sapien id, lobortis metus. Nam et
            tempus est.
          </p>
        </div>
      </div>

      <div className={`${boxStyles} bg-[#0077b6] text-center`}>
        <Image
          src={photo2}
          alt="img"
          className="w-full h-[50%]  object-center items-center"
        />
        <div className="mx-[0.5rem] my-[1rem]">
          <h1 className="font-bold text-[1.4rem] text-white ">
            Quality Education
          </h1>
          <p className="mt-[1rem] text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            faucibus est tempus, lobortis sapien id, lobortis metus. Nam et
            tempus est.
          </p>
        </div>
      </div>

      <div className={`${boxStyles} bg-[#fb8500] text-center`}>
        <Image
          src={photo3}
          alt="img"
          className="w-full h-[50%]  object-center items-center"
        />
        <div className="mx-[0.5rem] my-[1rem]">
          <h1 className="font-bold text-[1.4rem] text-white ">
            Calm Enviroment
          </h1>
          <p className="mt-[1rem] text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            faucibus est tempus, lobortis sapien id, lobortis metus. Nam et
            tempus est.
          </p>
        </div>
      </div>
    </section>
  );
}
