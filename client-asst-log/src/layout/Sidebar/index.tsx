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
import {
  HomeIcon as HomeIconActive,
  ArchiveBoxArrowDownIcon as ArchiveBoxArrowDownIconActive,
  UsersIcon as UsersIconActive,
  Cog6ToothIcon as Cog6ToothIconActive,
} from "@heroicons/react/20/solid";
import { ROUTES } from "@/routes/routes";

const navigation = [
  {
    name: "Dashboard",
    href: ROUTES.DASHBOARD,
    icon: HomeIcon,
    iconActive: HomeIconActive,
    current: true,
  },
  {
    name: "Asistencia",
    href: ROUTES.ATTENDANCE_GROUP,
    icon: ArchiveBoxArrowDownIcon,
    iconActive: ArchiveBoxArrowDownIconActive,
    current: false,
  },
  {
    name: "Usuarios",
    href: ROUTES.USERS,
    icon: UsersIcon,
    iconActive: UsersIconActive,
    current: false,
  },
  {
    name: "Configuración",
    href: ROUTES.SETTINGS,
    icon: Cog6ToothIcon,
    iconActive: Cog6ToothIconActive,
    current: false,
  },
];
const teams = [
  {
    id: 1,
    name: "Recursos humanos",
    href: `${ROUTES.ATTENDANCE_GROUP}/recursos-humanos`,
    initial: "R",
    current: false,
  },
  {
    id: 2,
    name: "Desarrolladores",
    href: `${ROUTES.ATTENDANCE_GROUP}/desarrolladores`,
    initial: "D",
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

        <main className="pt-10 pb-10 bg-slate-50 h-screen overflow-auto w-full">
          <div className="px-4 sm:px-6 lg:px-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};
