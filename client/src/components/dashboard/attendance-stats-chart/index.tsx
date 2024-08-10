import { CardStats } from "./card-stats";

export const AttendanceStatsChart = () => {
  return (
    <div className="bg-white rounded-3xl divide-8 w-full divide-slate-100 grid grid-cols-2 grid-rows-2 h-[400px]">
      <div className="px-6 border-b-4 border-slate-100 border-r-4">
        <CardStats chartId="area-chart-1" label="Asistentes" value="500" />
      </div>
      <div className="px-6 border-l-4 border-slate-100 border-b-4">
        <CardStats chartId="area-chart-2" label="Inasistentes" value="25" />
      </div>
      <div className="px-6 border-t-4 border-slate-100 border-r-4">
        <CardStats chartId="area-chart-3" label="Enfermos" value="6" />
      </div>
      <div className="px-6 border-t-4 border-slate-100 border-l-4">
        <CardStats chartId="area-chart-4" label="Tardanzas" value="300" />
      </div>
    </div>
  );
};
