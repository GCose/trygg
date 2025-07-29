export const getStatusStyles = (status: string) => {
  switch (status.toLowerCase()) {
    case 'active':
    case 'approved':
    case 'completed':
      return {
        color: '#166534',
        background: '#dcfce7',
      };

    case 'inactive':
    case 'pending':
    case 'pending_approval':
      return {
        color: '#ea580c',
        background: '#ffedd5',
      };

    case 'suspended':
    case 'rejected':
    case 'cancelled':
      return {
        color: '#991b1b',
        background: '#fee2e2',
      };

    default:
      return {
        color: '#6b7280',
        background: '#f3f4f6',
      };
  }
};
