export interface SweetAlertProps {
  title: string;
  text?: string;
  html?: string; // Optional if you want to support HTML
  icon: 'success' | 'error' | 'warning' | 'info' | 'question';
  confirmButtonText?: string;
  cancelButtonText?: string;
  showCancelButton?: boolean;
  onConfirm?: () => void;
  onCancel?: () => void;
}

export interface User {
  token?: string;
}

export type Meta = {
  title: string;
  description?: string;
  icon?: string;
};
