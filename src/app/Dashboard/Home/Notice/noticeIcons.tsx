import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export function NoticeIcons() {
  return (
    <div className="flex gap-4">
      <EditIcon className="text-[blue]" />
      <DeleteIcon className="text-[red]" />
    </div>
  );
}
