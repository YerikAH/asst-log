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
        className="inline-flex w-full justify-center rounded-full px-3 py-3 text-sm font-lexend shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
        Por defecto
      </button>
    </div>
    <div className="flex gap-2 w-fit">
      <button
        type="button"
        onClick={() => setOpen(false)}
        className="inline-flex w-full justify-center rounded-full px-3 py-3 text-sm font-lexend shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
        Cancelar
      </button>
      <button
        type="button"
        className="inline-flex w-full justify-center rounded-full bg-blue-600 px-3 py-3 text-sm font-lexend text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      >
        Guardar cambios
      </button>
    </div>
  </div>
);
