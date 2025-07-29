export interface Transaction {
  id: string;
  transactionId: string;
  amount: number;
  status: 'COMPLETED' | 'PENDING' | 'FAILED';
  paymentMethod: string;
  passenger: string;
  passengerAvatar: string;
  driver: string;
  driverAvatar: string;
  dateTime: string;
  rideId: string;
}

export interface TransactionsFilterState {
  search: string;
  status: string;
  paymentMethod: string;
  dateFrom: string;
  dateTo: string;
  amountMin: string;
  amountMax: string;
}

export interface TransactionFiltersProps {
  filters: TransactionsFilterState;
  onFilterChange: (key: keyof TransactionsFilterState, value: string) => void;
  onResetFilters: () => void;
}

export interface TransactionTrendData {
  day: string;
  revenue: number;
  transactions: number;
}

export interface TransactionVolumeData {
  month: string;
  completed: number;
  pending: number;
  failed: number;
}

export interface PaymentMethodData {
  method: string;
  count: number;
  percentage: number;
}

export interface TransactionLineChartProps {
  data: TransactionTrendData[];
  title: string;
}

export interface TransactionBarChartProps {
  data: TransactionVolumeData[];
  title: string;
}

export interface TransactionTooltipProps {
  active?: boolean;
  payload?: Array<{
    value: number;
    name: string;
    color: string;
  }>;
  label?: string;
}
