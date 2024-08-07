import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import {
  AdjustmentsHorizontalIcon,
  CheckCircleIcon,
  CheckIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/20/solid";
const filter = [
  { id: 1, name: "Todos" },
  { id: 2, name: "De A hasta la Z" },
  { id: 3, name: "Por entrada" },
  { id: 4, name: "Por salida" },
];
export const FilterTable = () => {
  const [selected, setSelected] = useState(filter[2]);
  return (
    <div className="mb-4 flex items-center justify-between">
      <div></div>
      <div className="flex items-center gap-4">
        <form action="#" method="GET" className="relative flex flex-1">
          <label htmlFor="search-field" className="sr-only">
            Buscar persona
          </label>
          <MagnifyingGlassIcon
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-4 h-full w-5 text-gray-400"
          />
          <input
            id="search-field"
            name="search"
            type="search"
            placeholder="Buscar persona..."
            className="block bg-slate-100 rounded-full py-3 font-normal border-0 pr-4 pl-12 outline-none text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm font-lexend"
          />
        </form>
        <Listbox value={selected} onChange={setSelected}>
          <div className="relative ">
            <ListboxButton className="relative w-full cursor-default rounded-full bg-slate-100 py-3 font-lexend pl-6 pr-14 text-left text-gray-900  ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
              <span className="block truncate text-sm">{selected.name}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                <AdjustmentsHorizontalIcon
                  aria-hidden="true"
                  className="h-5 w-5 text-gray-400"
                />
              </span>
            </ListboxButton>

            <ListboxOptions
              transition
              className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-xl bg-slate-100 py-1 text-base shadow-lg focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
            >
              {filter.map((person) => (
                <ListboxOption
                  key={person.id}
                  value={person}
                  className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-600 data-[focus]:bg-indigo-600 data-[focus]:text-white font-lexend text-sm"
                >
                  <span className="block truncate font-normal group-data-[selected]:font-semibold">
                    {person.name}
                  </span>

                  <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                    <CheckCircleIcon aria-hidden="true" className="h-5 w-5" />
                  </span>
                </ListboxOption>
              ))}
            </ListboxOptions>
          </div>
        </Listbox>
      </div>
    </div>
  );
};
