import { PlusIcon } from "@heroicons/react/24/outline";
import { CreateGroupModal } from "../../create-group-modal";
import { useState } from "react";

export const ButtonOpenModal = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        className="bg-transparent border-slate-300  border-2 rounded-3xl p-5 size-48 transition-all flex justify-center items-center hover:bg-slate-200 hover:border-slate-200 group hover:scale-105 "
        onClick={() => setOpen(!open)}
      >
        <PlusIcon
          className="text-slate-300 size-6 group-hover:text-slate-500 transition-colors"
          strokeWidth={3}
        />
      </button>
      <CreateGroupModal open={open} setOpen={setOpen} />
    </>
  );
};
