import Sidebar from "@/features/Dashboard/components/Sidebar/Sidebar";
import Topbar from "@/features/Dashboard/components/TopBar/Topbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex bg-zinc-200 min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
}
