// Icon types
export interface NavLinkProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  href: string;
}

// Product types
export interface ProductType {
  id: number;
  title: string;
  price: string;
  image: string;
}

// auth.ts
export type UserRole = "user" | "admin" | "guest";

export interface AuthUser {
  id: number;
  phone: string;
  role: UserRole;
  token: string;
}
