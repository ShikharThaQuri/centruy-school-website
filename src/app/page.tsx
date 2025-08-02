import Link from "next/link";
import FirstSection from "./homeComponents/firstSection";
import HeroSection from "./homeComponents/herosection";
import ThirdTestimonialSection from "./homeComponents/thirdTestemonialSection";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Suspense } from "react";
import SwiperGallery from "./homeComponents/swiperGallerySection";
import HomeGalleryLoading from "./homeComponents/homeGalleryLoading";

export default function Home() {
  return (
    <div className="bg-[white] text-black px-[4rem] md:px-[5rem] xl:px-[7.5rem]">
      <Navbar />

      <HeroSection />
      <FirstSection />

      <section className="py-[2rem] ">
        <h1 className="text-3xl font-bold text-center mb-6 text-[#fb5607]">
          Gallery
        </h1>
        <div className="px-[20px] py-[2rem] bg-[#e9edc9] rounded-lg shadow-md">
          <Suspense fallback={<HomeGalleryLoading />}>
            <SwiperGallery />
          </Suspense>
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

      <Footer />
    </div>
  );
}
