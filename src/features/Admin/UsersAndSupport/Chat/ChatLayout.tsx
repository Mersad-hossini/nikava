import { useState } from "react";
import { ChatProps } from "../../components/types/Table.type";
import { X } from "lucide-react";

export default function ChatLayout({
  users,
  selectedUserId,
  onSelectUser,
  children,
}: ChatProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="relative h-[80vh] rounded-xl overflow-hidden shadow pb-9 md:pb-0">
      <div className="md:hidden p-2 bg-white border-b border-zinc-200 flex justify-between items-center">
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="text-sm text-blue-600 font-medium"
        >
          لیست کاربران
        </button>
        {selectedUserId && (
          <span className="text-zinc-600 text-sm">
            چت با: {users.find((u) => u.id === selectedUserId)?.name}
          </span>
        )}
      </div>

      {/* Wrapper Grid */}
      <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] h-full">
        {/* Backdrop */}
        {isSidebarOpen && (
          <div
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 z-40 bg-black/20 md:hidden"
          />
        )}

        {/* Sidebar */}
        <div
          className={`
            md:relative md:translate-x-0 md:block
            fixed top-0 right-0 h-full z-50 w-64 bg-gray-50 border-l border-zinc-200 p-4 space-y-2 transition-transform duration-300
            ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}
            md:overflow-y-auto
          `}
        >
          {/* Close Button */}
          <div className="md:hidden mb-4 flex justify-end">
            <button onClick={() => setIsSidebarOpen(false)} className="text-sm">
              <X />
            </button>
          </div>

          {users.map((user) => (
            <button
              key={user.id}
              onClick={() => {
                onSelectUser(user.id);
                setIsSidebarOpen(false);
              }}
              className={`block w-full text-right px-4 py-2 rounded hover:bg-zinc-200 cursor-pointer ${
                selectedUserId === user.id ? "bg-zinc-200 font-bold" : ""
              }`}
            >
              {user.name}
            </button>
          ))}
        </div>

        {/* Main content */}
        <div className="p-4 bg-white overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}