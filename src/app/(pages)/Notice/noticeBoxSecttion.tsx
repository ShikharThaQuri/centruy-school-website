export default function NoticeBoxSection() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="p-4 bg-[#bb9457] rounded-lg shadow-md mb-[3rem]">
          <h1 className="font-bold text-[1.3rem] ">Notice Box Section</h1>
          <p>This section contains notices and announcements.</p>

          <div className="flex justify-between items-center mt-4">
            <div className="flex justify-end gap-5">
              <p className="text-[#d00000] font-bold text-[1.2rem]">New</p>
              <p className="text-[#370617] font-bold text-[1.2rem]">Pin</p>
            </div>

            <h2 className="text-right text-white font-bold text-[1.2rem]">
              2023-03-25
            </h2>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="p-4 bg-[#99582a] rounded-lg shadow-md">
          <h1 className="font-bold text-[1.3rem] ">Notice Box Section</h1>
          <p>This section contains notices and announcements.</p>

          <div className="flex justify-between items-center mt-4">
            <div className="flex justify-end gap-5">
              <p className="text-[#d00000] font-bold text-[1.2rem]">New</p>
            </div>

            <h2 className="text-right text-white font-bold text-[1.2rem]">
              2023-03-25
            </h2>
          </div>
        </div>

        <div className="p-4 bg-[#99582a] rounded-lg shadow-md">
          <h1 className="font-bold text-[1.3rem] ">Notice Box Section</h1>
          <p>This section contains notices and announcements.</p>

          <div className="flex justify-between items-center mt-4">
            <div className="flex justify-end gap-5"></div>

            <h2 className="text-right text-white font-bold text-[1.2rem]">
              2023-03-25
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
