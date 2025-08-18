/**=======================
 * SUB ADMIN INTERFACES
 =======================*/
export interface SubAdmin {
  id: string;
  adminId: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  avatar: string;
  createdAt: string;
  status: 'ACTIVE' | 'SUSPENDED';
}

export interface SubAdminFormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  avatar: string;
}

export interface SubAdminFormProps {
  onCreateAdmin: (data: SubAdminFormData) => void;
}

export interface DropdownProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

export interface ActionDropdownProps {
  onDelete: () => void;
}
