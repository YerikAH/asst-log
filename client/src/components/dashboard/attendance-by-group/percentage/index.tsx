export const Percentage = () => {
  return (
    <div className="flex lg:flex-col gap-6 flex-wrap justify-center mb-8 lg:mb-0  lg:justify-start">
      <span className="flex items-start justify-start gap-2">
        <div className="size-3 bg-blue-600 rounded-full mt-[4px]"></div>
        <div>
          <h2 className="font-lexend text-gray-900 text-sm font-medium">
            Asistentes (50%)
          </h2>
          <p className="font-lexend text-gray-500 text-sm">30 personas</p>
        </div>
      </span>
      <span className="flex items-start justify-start gap-2">
        <div className="size-3 bg-blue-200 rounded-full mt-[4px]"></div>
        <div>
          <h2 className="font-lexend text-gray-900 text-sm font-medium">
            Tandanzas (25%)
          </h2>
          <p className="font-lexend text-gray-500 text-sm">30 personas</p>
        </div>
      </span>
      <span className="flex items-start justify-start gap-2">
        <div className="size-3 bg-blue-200 rounded-full mt-[4px]"></div>
        <div>
          <h2 className="font-lexend text-gray-900 text-sm font-medium">
            Faltas (5%)
          </h2>
          <p className="font-lexend text-gray-500 text-sm">30 personas</p>
        </div>
      </span>
      <span className="flex items-start justify-start gap-2">
        <div className="size-3 bg-blue-200 rounded-full mt-[4px]"></div>
        <div>
          <h2 className="font-lexend text-gray-900 text-sm font-medium">
            Justificados (30%)
          </h2>
          <p className="font-lexend text-gray-500 text-sm">30 personas</p>
        </div>
      </span>
    </div>
  );
};
