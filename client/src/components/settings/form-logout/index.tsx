export const FormLogout = () => {
  return (
    <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-[300px_auto] lg:px-8 bg-white rounded-3xl mt-10 divide-x">
      <div>
        <h2 className="text-base font-semibold leading-7 text-gray-900 font-lexend">
          Cerrar sesión en otras cuentas
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-600 font-lexend">
          Please enter your password to confirm you would like to log out of
          your other sessions across all of your devices.
        </p>
      </div>

      <form className="px-6 w-full">
        <div className="grid  gap-y-8 ">
          <div className="w-full">
            <label
              htmlFor="logout-password"
              className="block text-sm font-medium leading-6 text-gray-900 font-lexend"
            >
              Tu contraseña
            </label>
            <div className="mt-2">
              <input
                id="logout-password"
                name="password"
                placeholder="Ej. FAWGba235!#%$"
                type="password"
                autoComplete="current-password"
                className="block w-full rounded-full border-0 bg-white py-2 px-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 font-lexend focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 flex">
          <button
            type="submit"
            className="rounded-full bg-blue-500 px-6 font-lexend py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
          >
            Log out other sessions
          </button>
        </div>
      </form>
    </div>
  );
};
