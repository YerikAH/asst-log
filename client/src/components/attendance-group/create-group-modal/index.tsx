import { useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { PaintBrushIcon } from "@heroicons/react/20/solid";
import { Radio, RadioGroup } from "@headlessui/react";
import { classNames } from "@/utils";

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
            className="relative transform overflow-hidden rounded-3xl bg-white px-4 pb-4 pt-5 text-left shadow transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-xl sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95 "
          >
            <div>
              <div className="grid grid-cols-[auto_auto] items-start justify-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600">
                  <PaintBrushIcon
                    aria-hidden="true"
                    className="h-6 w-6 text-white"
                  />
                </div>
                <div>
                  <h3 className="text-base font-lexend text-gray-900 font-semibold">
                    Crea tu propia asistencia
                  </h3>
                  <p className="text-sm font-lexend text-gray-500">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quaerat nostrum, earum pariatur vel nihil mollitia.
                  </p>
                </div>
              </div>
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
                  <div className="py-4">
                    <fieldset>
                      <legend className="block text-sm font-medium leading-6 text-gray-900 font-lexend">
                        Elige el color de tu asistencia:
                      </legend>
                      <div className="flex items-center gap-4">
                        <RadioGroup
                          value={selectedColor}
                          onChange={setSelectedColor}
                          className="mt-2 flex items-center space-x-3"
                        >
                          {options.map((option) => (
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
                        </RadioGroup>
                        <div className="flex items-center gap-2">
                          <p className="font-lexend text-sm">Color</p>
                          <input
                            type="text"
                            value="#FFF555"
                            className="block px-6 w-full outline-none rounded-full border-0 py-3 text-gray-500 font-lexend shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    </fieldset>
                  </div>
                  <p className="text-sm text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Eius aliquam laudantium explicabo pariatur iste dolorem
                    animi vitae error totam. At sapiente aliquam accusamus
                    facere veritatis.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2"
              >
                Deactivate
              </button>
              <button
                type="button"
                data-autofocus
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
              >
                Cancel
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};
