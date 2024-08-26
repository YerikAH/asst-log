import { UserCircleIcon } from "@heroicons/react/20/solid";

export const FormInfo = () => {
  return (
    <div className=" bg-white px-8 py-8 rounded-3xl overflow-hidden">
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

      <div className="flex justify-end items-center mt-8">
        <button
          type="submit"
          className="rounded-full bg-indigo-500 px-6 font-lexend py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          Guardar cambios
        </button>
      </div>
    </div>
  );
};
