import { Search } from 'lucide-react';

import styles from '@/src/styles/ride-history/RideFilters.module.css';
import type { RideFiltersProps } from '@/types/interfaces/rides';

const RideFilters = ({
  filters,
  onFilterChange,
  onResetFilters,
}: RideFiltersProps) => {
  return (
    <div className={styles.filters__section}>
      <div className={styles.filters__row}>
        {/*==================== Search Input ====================*/}
        <div className={styles.search__wrapper}>
          <Search size={20} className={styles.search__icon} />
          <input
            type="text"
            placeholder="Search rides..."
            value={filters.search}
            onChange={e => onFilterChange('search', e.target.value)}
            className={styles.search__input}
          />
        </div>
        {/*==================== End of Search Input ====================*/}

        {/*==================== Filter Dropdowns ====================*/}
        <div className={styles.filters__group}>
          <select
            value={filters.status}
            onChange={e => onFilterChange('status', e.target.value)}
            className={styles.filter__select}
          >
            <option value="">All Status</option>
            <option value="COMPLETED">Completed</option>
            <option value="ACTIVE">Active</option>
            <option value="CANCELLED">Cancelled</option>
          </select>

          <div className={styles.date__wrapper}>
            <input
              type="date"
              placeholder="From Date"
              value={filters.dateFrom}
              className={styles.date__input}
              onChange={e => onFilterChange('dateFrom', e.target.value)}
            />
          </div>

          <div className={styles.date__wrapper}>
            <input
              type="date"
              value={filters.dateTo}
              onChange={e => onFilterChange('dateTo', e.target.value)}
              className={styles.date__input}
              placeholder="To Date"
            />
          </div>

          <button onClick={onResetFilters} className={styles.reset__button}>
            Reset Filters
          </button>
        </div>
        {/*==================== End of Filter Dropdowns ====================*/}
      </div>
    </div>
  );
};

export default RideFilters;
