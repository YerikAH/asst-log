import { classNames } from "@/utils";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { ChangeEvent, useLayoutEffect, useRef, useState } from "react";
import { DrawerUser } from "../../drawer-user";

enum Status {
  ON_TIME = "A tiempo",
  LATE = "Tarde",
  SICK = "Enfermo",
  LEAVE_REQUEST = "Justificado",
  ABSENT = "Falto",
}

interface StatusInfo {
  name: string;
  colorHigh: string;
  colorSoft: string;
}

const status: Record<Status, StatusInfo> = {
  [Status.ON_TIME]: {
    name: Status.ON_TIME,
    colorHigh: "#28a745",
    colorSoft: "#d4edda",
  },
  [Status.LATE]: {
    name: Status.LATE,
    colorHigh: "#ffc107",
    colorSoft: "#fff3cd",
  },
  [Status.SICK]: {
    name: Status.SICK,
    colorHigh: "#17a2b8",
    colorSoft: "#d1ecf1",
  },
  [Status.LEAVE_REQUEST]: {
    name: Status.LEAVE_REQUEST,
    colorHigh: "#6c757d",
    colorSoft: "#e2e3e5",
  },
  [Status.ABSENT]: {
    name: Status.ABSENT,
    colorHigh: "#dc3545",
    colorSoft: "#f8d7da",
  },
};

interface Person {
  id: string;
  name: string;
  clockIn: string;
  clockOut: string;
  timeCount: string;
  status: Status;
}
const people: Person[] = [
  {
    id: "1234",
    name: "Lindsay Walton",
    clockIn: "6:00 AM",
    clockOut: "8:00 PM",
    timeCount: "14:00:00",
    status: Status.ON_TIME,
  },
  {
    id: "1235",
    name: "James Smith",
    clockIn: "7:15 AM",
    clockOut: "5:45 PM",
    timeCount: "10:30:00",
    status: Status.LATE,
  },
  {
    id: "1236",
    name: "Emily Johnson",
    clockIn: "8:00 AM",
    clockOut: "4:00 PM",
    timeCount: "8:00:00",
    status: Status.SICK,
  },
  {
    id: "1237",
    name: "Michael Brown",
    clockIn: "9:00 AM",
    clockOut: "6:00 PM",
    timeCount: "9:00:00",
    status: Status.LEAVE_REQUEST,
  },
  {
    id: "1238",
    name: "Jessica Davis",
    clockIn: "6:30 AM",
    clockOut: "3:30 PM",
    timeCount: "9:00:00",
    status: Status.ABSENT,
  },
  {
    id: "1239",
    name: "John Wilson",
    clockIn: "7:00 AM",
    clockOut: "4:00 PM",
    timeCount: "9:00:00",
    status: Status.ON_TIME,
  },
  {
    id: "1240",
    name: "Sarah Taylor",
    clockIn: "8:00 AM",
    clockOut: "5:00 PM",
    timeCount: "9:00:00",
    status: Status.SICK,
  },
  {
    id: "1241",
    name: "David Martinez",
    clockIn: "6:45 AM",
    clockOut: "3:45 PM",
    timeCount: "9:00:00",
    status: Status.LEAVE_REQUEST,
  },
  {
    id: "1242",
    name: "Laura Garcia",
    clockIn: "9:30 AM",
    clockOut: "6:30 PM",
    timeCount: "9:00:00",
    status: Status.ABSENT,
  },
  {
    id: "1243",
    name: "Robert Anderson",
    clockIn: "8:15 AM",
    clockOut: "5:15 PM",
    timeCount: "9:00:00",
    status: Status.ON_TIME,
  },
  {
    id: "1244",
    name: "Nancy Thompson",
    clockIn: "7:30 AM",
    clockOut: "4:30 PM",
    timeCount: "9:00:00",
    status: Status.LATE,
  },
  {
    id: "1245",
    name: "William White",
    clockIn: "6:15 AM",
    clockOut: "3:15 PM",
    timeCount: "9:00:00",
    status: Status.SICK,
  },
  {
    id: "1246",
    name: "Megan Harris",
    clockIn: "8:45 AM",
    clockOut: "5:45 PM",
    timeCount: "9:00:00",
    status: Status.LEAVE_REQUEST,
  },
  {
    id: "1247",
    name: "Daniel Clark",
    clockIn: "7:00 AM",
    clockOut: "4:00 PM",
    timeCount: "9:00:00",
    status: Status.ABSENT,
  },
  {
    id: "1248",
    name: "Samantha Lewis",
    clockIn: "6:00 AM",
    clockOut: "3:00 PM",
    timeCount: "9:00:00",
    status: Status.ON_TIME,
  },
  {
    id: "1249",
    name: "Joshua Walker",
    clockIn: "9:00 AM",
    clockOut: "6:00 PM",
    timeCount: "9:00:00",
    status: Status.LATE,
  },
  {
    id: "1250",
    name: "Olivia Young",
    clockIn: "8:30 AM",
    clockOut: "5:30 PM",
    timeCount: "9:00:00",
    status: Status.SICK,
  },
  {
    id: "1251",
    name: "James King",
    clockIn: "7:45 AM",
    clockOut: "4:45 PM",
    timeCount: "9:00:00",
    status: Status.LEAVE_REQUEST,
  },
  {
    id: "1252",
    name: "Avery Scott",
    clockIn: "6:00 AM",
    clockOut: "3:00 PM",
    timeCount: "9:00:00",
    status: Status.ABSENT,
  },
  {
    id: "1253",
    name: "Ella Adams",
    clockIn: "9:15 AM",
    clockOut: "6:15 PM",
    timeCount: "9:00:00",
    status: Status.ON_TIME,
  },
  {
    id: "1254",
    name: "Ethan Baker",
    clockIn: "8:00 AM",
    clockOut: "5:00 PM",
    timeCount: "9:00:00",
    status: Status.LATE,
  },
  {
    id: "1255",
    name: "Chloe Nelson",
    clockIn: "6:30 AM",
    clockOut: "3:30 PM",
    timeCount: "9:00:00",
    status: Status.SICK,
  },
];

