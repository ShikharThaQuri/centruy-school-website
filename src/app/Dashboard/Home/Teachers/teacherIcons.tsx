"use client";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteTeacher } from "@/services/admin/teachers";

export function TeacherIcons({
  id,
  publicId,
}: {
  id: string;
  publicId: string;
}) {
  return (
    <div className="flex gap-4">
      <EditIcon className="text-[blue] cursor-pointer" />
      <DeleteIcon
        onClick={() => deleteTeacher(id, publicId)}
        className="text-[red] cursor-pointer"
      />
    </div>
  );
}
