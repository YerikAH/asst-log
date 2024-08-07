import { CardCode } from "@/components/attendance-group";
import { useTitle } from "@/hook";
import { useTitleStore } from "@/services/config";
import { BookOpenIcon, PencilIcon } from "@heroicons/react/20/solid";
import { PlusIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

function AttendanceGroup() {
  const { changeTitle } = useTitle();
  const changeTitleNavigation = useTitleStore((state) => state.changeTitle);

  useEffect(() => {
    changeTitle("Registro de asistencias 🗃️ - AsstLog");
    changeTitleNavigation("Registro de asistencias 🗃️");
  }, [changeTitle, changeTitleNavigation]);
  return (
    <div className="max-w-5xl w-full mx-auto">
      <div className="flex items-center justify-start gap-4">
        <button className="font-lexend font-medium px-4 py-2 border-slate-200 border text-gray-500 rounded-full text-sm">
          Tus favoritos
        </button>
        <button className="font-lexend font-medium px-4 py-2 bg-slate-200 text-gray-500 rounded-full text-sm">
          Todos
        </button>
      </div>
      <div className="flex flex-wrap justify-start items-center mt-8 gap-4">
        <CardCode
          color="#22c55e"
          icon={PencilIcon}
          name="Arte"
          total={20}
          value={15}
        />
        <CardCode
          color="#0ea5e9"
          icon={BookOpenIcon}
          name="Literatura"
          total={30}
          value={14}
        />
        <button className="bg-transparent border-slate-300  border-2 rounded-3xl p-5 size-48 flex justify-center items-center">
          <PlusIcon className="text-slate-300 size-6" strokeWidth={3} />
        </button>
      </div>
      <Outlet />
    </div>
  );
}
export default AttendanceGroup;
