import NoticeBoxSection from "./noticeBoxSecttion";

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
