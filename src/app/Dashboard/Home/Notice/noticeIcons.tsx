"use client";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteNotice } from "@/services/admin/notice";

export function NoticeIcons({ id }: { id: String }) {
  return (
    <div className="flex gap-4">
      <EditIcon className="text-[blue]  cursor-pointer" />
      <DeleteIcon
        onClick={() => deleteNotice(id)}
        className="text-[red] cursor-pointer"
      />
    </div>
  );
}
