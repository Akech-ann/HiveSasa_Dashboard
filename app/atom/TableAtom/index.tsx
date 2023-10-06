'use client'
import React from 'react';
type TableColumn = {
  header: string;
  key: string;
};
type TableProps = {
  columns: TableColumn[];
  data: any[];
};
const Table: React.FC<TableProps> = ({ columns, data }) => {
  return (
    <table className='w-2/3 min-w-full divide-y divide-gray-800'>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th
              key={index}
              className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
            >
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className='bg-white divide-y divide-gray-800'>
        {data.map((item, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column, colIndex) => (
              <td
                key={colIndex}
                className={`px-6 py-4 whitespace-nowrap ${
                  colIndex === columns.length - 1 ? 'condition-cell' : ''
                }`}
              >
                {colIndex === columns.length - 1 ? (
                  <ConditionBadge condition={item[column.key]} />
                ) : (
                  item[column.key]
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
type ConditionBadgeProps = {
  condition: string;
};
const ConditionBadge: React.FC<ConditionBadgeProps> = ({ condition }) => {
  let colorClass = '';
  switch (condition.toLowerCase()) {
    case 'optimal':
      colorClass = 'bg-custom-orange text-white';
      break;
    case 'above':
      colorClass = 'bg-green-700 text-white px-6';
      break;
    case 'below':
      colorClass = 'bg-red-800 text-white px-6';
      break;
    default:
      break;
  }
  return (
    <span
    className={`rounded-full flex items-center text-sm px-5 hover:text-gray-600 text-white py-2 w-[100px] ${colorClass}`}
    >
      {condition}
    </span>
  );
};
export default Table;





















