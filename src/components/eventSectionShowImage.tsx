import { eventType } from "@/models/Gallery";
import Image from "next/image";
import React from "react";

export default function EventSectionShowImage({
  items,
  popUp,
}: {
  items: eventType;
  popUp: boolean;
}) {
  return (
    <section
      className={`${
        popUp ? "" : "hidden"
      } fixed top-0 bottom-0 left-0 right-0 bg-black text-white`}
    >
      {items.Images.map((img, i) => (
        <Image
          key={i}
          src={img.image_url}
          alt="Image"
          width={400}
          height={200}
          className="w-[10rem] h-[5rem] lg:h-[8rem] object-cover object-center"
        />
      ))}
    </section>
  );
}
