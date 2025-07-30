export interface RideCategory {
  id: string;
  name: string;
  description: string;
  image: string;
  seats: number;
  basePrice: number;
  pricePerKm: number;
  pricePerMinute: number;
  minimumFare: number;
  extraFare: number;
  nightTimePercentage: number;
  sortOrder: number;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface KmRange {
  id: string;
  categoryId: string;
  fromKm: number;
  toKm: number;
  pricePerKm: number;
  createdAt: string;
}

export interface RideCategoriesFilterState {
  search: string;
  status: string;
  seats: string;
}

export interface RideCategoriesFilterProps {
  filters: RideCategoriesFilterState;
  onFilterChange: (key: keyof RideCategoriesFilterState, value: string) => void;
  onResetFilters: () => void;
}

export interface CategoryFormData {
  name: string;
  description: string;
  image: string;
  seats: number;
  basePrice: number;
  pricePerKm: number;
  pricePerMinute: number;
  minimumFare: number;
  extraFare: number;
  nightTimePercentage: number;
  active: boolean;
}

export interface NewRangeFormData {
  fromKm: number;
  toKm: number;
  pricePerKm: number;
}

export interface CategoryFormProps {
  onSubmit: (data: CategoryFormData) => void;
  initialData?: Partial<CategoryFormData>;
  isEditing?: boolean;
}

export interface NewRangeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: NewRangeFormData) => void;
  categoryId: string;
}

export interface CategoryDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  category: RideCategory | null;
}

export interface RideCategoriesComponentProps {
  canCreate?: boolean;
  canEdit?: boolean;
  canDelete?: boolean;
}
