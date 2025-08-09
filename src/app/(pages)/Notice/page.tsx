import { Suspense } from "react";
import NoticeLoading from "./noticeLoading";
import GetNotice from "./getNotice";

export default function NoticePage() {
  return (
    <main className="py-[1rem] min-h-screen">
      <h1 className="text-[1.5rem] font-bold text-[#fb5607] mb-[1rem]">
        Notice
      </h1>

      <Suspense fallback={<NoticeLoading />}>
        <GetNotice />
      </Suspense>
    </main>
  );
}
