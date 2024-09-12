import { CardCode, CreateGroupModal } from "@/components/attendance-group";
import { useTitle } from "@/hook";
import { BookOpenIcon, PencilIcon } from "@heroicons/react/20/solid";
import { PlusIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

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

function AttendanceGroup() {
  const { changeTitle } = useTitle();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    changeTitle("Registro de asistencias - AsstLog");
  }, [changeTitle]);
  return (
    <div className="max-w-5xl w-full mx-auto">
      <div className="flex flex-wrap justify-start items-center mt-8 gap-4">
        {data.map((item, idx) => (
          <CardCode
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
      <Outlet />
    </div>
  );
}
export default AttendanceGroup;
