import type { Meta } from '@/types';

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  icon: string;
}

export interface DashboardLayoutProps {
  children?: React.ReactNode;
  title?: string;
  meta: Meta;
  role: 'SUPER' | 'SUB';
}

export interface StatsCardProps {
  title: string;
  value: string | number;
  icon: string;
}

export interface TableColumn {
  key: string;
  label: string;
  render?: (value: unknown, row: Record<string, unknown>) => React.ReactNode;
}

export interface ListTableProps {
  columns: TableColumn[];
  data: Record<string, unknown>[];
  title?: string;
}

export interface ExtendedListTableProps extends ListTableProps {
  onRowClick?: (row: Record<string, unknown>) => void;
}
