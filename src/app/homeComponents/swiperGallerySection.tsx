"use client";

import { eventType } from "@/models/Gallery";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import { getAllEvents } from "@/services/admin/gallery";

const imageDivStyles = "bg-gray-200 h-[15rem] rounded-lg shadow-md";

export default function SwiperGallery() {
  const [data, setData] = useState<eventType[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await getAllEvents();
        if (!result) {
          console.log("wrong");
        }

        setData(result?.data || []);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      breakpoints={{
        800: {
          slidesPerView: 3,
        },
        500: {
          slidesPerView: 2,
        },
      }}
      // navigation={true}
      // pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
        // pauseOnMouseEnter: true,
      }}
      loop={true}
      modules={[Pagination, Navigation, Autoplay]}
    >
      {data.map((items: eventType, i: number) => (
        <SwiperSlide key={i} className={imageDivStyles}>
          <Image
            src={
              items.Images[Math.floor(Math.random() * items.Images.length)]
                ?.image_url
            }
            width={600}
            height={600}
            alt="Gallery Item 1"
            className="w-full h-[16rem] rounded-lg object-cover object-center"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
