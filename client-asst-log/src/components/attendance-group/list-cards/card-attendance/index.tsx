import { textToRoute } from "@/utils";
import { UsersIcon } from "@heroicons/react/20/solid";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { Link } from "react-router-dom";

interface Props {
  name: string;
  value: number;
  total: number;
  color: string;
  icon: React.ElementType;
  href: string;
}

export const CardAttendance = ({
  name,
  value,
  total,
  color,
  icon: Icon,
  href,
}: Props) => {
  href.toLowerCase;
  return (
    <Link
      to={textToRoute(href)}
      className="bg-white rounded-3xl p-5 size-48 flex justify-between flex-col  cursor-pointer  group hover:scale-105  transition-all"
    >
      <div className="flex justify-between items-start w-full h-full">
        <div
          className="size-12 rounded-xl flex items-center justify-center bg-green-500 transition-all"
          style={{ backgroundColor: color }}
        >
          <Icon className="size-8 text-white" />
        </div>

        <span className="flex px-2 py-1 rounded-full bg-slate-50 justify-center items-center gap-2">
          <UsersIcon className="text-gray-500 size-4" />
          <p className="text-xs font-lexend text-gray-500">{total}</p>
        </span>
      </div>
      <div className="mt-4 w-full">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-900 font-medium font-lexend text-sm text-left">
              {name}
            </p>
            <span className="font-lexend text-xs text-gray-500">
              {value} registros
            </span>
          </div>
          <div className="size-4">
            <CircularProgressbar
              value={value}
              maxValue={total}
              minValue={0}
              text=""
              strokeWidth={20}
              styles={buildStyles({ pathColor: color })}
            />
          </div>
        </div>
      </div>
    </Link>
  );
};
