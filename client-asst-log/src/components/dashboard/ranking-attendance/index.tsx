const people = [
  {
    name: "Lindsay Walton",
    id: "DEV-654",
    group: "Desarrolladores",
    total_attendance: "54",
    last_attendance: "07-05-2024",
  },
  {
    name: "Carlos Ramírez",
    id: "MK-432",
    group: "Marketing",
    total_attendance: "48",
    last_attendance: "07-04-2024",
  },
  {
    name: "Marta González",
    id: "FIN-982",
    group: "Finanzas",
    total_attendance: "52",
    last_attendance: "07-06-2024",
  },
  {
    name: "Javier Hernández",
    id: "RH-214",
    group: "Recursos Humanos",
    total_attendance: "50",
    last_attendance: "07-06-2024",
  },
  {
    name: "Ana López",
    id: "OP-189",
    group: "Operaciones",
    total_attendance: "49",
    last_attendance: "07-05-2024",
  },
  {
    name: "Laura Méndez",
    id: "DEV-123",
    group: "Desarrolladores",
    total_attendance: "53",
    last_attendance: "07-06-2024",
  },
  {
    name: "Roberto Sánchez",
    id: "MK-347",
    group: "Marketing",
    total_attendance: "45",
    last_attendance: "07-03-2024",
  },
  {
    name: "Sofía Rivera",
    id: "FIN-876",
    group: "Finanzas",
    total_attendance: "51",
    last_attendance: "07-04-2024",
  },
  {
    name: "Fernando Ortega",
    id: "RH-673",
    group: "Recursos Humanos",
    total_attendance: "47",
    last_attendance: "07-02-2024",
  },
  {
    name: "Isabel Jiménez",
    id: "OP-335",
    group: "Operaciones",
    total_attendance: "50",
    last_attendance: "07-04-2024",
  },
  {
    name: "Mario Torres",
    id: "DEV-987",
    group: "Desarrolladores",
    total_attendance: "55",
    last_attendance: "07-06-2024",
  },
  {
    name: "Valeria Cruz",
    id: "MK-659",
    group: "Marketing",
    total_attendance: "46",
    last_attendance: "07-05-2024",
  },
];
export const RankingAttendance = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 bg-white rounded-3xl py-8 mt-4 ">
      <h2 className="text-base font-semibold font-lexend text-gray-900">
        Ranking de asistencias
      </h2>
      <div className="flow-root mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-0 font-lexend"
                  >
                    Posición
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 font-lexend"
                  >
                    Nombre
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 font-lexend"
                  >
                    Identificación
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 font-lexend"
                  >
                    Grupo
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 font-lexend"
                  >
                    Asistencias
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 font-lexend"
                  >
                    Ultima asistencia
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {people.map((person, idx) => (
                  <tr key={person.id}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-center flex items-center justify-center text-sm font-medium text-gray-700 sm:pl-0 font-lexend">
                      {idx === 0 ? (
                        <span className="bg-yellow-100 text-yellow-600 py-1 px-4 gap-1 w-fit rounded-full flex items-center justify-center">
                          🥇
                          {idx + 1}
                        </span>
                      ) : idx === 1 ? (
                        <span className="bg-slate-100 text-slate-600 py-1 px-4 gap-1 w-fit rounded-full flex items-center justify-center">
                          🥈
                          {idx + 1}
                        </span>
                      ) : idx === 2 ? (
                        <span className="bg-orange-100 text-orange-600 py-1 px-4 gap-1 w-fit rounded-full flex items-center justify-center">
                          🥉
                          {idx + 1}
                        </span>
                      ) : (
                        <span className="bg-gray-50 text-gray-500 py-1 px-4 gap-1 w-fit rounded-full flex items-center justify-center">
                          {idx + 1}
                        </span>
                      )}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 font-lexend">
                      {person.name}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 font-lexend">
                      {person.id}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 font-lexend">
                      {person.group}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 font-lexend">
                      {person.total_attendance}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 font-lexend">
                      {person.last_attendance}
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
