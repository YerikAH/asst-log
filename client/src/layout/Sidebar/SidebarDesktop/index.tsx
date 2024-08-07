import { classNames } from "@/utils";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import logo from "@/assets/logo-icon-white.png";

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
  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      {/* Sidebar component, swap this element with another sidebar if you like */}
      <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-zinc-900 ">
        <div className="flex h-20 shrink-0 items-center border-b border-b-zinc-800 px-6">
          <img alt="AsstLog" src={logo} className="h-10 w-auto" />
        </div>
        <nav className="flex flex-1 flex-col px-6 pb-4">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" className="-mx-2 space-y-1">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-zinc-800 text-white"
                          : "text-gray-400 hover:bg-zinc-800 hover:text-white",
                        "group flex gap-x-3 rounded-full py-3 px-4 text-sm font-semibold leading-6 font-lexend"
                      )}
                    >
                      <item.icon
                        aria-hidden="true"
                        className="h-6 w-6 shrink-0"
                      />
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <div className="text-xs font-semibold leading-6 text-gray-400 font-lexend">
                Tus códigos
              </div>
              <ul role="list" className="-mx-2 mt-2 space-y-1">
                {codes.map((code) => (
                  <li key={code.name}>
                    <a
                      href={code.href}
                      className={classNames(
                        code.current
                          ? "bg-zinc-800 text-white"
                          : "text-gray-400 hover:bg-zinc-800 hover:text-white",
                        "group flex gap-x-3 rounded-full py-3 px-4 text-sm font-semibold leading-6 font-lexend"
                      )}
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white font-lexend">
                        {code.initial}
                      </span>
                      <span className="truncate font-lexend">{code.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li className="mt-auto">
              <a
                href="#"
                className="group -mx-2 flex gap-x-3 rounded-full py-3 px-4 text-sm font-semibold leading-6 text-gray-400 hover:bg-zinc-800 hover:text-white font-lexend"
              >
                <Cog6ToothIcon
                  aria-hidden="true"
                  className="h-6 w-6 shrink-0"
                />
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
