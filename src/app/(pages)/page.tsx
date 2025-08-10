import Link from "next/link";
import HeroSection from "./homeComponents/herosection";
import FirstSection from "./homeComponents/firstSection";
import SwiperGallery from "./homeComponents/swiperGallerySection";
import ThirdTestimonialSection from "./homeComponents/thirdTestemonialSection";

export default function Home() {
  return (
    <main className="bg-[white] text-black ">
      <HeroSection />
      <FirstSection />

      <section className="py-[2rem] ">
        <h1 className="text-3xl font-bold text-center mb-6 text-[#fb5607]">
          GALLERY
        </h1>
        <div className="px-[20px] py-[2rem] bg-[#e9edc9] rounded-lg shadow-md">
          <SwiperGallery />
        </div>
        <div className="text-center my-[3rem]">
          <Link
            className="px-[1rem] py-[0.8rem] bg-[#48cae4]"
            href="/School-Gallery"
          >
            View More
          </Link>
        </div>
      </section>

      <ThirdTestimonialSection />
    </main>
  );
}
