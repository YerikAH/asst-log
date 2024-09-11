export const FormChangePassword = () => {
  return (
    <div className="grid max-w-7xl  p-8  bg-white rounded-3xl mt-10 ">
      <div className="divide-x grid-cols-1 gap-x-8  md:grid-cols-3 grid">
        <div>
          <h2 className="text-base font-semibold leading-7 text-gray-900 font-lexend">
            Cambiar contraseña
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600 font-lexend">
            Update your password associated with your account.
          </p>
        </div>

        <form className="md:col-span-2 pl-5">
          <div className="grid grid-cols-1  gap-y-8">
            <div className="">
              <label
                htmlFor="current-password"
                className="block text-sm font-medium leading-6 text-gray-900 font-lexend"
              >
                Ingresa tu contraseña:
              </label>
              <div className="mt-2">
                <input
                  id="current-password"
                  name="current_password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="Ej. GBA22aca$"
                  className="block w-full rounded-full border-0 font-lexend bg-white py-2 px-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="">
              <label
                htmlFor="new-password"
                className="block text-sm font-medium leading-6 text-gray-900 font-lexend"
              >
                Ingresa tu nueva contraseña:
              </label>
              <div className="mt-2">
                <input
                  id="new-password"
                  name="new_password"
                  type="password"
                  autoComplete="new-password"
                  placeholder="Ej. FAWGba235!#%$"
                  className="block w-full rounded-full border-0 font-lexend bg-white py-2 px-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="">
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium leading-6 text-gray-900 font-lexend "
              >
                Confirma tu contraseña nueva:
              </label>
              <div className="mt-2">
                <input
                  id="confirm-password"
                  name="confirm_password"
                  type="password"
                  autoComplete="new-password"
                  placeholder="Ej. FAWGba235!#%$"
                  className="block w-full rounded-full font-lexend border-0 bg-white py-2 px-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="flex justify-end items-center mt-8">
        <button
          type="submit"
          className="rounded-full bg-blue-500 px-6 font-lexend py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
        >
          Cambiar contraseña
        </button>
      </div>
    </div>
  );
};
