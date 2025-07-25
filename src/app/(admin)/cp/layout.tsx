import AdminBottomNav from "@/features/Admin/components/AdminBottomNav/MobileBottomNav";
import AdminSidebar from "@/features/Admin/components/AdminSidebar/AdminSidebar";
import AdminTopbar from "@/features/Admin/components/AdminTopbar/AdminTopbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex bg-zinc-200 min-h-screen">
      <AdminSidebar />
      <div className="flex-1 flex flex-col mb-8 lg:mb-0 overflow-auto">
        <AdminTopbar />
        <main className="p-4">{children}</main>
      </div>
      <AdminBottomNav />
    </div>
  );
}

// <RoleGuard allowedRoles={["user", "writer", "admin", "owner"]}>
//   <div className="flex bg-zinc-200 min-h-screen">
//     <AdminSidebar />
//     <div className="flex-1 flex flex-col">
//       <AdminTopbar />
//       <main className="p-4">{children}</main>
//     </div>
//     <AdminBottomNav />
//   </div>
// </RoleGuard>