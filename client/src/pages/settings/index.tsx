import { useTitle } from "@/hook";
import { useTitleStore } from "@/services/config";
import { UserCircleIcon } from "@heroicons/react/20/solid";
import { useEffect } from "react";

function Settings() {
  const { changeTitle } = useTitle();
  const changeTitleNavigation = useTitleStore((state) => state.changeTitle);

  useEffect(() => {
    changeTitle("Configuración ⚙️ - AsstLog");
    changeTitleNavigation("Configuración ⚙️");
  }, [changeTitle, changeTitleNavigation]);
  return (
    <div className="max-w-5xl mx-auto">
      <form className="h-full mb-12">
        <div className="overflow-hidden">
          <div className=" bg-white px-8 py-8 rounded-3xl">
            <h2 className="text-base font-semibold leading-7 text-gray-900 font-lexend">
              Tu información
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600 font-lexend">
              This information will be displayed publicly so be careful what you
              share.
            </p>

            <div className="mt-10 grid  divide-x divide-slate-100 grid-cols-2">
              <div className="w-full h-full pr-4">
                <div className="w-full">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-900 font-lexend"
                  >
                    Nombre de tu empresa
                  </label>
                  <div className="mt-2">
                    <input
                      id="username"
                      name="username"
                      type="text"
                      placeholder="janesmith"
                      autoComplete="bussiness"
                      className="flex-1 border-0 bg-transparent py-2 px-6 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6 font-lexend flex rounded-full shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-inset focus:ring-indigo-600 focus:ring-2 w-full"
                    />
                  </div>
                </div>

                <div className="w-full mt-4">
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium leading-6 text-gray-900 font-lexend"
                  >
                    Descripción de tu empresa
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="about"
                      name="about"
                      rows={4}
                      className="block w-full px-6 rounded-xl border-0 py-2 resize-none text-gray-900 shadow-sm font-lexend ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={""}
                      placeholder="Write a few sentences about yourself."
                    />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-600 font-lexend">
                    Write a few sentences about yourself.
                  </p>
                </div>
              </div>
              <div className="w-full h-full pl-4">
                <div className="flex flex-wrap gap-4">
                  <div className="">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium leading-6 text-gray-900 font-lexend"
                    >
                      Ingresa tus nombre
                    </label>
                    <div className="mt-2">
                      <input
                        id="first-name"
                        name="first-name"
                        type="text"
                        placeholder="Ej. Juan"
                        autoComplete="given-name"
                        className="block w-full rounded-full border-0 px-6 py-2 font-lexend text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium leading-6 text-gray-900 font-lexend"
                    >
                      Ingresa tu apellido
                    </label>
                    <div className="mt-2">
                      <input
                        id="last-name"
                        name="last-name"
                        placeholder="Ej. Sanchez"
                        type="text"
                        autoComplete="family-name"
                        className="block w-full rounded-full border-0 py-2 px-6 font-lexend text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900 font-lexend"
                  >
                    Ingresa tu correo electronico
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="Ej. email@gmail.com"
                      className="block w-full rounded-full border-0 py-2 px-6 font-lexend text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label
                    htmlFor="photo"
                    className="block text-sm font-medium leading-6 text-gray-900 font-lexend"
                  >
                    Photo
                  </label>
                  <div className="mt-2 flex items-center gap-x-3">
                    <UserCircleIcon
                      aria-hidden="true"
                      className="h-12 w-12 text-gray-300"
                    />
                    <button
                      type="button"
                      className="rounded-full bg-white px-2.5 py-1.5 text-sm font-semibold font-lexend text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                      Change
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8 bg-white rounded-3xl mt-10 divide-x">
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
                    className="block w-full rounded-full border-0 font-lexend bg-white py-2 px-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
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
                    className="block w-full rounded-full border-0 font-lexend bg-white py-2 px-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
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
                    className="block w-full rounded-full font-lexend border-0 bg-white py-2 px-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>

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
                    className="block w-full rounded-full border-0 bg-white py-2 px-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 font-lexend focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 flex">
              <button
                type="submit"
                className="rounded-full bg-indigo-500 px-6 font-lexend py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Log out other sessions
              </button>
            </div>
          </form>
        </div>

        <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8 mt-10 rounded-3xl bg-white divide-x">
          <div>
            <h2 className="text-base font-semibold leading-7 text-gray-900 font-lexend">
              Delete account
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600 font-lexend">
              No longer want to use our service? You can delete your account
              here. This action is not reversible. All information related to
              this account will be deleted permanently.
            </p>
          </div>

          <form className="flex items-start px-6">
            <button
              type="submit"
              className="rounded-full bg-red-500 px-6 py-3 font-lexend text-sm font-semibold text-white shadow-sm hover:bg-red-400"
            >
              Yes, delete my account
            </button>
          </form>
        </div>
      </form>
    </div>
  );
}

export default Settings;
