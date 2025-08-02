import Loading from "@/app/loading";

export default function NoticeLoading() {
  return (
    <div className={`flex flex-col `}>
      <div className="p-4 bg-[#bb9457] rounded-lg shadow-md">
        <h1 className="font-bold lg:text-[1.3rem]  text-[1.2rem] flex items-center gap-[1rem]">
          <Loading />
        </h1>
        <p className=" mt-[0.5rem] xl:text-[1.1rem] md:text-[1rem] text-[0.9rem] flex items-center gap-[1rem]">
          <Loading />
        </p>

        <div className="flex items-center justify-between mt-4">
          <div className="flex justify-end gap-5"></div>

          <h2 className="text-right text-white font-bold xl:text-[1.2rem] lg:text-[1.1rem] text-[0.9rem] flex items-center gap-[1rem]">
            <Loading />
          </h2>
        </div>
      </div>
    </div>
  );
}
