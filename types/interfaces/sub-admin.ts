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

export interface DynamicAdminConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  actionState: AdminActionState | null;
}

export interface DropdownProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

export interface ActionDropdownProps {
  status: 'ACTIVE' | 'SUSPENDED';
  onStatusChange: () => void;
}

export interface AdminActionState {
  adminId: string;
  fullName: string;
  email: string;
  currentStatus: 'ACTIVE' | 'SUSPENDED';
  actionType: 'SUSPEND' | 'ACTIVATE';
}
