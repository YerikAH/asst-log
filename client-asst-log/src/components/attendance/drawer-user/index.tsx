import {
  Dialog,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import Calendar from "react-github-contribution-calendar";
import { Scrollbars } from "react-custom-scrollbars-2";

interface Attendance {
  date: string;
  count: number;
}

const attendanceData: Attendance[] = [
  // Enero
  { date: "2023-01-02", count: 1 }, // Asistió
  { date: "2023-01-03", count: 1 }, // Asistió
  { date: "2023-01-04", count: 1 }, // Asistió
  { date: "2023-01-05", count: 1 }, // Asistió
  { date: "2023-01-06", count: 1 }, // Asistió
  { date: "2023-01-09", count: 2 }, // Tarde
  { date: "2023-01-10", count: 1 }, // Asistió
  { date: "2023-01-11", count: 1 }, // Asistió
  { date: "2023-01-12", count: 1 }, // Asistió
  { date: "2023-01-13", count: 1 }, // Asistió
  { date: "2023-01-16", count: 1 }, // Asistió
  { date: "2023-01-17", count: 1 }, // Asistió
  { date: "2023-01-18", count: 3 }, // Faltó
  { date: "2023-01-19", count: 1 }, // Asistió
  { date: "2023-01-20", count: 1 }, // Asistió
  { date: "2023-01-23", count: 1 }, // Asistió
  { date: "2023-01-24", count: 1 }, // Asistió
  { date: "2023-01-25", count: 1 }, // Asistió
  { date: "2023-01-26", count: 1 }, // Asistió
  { date: "2023-01-27", count: 1 }, // Asistió
  { date: "2023-01-30", count: 1 }, // Asistió
  { date: "2023-01-31", count: 1 }, // Asistió

  // Febrero
  { date: "2023-02-01", count: 1 }, // Asistió
  { date: "2023-02-02", count: 1 }, // Asistió
  { date: "2023-02-03", count: 1 }, // Asistió
  { date: "2023-02-06", count: 1 }, // Asistió
  { date: "2023-02-07", count: 1 }, // Asistió
  { date: "2023-02-08", count: 2 }, // Tarde
  { date: "2023-02-09", count: 1 }, // Asistió
  { date: "2023-02-10", count: 1 }, // Asistió
  { date: "2023-02-13", count: 1 }, // Asistió
  { date: "2023-02-14", count: 1 }, // Asistió
  { date: "2023-02-15", count: 1 }, // Asistió
  { date: "2023-02-16", count: 1 }, // Asistió
  { date: "2023-02-17", count: 1 }, // Asistió
  { date: "2023-02-20", count: 1 }, // Asistió
  { date: "2023-02-21", count: 1 }, // Asistió
  { date: "2023-02-22", count: 1 }, // Asistió
  { date: "2023-02-23", count: 1 }, // Asistió
  { date: "2023-02-24", count: 1 }, // Asistió
  { date: "2023-02-27", count: 1 }, // Asistió
  { date: "2023-02-28", count: 1 }, // Asistió

  // Marzo
  { date: "2023-03-01", count: 1 }, // Asistió
  { date: "2023-03-02", count: 1 }, // Asistió
  { date: "2023-03-03", count: 1 }, // Asistió
  { date: "2023-03-06", count: 1 }, // Asistió
  { date: "2023-03-07", count: 1 }, // Asistió
  { date: "2023-03-08", count: 1 }, // Asistió
  { date: "2023-03-09", count: 1 }, // Asistió
  { date: "2023-03-10", count: 1 }, // Asistió
  { date: "2023-03-13", count: 1 }, // Asistió
  { date: "2023-03-14", count: 1 }, // Asistió
  { date: "2023-03-15", count: 2 }, // Tarde
  { date: "2023-03-16", count: 1 }, // Asistió
  { date: "2023-03-17", count: 1 }, // Asistió
  { date: "2023-03-20", count: 1 }, // Asistió
  { date: "2023-03-21", count: 1 }, // Asistió
  { date: "2023-03-22", count: 1 }, // Asistió
  { date: "2023-03-23", count: 1 }, // Asistió
  { date: "2023-03-24", count: 1 }, // Asistió
  { date: "2023-03-27", count: 1 }, // Asistió
  { date: "2023-03-28", count: 1 }, // Asistió
  { date: "2023-03-29", count: 1 }, // Asistió
  { date: "2023-03-30", count: 1 }, // Asistió
  { date: "2023-03-31", count: 1 }, // Asistió

  // Abril
  { date: "2023-04-03", count: 1 }, // Asistió
  { date: "2023-04-04", count: 1 }, // Asistió
  { date: "2023-04-05", count: 1 }, // Asistió
  { date: "2023-04-06", count: 1 }, // Asistió
  { date: "2023-04-07", count: 1 }, // Asistió
  { date: "2023-04-10", count: 1 }, // Asistió
  { date: "2023-04-11", count: 1 }, // Asistió
  { date: "2023-04-12", count: 1 }, // Asistió
  { date: "2023-04-13", count: 1 }, // Asistió
  { date: "2023-04-14", count: 3 }, // Faltó
  { date: "2023-04-17", count: 1 }, // Asistió
  { date: "2023-04-18", count: 1 }, // Asistió
  { date: "2023-04-19", count: 1 }, // Asistió
  { date: "2023-04-20", count: 1 }, // Asistió
  { date: "2023-04-21", count: 1 }, // Asistió
  { date: "2023-04-24", count: 1 }, // Asistió
  { date: "2023-04-25", count: 1 }, // Asistió
  { date: "2023-04-26", count: 2 }, // Tarde
  { date: "2023-04-27", count: 1 }, // Asistió
  { date: "2023-04-28", count: 1 }, // Asistió
  // Mayo
  { date: "2023-05-01", count: 1 }, // Asistió
  { date: "2023-05-02", count: 1 }, // Asistió
  { date: "2023-05-03", count: 1 }, // Asistió
  { date: "2023-05-04", count: 1 }, // Asistió
  { date: "2023-05-05", count: 1 }, // Asistió
  { date: "2023-05-08", count: 2 }, // Tarde
  { date: "2023-05-09", count: 1 }, // Asistió
  { date: "2023-05-10", count: 1 }, // Asistió
  { date: "2023-05-11", count: 1 }, // Asistió
  { date: "2023-05-12", count: 1 }, // Asistió
  { date: "2023-05-15", count: 1 }, // Asistió
  { date: "2023-05-16", count: 1 }, // Asistió
  { date: "2023-05-17", count: 3 }, // Faltó
  { date: "2023-05-18", count: 1 }, // Asistió
  { date: "2023-05-19", count: 1 }, // Asistió
  { date: "2023-05-22", count: 1 }, // Asistió
  { date: "2023-05-23", count: 1 }, // Asistió
  { date: "2023-05-24", count: 1 }, // Asistió
  { date: "2023-05-25", count: 1 }, // Asistió
  { date: "2023-05-26", count: 1 }, // Asistió
  { date: "2023-05-29", count: 1 }, // Asistió
  { date: "2023-05-30", count: 1 }, // Asistió
  { date: "2023-05-31", count: 1 }, // Asistió

  // Junio
  { date: "2023-06-01", count: 1 }, // Asistió
  { date: "2023-06-02", count: 1 }, // Asistió
  { date: "2023-06-05", count: 1 }, // Asistió
  { date: "2023-06-06", count: 1 }, // Asistió
  { date: "2023-06-07", count: 2 }, // Tarde
  { date: "2023-06-08", count: 1 }, // Asistió
  { date: "2023-06-09", count: 1 }, // Asistió
  { date: "2023-06-12", count: 1 }, // Asistió
  { date: "2023-06-13", count: 1 }, // Asistió
  { date: "2023-06-14", count: 1 }, // Asistió
  { date: "2023-06-15", count: 1 }, // Asistió
  { date: "2023-06-16", count: 1 }, // Asistió
  { date: "2023-06-19", count: 1 }, // Asistió
  { date: "2023-06-20", count: 1 }, // Asistió
  { date: "2023-06-21", count: 1 }, // Asistió
  { date: "2023-06-22", count: 1 }, // Asistió
  { date: "2023-06-23", count: 1 }, // Asistió
  { date: "2023-06-26", count: 1 }, // Asistió
  { date: "2023-06-27", count: 1 }, // Asistió
  { date: "2023-06-28", count: 1 }, // Asistió
  { date: "2023-06-29", count: 1 }, // Asistió
  { date: "2023-06-30", count: 1 }, // Asistió

  // Julio
  { date: "2023-07-03", count: 1 }, // Asistió
  { date: "2023-07-04", count: 1 }, // Asistió
  { date: "2023-07-05", count: 1 }, // Asistió
  { date: "2023-07-06", count: 1 }, // Asistió
  { date: "2023-07-07", count: 1 }, // Asistió
  { date: "2023-07-10", count: 2 }, // Tarde
  { date: "2023-07-11", count: 1 }, // Asistió
  { date: "2023-07-12", count: 1 }, // Asistió
  { date: "2023-07-13", count: 1 }, // Asistió
  { date: "2023-07-14", count: 1 }, // Asistió
  { date: "2023-07-17", count: 1 }, // Asistió
  { date: "2023-07-18", count: 1 }, // Asistió
  { date: "2023-07-19", count: 3 }, // Faltó
  { date: "2023-07-20", count: 1 }, // Asistió
  { date: "2023-07-21", count: 1 }, // Asistió
  { date: "2023-07-24", count: 1 }, // Asistió
  { date: "2023-07-25", count: 1 }, // Asistió
  { date: "2023-07-26", count: 1 }, // Asistió
  { date: "2023-07-27", count: 1 }, // Asistió
  { date: "2023-07-28", count: 1 }, // Asistió
  { date: "2023-07-31", count: 1 }, // Asistió

  // Agosto
  { date: "2023-08-01", count: 1 }, // Asistió
  { date: "2023-08-02", count: 1 }, // Asistió
  { date: "2023-08-03", count: 1 }, // Asistió
  { date: "2023-08-04", count: 1 }, // Asistió
  { date: "2023-08-07", count: 1 }, // Asistió
  { date: "2023-08-08", count: 1 }, // Asistió
  { date: "2023-08-09", count: 2 }, // Tarde
  { date: "2023-08-10", count: 1 }, // Asistió
  { date: "2023-08-11", count: 1 }, // Asistió
  { date: "2023-08-14", count: 1 }, // Asistió
  { date: "2023-08-15", count: 1 }, // Asistió
  { date: "2023-08-16", count: 1 }, // Asistió
  { date: "2023-08-17", count: 1 }, // Asistió
  { date: "2023-08-18", count: 1 }, // Asistió
  { date: "2023-08-21", count: 1 }, // Asistió
  { date: "2023-08-22", count: 1 }, // Asistió
  { date: "2023-08-23", count: 1 }, // Asistió
  { date: "2023-08-24", count: 1 }, // Asistió
  { date: "2023-08-25", count: 1 }, // Asistió
  { date: "2023-08-28", count: 1 }, // Asistió
  { date: "2023-08-29", count: 1 }, // Asistió
  { date: "2023-08-30", count: 1 }, // Asistió
  { date: "2023-08-31", count: 1 }, // Asistió

  // Septiembre
  { date: "2023-09-01", count: 1 }, // Asistió
  { date: "2023-09-04", count: 1 }, // Asistió
  { date: "2023-09-05", count: 1 }, // Asistió
  { date: "2023-09-06", count: 1 }, // Asistió
  { date: "2023-09-07", count: 1 }, // Asistió
  { date: "2023-09-08", count: 1 }, // Asistió
  { date: "2023-09-11", count: 2 }, // Tarde
  { date: "2023-09-12", count: 1 }, // Asistió
  { date: "2023-09-13", count: 1 }, // Asistió
  { date: "2023-09-14", count: 1 }, // Asistió
  { date: "2023-09-15", count: 1 }, // Asistió
  { date: "2023-09-18", count: 1 }, // Asistió
  { date: "2023-09-19", count: 1 }, // Asistió
  { date: "2023-09-20", count: 3 }, // Faltó
  { date: "2023-09-21", count: 1 }, // Asistió
  { date: "2023-09-22", count: 1 }, // Asistió
  { date: "2023-09-25", count: 1 }, // Asistió
  { date: "2023-09-26", count: 1 }, // Asistió
  { date: "2023-09-27", count: 1 }, // Asistió
  { date: "2023-09-28", count: 1 }, // Asistió
  { date: "2023-09-29", count: 1 }, // Asistió

  // Octubre
  { date: "2023-10-02", count: 1 }, // Asistió
  { date: "2023-10-03", count: 1 }, // Asistió
  { date: "2023-10-04", count: 1 }, // Asistió
  { date: "2023-10-05", count: 1 }, // Asistió
  { date: "2023-10-06", count: 1 }, // Asistió
  { date: "2023-10-09", count: 1 }, // Asistió
  { date: "2023-10-10", count: 1 }, // Asistió
  { date: "2023-10-11", count: 2 }, // Tarde
  { date: "2023-10-12", count: 1 }, // Asistió
  { date: "2023-10-13", count: 1 }, // Asistió
  { date: "2023-10-16", count: 1 }, // Asistió
  { date: "2023-10-17", count: 1 }, // Asistió
  { date: "2023-10-18", count: 1 }, // Asistió
  { date: "2023-10-19", count: 1 }, // Asistió
  { date: "2023-10-20", count: 1 }, // Asistió
  { date: "2023-10-23", count: 1 }, // Asistió
  { date: "2023-10-24", count: 1 }, // Asistió
  { date: "2023-10-25", count: 1 }, // Asistió
  { date: "2023-10-26", count: 1 }, // Asistió
  { date: "2023-10-27", count: 1 }, // Asistió
  { date: "2023-10-30", count: 1 }, // Asistió
  { date: "2023-10-31", count: 1 }, // Asistió

  // Noviembre
  { date: "2023-11-01", count: 1 }, // Asistió
  { date: "2023-11-02", count: 1 }, // Asistió
  { date: "2023-11-03", count: 1 }, // Asistió
  { date: "2023-11-06", count: 1 }, // Asistió
  { date: "2023-11-07", count: 1 }, // Asistió
  { date: "2023-11-08", count: 1 }, // Asistió
  { date: "2023-11-09", count: 1 }, // Asistió
  { date: "2023-11-10", count: 1 }, // Asistió
  { date: "2023-11-13", count: 1 }, // Asistió
  { date: "2023-11-14", count: 1 }, // Asistió
  { date: "2023-11-15", count: 2 }, // Tarde
  { date: "2023-11-16", count: 1 }, // Asistió
  { date: "2023-11-17", count: 1 }, // Asistió
  { date: "2023-11-20", count: 1 }, // Asistió
  { date: "2023-11-21", count: 1 }, // Asistió
  { date: "2023-11-22", count: 1 }, // Asistió
  { date: "2023-11-23", count: 1 }, // Asistió
  { date: "2023-11-24", count: 1 }, // Asistió
  { date: "2023-11-27", count: 1 }, // Asistió
  { date: "2023-11-28", count: 1 }, // Asistió
  { date: "2023-11-29", count: 1 }, // Asistió
  { date: "2023-11-30", count: 4 }, // Asistió
];

const values = attendanceData.reduce<Record<string, number>>(
  (acc, { date, count }) => {
    acc[date] = count;
    return acc;
  },
  {}
);

const until = "2023-12-31";
const panelAttributes = { rx: 3, ry: 3 };
const weekLabelAttributes = {
  "font-family": "Lexend",
  "font-weight": "500",
  "font-size": 11,
};
const monthLabelAttributes = {
  style: {
    "font-size": 11,
    "font-family": "Lexend",
    "alignment-baseline": "central",
    fill: "#AAA",
    "font-weight": "500",
  },
};
const weekNames = ["", "L", "", "M", "", "V", ""];
const monthNames = [
  "Ene",
  "Feb",
  "Mar",
  "Abr",
  "May",
  "Jun",
  "Jul",
  "Ago",
  "Sep",
  "Oct",
  "Nov",
  "Dic",
];
const panelColors = ["#e5e7eb", "#22c55e", "#eab308", "#ef4444", "#3b82f6"];

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const DrawerUser = ({ open, setOpen }: Props) => {
  return (
    <Dialog open={open} onClose={setOpen} className="relative z-[60]">
      <div className="fixed inset-0" />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
            >
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl rounded-l-3xl">
                <div className="px-4 py-6 sm:px-6 border-b ">
                  <div className="flex items-start justify-between">
                    <h2
                      id="slide-over-heading"
                      className="text-base font-semibold leading-6 text-gray-900 font-lexend"
                    >
                      Perfil del usuario
                    </h2>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="relative rounded-full p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 bg-white focus:ring-2 focus:ring-blue-500 transition-all"
                      >
                        <span className="absolute -inset-2.5" />
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="pb-1 sm:pb-6 mt-5">
                    <div className="flex px-4 sm:px-6 items-start gap-4">
                      <img
                        src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
                        className="size-24 rounded-full object-cover"
                        alt="avatar"
                      />
                      <div className="">
                        <h3 className="text-xl font-bold text-gray-900 sm:text-base font-lexend  w-full text-left">
                          Vasquez Huaranga Harvey Yerik
                        </h3>
                        <p className="text-sm text-gray-500 font-lexend text-left">
                          yerik05vh@gmail.com
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 mb-5 overflow-hidden">
                    <Scrollbars style={{ width: "100%", height: 120 }} autoHide>
                      <div className="w-[720px]">
                        <Calendar
                          values={values}
                          until={until}
                          panelAttributes={panelAttributes}
                          weekLabelAttributes={weekLabelAttributes}
                          monthLabelAttributes={monthLabelAttributes}
                          weekNames={weekNames}
                          monthNames={monthNames}
                          panelColors={panelColors}
                        />
                      </div>
                    </Scrollbars>
                  </div>
                  <div className="px-4 pb-5 pt-5 sm:px-0 sm:pt-0">
                    <dl className="space-y-8 px-4 sm:space-y-6 sm:px-6">
                      <div>
                        <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 font-lexend">
                          Dirección
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 font-lexend">
                          New York, NY, USA
                        </dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 font-lexend">
                          Número de celular
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 font-lexend">
                          967523180
                        </dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 font-lexend">
                          Cumpleaños
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 font-lexend">
                          <time dateTime="1988-06-23">June 23, 1988</time>
                        </dd>
                      </div>
                    </dl>
                  </div>

                  <div className="mt-5 flex flex-wrap space-y-3 sm:space-x-3 sm:space-y-0 px-4">
                    <button
                      type="button"
                      className="inline-flex w-full flex-shrink-0 items-center justify-center rounded-full font-lexend bg-blue-600 px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 sm:flex-1"
                    >
                      Actualizar
                    </button>

                    <div className="ml-3 inline-flex sm:ml-0">
                      <Menu
                        as="div"
                        className="relative inline-block text-left"
                      >
                        <MenuButton className="relative inline-flex items-center rounded-full bg-slate-100 p-3 text-gray-500 hover:bg-slate-200">
                          <span className="absolute -inset-1" />
                          <span className="sr-only">Open options menu</span>
                          <EllipsisVerticalIcon
                            aria-hidden="true"
                            className="h-5 w-5"
                          />
                        </MenuButton>
                        <MenuItems
                          transition
                          className="absolute right-0 overflow-hidden z-10 mt-2 w-48 origin-top-right rounded-xl bg-slate-100 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                        >
                          <div className="py-1">
                            <MenuItem>
                              <a
                                href="#"
                                className="block font-lexend px-4 py-2 text-sm text-gray-500 data-[focus]:bg-slate-200 data-[focus]:text-gray-900"
                              >
                                Reiniciar usuario
                              </a>
                            </MenuItem>
                            <MenuItem>
                              <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-500 data-[focus]:bg-slate-200 font-lexend data-[focus]:text-gray-900"
                              >
                                Archivar usuario
                              </a>
                            </MenuItem>
                          </div>
                        </MenuItems>
                      </Menu>
                    </div>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
};
