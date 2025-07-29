export interface Passenger {
  id: string;
  passengerId: string;
  name: string;
  avatar: string;
  phoneNumber: string;
  totalRides: number;
  totalSpent: number;
  averageRating: number;
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
}

export interface PassengersFilterState {
  search: string;
  rating: string;
  status: string;
  fromDate: string;
}

export interface PassengersTableProps {
  passengers: Passenger[];
  onViewDetails: (passengerId: string) => void;
}

export interface PassengerFiltersProps {
  filters: PassengersFilterState;
  onFilterChange: (key: keyof PassengersFilterState, value: string) => void;
  onResetFilters: () => void;
}
