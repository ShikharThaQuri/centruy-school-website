import { NoticeType } from "@/models/Notice";
import { getNotice } from "@/services/admin/notice";

export default function NoticePage() {
  return (
    <main className="bg-white min-h-screen text-black px-[120px] py-10">
      <h1 className="text-[1.5rem] font-bold text-[#fb5607] mb-[1rem]">
        Notice
      </h1>
      <NoticeBoxSection />
    </main>
  );
}

export async function NoticeBoxSection() {
  const result = await getNotice();

  return (
    <>
      {result?.data.map((items: NoticeType, i: number) => (
        <div key={i}>
          {items.pin ? (
            <div key={i} className={`flex flex-col `}>
              <div className="p-4 bg-[#bb9457] rounded-lg shadow-md mb-[1rem]">
                <h1 className="font-bold text-[1.3rem] ">
                  {items.noticeHeading}
                </h1>
                <p>{items.noticeDis}</p>

                <div className="flex justify-between items-center mt-4">
                  <div className="flex justify-end gap-5">
                    <p className="text-[#d00000] font-bold text-[1.2rem]">
                      New
                    </p>
                    <p className="text-[#370617] font-bold text-[1.2rem]">
                      {items.pin ? "Pin" : ""}
                    </p>
                  </div>

                  <h2 className="text-right text-white font-bold text-[1.2rem]">
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
        {result?.data.map((items: NoticeType, i: number) => (
          <div key={i}>
            {items.pin ? (
              ""
            ) : (
              <div key={i} className={`flex flex-col `}>
                <div className="p-4 bg-[#bb9457] rounded-lg shadow-md mb-[1rem]">
                  <h1 className="font-bold text-[1.3rem] ">
                    {items.noticeHeading}
                  </h1>
                  <p>{items.noticeDis}</p>

                  <div className="flex justify-between items-center mt-4">
                    <div className="flex justify-end gap-5">
                      <p className="text-[#d00000] font-bold text-[1.2rem]">
                        New
                      </p>
                      <p className="text-[#370617] font-bold text-[1.2rem]">
                        {items.pin ? "Pin" : ""}
                      </p>
                    </div>

                    <h2 className="text-right text-white font-bold text-[1.2rem]">
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
