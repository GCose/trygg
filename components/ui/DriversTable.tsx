import Image from 'next/image';
import { MoreHorizontal } from 'lucide-react';
import { DriversTableProps } from '@/interfaces/drivers';
import StarRating from './StarRating';
import styles from '@/src/styles/drivers/DriversTable.module.css';

const DriversTable = ({ drivers, onViewDetails }: DriversTableProps) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(amount);
  };

  return (
    <div className={styles.table__container}>
      <div className={styles.table__wrapper}>
        <table className={styles.drivers__table}>
          {/*==================== Table Header ====================*/}
          <thead className={styles.table__head}>
            <tr>
              <th className={styles.table__header}>Driver ID</th>
              <th className={styles.table__header}>Driver</th>
              <th className={styles.table__header}>Mobile Number</th>
              <th className={styles.table__header}>Ratings</th>
              <th className={styles.table__header}>Total Trips</th>
              <th className={styles.table__header}>Total Earning</th>
              <th className={styles.table__header}></th>
            </tr>
          </thead>
          {/*==================== End of Table Header ====================*/}

          {/*==================== Table Body ====================*/}
          <tbody className={styles.table__body}>
            {drivers.map((driver) => (
              <tr key={driver.id} className={styles.table__row}>
                <td className={styles.table__cell}>
                  <span className={styles.driver__id}>{driver.driverId}</span>
                </td>

                <td className={styles.table__cell}>
                  <div className={styles.driver__info}>
                    <div className={styles.driver__avatar}>
                      <Image
                        width={40}
                        height={40}
                        alt={driver.name}
                        src={driver.avatar}
                        className={styles.avatar__image}
                      />
                    </div>
                    <span className={styles.driver__name}>{driver.name}</span>
                  </div>
                </td>

                <td className={styles.table__cell}>
                  <span className={styles.mobile__number}>
                    {driver.mobileNumber}
                  </span>
                </td>

                <td className={styles.table__cell}>
                  <StarRating rating={driver.rating} />
                </td>

                <td className={styles.table__cell}>
                  <span className={styles.trip__count}>
                    {driver.totalTrips.toString().padStart(2, '0')}
                  </span>
                </td>

                <td className={styles.table__cell}>
                  <span className={styles.earning__amount}>
                    {formatCurrency(driver.totalEarning)}
                  </span>
                </td>

                <td className={styles.table__cell}>
                  <button
                    onClick={() => onViewDetails(driver.id)}
                    className={styles.actions__button}
                  >
                    <MoreHorizontal size={20} />
                    <span className={styles.view__details}>View Details</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          {/*==================== End of Table Body ====================*/}
        </table>
      </div>
    </div>
  );
};

export default DriversTable;
