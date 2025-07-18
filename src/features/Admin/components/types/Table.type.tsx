export type Column<T> = {
  title: string;
  dataIndex: string;
  render?: (value: unknown, row: T) => React.ReactNode;
  sortable?: boolean;
};

export type UserRole = "user" | "admin" | "editor";
export type WithRole = { role: UserRole };

// DataTable Type
export type DataTableProps<T extends { id: number | string }> = {
  datas: T[];
  columns: Column<T>[];
  onEdit?: (id: number | string) => void;
  onDelete?: (id: number | string) => void;
  onView?: (id: number | string) => void;
  onBan?: (id: number | string) => void;
  onRoleChange?: (id: number | string, newRole: UserRole) => void;
  onApprove?: (id: number | string) => void;
  onReply?: (id: number | string, reply: string) => void;
};
// DataRow Type
export type DataRowProps<T extends { id: number | string }> = {
  row: T;
  columns: Column<T>[];
  onEdit?: (id: number | string) => void;
  onDelete?: (id: number | string) => void;
  onView?: (id: number | string) => void;
  onBan?: (id: number | string) => void;
  onRoleChange?: (id: number | string, newRole: UserRole) => void;
  onApprove?: (id: number | string) => void;
  onReply?: (id: number | string, reply: string) => void;
};

// Order Type
export type OrderItem = {
  id: number;
  name: string;
  qty: number;
  unitPrice: number;
  totalPrice: number;
};
export type OrderProps = {
  id: number;
  user: { name: string };
  phone: string;
  createdAt: string;
  totalPrice: number;
  paymentStatus: "paid" | "unpaid";
  deliveryStatus: "pending" | "shipped" | "delivered" | "cancelled";
  address: string;
  shippingTrackingCode?: string;
  note?: string;
  adminNote?: string;
  items: OrderItem[];
};
// Product Type
export type ProductProps = {
  id: number | string;
  name: string;
  image: string;
  price: number;
  stock: number;
  category: string;
  active: boolean;
};
// Discount Type
export type DiscountProps = {
  id: number;
  code: string;
  discountPercent: number;
  usageLimit: number;
  used: number;
  startDate: string;
  endDate: string;
  isActive: boolean;
  type: "code" | "global";
};
// User Type
export type UsersProps = {
  id: number;
  name: string;
  email: string;
  phone_number: string | number;
  role: string;
  orders: string;
  signupAt: string;
  status: boolean;
};
// Comments Type
export type CommentProps = {
  id: number;
  username: string;
  text: string;
  phone_number: string;
  score: number;
  status: boolean;
  createdAt: string;
  reply?: string;
};
export type PartialComment = Pick<CommentProps, "id" | "text" | "reply">;
export type CommentModalData = {
  id: number | string;
  text: string;
  reply?: string;
};

// Category
export type CategoryProps = {
  id: number;
  name: string;
  slug: string;
  status: boolean;
  productCount?: number;
  parentId?: number | null;
};
