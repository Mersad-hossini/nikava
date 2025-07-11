export type Column<T> = {
  title: string;
  dataIndex: string;
  render?: (value: unknown, row: T) => React.ReactNode;
  sortable?: boolean;
};

// پراپس‌های جدول
export type DataTableProps<T extends { id: number | string }> = {
  datas: T[];
  columns: Column<T>[];
  onEdit?: (id: number | string) => void;
  onDelete?: (id: number | string) => void;
  onView?: (id: number | string) => void;
};

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

export type ProductProps = {
  id: number | string;
  name: string;
  image: string;
  price: number;
  stock: number;
  category: string;
  active: boolean;
};

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
