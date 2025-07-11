"use client";

import { Eye, Pencil, Trash2 } from "lucide-react";
import React from "react";
import { Column } from "../types/Table.type";
import getNestedValue from "@/utils/getNestedValue";

type DataRowProps<T extends { id: number | string }> = {
  row: T;
  columns: Column<T>[];
  onEdit?: (id: number | string) => void;
  onDelete?: (id: number | string) => void;
  onView?: (id: number | string) => void;
};

export function DataRow<T extends { id: number | string }>({
  row,
  columns,
  onEdit,
  onDelete,
  onView,
}: DataRowProps<T>) {
  return (
    <tr key={row.id}>
      {columns.map((col) => {
        const rawValue = getNestedValue(row, col.dataIndex);
        return (
          <td key={col.dataIndex} className="py-2 px-3 whitespace-nowrap">
            {col.render
              ? col.render(rawValue, row)
              : typeof rawValue === "string" || typeof rawValue === "number"
              ? rawValue
              : ""}
          </td>
        );
      })}

      {(onEdit || onDelete || onView) && (
        <td className="text-center whitespace-nowrap">
          <div className="flex justify-center gap-2">
            {onEdit && (
              <button
                onClick={() => onEdit(row.id)}
                className="btn btn-xs btn-outline btn-info hover:text-white"
              >
                <Pencil size={16} />
              </button>
            )}
            {onDelete && (
              <button
                onClick={() => onDelete(row.id)}
                className="btn btn-xs btn-outline btn-error hover:text-white"
              >
                <Trash2 size={16} />
              </button>
            )}
            {onView && (
              <button
                onClick={() => onView(row.id)}
                className="btn btn-xs btn-outline btn-primary hover:text-white"
              >
                <Eye size={16} />
              </button>
            )}
          </div>
        </td>
      )}
    </tr>
  );
}
