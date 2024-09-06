export const FooterActions = ({
  setOpen,
}: {
  setOpen: (value: boolean) => void;
}) => (
  <div className="mt-5 sm:mt-6 flex justify-between items-center">
    <div>
      <button
        type="button"
        onClick={() => setOpen(false)}
        className=" justify-center rounded-full  py-3 text-sm font-lexend hover:bg-zinc-100 px-6 transition-all"
      >
        Por defecto
      </button>
    </div>
    <div className="flex gap-2">
      <button
        type="button"
        onClick={() => setOpen(false)}
        className="flex   justify-center rounded-full px-6 py-3 text-sm font-lexend shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-all"
      >
        Cancelar
      </button>
      <button
        type="button"
        className="justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-lexend text-white shadow-sm hover:bg-blue-500 focus-visible:outline transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      >
        Guardar cambios
      </button>
    </div>
  </div>
);
