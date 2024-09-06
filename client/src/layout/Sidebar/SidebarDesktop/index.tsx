import { classNames } from "@/utils";
import { ArrowLeftEndOnRectangleIcon } from "@heroicons/react/24/outline";
import logo from "@/assets/logo.png";
import { Link, useLocation } from "react-router-dom";

interface Props {
  navigation: {
    name: string;
    href: string;
    icon: React.ElementType;
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

export const SidebarDesktop = ({ navigation, codes }: Props) => {
  const location = useLocation();

  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white ">
        <div className="flex h-20 shrink-0 items-center border-b border-b-zinc-200 px-6">
          <img alt="AsstLog" src={logo} className="h-10 w-auto" />
        </div>
        <nav className="flex flex-1 flex-col px-6 pb-4">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" className="-mx-2 space-y-1">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className={classNames(
                        location.pathname === item.href
                          ? "bg-blue-100 text-blue-600"
                          : "text-slate-500 hover:bg-zinc-100 hover:text-slate-600",
                        "group flex gap-x-3 rounded-xl py-3 px-4 text-sm font-semibold leading-6 font-lexend transition-all"
                      )}
                    >
                      <item.icon
                        aria-hidden="true"
                        className="h-6 w-6 shrink-0 "
                      />
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
                      className={classNames(
                        code.href === location.pathname
                          ? "bg-blue-100 text-blue-600"
                          : "text-slate-500 hover:bg-zinc-100 hover:text-slate-600",
                        "group flex gap-x-3 rounded-xl py-3 px-4 text-sm font-semibold leading-6 font-lexend transition-all"
                      )}
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border-0 bg-blue-600 text-[0.625rem] font-medium text-white group-hover:text-white font-lexend">
                        {code.initial}
                      </span>
                      <span className="truncate font-lexend">{code.name}</span>
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
    </div>
  );
};
