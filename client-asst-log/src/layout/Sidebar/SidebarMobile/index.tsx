import { classNames } from "@/utils";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  TransitionChild,
} from "@headlessui/react";
import logo from "@/assets/logo.png";
import {
  ArrowLeftEndOnRectangleIcon,
  Cog6ToothIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

interface Props {
  sidebarOpen: boolean;
  setSidebarOpen: (value: boolean) => void;
  navigation: {
    name: string;
    href: string;
    icon: React.ElementType;
    iconActive: React.ElementType;
    current: boolean;
  }[];
  codes: {
    id: number;
    name: string;
    href: string;
    initial: string;
    current: boolean;
  }[];
}
export const SidebarMobile = ({
  sidebarOpen,
  setSidebarOpen,
  navigation,
  codes,
}: Props) => {
  return (
    <Dialog
      open={sidebarOpen}
      onClose={setSidebarOpen}
      className="relative z-50 lg:hidden"
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-[#fff7] backdrop-blur-xl transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
      />

      <div className="fixed inset-0 flex">
        <DialogPanel
          transition
          className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
        >
          <TransitionChild>
            <div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
              <button
                type="button"
                onClick={() => setSidebarOpen(false)}
                className="-m-2.5 p-2.5"
              >
                <span className="sr-only">Close sidebar</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6 text-white" />
              </button>
            </div>
          </TransitionChild>
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4 ring-1 ring-white/10">
            <div className="flex h-24 shrink-0 items-center">
              <img alt="AsstLog" src={logo} className="h-10 w-auto" />
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <Link
                          to={item.href}
                          onClick={() => setSidebarOpen(false)}
                          className={classNames(
                            location.pathname === item.href
                              ? "bg-blue-100 text-blue-600"
                              : "text-slate-500 hover:bg-zinc-100 hover:text-slate-600",
                            "group flex gap-x-3 rounded-xl px-4 py-3 text-sm font-semibold leading-6 font-lexend transition-all"
                          )}
                        >
                          {location.pathname === item.href ? (
                            <item.iconActive
                              aria-hidden="true"
                              className="h-6 w-6 shrink-0"
                            />
                          ) : (
                            <item.icon
                              aria-hidden="true"
                              className="h-6 w-6 shrink-0"
                            />
                          )}
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <div className="text-xs font-semibold leading-6 text-gray-400 font-lexend">
                    Tus asistencias
                  </div>
                  <ul role="list" className="-mx-2 mt-2 space-y-1">
                    {codes.map((code) => (
                      <li key={code.name}>
                        <Link
                          to={code.href}
                          onClick={() => setSidebarOpen(false)}
                          className={classNames(
                            location.pathname === code.href
                              ? "bg-blue-100 text-blue-600"
                              : "text-slate-500 hover:bg-zinc-100 hover:text-slate-600",
                            "group flex gap-x-3 rounded-xl px-4 py-3 text-sm font-semibold leading-6 transition-all"
                          )}
                        >
                          <span className="flex h-6 w-6 shrink-0 font-lexend items-center justify-center rounded-lg bg-blue-600 text-[0.625rem] font-medium text-white group-hover:text-white">
                            {code.initial}
                          </span>
                          <span className="truncate font-lexend">
                            {code.name}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="mt-auto">
                  <a
                    href="#"
                    className="group -mx-2 flex gap-x-3 rounded-xl py-3 px-4 text-sm font-semibold leading-6 text-red-600 bg-white transition-all hover:bg-red-100 font-lexend"
                  >
                    <ArrowLeftEndOnRectangleIcon
                      aria-hidden="true"
                      className="h-6 w-6 shrink-0"
                    />
                    Cerrar sesión
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};
