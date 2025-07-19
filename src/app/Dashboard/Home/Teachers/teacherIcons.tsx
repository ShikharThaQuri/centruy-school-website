import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export function TeacherIcons() {
  return (
    <div className="flex gap-4">
      <EditIcon className="text-[blue] cursor-pointer" />
      <DeleteIcon className="text-[red] cursor-pointer" />
    </div>
  );
}
