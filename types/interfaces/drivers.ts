export interface Driver {
  id: string;
  driverId: string;
  name: string;
  avatar: string;
  mobileNumber: string;
  rating: number;
  totalTrips: number;
  totalEarning: number;
  status: 'APPROVED' | 'REJECTED' | 'PENDING_APPROVAL' | 'SUSPENDED';
}

export interface DriversFilterState {
  search: string;
  rating: string;
  status: string;
  fromDate: string;
}

export interface StarRatingProps {
  rating: number;
  maxStars?: number;
}

export interface DriverFiltersProps {
  filters: DriversFilterState;
  onFilterChange: (key: keyof DriversFilterState, value: string) => void;
  onResetFilters: () => void;
}
