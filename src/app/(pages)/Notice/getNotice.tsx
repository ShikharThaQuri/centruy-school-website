import React from "react";
import { NoticeType } from "@/models/Notice";
import { getNotice } from "@/services/admin/notice";

export default async function GetNotice() {
  const result = await getNotice();

  if (result?.success === false) {
    return (
      <div className="min-h-[50vh] flex justify-center items-center">
        <h1 className="text-[green] text-[2rem] font-bold">{result.msg}</h1>
      </div>
    );
  }

  const currentDate = new Date();
  currentDate.setHours(currentDate.getHours() - 24);

  return (
    <>
      {result?.data?.map((items: NoticeType, i: number) => (
        <div key={i}>
          {items.pin ? (
            <div key={i} className={`flex flex-col `}>
              <div className="p-4 bg-[#bb9457] rounded-lg shadow-md">
                <h1 className="lg:text-[1.2rem] text-[0.8rem] ">
                  {items.noticeHeading}
                </h1>

                <div className="flex items-center justify-between mt-1">
                  <div className="flex justify-end gap-5">
                    <p className="text-[#d00000] xl:text-[1.2rem] lg:text-[1.1rem] text-[0.6rem]">
                      {new Date(`${items.createdAt}`) > currentDate
                        ? "New"
                        : ""}
                    </p>
                  </div>

                  <h2 className="text-right text-white xl:text-[1.2rem] lg:text-[1.1rem] text-[0.6rem]">
                    {items.sliceDate}
                  </h2>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      ))}

      <div className="mt-[3rem]">
        {result?.data?.map((items: NoticeType, i: number) => (
          <div key={i}>
            {items.pin ? (
              ""
            ) : (
              <div key={i} className={`flex flex-col `}>
                <div className="p-4 bg-[#bb9457] rounded-lg shadow-md mb-[1rem]">
                  <h1 className="lg:text-[1.2rem] text-[0.8rem] ">
                    {items.noticeHeading}
                  </h1>

                  <div className="flex items-center justify-between mt-1">
                    <div className="flex justify-end gap-5">
                      <p className="text-[#d00000] xl:text-[1.2rem] lg:text-[1.1rem] text-[0.6rem]">
                        {currentDate < new Date(`${items.createdAt}`)
                          ? "New"
                          : ""}
                      </p>
                    </div>

                    <h2 className="text-right text-white lg:text-[1.1rem] xl:text-[1.2rem]  text-[0.6rem]">
                      {items.sliceDate}
                    </h2>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
