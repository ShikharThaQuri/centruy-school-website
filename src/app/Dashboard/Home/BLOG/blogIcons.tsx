"use client";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteBlog } from "@/services/admin/blog";
import Link from "next/link";

export function BlogIcons({ id }: { id: string }) {
  return (
    <div className="flex gap-4">
      <Link href={`/Dashboard/Home/BLOG/${id}`}>
        <EditIcon className="text-[blue]  cursor-pointer" />
      </Link>

      <DeleteIcon
        onClick={() => deleteBlog(id)}
        className="text-[red] cursor-pointer"
      />
    </div>
  );
}
