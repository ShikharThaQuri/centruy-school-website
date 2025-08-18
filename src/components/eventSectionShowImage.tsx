"use client";

import { eventType } from "@/models/Gallery";
import Image from "next/image";
import React, { useState } from "react";

export default function EventSectionShowImage({
  items,
  popUp,
}: {
  items: eventType;
  popUp: boolean;
}) {
  const [imageUrl, setImageUrl] = useState<string>("");

  return (
    <section
      className={`${
        popUp ? "" : "hidden"
      } fixed top-0 bottom-0 left-0 right-0 bg-black  text-white z-110 relatives`}
    >
      {/* mobile view design!!! */}
      <div className="md:hidden flex items-center snap-x snap-mandatory overflow-x-scroll w-full h-full">
        {items.Images.map((img, i) => (
          <Image
            key={i}
            src={img.image_url}
            alt="Image"
            width={500}
            height={200}
            className={`w-full h-auto snap-start snap-always object-cover object-center`}
          />
        ))}
      </div>

      {/* other then mobile view design View!! */}
      <div className="hidden md:flex justify-center items-center">
        <Image
          src={imageUrl || items.Images[0].image_url}
          alt="Image"
          width={1000}
          height={500}
          className="w-full h-[auto] object-cover object-center"
        />

        <div
          className="absolute left-[1rem] right-[1rem] bottom-[1rem] z-20 
      flex items-center border p-[0.5rem] backdrop-blur-sm bg-white/30 overflow-x-scroll"
        >
          {items.Images.map((img, i) => (
            <Image
              key={i}
              src={img.image_url}
              onClick={() => setImageUrl(img.image_url)}
              alt="Image"
              width={400}
              height={200}
              className={`w-[10rem] md:w-[15rem] lg:[20rem] h-[5rem] lg:h-[8rem] object-cover object-center`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
