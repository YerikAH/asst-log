import { BookOpenIcon, PencilIcon } from "@heroicons/react/24/solid";
import { CardAttendance } from "./card-attendance";
import { ButtonOpenModal } from "./button-open-modal";

const data = [
  {
    name: "Desarrolladores",
    total: 20,
    value: 15,
    color: "#22c55e",
    icon: PencilIcon,
  },
  {
    name: "Recursos humanos",
    total: 30,
    value: 14,
    color: "#0ea5e9",
    icon: BookOpenIcon,
  },
];

export const ListCards = () => (
  <div className="flex flex-wrap justify-start items-center mt-8 gap-4">
    {data.map((item, idx) => (
      <CardAttendance
        color={item.color}
        href={item.name}
        icon={item.icon}
        name={item.name}
        total={item.total}
        value={item.value}
        key={idx}
      />
    ))}
    <ButtonOpenModal />
  </div>
);
