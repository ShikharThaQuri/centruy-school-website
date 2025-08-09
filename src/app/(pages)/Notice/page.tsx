import { NoticeType } from "@/models/Notice";
import { getNotice } from "@/services/admin/notice";
import { Suspense } from "react";
import NoticeLoading from "./noticeLoading";

export default function NoticePage() {
  return (
    <main className="py-[1rem] min-h-screen">
      <h1 className="text-[1.5rem] font-bold text-[#fb5607] mb-[1rem]">
        Notice
      </h1>

      <Suspense fallback={<NoticeLoading />}>
        <NoticeBoxSection />
      </Suspense>
    </main>
  );
}

async function NoticeBoxSection() {
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
                <h1 className="font-bold lg:text-[1.3rem]  text-[1.2rem] ">
                  {items.noticeHeading}
                </h1>
                <p className=" mt-[0.5rem] xl:text-[1.1rem] md:text-[1rem] text-[0.9rem]">
                  {items.noticeDis}
                </p>

                <div className="flex items-center justify-between mt-4">
                  <div className="flex justify-end gap-5">
                    <p className="text-[#d00000] font-bold xl:text-[1.2rem] lg:text-[1.1rem] text-[0.9rem]">
                      {new Date(`${items.createdAt}`) > currentDate
                        ? "New"
                        : ""}
                    </p>
                  </div>

                  <h2 className="text-right text-white font-bold xl:text-[1.2rem] lg:text-[1.1rem] text-[0.9rem]">
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
                  <h1 className="font-bold lg:text-[1.3rem] text-[1.2rem] ">
                    {items.noticeHeading}
                  </h1>
                  <p className="mt-[0.5rem] xl:text-[1.1rem] md:text-[1rem] text-[0.9rem]">
                    {items.noticeDis}
                  </p>

                  <div className="flex items-center justify-between mt-4">
                    <div className="flex justify-end gap-5">
                      <p className="text-[#d00000] font-bold text-[1.2rem]">
                        {currentDate < new Date(`${items.createdAt}`)
                          ? "New"
                          : ""}
                      </p>
                      <p className="text-[#370617] font-bold  xl:text-[1.2rem] lg:text-[1.1rem] text-[0.9rem]">
                        {items.pin ? "Pin" : ""}
                      </p>
                    </div>

                    <h2 className="text-right text-white font-bold lg:text-[1.1rem] xl:text-[1.2rem]  text-[0.9rem]">
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
