import logo from "@/assets/logo.png";
import google from "@/assets/icon/google.png";
import { useTitle } from "@/hook";
import { useEffect, useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/16/solid";

function Register() {
  const { changeTitle } = useTitle();
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword(!showPassword);

  useEffect(() => {
    changeTitle("Registro - AsstLog");
  }, [changeTitle]);
  return (
    <main className="bg-slate-100 h-screen overflow-auto">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 items-center">
        <div className=" py-24 px-8 rounded-3xl w-full max-w-[500px] bg-white">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
            <img className="h-12 mx-auto" src={logo} alt="Your Company" />
            <h2 className="mt-12 font-lexend text-left text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Registrate con tu cuenta
            </h2>
          </div>

          <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div className="flex items-center justify-center gap-4 flex-row">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-gray-900 font-lexend"
                  >
                    Ingresa tu nombre:
                  </label>
                  <div className="mt-2">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Ej. Jorge"
                      required
                      className="block px-4 w-full outline-none rounded-full border-0 py-3 text-gray-500 font-lexend shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="lastname"
                    className="block text-sm font-medium leading-6 text-gray-900 font-lexend"
                  >
                    Ingresa tu apellido:
                  </label>
                  <div className="mt-2">
                    <input
                      id="lastname"
                      name="lastname"
                      type="text"
                      autoComplete="cc-name"
                      placeholder="Ej. Perez"
                      required
                      className="block px-4 w-full rounded-full outline-none border-0 py-3 text-gray-500 font-lexend shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900 font-lexend"
                >
                  Ingresa tu correo electrónico:
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Ej. example.alias.com"
                    required
                    className="block px-4 w-full rounded-full outline-none border-0 py-3 text-gray-500 font-lexend shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900 font-lexend"
                  >
                    Ingresa tu contraseña:
                  </label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-blue-600 hover:text-blue-500 font-lexend"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2 relative">
                  <input
                    id="password"
                    name="password"
                    type={!showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    placeholder="Ej. 5nvBSoh!gsa"
                    className="block font-lexend px-4 w-full outline-none rounded-full border-0 py-3 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                  <button
                    type="button"
                    className="px-2 h-full flex items-center justify-center absolute right-4 top-0"
                    onClick={toggleShowPassword}
                  >
                    {showPassword ? (
                      <EyeIcon className="size-4 text-gray-500" />
                    ) : (
                      <EyeSlashIcon className="size-4 text-gray-500" />
                    )}
                  </button>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full font-lexend justify-center rounded-full bg-blue-600 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Registrarse
                </button>
                <div className="relative mt-10">
                  <div
                    className="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div className="w-full border-t border-gray-200" />
                  </div>
                  <div className="relative flex justify-center text-sm font-medium leading-6">
                    <span className="bg-white px-6 text-gray-900 font-lexend">
                      O continua con:
                    </span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    type="submit"
                    className="flex items-center w-full gap-2 mt-4 font-lexend justify-center rounded-full bg-white px-3 py-3 text-sm font-semibold leading-6 border border-gray-200 text-gray-900  shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                  >
                    <img alt="google" src={google} className="size-5" />
                    <span>Google</span>
                  </button>
                </div>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500 font-lexend">
              ¿Ya tienes una cuenta?{" "}
              <a
                href="#"
                className="font-semibold leading-6 underline text-blue-600 hover:text-blue-500 font-lexend"
              >
                Ingresar
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Register;
