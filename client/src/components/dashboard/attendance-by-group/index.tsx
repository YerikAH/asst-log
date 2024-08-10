import { DonutChart } from "./donut-chart";
import { Percentage } from "./percentage";

export const AttendanceByGroup = () => {
  return (
    <div className="bg-white h-[400px] rounded-3xl px-6 py-6">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-base font-semibold font-lexend text-gray-900">
          Asistencia por grupo
        </h2>
      </div>
      <div className="grid grid-cols-[1.5fr_2fr] gap-4 divide-x divide-slate-100">
        <Percentage />
        <DonutChart />
      </div>
    </div>
  );
};
