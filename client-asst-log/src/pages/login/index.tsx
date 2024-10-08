import logo from "@/assets/logo.png";
import google from "@/assets/icon/google.png";
import { useTitle, useModalWarning } from "@/hook";
import { useEffect, useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/20/solid";
import { ModalWarning } from "@/components/shared";
import { PropsModal } from "@/types";
import { Link } from "react-router-dom";
import { ROUTES } from "@/routes/routes";

function Login() {
  const { changeTitle } = useTitle();
  const [showPassword, setShowPassword] = useState(false);
  const { open, toggleOpen, updateProps, props } = useModalWarning();

  const toggleShowPassword = () => setShowPassword(!showPassword);

  const onFailure = (props: PropsModal) => updateProps(props);
  const onSuccess = () => console.log("Todo salio bien");
  const onSubmit = () => {};

  useEffect(() => {
    changeTitle("Ingreso - AsstLog");
  }, [changeTitle]);

  return (
    <main className="bg-slate-100 h-screen overflow-auto">
      <ModalWarning
        message={props.message}
        open={open}
        title={props.title}
        toggleOpen={toggleOpen}
        buttonBgColor={props.buttonBgColor}
        textColorButton={props.textColorButton}
        timer={3000}
      />
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 items-center">
        <div className=" py-24 px-8 rounded-3xl w-full max-w-[500px] bg-white">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
            <img className="h-12 mx-auto" src={logo} alt="Your Company" />
            <h2 className="mt-12 font-lexend text-left text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Ingresa con tu cuenta
            </h2>
          </div>

          <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6">
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
                    className="block px-6 w-full outline-none rounded-full border-0 py-3 text-gray-500 font-lexend shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
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
                <div className="mt-2 relative ">
                  <input
                    id="password"
                    name="password"
                    type={!showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    placeholder="Ej. 5nvBSoh!gsa"
                    className="block px-6 font-lexend outline-none w-full rounded-full border-0 py-3 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
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
                  Ingresar
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
                      O continua con
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
              ¿Aún no tienes una cuenta?{" "}
              <Link
                to={ROUTES.REGISTER}
                className="font-semibold underline leading-6 text-blue-600 hover:text-blue-500 font-lexend"
              >
                Registrate
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Login;
