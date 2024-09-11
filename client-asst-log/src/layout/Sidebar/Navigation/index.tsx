import { Bars3Icon } from "@heroicons/react/24/outline";

interface Props {
  setSidebarOpen: (value: boolean) => void;
}
export const Navigation = ({ setSidebarOpen }: Props) => {
  return (
    <div className="sticky top-0 z-40 flex h-20 shrink-0 items-center gap-x-4  bg-white px-4 sm:gap-x-6 sm:px-6 lg:px-8 lg:hidden">
      <button
        type="button"
        onClick={() => setSidebarOpen(true)}
        className="-m-2.5 p-2.5 text-gray-700 font-lexend"
      >
        <span className="sr-only">Open sidebar</span>
        <Bars3Icon aria-hidden="true" className="h-6 w-6" />
      </button>
    </div>
  );
};
