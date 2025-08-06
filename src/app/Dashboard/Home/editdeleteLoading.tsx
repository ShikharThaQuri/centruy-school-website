"use client";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Loading from "@/components/loading";

export default function EditDeleteLoading() {
  return (
    <div className="bg-white rounded shadow-md p-4 mb-5 flex justify-between w-[80%] md:w-[70%] lg:w-[50%] items-center">
      <h2 className="flex items-center gap-[1rem]">
        <Loading />
      </h2>

      <div className="flex gap-4">
        <EditIcon className="text-[blue] cursor-pointer" />
        <DeleteIcon className="text-[red] cursor-pointer" />
      </div>
    </div>
  );
}
