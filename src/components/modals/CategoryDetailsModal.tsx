import Image from 'next/image';
import { X } from 'lucide-react';
import { CategoryDetailsModalProps } from '@/types/interfaces/ride-categories';
import styles from '@/src/styles/modals/CategoryModal.module.css';

const CategoryDetailsModal = ({
  isOpen,
  onClose,
  category,
}: CategoryDetailsModalProps) => {
  if (!isOpen || !category) return null;

  const formatDateTime = (dateTime: string) => {
    return (
      new Date(dateTime).toLocaleDateString('en-US', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      }) +
      ' at ' +
      new Date(dateTime).toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      })
    );
  };

  return (
    <>
      {/*==================== Modal Backdrop ====================*/}
      <div className={styles.backdrop} onClick={onClose}>
        {/*==================== Modal Container ====================*/}
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
          {/*==================== Modal Header ====================*/}
          <div className={styles.header}>
            <h2 className={styles.title}>Category Details</h2>
            <button onClick={onClose} className={styles.close__button}>
              <X size={20} color="#6b7280" />
            </button>
          </div>
          {/*==================== End of Modal Header ====================*/}

          {/*==================== Modal Content ====================*/}
          <div className={styles.content}>
            {/*==================== Category Header Section ====================*/}
            <div className={styles.category__section}>
              <div className={styles.category__image}>
                <Image
                  width={80}
                  height={60}
                  src={category.image}
                  alt={category.name}
                  className={styles.category__img}
                />
              </div>
              <div className={styles.category__info}>
                <h3 className={styles.category__name}>{category.name}</h3>
                <p className={styles.category__description}>
                  {category.description}
                </p>
                <span className={styles.category__seats}>
                  {category.seats} Seats
                </span>
              </div>
            </div>
            {/*==================== End of Category Header Section ====================*/}

            {/*==================== Details Grid ====================*/}
            <div className={styles.details__grid}>
              <div className={styles.detail__item}>
                <span className={styles.detail__label}>Base Price</span>
                <span className={styles.detail__value}>
                  ${category.basePrice}
                </span>
              </div>

              <div className={styles.detail__item}>
                <span className={styles.detail__label}>Price per KM</span>
                <span className={styles.detail__value}>
                  ${category.pricePerKm}
                </span>
              </div>

              <div className={styles.detail__item}>
                <span className={styles.detail__label}>Price per Minute</span>
                <span className={styles.detail__value}>
                  ${category.pricePerMinute}
                </span>
              </div>

              <div className={styles.detail__item}>
                <span className={styles.detail__label}>Minimum Fare</span>
                <span className={styles.detail__value}>
                  ${category.minimumFare}
                </span>
              </div>

              <div className={styles.detail__item}>
                <span className={styles.detail__label}>Extra Fare</span>
                <span className={styles.detail__value}>
                  ${category.extraFare}
                </span>
              </div>

              <div className={styles.detail__item}>
                <span className={styles.detail__label}>Night-time</span>
                <span className={styles.detail__value}>
                  {category.nightTimePercentage}%
                </span>
              </div>

              <div className={styles.detail__item}>
                <span className={styles.detail__label}>Status</span>
                <span
                  className={`${styles.detail__value} ${category.active ? styles.active : styles.inactive}`}
                >
                  {category.active ? 'Active' : 'Inactive'}
                </span>
              </div>

              <div className={styles.detail__item}>
                <span className={styles.detail__label}>Created Date</span>
                <span className={styles.detail__value}>
                  {formatDateTime(category.createdAt)}
                </span>
              </div>
            </div>
            {/*==================== End of Details Grid ====================*/}
          </div>
          {/*==================== End of Modal Content ====================*/}

          {/*==================== Modal Footer ====================*/}
          <div className={styles.footer}>
            <button onClick={onClose} className={styles.close__btn}>
              Close
            </button>
          </div>
          {/*==================== End of Modal Footer ====================*/}
        </div>
        {/*==================== End of Modal Container ====================*/}
      </div>
      {/*==================== End of Modal Backdrop ====================*/}
    </>
  );
};

export default CategoryDetailsModal;
