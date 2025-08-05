import { useState } from 'react';

import { MoreHorizontal } from 'lucide-react';

import styles from '@/src/styles/Dropdown.module.css';
import type { ActionDropdownProps } from '@/types/interfaces/sub-admin';

import Dropdown from '../ui/Dropdown';

const ActionDropdown = ({
  onViewDetails,
  onEdit,
  onDelete,
}: ActionDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleAction = (action: () => void) => {
    action();
    handleClose();
  };

  return (
    <Dropdown
      trigger={
        <button title="Button" className={styles.action__button}>
          <MoreHorizontal size={18} color="#6b7280" />
        </button>
      }
      isOpen={isOpen}
      onToggle={handleToggle}
      onClose={handleClose}
    >
      {/*==================== View Details Option ====================*/}
      <button
        onClick={() => handleAction(onViewDetails)}
        className={styles.menu__item}
      >
        View Details
      </button>
      {/*==================== End of View Details Option ====================*/}

      {/*==================== Edit Option ====================*/}
      <button
        onClick={() => handleAction(onEdit)}
        className={styles.menu__item}
      >
        Edit
      </button>
      {/*==================== End of Edit Option ====================*/}

      {/*==================== Delete Option ====================*/}
      <button
        onClick={() => handleAction(onDelete)}
        className={`${styles.menu__item} ${styles.delete__item}`}
      >
        Delete
      </button>
      {/*==================== End of Delete Option ====================*/}
    </Dropdown>
  );
};

export default ActionDropdown;
