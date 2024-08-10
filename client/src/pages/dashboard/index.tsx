import {
  AttendanceByGroup,
  AttendanceColumnChart,
  AttendanceStatsChart,
  RankingAttendance,
} from "@/components/dashboard";
import { useTitle } from "@/hook";
import { useTitleStore } from "@/services/config";
import { useEffect } from "react";

function Dashboard() {
  const { changeTitle } = useTitle();
  const changeTitleNavigation = useTitleStore((state) => state.changeTitle);

  useEffect(() => {
    changeTitle("Dashboard 📌 - AsstLog");
    changeTitleNavigation("Dashboard 📌");
  }, [changeTitle, changeTitleNavigation]);

  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-2 gap-4">
        <AttendanceColumnChart />
        <AttendanceStatsChart />
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="w-full h-full bg-white rounded-3xl"></div>
        <AttendanceByGroup />
      </div>
      <RankingAttendance />
    </div>
  );
}
export default Dashboard;
