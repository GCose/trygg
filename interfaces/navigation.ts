export interface NavigationItem {
  readonly id: string;
  readonly label: string;
  readonly href: string;
  readonly icon: string;
}

export interface AdminLayoutProps {
  readonly children: React.ReactNode;
  readonly title?: string;
}

export interface StatsCardProps {
  readonly title: string;
  readonly value: string | number;
  readonly icon: string;
  readonly trend?: {
    readonly value: number;
    readonly isPositive: boolean;
  };
}

export interface TableColumn {
  readonly key: string;
  readonly label: string;
  readonly render?: (
    value: unknown,
    row: Record<string, unknown>
  ) => React.ReactNode;
}

export interface ListTableProps {
  readonly columns: TableColumn[];
  readonly data: Record<string, unknown>[];
  readonly title?: string;
  readonly maxHeight?: string;
}
