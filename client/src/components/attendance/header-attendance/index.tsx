import { getFormattedDate } from "@/utils";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

export const HeaderAttendance = () => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h2 className="font-lexend text-lg font-semibold text-gray-900">
          Asistencia
        </h2>
        <p className="font-lexend text-gray-500 text-sm">
          {getFormattedDate()}
        </p>
      </div>
      <div>
        <button
          type="button"
          className="rounded-full font-lexend flex items-center justify-center gap-2 bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          <ArrowDownTrayIcon className="size-5 text-white" strokeWidth={2} />
          Exportar datos
        </button>
      </div>
    </div>
  );
};
