import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="bg-white">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img alt="" src={logo} className="h-8 w-auto lg:h-12" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-8">
          <Link
            to="/register"
            className="text-sm font-semibold leading-6 text-gray-900 font-lexend  px-6 py-3 rounded-full hover:bg-gray-100 bg-white"
          >
            Registrarse
          </Link>
          <Link
            to="/login"
            className="text-sm font-semibold leading-6 text-white font-lexend bg-blue-600 px-6 py-3 rounded-full hover:bg-blue-500 "
          >
            Ingresar ahora
          </Link>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">AsstLog</span>
              <img alt="logo" src={logo} className="h-8 w-auto" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flex h-[93%] w-full items-end">
            <div className="-my-6    divide-y divide-gray-500/10 w-full">
              <div className="py-6 flex items-center justify-center flex-col w-full gap-4">
                <Link
                  to="/login"
                  className="w-full text-center font-lexend rounded-full bg-blue-600 block px-6 py-2.5 text-sm font-semibold leading-7 text-white hover:bg-blue-500"
                >
                  Ingresar
                </Link>

                <Link
                  to="/register"
                  className="w-full text-sm font-semibold leading-6 text-gray-900 font-lexend  px-6 py-3 rounded-full text-center hover:bg-gray-100 bg-white"
                >
                  Registrarse
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};
