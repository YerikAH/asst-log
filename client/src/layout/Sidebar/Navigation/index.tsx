import { useTitleStore } from "@/services/config";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, BellIcon } from "@heroicons/react/24/outline";

interface Props {
  setSidebarOpen: (value: boolean) => void;
}
export const Navigation = ({ setSidebarOpen }: Props) => {
  const title = useTitleStore((state) => state.title);
  return (
    <div className="sticky top-0 z-40 flex h-20 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 sm:gap-x-6 sm:px-6 lg:px-8">
      <button
        type="button"
        onClick={() => setSidebarOpen(true)}
        className="-m-2.5 p-2.5 text-gray-700 lg:hidden font-lexend"
      >
        <span className="sr-only">Open sidebar</span>
        <Bars3Icon aria-hidden="true" className="h-6 w-6" />
      </button>

      {/* Separator */}
      <div aria-hidden="true" className="h-6 w-px bg-gray-900/10 lg:hidden" />

      <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6 items-center justify-between mx-auto max-w-5xl">
        <h2 className=" font-lexend text-2xl text-gray-900 font-bold">
          {title}
        </h2>
        <div className="flex items-center gap-x-4 lg:gap-x-6">
          {/* Separator */}
          <form action="#" method="GET" className="relative flex flex-1">
            <label htmlFor="search-field" className="sr-only">
              Buscar
            </label>
            <MagnifyingGlassIcon
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-4 h-full w-5 text-gray-400"
            />
            <input
              id="search-field"
              name="search"
              type="search"
              placeholder="Buscar..."
              className="block bg-slate-100 rounded-full py-4 border-0 pr-4 pl-12 outline-none text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm font-lexend"
            />
          </form>
          <div
            aria-hidden="true"
            className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"
          />
          <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">View notifications</span>
            <BellIcon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};
