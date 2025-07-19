import { NoticeType } from "@/models/Notice";
import { getNotice } from "@/services/admin/notice";
import { Suspense } from "react";

export default function NoticePage() {
  return (
    <main className="flex flex-col items-center justify-start p-[1rem] min-h-[80vh]">
      <h1 className="text-center mb-[2rem] font-bold text-xl">Notice</h1>

      <Suspense fallback={<h1>Loading...</h1>}>
        <NoticeBox />
      </Suspense>
    </main>
  );
}

async function NoticeBox() {
  const result = await getNotice();

  return (
    <>
      {result?.data?.map((items: NoticeType, i: number) => (
        <div
          key={i}
          className="bg-white rounded shadow-md p-4 mb-5 flex justify-between w-[50%] items-center"
        >
          <h2>{items.noticeHeading}</h2>
          <p>{items._id}</p>
        </div>
      ))}
    </>
  );
}
