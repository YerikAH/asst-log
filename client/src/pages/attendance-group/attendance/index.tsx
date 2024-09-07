import { AttendeeTable, HeaderAttendance } from "@/components/attendance";
import { Drawer } from "@/layout";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Attendance() {
  const [openDrawer, setOpenDrawer] = useState(true);
  const navigate = useNavigate();
  const closeDrawer = () => {
    setOpenDrawer(false);
    setTimeout(() => {
      navigate("/attendance-group");
    }, 500);
  };
  return (
    <Drawer active={openDrawer}>
      <div className="w-full max-w-5xl mx-auto px-6 pt-16">
        <div className="flex items-center justify-end mb-8">
          <button
            className="rounded-full p-2 hover:bg-gray-100 bg-white transition-all focus:ring-2 focus:ring-blue-500"
            onClick={closeDrawer}
          >
            <XMarkIcon className="size-6 text-gray-500" />
          </button>
        </div>
        <HeaderAttendance />
        <AttendeeTable />
      </div>
    </Drawer>
  );
}
export default Attendance;
