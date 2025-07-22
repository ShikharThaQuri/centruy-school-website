"use client";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteNotice } from "@/services/admin/notice";
import Link from "next/link";

export function NoticeIcons({ id }: { id: string }) {
  return (
    <div className="flex gap-4">
      <Link href={`/Dashboard/Home/Notice/${id}`}>
        <EditIcon className="text-[blue]  cursor-pointer" />
      </Link>

      <DeleteIcon
        onClick={() => deleteNotice(id)}
        className="text-[red] cursor-pointer"
      />
    </div>
  );
}
