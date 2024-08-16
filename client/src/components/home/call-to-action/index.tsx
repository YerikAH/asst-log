import banner from "@/assets/banner.jpg";

export const CallToAction = () => {
  return (
    <div className=" relative overflow-hidden">
      <div
        className="bg-fixed bg-no-repeat bg-center bg-cover bg-url absolute w-full h-full top-0 left-0 -z-[1]"
        style={{ backgroundImage: `url(${banner})` }}
      />
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-lexend">
            Boost your productivity.
            <br />
            Start using our app today.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-indigo-200 font-lexend">
            Incididunt sint fugiat pariatur cupidatat consectetur sit cillum
            anim id veniam aliqua proident excepteur commodo do ea.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-full bg-white px-10 py-4 text-sm font-semibold text-blue-600 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white font-lexend"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