const getStatusByKey = (key: Status): StatusInfo => status[key];

export const Table = () => {
  const checkbox = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [selectedPeople, setSelectedPeople] = useState<Person[]>([]);

  const toggleOpen = () => setOpen(!open);

  useLayoutEffect(() => {
    const isIndeterminate =
      selectedPeople.length > 0 && selectedPeople.length < people.length;
    setChecked(selectedPeople.length === people.length);
    setIndeterminate(isIndeterminate);
    if (checkbox.current) {
      checkbox.current.indeterminate = isIndeterminate;
    }
  }, [selectedPeople]);

  function toggleAll() {
    setSelectedPeople(checked || indeterminate ? [] : people);
    setChecked(!checked && !indeterminate);
    setIndeterminate(false);
  }

  const handleCheckboxChange = (
    person: Person,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedPeople(
      event.target.checked
        ? [...selectedPeople, person]
        : selectedPeople.filter((p) => p.id !== person.id)
    );
  };
  return (
    <div className="flow-root">
      <DrawerUser open={open} setOpen={setOpen} />
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className="relative">
            {selectedPeople.length > 0 && (
              <div className="absolute left-14 top-0 flex h-12 items-center space-x-3 bg-white sm:left-12">
                <button
                  type="button"
                  className="inline-flex items-center rounded-full bg-white font-lexend px-4 py-2 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white"
                >
                  Falta
                </button>
                <button
                  type="button"
                  className="inline-flex items-center rounded-full bg-white px-4 py-2 font-lexend text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white"
                >
                  Asistidos
                </button>
              </div>
            )}
            <table className="min-w-full table-fixed divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" className="relative px-7 sm:w-12 sm:px-6">
                    <input
                      type="checkbox"
                      className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                      ref={checkbox}
                      checked={checked}
                      onChange={toggleAll}
                    />
                  </th>
                  <th
                    scope="col"
                    className="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900 font-lexend"
                  >
                    Nombre
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 font-lexend"
                  >
                    Entrada
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 font-lexend"
                  >
                    Salida
                  </th>

                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 font-lexend"
                  >
                    Horas
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 font-lexend"
                  >
                    Estado
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {people.map((person) => (
                  <tr
                    key={person.id}
                    className={
                      selectedPeople.includes(person) ? "bg-gray-50" : undefined
                    }
                  >
                    <td className="relative px-7 sm:w-12 sm:px-6">
                      {selectedPeople.includes(person) && (
                        <div className="absolute inset-y-0 left-0 w-0.5 bg-blue-600" />
                      )}
                      <input
                        type="checkbox"
                        className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                        value={person.id}
                        checked={selectedPeople.includes(person)}
                        onChange={(e) => handleCheckboxChange(person, e)}
                      />
                    </td>
                    <td
                      className={classNames(
                        "whitespace-nowrap py-4 pr-3 text-sm font-medium font-lexend",
                        selectedPeople.includes(person)
                          ? "text-blue-600"
                          : "text-gray-900"
                      )}
                    >
                      {person.name}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 font-lexend">
                      {person.clockIn}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 font-lexend">
                      {person.clockOut}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 font-lexend">
                      {person.timeCount}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm ">
                      <span
                        className=" px-4 py-2 font-lexend text-sm rounded-full"
                        style={{
                          backgroundColor: getStatusByKey(person.status)
                            .colorSoft,
                          color: getStatusByKey(person.status).colorHigh,
                        }}
                      >
                        {person.status}
                      </span>
                    </td>
                    <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                      <button
                        className="rounded-full p-1.5 hover:bg-gray-200 bg-gray-100 transition-colors"
                        onClick={toggleOpen}
                      >
                        <ChevronRightIcon
                          className="size-4 text-gray-500"
                          strokeWidth={2.5}
                        />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
