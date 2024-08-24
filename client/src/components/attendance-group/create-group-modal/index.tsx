import { useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { HeaderSection } from "./header-section";
import { FooterActions } from "./footer-actions";
import { ColorPicker } from "./color-picker";
import { AttendanceMenu } from "./attendance-menu";
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { ClockIcon, TrashIcon } from "@heroicons/react/20/solid";

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
              <div className="flex  justify-end">
                <button className="justify-center items-center flex size-8 rounded-full bg-white hover:bg-gray-100">
                  <XMarkIcon className="size-5 text-gray-500" />
                </button>
              </div>

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
                      Ingresa el horario de:
                    </label>
                    <div className="mt-2">
                      <fieldset>
                        <div className="space-y-5">
                          <div className="relative flex items-center gap-8 w-full justify-between">
                            <div className="flex items-center gap-8">
                              <div className="flex relative items-start">
                                <div className="flex h-6 items-center">
                                  <input
                                    id="comments"
                                    name="comments"
                                    type="checkbox"
                                    aria-describedby="comments-description"
                                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-indigo-600"
                                  />
                                </div>
                                <div className="ml-3 text-sm leading-6 ">
                                  <label
                                    htmlFor="comments"
                                    className="font-medium text-gray-900 font-lexend"
                                  >
                                    Lunes
                                  </label>
                                </div>
                              </div>

                              <div className="flex items-center gap-2">
                                <div className="relative">
                                  <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                                    <ClockIcon className="size-4 text-gray-500" />
                                  </div>
                                  <input
                                    type="time"
                                    id="end-time-monday"
                                    name="end-time-monday"
                                    className="bg-white border leading-none border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-lexend"
                                    min="09:00"
                                    max="18:00"
                                    value="00:00"
                                    required
                                  />
                                </div>
                                <div className="relative">
                                  <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                                    <ClockIcon className="size-4 text-gray-500" />
                                  </div>
                                  <input
                                    type="time"
                                    id="end-time-monday"
                                    name="end-time-monday"
                                    className="bg-white border leading-none border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-lexend"
                                    min="09:00"
                                    max="18:00"
                                    value="00:00"
                                    required
                                  />
                                </div>
                              </div>
                            </div>

                            <button>
                              <TrashIcon className="size-5 text-gray-500" />
                            </button>
                          </div>
                        </div>
                      </fieldset>

                      <button className="mt-8 border rounded-full flex items-center justify-center text-gray-500 font-lexend text-sm w-full py-3 px-6 gap-2">
                        <PlusIcon className="size-4 text-gray-500" />
                        Agregar intervalo
                      </button>
                    </div>
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
