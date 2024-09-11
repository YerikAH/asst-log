import {
  AttendanceByGroup,
  AttendanceColumnChart,
  AttendanceStatsChart,
  RankingAttendance,
} from "@/components/dashboard";
import { useTitle } from "@/hook";
import { useEffect } from "react";

function Dashboard() {
  const { changeTitle } = useTitle();

  useEffect(() => {
    changeTitle("Dashboard - AsstLog");
  }, [changeTitle]);

  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-4">
        <AttendanceColumnChart />
        <AttendanceStatsChart />
      </div>
      <div className="grid lg:grid-cols-2 gap-4 mt-4">
        <div className="w-full h-full bg-white rounded-3xl"></div>
        <AttendanceByGroup />
      </div>
      <RankingAttendance />
    </div>
  );
}
export default Dashboard;
