import { FilterTable } from "./filter-table";
import { Table } from "./table";

export const AttendeeTable = () => {
  return (
    <div className="px-4 py-4 border rounded-3xl mt-8 mb-8">
      <FilterTable />
      <Table />
    </div>
  );
};
