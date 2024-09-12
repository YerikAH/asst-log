import { BookOpenIcon, PencilIcon } from "@heroicons/react/24/solid";
import { CardAttendance } from "./card-attendance";
import { PlusIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { CreateGroupModal } from "../create-group-modal";

const data = [
  {
    name: "Desarrolladores",
    total: 20,
    value: 15,
    color: "#22c55e",
    icon: PencilIcon,
  },
  {
    name: "Recursos humanos",
    total: 30,
    value: 14,
    color: "#0ea5e9",
    icon: BookOpenIcon,
  },
];

export const ListCards = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex flex-wrap justify-start items-center mt-8 gap-4">
        {data.map((item, idx) => (
          <CardAttendance
            color={item.color}
            href={item.name}
            icon={item.icon}
            name={item.name}
            total={item.total}
            value={item.value}
            key={idx}
          />
        ))}
        <button
          className="bg-transparent border-slate-300  border-2 rounded-3xl p-5 size-48 transition-all flex justify-center items-center hover:bg-slate-200 hover:border-slate-200 group hover:scale-105 "
          onClick={() => setOpen(!open)}
        >
          <PlusIcon
            className="text-slate-300 size-6 group-hover:text-slate-500 transition-colors"
            strokeWidth={3}
          />
        </button>
      </div>
      <CreateGroupModal open={open} setOpen={setOpen} />
    </>
  );
};
