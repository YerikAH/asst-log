import { PlusIcon } from "@heroicons/react/24/outline";
import { Day } from "./day";

export const Schedule = () => {
  return (
    <div className="py-4">
      <label className="block text-sm font-medium leading-6 text-zinc-900 font-lexend">
        Ingresa el horario de:
      </label>
      <div className="mt-2">
        <div className="gap-4 grid">
          <Day />
          <Day />
          <Day />
        </div>
        <button className="mt-8 border rounded-full flex items-center justify-center text-zinc-500 font-lexend text-sm w-full py-3 px-6 gap-2 hover:bg-zinc-100 transition-all hover:text-zinc-700 group">
          <PlusIcon className="size-4 " />
          Agregar intervalo
        </button>
      </div>
    </div>
  );
};
