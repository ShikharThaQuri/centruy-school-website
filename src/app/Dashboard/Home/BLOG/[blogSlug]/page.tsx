import UpdateSingleBlog from "./updateBlog";
import { getSingleBlog } from "@/services/admin/blog";

export default async function page({
  params,
}: {
  params: Promise<{ blogSlug: string }>;
}) {
  const { blogSlug } = await params;

  const result = await getSingleBlog(blogSlug);

  return (
    <main>
      <UpdateSingleBlog
        Title={result?.data?.title}
        BlogId={result?.data?._id}
        BlogDis={result?.data?.content}
        WritterName={result?.data?.writterName}
      />
    </main>
  );
}
