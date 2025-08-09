import Image from "next/image";
import photo1 from "@/images/profile-6.jpg";
import photo2 from "@/images/profile-7.jpg";
import photo3 from "@/images/profile-9.jpg";
import Link from "next/link";

const boxStyles =
  "h-auto max-w-[18rem] mt-[-3rem] mb-[3rem] rounded-lg shadow-xl/30 ";

const imageStyles =
  "w-[8rem] h-[8rem] rounded-full mx-auto  object-cover items-center mt-[-4rem]";

export default function ThirdTestimonialSection() {
  return (
    <section>
      <div className="text-center py-[2rem]">
        <h1
          className="font-bold text-[1.5rem] md:text-[2.5rem] after:w-[10rem] after:h-[0.5rem] 
        after:bg-[#fb8500] after:block after:mx-[auto] my-[2rem] after:mt-[1rem]
        before:w-[10rem] before:h-[0.5rem] 
        before:bg-[#ffb703] before:block before:mx-[auto] before:mb-[1rem]"
        >
          WHAT CENTURY SAY
        </h1>
        <p className="text-[0.8rem] md:text-[1rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus
          est tempus, lobortis sapien id, lobortis metus. Nam et tempus est.
          Donec eleifend sapien quis magna commodo dictum. Curabitur at blandit
          erat.
        </p>
      </div>

      <div className="mt-[8rem] flex flex-wrap md:flex-nowrap  items:center  justify-center md:justify-between lg:justify-evenly gap-y-[6.5rem] md:gap-[1rem] text-center">
        <div className={`${boxStyles} bg-[#e9c46a]`}>
          <Image src={photo1} alt="img" className={imageStyles} />
          <h1 className="font-bold mt-[1rem]  text-[#c1121f]">
            Lokendra Chand ThaQuri
          </h1>
          <p className="text-[#7f5539]">Founder</p>

          <p className="mx-[2rem] my-[1rem] text-[0.8rem] md:text-[1rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            faucibus est tempus, lobortis sapien id, lobortis metus. Nam et
            tempus est.
          </p>
        </div>

        <div className={`${boxStyles} bg-[#e9c46a]`}>
          <Image src={photo2} alt="img" className={imageStyles} />
          <h1 className="font-bold mt-[1rem]  text-[#c1121f]">
            Aayush Chaudhary
          </h1>
          <p className="text-[#7f5539]">Principal</p>

          <p className="mx-[2rem] my-[1rem] text-[0.8rem] md:text-[1rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            faucibus est tempus, lobortis sapien id, lobortis metus. Nam et
            tempus est.
          </p>
        </div>

        <div className={`${boxStyles} bg-[#e9c46a]`}>
          <Image src={photo3} alt="img" className={imageStyles} />
          <h1 className="font-bold mt-[1rem] text-[#c1121f]">Ratna Bohara</h1>
          <p className="text-[#7f5539]">Vice-Principal</p>

          <p className="mx-[2rem] my-[1rem] text-[0.8rem] md:text-[1rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            faucibus est tempus, lobortis sapien id, lobortis metus. Nam et
            tempus est.
          </p>
        </div>
      </div>

      <div className="text-center py-[3rem]">
        <Link
          className="px-[1rem] py-[0.8rem] bg-[#48cae4]"
          href="/About-Us#staffs"
        >
          View All Staffs
        </Link>
      </div>
    </section>
  );
}
