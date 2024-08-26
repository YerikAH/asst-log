export const FormDeleteAccount = () => {
  return (
    <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8 mt-10 rounded-3xl bg-white divide-x">
      <div>
        <h2 className="text-base font-semibold leading-7 text-gray-900 font-lexend">
          Delete account
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-600 font-lexend">
          No longer want to use our service? You can delete your account here.
          This action is not reversible. All information related to this account
          will be deleted permanently.
        </p>
      </div>

      <form className="flex items-start px-6">
        <button
          type="submit"
          className="rounded-full bg-red-500 px-6 py-3 font-lexend text-sm font-semibold text-white shadow-sm hover:bg-red-400"
        >
          Sí, eliminar mi cuenta
        </button>
      </form>
    </div>
  );
};
