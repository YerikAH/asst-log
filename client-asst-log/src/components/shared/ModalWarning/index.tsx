import { XMarkIcon } from "@heroicons/react/24/outline";

interface Props {
  toggleOpen: () => void;
  open: boolean;
  title: string;
  message: string;
  buttonBgColor?: string;
  textColorButton?: string;
  timer?: number;
}
export const ModalWarning = ({
  open,
  toggleOpen,
  title,
  message,
  buttonBgColor,
  textColorButton,
  timer = 3000,
}: Props) => {
  return (
    <div
      className={`w-screen h-screen border border-slate-100 bg-[#fff7]  backdrop-blur-xl flex items-center justify-center absolute z-50 transition-opacity ${
        open ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div className="bg-white rounded-3xl max-w-sm w-full shadow relative overflow-hidden">
        <div
          className={`w-full h-[3px] top-0 left-0`}
          style={{ backgroundColor: buttonBgColor }}
        ></div>
        <div className="w-full flex justify-end px-6 pt-4">
          <button
            className="p-1 rounded-full bg-white hover:bg-gray-100  transition-all"
            onClick={toggleOpen}
          >
            <XMarkIcon className="size-4 text-gray-500" />
          </button>
        </div>
        <div className="mt-4 px-6">
          <h2 className="font-lexend text-base text-gray-900 font-semibold text-center">
            {title}
          </h2>
          <p className="font-lexend text-sm mt-2 text-gray-500 text-center">
            {message}
          </p>
        </div>
        <div className="pb-8 px-6">
          <button
            className={`w-full rounded-full px-4 py-3 mt-8 font-medium text-sm font-lexend`}
            onClick={toggleOpen}
            style={{ backgroundColor: buttonBgColor, color: textColorButton }}
          >
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
};
