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
