import Link from "next/link";
import FirstSection from "./homeComponents/firstSection";
import HeroSection from "./homeComponents/herosection";
import GallerySection from "./homeComponents/secondGallerySection";
import ThirdTestimonialSection from "./homeComponents/thirdTestemonialSection";

export default function Home() {
  return (
    <div className="bg-[white] text-black">
      <HeroSection />
      <FirstSection />

      <section className=" py-[2rem] ">
        <h1 className="text-3xl font-bold text-center mb-6">Gallery</h1>
        <div className="mx-[100px] px-[20px] py-[2rem] bg-[#e9edc9] rounded-lg shadow-md">
          <GallerySection />
        </div>
        <div className="text-center my-[3rem]">
          <Link className="px-[1rem] py-[0.8rem] bg-[#48cae4]" href="/Gallery">
            View More
          </Link>
        </div>
      </section>

      <ThirdTestimonialSection />
    </div>
  );
}
