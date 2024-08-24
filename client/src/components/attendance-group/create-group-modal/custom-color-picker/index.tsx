import { Radio } from "@headlessui/react";
import { SwatchesPicker } from "react-color";

export const CustomColorPicker = () => (
  <div className="flex items-center gap-2 relative">
    <Radio
      value=""
      aria-label=""
      className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-current focus:outline-none data-[checked]:ring-2 data-[focus]:data-[checked]:ring data-[focus]:data-[checked]:ring-offset-1 text-blue-500"
    >
      <span className="border size-8 bg-white rounded-full"></span>
    </Radio>
    <p className="font-lexend text-sm">Color</p>
    <input
      type="text"
      value="#FFF555"
      className="block px-6 w-full outline-none rounded-full border-0 py-3 text-gray-500 font-lexend shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
    />
    <div className="absolute top-14 right-0 rounded-2xl overflow-hidden border">
      {/* <SwatchesPicker /> */}
    </div>
  </div>
);
