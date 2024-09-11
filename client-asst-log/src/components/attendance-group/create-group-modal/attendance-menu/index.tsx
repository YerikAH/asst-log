import { classNames } from "@/utils";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import {
  ClipboardDocumentCheckIcon,
  ClockIcon,
  FaceSmileIcon,
  KeyIcon,
  MapPinIcon,
  QrCodeIcon,
} from "@heroicons/react/20/solid";
import { PlusIcon } from "@heroicons/react/24/outline";

const AttendanceTypeOptions = [
  {
    icon: QrCodeIcon,
    bgColor: "bg-sky-100",
    textColor: "text-sky-500",
    label: "Escanear código QR",
  },
  {
    icon: KeyIcon,
    bgColor: "bg-purple-100",
    textColor: "text-purple-500",
    label: "Patrón de desbloqueo",
  },
  {
    icon: ClipboardDocumentCheckIcon,
    bgColor: "bg-indigo-100",
    textColor: "text-indigo-500",
    label: "Confirmar asistencia",
  },
  {
    icon: MapPinIcon,
    bgColor: "bg-blue-100",
    textColor: "text-blue-500",
    label: "Geolocalización",
  },
  {
    icon: FaceSmileIcon,
    bgColor: "bg-pink-100",
    textColor: "text-pink-500",
    label: "Reconocimiento facial",
  },
  {
    icon: ClockIcon,
    bgColor: "bg-emerald-100",
    textColor: "text-emerald-500",
    label: "Automatico",
  },
];

export const AttendanceMenu = () => (
  <Menu as="div" className="relative inline-block text-left py-4">
    <div>
      <MenuButton className="flex size-12 justify-center rounded-lg bg-white items-center hover:bg-gray-50 border border-slate-300">
        <PlusIcon aria-hidden="true" className="h-5 w-5 text-slate-300" />
      </MenuButton>
    </div>
    <MenuItems
      transition
      className="absolute z-10 mt-2 w-56 origin-top-right rounded-2xl overflow-hidden bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
    >
      {AttendanceTypeOptions.map((option, index) => (
        <MenuItem key={index}>
          <div className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-gray-50 cursor-pointer">
            <span
              className={classNames(
                option.bgColor,
                "size-8 justify-center items-center rounded-lg flex"
              )}
            >
              <option.icon className={classNames(option.textColor, "size-5")} />
            </span>
            <h2 className="text-sm font-lexend text-gray-800">
              {option.label}
            </h2>
          </div>
        </MenuItem>
      ))}
    </MenuItems>
  </Menu>
);
