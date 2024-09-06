import { ClockIcon, TrashIcon } from "@heroicons/react/20/solid";

export const Day = () => {
  return (
    <fieldset>
      <div className="space-y-5">
        <div className="relative flex items-center gap-8 w-full justify-between">
          <div className="flex items-center gap-8">
            <div className="flex relative items-start">
              <div className="flex h-6 items-center">
                <input
                  id="comments"
                  name="comments"
                  type="checkbox"
                  aria-describedby="comments-description"
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-indigo-600"
                />
              </div>
              <div className="ml-3 text-sm leading-6 ">
                <label
                  htmlFor="comments"
                  className="font-medium text-gray-900 font-lexend"
                >
                  Lunes
                </label>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                  <ClockIcon className="size-4 text-gray-500" />
                </div>
                <input
                  type="time"
                  id="end-time-monday"
                  name="end-time-monday"
                  className="bg-white border leading-none border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-lexend"
                  min="09:00"
                  max="18:00"
                  value="00:00"
                  required
                />
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                  <ClockIcon className="size-4 text-gray-500" />
                </div>
                <input
                  type="time"
                  id="end-time-monday"
                  name="end-time-monday"
                  className="bg-white border leading-none border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-lexend"
                  min="09:00"
                  max="18:00"
                  value="00:00"
                  required
                />
              </div>
            </div>
          </div>

          <button className="bg-white hover:bg-zinc-100 rounded-full p-1 transition-all group">
            <TrashIcon className="size-5 text-zinc-500 group-hover:text-zinc-700" />
          </button>
        </div>
      </div>
    </fieldset>
  );
};
