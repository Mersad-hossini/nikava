"use client";

import React, { useState } from "react";
import { usePagination } from "@/hooks/usePagination";
import Pagination from "@/components/ui/Pagination";
import { DataRow } from "./DataRow";
import { DataTableProps } from "../types/Table.type";
import getNestedValue from "@/utils/getNestedValue";

const itemsPerPage = 8;

export default function DataTable<T extends { id: number | string }>(
  {
    datas,
    columns,
    onEdit,
    onDelete,
    onView,
    onBan,
    onRoleChange,
    onApprove,
    onReply,
  }: DataTableProps<T> // ✅ درستش اینه
) {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = (datas ?? []).filter((row) =>
    (columns ?? []).some((col) => {
      const value = String(
        getNestedValue(row, col.dataIndex) ?? ""
      ).toLowerCase();
      return value.includes(search.toLowerCase());
    })
  );

  const { currentItems, totalPages } = usePagination(
    filtered,
    currentPage,
    itemsPerPage
  );

  return (
    <div className="overflow-x-auto rounded-xl border border-zinc-100 shadow-md">
      <div className="p-4 w-full">
        <input
          type="text"
          placeholder="جستجو..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          className="w-full md:max-w-sm h-8 text-sm border px-4 border-gray-200 rounded-xl bg-gray-100 outline-0"
        />
      </div>

      <table className="table table-zebra text-sm min-w-[800px]">
        <thead>
          <tr className="text-gray-500 text-xs">
            {columns.map((col) => (
              <th key={col.dataIndex}>{col.title}</th>
            ))}
            {(onEdit ||
              onDelete ||
              onView ||
              onBan ||
              onRoleChange ||
              onApprove ||
              onReply 
              ) && <th className="text-center">عملیات</th>}
          </tr>
        </thead>
        <tbody>
          {currentItems.map((row) => (
            <DataRow<T>
              key={row.id}
              row={row}
              columns={columns}
              onEdit={onEdit}
              onDelete={onDelete}
              onView={onView}
              onBan={onBan}
              onRoleChange={onRoleChange}
              onApprove={onApprove}
              onReply={onReply}
            />
          ))}
        </tbody>
      </table>

      <div className="mt-6 flex justify-center">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}
