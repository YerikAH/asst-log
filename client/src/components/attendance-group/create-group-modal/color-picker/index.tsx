import { classNames } from "@/utils";
import { Radio, RadioGroup } from "@headlessui/react";
import { CustomColorPicker } from "../custom-color-picker";

const colorOptions = [
  { name: "Pink", color: "text-red-500" },
  { name: "Purple", color: "text-purple-500" },
  { name: "Blue", color: "text-blue-500" },
  { name: "Green", color: "text-green-500" },
  { name: "Yellow", color: "text-yellow-400" },
];

interface Props {
  selectedColor: { name: string; color: string };
  setSelectedColor: (value: { name: string; color: string }) => void;
}

export const ColorPicker = ({ selectedColor, setSelectedColor }: Props) => (
  <fieldset className="py-4">
    <label className="block text-sm font-medium leading-6 text-gray-900 font-lexend">
      Elige el color de tu asistencia:
    </label>
    <RadioGroup
      value={selectedColor}
      onChange={setSelectedColor}
      className="mt-2 flex items-center gap-4"
    >
      {colorOptions.map((option) => (
        <Radio
          key={option.name}
          value={option}
          aria-label={option.name}
          className={classNames(
            option.color,
            "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-current focus:outline-none data-[checked]:ring-2 data-[focus]:data-[checked]:ring data-[focus]:data-[checked]:ring-offset-1"
          )}
        >
          <span
            aria-hidden="true"
            className="h-8 w-8 rounded-full border border-black border-opacity-10 bg-current"
          />
        </Radio>
      ))}
      <CustomColorPicker />
    </RadioGroup>
  </fieldset>
);
