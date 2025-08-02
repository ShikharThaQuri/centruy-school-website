import { NoticeType } from "@/models/Notice";
import { getNotice } from "@/services/admin/notice";
import { Suspense } from "react";
import { NoticeIcons } from "./noticeIcons";
import EditDeleteLoading from "../editdeleteLoading";

export default function NoticePage() {
  return (
    <main className="flex flex-col items-center justify-start p-[1rem] min-h-[80vh]">
      <h1 className="text-center mb-[2rem] font-bold text-xl">Notice</h1>

      <Suspense fallback={<EditDeleteLoading />}>
        <NoticeBox />
      </Suspense>
    </main>
  );
}

async function NoticeBox() {
  const result = await getNotice();

  if (result?.success === false) {
    return (
      <div className="min-h-[30vh] flex justify-center items-center">
        <h1 className="text-[green] text-[2rem] font-bold">{result.msg}</h1>
      </div>
    );
  }

  return (
    <>
      {result?.data?.map((items: NoticeType, i: number) => (
        <div
          key={i}
          className="bg-white rounded shadow-md p-4 mb-5 flex justify-between  w-[80%] md:w-[70%] lg:w-[50%] items-center"
        >
          <h2>{items.noticeHeading}</h2>

          <NoticeIcons id={items._id} />
        </div>
      ))}
    </>
  );
}
