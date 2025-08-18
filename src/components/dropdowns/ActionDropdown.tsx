import { useState } from 'react';

import { MoreHorizontal } from 'lucide-react';

import styles from '@/src/styles/Dropdown.module.css';
import type { ActionDropdownProps } from '@/types/interfaces/sub-admin';

import Dropdown from '../ui/Dropdown';

const ActionDropdown = ({ onDelete }: ActionDropdownProps) => {
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
      onClose={handleClose}
      onToggle={handleToggle}
    >
      {/*==================== Delete Option ====================*/}
      <button
        onClick={() => handleAction(onDelete)}
        className={`${styles.menu__item} ${styles.delete__item}`}
      >
        Suspend
      </button>
      {/*==================== End of Delete Option ====================*/}
    </Dropdown>
  );
};

export default ActionDropdown;
