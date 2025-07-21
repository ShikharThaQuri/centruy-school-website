"use client";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteTeacher } from "@/services/admin/teachers";
import Link from "next/link";

export function TeacherIcons({
  id,
  publicId,
}: {
  id: string;
  publicId: string;
}) {
  return (
    <div className="flex gap-4">
      <Link href={`/Dashboard/Home/Teachers/${id}`}>
        <EditIcon className="text-[blue] cursor-pointer" />
      </Link>
      <DeleteIcon
        onClick={() => deleteTeacher(id, publicId)}
        className="text-[red] cursor-pointer"
      />
    </div>
  );
}
