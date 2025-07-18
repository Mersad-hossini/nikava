"use client";

import { Ban, Check, Eye, Pencil, Trash2, UserCog } from "lucide-react";
import React, { useState } from "react";
import getNestedValue from "@/utils/getNestedValue";
import { DataRowProps, PartialComment } from "../types/Table.type";

import { WithRole } from "../types/Table.type";
import RoleChangeModal from "../RoleChangeModal/RoleChangeModal";
import { CommentModalButton } from "../CommentModalButton/CommentModalButton";

export function DataRow<T extends { id: number | string }>({
  row,
  columns,
  onEdit,
  onDelete,
  onView,
  onBan,
  onRoleChange,
  onApprove,
  onReply,
}: DataRowProps<T>) {
  const [showModal, setShowModal] = useState(false);

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

      {(onEdit ||
        onDelete ||
        onView ||
        onBan ||
        onRoleChange ||
        onApprove ||
        onReply) && (
        <td className="text-center whitespace-nowrap">
          <div className="flex justify-center gap-2">
            {onEdit && (
              <button
                onClick={() => onEdit(row.id)}
                className="btn btn-xs btn-outline btn-info hover:text-white tooltip"
                data-tip="ویرایش"
                aria-label="ویرایش"
              >
                <Pencil size={16} />
              </button>
            )}

            {onRoleChange && "role" in row && (
              <>
                <button
                  onClick={() => setShowModal(true)}
                  className="btn btn-xs btn-outline btn-warning hover:text-white tooltip"
                  data-tip="تغییر نقش"
                >
                  <UserCog size={14} />
                </button>

                {showModal && (
                  <RoleChangeModal
                    open={showModal}
                    onClose={() => setShowModal(false)}
                    onConfirm={(newRole) => onRoleChange(row.id, newRole)}
                    defaultRole={(row as WithRole).role}
                  />
                )}
              </>
            )}
            {onReply && "text" in row && (
              <CommentModalButton comment={row as PartialComment} />
            )}

            {onApprove && (
              <button
                onClick={() => onApprove(row.id)}
                className="btn btn-xs btn-outline btn-success hover:text-white tooltip"
                data-tip="تأیید نظر"
                aria-label="تأیید نظر"
              >
                <Check size={16} />
              </button>
            )}
            {onDelete && (
              <button
                onClick={() => onDelete(row.id)}
                className="btn btn-xs btn-outline btn-error hover:text-white tooltip"
                data-tip="حذف"
                aria-label="حذف"
              >
                <Trash2 size={16} />
              </button>
            )}
            {onView && (
              <button
                onClick={() => onView(row.id)}
                className="btn btn-xs btn-outline btn-primary hover:text-white tooltip"
                data-tip="نمایش اطلاعات"
                aria-label="نمایش اطلاعات"
              >
                <Eye size={16} />
              </button>
            )}
            {onBan && (
              <button
                onClick={() => onBan(row.id)}
                className="btn btn-xs btn-outline btn-error hover:text-white tooltip"
                data-tip="بن"
                aria-label="بن کاربر"
              >
                <Ban size={16} />
              </button>
            )}
          </div>
        </td>
      )}
    </tr>
  );
}
