"use client";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Link from "next/link";
import { deleteEvent } from "@/services/admin/gallery";

export function EventIcons({ id }: { id: string }) {
  return (
    <div className="flex gap-4">
      <Link href={`/Dashboard/Home/Notice/${id}`}>
        <EditIcon className="text-[blue]  cursor-pointer" />
      </Link>

      <DeleteIcon
        onClick={() => deleteEvent(id)}
        className="text-[red] cursor-pointer"
      />
    </div>
  );
}
