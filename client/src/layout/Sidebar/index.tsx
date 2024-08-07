import { useState } from "react";
import { FolderIcon, HomeIcon, UsersIcon } from "@heroicons/react/24/outline";

import { Outlet } from "react-router-dom";
import { SidebarDesktop } from "./SidebarDesktop";
import { SidebarMobile } from "./SidebarMobile";
import { Navigation } from "./Navigation";

const navigation = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
  { name: "Team", href: "#", icon: UsersIcon, current: false },
  { name: "Projects", href: "#", icon: FolderIcon, current: false },
];
const teams = [
  { id: 1, name: "Heroicons", href: "#", initial: "H", current: false },
  { id: 2, name: "Tailwind Labs", href: "#", initial: "T", current: false },
  { id: 3, name: "Workcation", href: "#", initial: "W", current: false },
];

export const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="h-screen overflow-auto">
      <SidebarMobile
        codes={teams}
        navigation={navigation}
        setSidebarOpen={setSidebarOpen}
        sidebarOpen={sidebarOpen}
      />

      <SidebarDesktop codes={teams} navigation={navigation} />

      <div className="lg:pl-72">
        <Navigation setSidebarOpen={setSidebarOpen} />

        <main className="py-10 bg-slate-100 h-screen overflow-auto">
          <div className="px-4 sm:px-6 lg:px-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};
