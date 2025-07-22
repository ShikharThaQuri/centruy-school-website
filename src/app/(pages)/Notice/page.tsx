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

async function NoticeBoxSection() {
  const result = await getNotice();

  console.log(result?.data[0].createdAt);
  const noticeDate = new Date(`${result?.data[0].createdAt}`);

  // const noticeDates = (date) =>

  const currentDate = new Date();
  currentDate.setHours(currentDate.getHours() - 24);

  console.log("date", currentDate);

  if (currentDate < noticeDate) {
    console.log("new");
  } else {
    console.log("old");
  }

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
                      {new Date(`${items.createdAt}`) > currentDate
                        ? "New"
                        : ""}
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
                        {currentDate < new Date(`${items.createdAt}`)
                          ? "New"
                          : ""}
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
