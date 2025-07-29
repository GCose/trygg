export interface Ride {
  id: string;
  rideId: string;
  status: 'COMPLETED' | 'ACTIVE' | 'CANCELLED';
  passenger: string;
  passengerAvatar: string;
  driver: string;
  driverAvatar: string;
  pickupLocation: string;
  dropoffLocation: string;
  distance: number;
  duration: number;
  fare: number;
  dateTime: string;
}

export interface RidesFilterState {
  search: string;
  status: string;
  dateFrom: string;
  dateTo: string;
}

export interface RideFiltersProps {
  filters: RidesFilterState;
  onFilterChange: (key: keyof RidesFilterState, value: string) => void;
  onResetFilters: () => void;
}
