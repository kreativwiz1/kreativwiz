import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
}

export function StatCard({ icon: Icon, label, value }: StatCardProps) {
  return (
    <Card className="flex flex-col items-center p-8 text-center">
      <Icon className="h-12 w-12 text-primary" />
      <h3 className="mt-4 text-3xl font-bold">{value}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{label}</p>
    </Card>
  );
}