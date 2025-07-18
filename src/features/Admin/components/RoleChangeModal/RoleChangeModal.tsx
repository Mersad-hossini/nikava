// components/RoleChangeModal.tsx
"use client";

import React from "react";
import { UserRole } from "../types/Table.type";

type Props = {
  open: boolean;
  onClose: () => void;
  onConfirm: (newRole: UserRole) => void;
  defaultRole: UserRole;
};

export default function RoleChangeModal({
  open,
  onClose,
  onConfirm,
  defaultRole,
}: Props) {
  const [selectedRole, setSelectedRole] = React.useState<UserRole>(defaultRole);

  React.useEffect(() => {
    setSelectedRole(defaultRole);
  }, [defaultRole]);

  if (!open) return null;

  return (
    <dialog className="modal modal-open">
      <div className="modal-box text-sm">
        <h3 className="font-bold mb-4">تغییر نقش کاربر</h3>

        <select
          className="select select-bordered select-sm w-full mb-4 outline-none focus:outline-none focus:ring-0"
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value as UserRole)}
        >
          <option value="user">کاربر</option>
          <option value="editor">ویرایشگر</option>
          <option value="admin">مدیر</option>
        </select>

        <div className="modal-action justify-start">
          <button
            onClick={() => {
              onConfirm(selectedRole);
              onClose();
            }}
            className="btn btn-success text-white"
          >
            اعمال
          </button>
          <button onClick={onClose} className="btn btn-ghost">
            انصراف
          </button>
        </div>
      </div>
    </dialog>
  );
}