type Props = {
  users: { id: number; name: string }[];
  selectedUserId: number | null;
  onSelectUser: (id: number) => void;
  children: React.ReactNode;
};

export default function ChatLayout({
  users,
  selectedUserId,
  onSelectUser,
  children,
}: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] h-[80vh] rounded-xl overflow-hidden shadow">
      {/* Sidebar */}
      <div className="border-l border-zinc-100 bg-gray-50 p-4 space-y-2 overflow-y-auto">
        {users.map((user) => (
          <button
            key={user.id}
            onClick={() => onSelectUser(user.id)}
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
  );
}
