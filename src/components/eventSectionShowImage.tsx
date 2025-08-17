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
      } fixed top-0 bottom-0 left-0 right-0 bg-black fixed justify-center items-center text-white z-90 relatives`}
    >
      <Image
        src={imageUrl || items.Images[0].image_url}
        alt="Image"
        width={1000}
        height={500}
        className="w-full h-[auto] object-cover object-center"
      />

      <div className="absolute left-[1rem] right-[1rem] bottom-[1rem] z-20 flex items-center border p-[0.5rem] backdrop-blur-sm bg-white/30">
        {items.Images.map((img, i) => (
          <Image
            key={i}
            src={img.image_url}
            onClick={() => setImageUrl(img.image_url)}
            alt="Image"
            width={400}
            height={200}
            className="w-[10rem] md:w-[15rem] lg:[20rem] h-[5rem] lg:h-[8rem] object-cover object-center"
          />
        ))}
      </div>
    </section>
  );
}
