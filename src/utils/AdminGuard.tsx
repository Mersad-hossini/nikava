"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

type Role = "guest" | "user" | "writer" | "admin" | "owner";

interface Props {
  children: React.ReactNode;
  allowedRoles: Role[];
}

export default function RoleGuard({ children, allowedRoles }: Props) {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user || !allowedRoles.includes(user.role)) {
      router.replace("/auth");
    }
  }, [user]);

  if (!user || !allowedRoles.includes(user.role)) return null;

  return <>{children}</>;
}
