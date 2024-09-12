import { FilterCards, ListCards } from "@/components/attendance-group";
import { useTitle } from "@/hook";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

function AttendanceGroup() {
  const { changeTitle } = useTitle();

  useEffect(() => {
    changeTitle("Registro de asistencias - AsstLog");
  }, [changeTitle]);
  return (
    <div className="max-w-5xl w-full mx-auto">
      <FilterCards />
      <ListCards />
      <Outlet />
    </div>
  );
}
export default AttendanceGroup;
