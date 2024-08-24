import { useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { HeaderSection } from "./header-section";
import { FooterActions } from "./footer-actions";
import { ColorPicker } from "./color-picker";
import { AttendanceMenu } from "./attendance-menu";

const options = [
  { name: "Pink", color: "text-red-500" },
  { name: "Purple", color: "text-purple-500" },
  { name: "Blue", color: "text-blue-500" },
  { name: "Green", color: "text-green-500" },
  { name: "Yellow", color: "text-yellow-400" },
];

export const CreateGroupModal = () => {
  const [open, setOpen] = useState(true);
  const [selectedColor, setSelectedColor] = useState(options[1]);
  return (
    <Dialog open={open} onClose={setOpen} className="relative z-50">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-[#fff7] backdrop-blur-xl bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform  rounded-3xl bg-white px-4 pb-4 pt-5 text-left shadow transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-xl sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95 "
          >
            <div>
              <HeaderSection />

              <div className="mt-3 sm:mt-5">
                <div className="mt-2 divide-y">
                  <div className="py-4">
                    <label
                      htmlFor="group"
                      className="block text-sm font-medium leading-6 text-gray-900 font-lexend"
                    >
                      Ingresa el nombre de tu asistencia:
                    </label>
                    <div className="mt-2 ">
                      <input
                        id="group"
                        name="group"
                        type="text"
                        placeholder="Ej. Recursos humanos"
                        required
                        className="block px-6 w-full outline-none rounded-full border-0 py-3 text-gray-500 font-lexend shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <ColorPicker
                    selectedColor={selectedColor}
                    setSelectedColor={setSelectedColor}
                  />
                  <div className="py-4">
                    <label className="block text-sm font-medium leading-6 text-gray-900 font-lexend">
                      Ingresa el registro de asistencia:
                    </label>
                    <div className="mt-2 flex gap-2">
                      <AttendanceMenu />
                      <AttendanceMenu />
                      <AttendanceMenu />
                      <AttendanceMenu />
                      <AttendanceMenu />
                      <AttendanceMenu />
                    </div>
                  </div>
                  <div className="py-4">
                    <label className="block text-sm font-medium leading-6 text-gray-900 font-lexend">
                      Ingresa el registro de asistencia:
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <FooterActions setOpen={setOpen} />
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};
