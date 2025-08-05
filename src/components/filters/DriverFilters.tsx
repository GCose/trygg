import { Search } from 'lucide-react';

import styles from '@/src/styles/drivers/DriverFilters.module.css';
import type { DriverFiltersProps } from '@/types/interfaces/drivers';

const DriverFilters = ({
  filters,
  onFilterChange,
  onResetFilters,
}: DriverFiltersProps) => {
  return (
    <div className={styles.filters__section}>
      <div className={styles.filters__row}>
        {/*==================== Search Input ====================*/}
        <div className={styles.search__wrapper}>
          <Search size={20} className={styles.search__icon} />
          <input
            type="text"
            placeholder="Search.."
            value={filters.search}
            className={styles.search__input}
            onChange={e => onFilterChange('search', e.target.value)}
          />
        </div>
        {/*==================== End of Search Input ====================*/}

        {/*==================== Filter Dropdowns ====================*/}
        <div className={styles.filters__group}>
          <select
            value={filters.rating}
            onChange={e => onFilterChange('rating', e.target.value)}
            className={styles.filter__select}
          >
            <option value="">Ratings</option>
            <option value="5">5 Stars</option>
            <option value="4">4+ Stars</option>
            <option value="3">3+ Stars</option>
            <option value="2">2+ Stars</option>
            <option value="1">1+ Stars</option>
          </select>

          <select
            value={filters.status}
            onChange={e => onFilterChange('status', e.target.value)}
            className={styles.filter__select}
          >
            <option value="">Status</option>
            <option value="APPROVED">Approved</option>
            <option value="PENDING_APPROVAL">Pending</option>
            <option value="SUSPENDED">Suspended</option>
            <option value="REJECTED">Rejected</option>
          </select>

          <div className={styles.date__wrapper}>
            <input
              type="date"
              placeholder="From Date"
              value={filters.fromDate}
              className={styles.date__input}
              onChange={e => onFilterChange('fromDate', e.target.value)}
            />
          </div>

          <button onClick={onResetFilters} className={styles.reset__button}>
            Reset Filter
          </button>
        </div>
        {/*==================== End of Filter Dropdowns ====================*/}
      </div>
    </div>
  );
};

export default DriverFilters;
