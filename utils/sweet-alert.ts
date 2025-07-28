import { SweetAlertProps } from '@/src/types';
import Swal from 'sweetalert2';

export const showAlert = ({
  title,
  text,
  icon,
  confirmButtonText = 'OK',
  cancelButtonText = 'Cancel',
  showCancelButton = false,
  onConfirm,
  onCancel,
}: SweetAlertProps) => {
  Swal.fire({
    title,
    text,
    icon,
    showCancelButton,
    confirmButtonText,
    cancelButtonText,
    customClass: {
      popup: 'swal-compact-popup',
      title: 'swal-compact-title',
      confirmButton: `swal-confirm-button swal-${icon}-button`,
      cancelButton: 'swal-cancel-button',
    },
  }).then((result) => {
    if (result.isConfirmed && onConfirm) {
      onConfirm();
    } else if (result.isDismissed && onCancel) {
      onCancel();
    }
  });
};
