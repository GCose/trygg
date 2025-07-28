export interface SubAdmin {
  id: string;
  adminId: string;
  fullName: string;
  email: string;
  avatar: string;
  createdAt: string;
  status: 'ACTIVE' | 'SUSPENDED';
}

export interface SubAdminFormData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  avatar: string;
}

export interface SubAdminFormProps {
  onCreateAdmin: (data: SubAdminFormData) => void;
}

export interface SubAdminDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  admin: SubAdmin | null;
  onUpdate: (adminId: string) => void;
  onDelete: (adminId: string) => void;
}

export interface DropdownProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

export interface ActionDropdownProps {
  onViewDetails: () => void;
  onEdit: () => void;
  onDelete: () => void;
}
