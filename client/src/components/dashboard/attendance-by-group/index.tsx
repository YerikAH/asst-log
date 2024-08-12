import { DonutChart } from "./donut-chart";
import { FilterByGroup } from "./filter-by-group";
import { Percentage } from "./percentage";

export const AttendanceByGroup = () => {
  return (
    <div className="bg-white h-[400px] rounded-3xl px-6 py-6">
      <FilterByGroup />
      <div className="grid grid-cols-[1.5fr_2fr] gap-4 divide-x divide-slate-100">
        <Percentage />
        <DonutChart />
      </div>
    </div>
  );
};
