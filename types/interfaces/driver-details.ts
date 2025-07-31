export interface DriverDetails {
  id: string;
  driverId: string;
  fullName: string;
  profilePicture: string;
  email: string;
  phone: string;
  cityDriveIn: string;
  registerDate: string;
  averageRating: number;
  totalRatings: number;
  status: 'ACTIVE' | 'INACTIVE';
  isOnline: boolean;
  licenseNumber: string;
  licenseImage: string;
  licenseExpiry: string;
  applicationStatus: 'APPROVED' | 'PENDING_APPROVAL' | 'REJECTED' | 'SUSPENDED';
  vehicle: {
    image: string;
    brand: string;
    model: string;
    year: string;
    color: string;
  };
}

export interface DriverDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  driver: DriverDetails | null;
}

export interface DriverInfoCardProps {
  driver: DriverDetails;
}
