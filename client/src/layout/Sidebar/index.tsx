import { useState } from "react";
import {
  ArchiveBoxArrowDownIcon,
  Cog6ToothIcon,
  HomeIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

import { Outlet } from "react-router-dom";
import { SidebarDesktop } from "./SidebarDesktop";
import { SidebarMobile } from "./SidebarMobile";
import { Navigation } from "./Navigation";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: HomeIcon, current: true },
  {
    name: "Asistencia",
    href: "/attendance-group",
    icon: ArchiveBoxArrowDownIcon,
    current: false,
  },
  {
    name: "Usuarios",
    href: "/users",
    icon: UsersIcon,
    current: false,
  },
  {
    name: "Configuración",
    href: "/settings",
    icon: Cog6ToothIcon,
    current: false,
  },
];
const teams = [
  {
    id: 1,
    name: "Arte",
    href: "/attendance-group/arte",
    initial: "A",
    current: false,
  },
  {
    id: 2,
    name: "Literatura",
    href: "/attendance-group/literatura",
    initial: "L",
    current: false,
  },
];

export const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="h-screen overflow-hidden">
      <SidebarMobile
        codes={teams}
        navigation={navigation}
        setSidebarOpen={setSidebarOpen}
        sidebarOpen={sidebarOpen}
      />

      <SidebarDesktop codes={teams} navigation={navigation} />

      <div className="lg:pl-72">
        <Navigation setSidebarOpen={setSidebarOpen} />

        <main className="pt-10 pb-[5rem] bg-slate-50 h-screen overflow-auto w-full">
          <div className="px-4 sm:px-6 lg:px-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};
