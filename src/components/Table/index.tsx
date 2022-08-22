import React from "react";

interface Column {
  label: string;
  value: string;
  className?: string;
  render?: any,
}

export interface TableProps {
  columns: Column[];
  data: any[];
  className?: string;
}

export const Table: React.FC<TableProps> = ({
  columns,
  data,
  className,
}: TableProps) => {
  return (
    <div className="w-full overflow-x-auto">
      <table className={className}>
        <thead>
          <tr className="border-b">
            {
              columns.map((column) => (
                <th key={column.value} className={`text-left p-3 text-black-400 text-sm min-w-20 pr-4 ${column.className}`}>
                  <div className="relative">
                    {column.label}
                  </div>
                </th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {
            data.length ? data.map((row, index) => (
              <tr key={index} className="border-b" data-testid="table-row">
                {
                  columns.map((column) => (
                    <td key={column.value} className="text-left p-3">
                      {column.render ? column.render(row[column.value], row) : row[column.value]}
                    </td>
                  ))
                }
              </tr>
            )) : (
              <tr>
                <td
                  colSpan={columns.length}
                >
                  <div className="flex min-h-40 justify-center items-center text-lg">
                    No Data
                  </div>
                </td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
};
