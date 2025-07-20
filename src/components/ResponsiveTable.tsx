import React from "react";

export interface TableColumn<T> {
  header: string;
  accessor: keyof T;
  cell?: (row: T) => React.ReactNode;
}

export interface ResponsiveTableProps<T> {
  data: T[];
  columns: TableColumn<T>[];
  adjustTable?: boolean; // New prop to control table width
}

export function ResponsiveTable<T extends Record<string, unknown>>({
  data,
  columns,
  adjustTable = true, // default to full width
}: ResponsiveTableProps<T>) {
  return (
    <div
      className={`overflow-x-auto border border-gray-700 rounded-lg ${
        adjustTable ? "max-w-full" : "max-w-md"
      }`}
    >
      <table className="min-w-full text-sm text-left text-white">
        <thead className="bg-gray-800 text-gray-300">
          <tr>
            {columns.map((col) => (
              <th key={String(col.accessor)} className="px-4 py-2">
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-800">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-900 transition">
              {columns.map((col) => (
                <td key={String(col.accessor)} className="px-4 py-3">
                  {col.cell ? col.cell(row) : String(row[col.accessor])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
