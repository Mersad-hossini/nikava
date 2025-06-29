import { LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
  title: string;
  value: string;
};

export default function DashboardCard({ icon: Icon, title, value }: Props) {
  return (
    <div className="w-32 h-32 bg-zinc-300 rounded-xl border border-zinc-300 shadow flex flex-col items-center justify-center text-center p-3">
      <Icon size={28} className="mb-2" />
      <span className="text-xs">{value}</span>
      <span className="text-sm font-semibold">{title}</span>
    </div>
  );
}
