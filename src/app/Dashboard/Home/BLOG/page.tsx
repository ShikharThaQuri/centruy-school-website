import { Suspense } from "react";
import { BlogIcons } from "./blogIcons";
import EditDeleteLoading from "../editdeleteLoading";
import { BlogType } from "@/models/Blog";
import { getAllBlogs } from "@/services/admin/blog";

export default function BlogPage() {
  return (
    <main className="flex flex-col items-center justify-start p-[1rem] min-h-[80vh]">
      <h1 className="text-center mb-[2rem] font-bold text-xl">Blog</h1>

      <Suspense fallback={<EditDeleteLoading />}>
        <BlogBox />
      </Suspense>
    </main>
  );
}

async function BlogBox() {
  const result = await getAllBlogs();

  if (result?.success === false) {
    return (
      <div className="min-h-[30vh] flex justify-center items-center">
        <h1 className="text-[green] text-[2rem] font-bold">{result.msg}</h1>
      </div>
    );
  }

  return (
    <>
      {result?.data?.map((items: BlogType, i: number) => (
        <div
          key={i}
          className="bg-white rounded shadow-md p-4 mb-5 flex justify-between  w-[80%] md:w-[70%] lg:w-[50%] items-center"
        >
          <h2>{items.title}</h2>

          <BlogIcons id={items._id} />
        </div>
      ))}
    </>
  );
}
