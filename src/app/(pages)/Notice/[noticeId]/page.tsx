import { getSingleNotice } from "@/services/admin/notice";
import Image from "next/image";
import React from "react";

import image1 from "@/images/open book wallpaper (photo creds_ me).jpeg";

export default async function SingleNoticePage({
  params,
}: {
  params: Promise<{ noticeId: string }>;
}) {
  const { noticeId } = await params;

  const res = await getSingleNotice(noticeId);

  return (
    <main className="min-h-screen my-[1rem]">
      <div className="flex justify-center items-center relative mx-[-4rem] md:mx-[-7.5rem] mt-[-1rem] h-[25vh] md:h-[30vh]">
        <h1 className="font-bold text-[2rem] text-[#9a031e] text-center z-10">
          Notice
        </h1>

        <div className="absolute top-0 bottom-0 left-0 right-0 h-full w-full ">
          <Image
            src={image1}
            alt="Notice Image"
            width={900}
            height={500}
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>

      <div className="my-[2rem]">
        <h2 className="text-[1rem] md:text-[1.1rem] text-[#f8961e]">
          {res.data?.sliceDate}
        </h2>
        <h1 className="text-[1.2rem] md:text-[1.4rem] font-bold text-[#] mt-[0.1rem] md:mt-[0.5rem] mb-[0.8rem] md:mb-[1rem]">
          {res.data?.noticeHeading}
        </h1>
        <p className="ml-[0.5rem] text-[0.8rem] md:text-[1rem]">
          {res.data?.noticeDis}
        </p>
      </div>
    </main>
  );
}
