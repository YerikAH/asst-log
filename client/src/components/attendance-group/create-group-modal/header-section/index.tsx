import { PaintBrushIcon } from "@heroicons/react/20/solid";

export const HeaderSection = () => (
  <div className="grid grid-cols-[auto_auto] items-start justify-start gap-4">
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600">
      <PaintBrushIcon aria-hidden="true" className="h-6 w-6 text-white" />
    </div>
    <div>
      <h3 className="text-base font-lexend text-gray-900 font-semibold">
        Crea tu propia asistencia
      </h3>
      <p className="text-sm font-lexend text-gray-500">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
        nostrum, earum pariatur vel nihil mollitia.
      </p>
    </div>
  </div>
);
