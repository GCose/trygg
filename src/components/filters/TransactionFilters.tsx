import { Search } from 'lucide-react';

import styles from '@/src/styles/transactions/TransactionFilters.module.css';
import type { TransactionFiltersProps } from '@/types/interfaces/transactions';

const TransactionFilters = ({
  filters,
  onFilterChange,
  onResetFilters,
}: TransactionFiltersProps) => {
  return (
    <div className={styles.filters__section}>
      <div className={styles.filters__row}>
        {/*==================== Search Input ====================*/}
        <div className={styles.search__wrapper}>
          <Search size={20} className={styles.search__icon} />
          <input
            type="text"
            value={filters.search}
            className={styles.search__input}
            placeholder="Search transactions..."
            onChange={e => onFilterChange('search', e.target.value)}
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
            <option value="PENDING">Pending</option>
            <option value="FAILED">Failed</option>
          </select>

          <select
            value={filters.paymentMethod}
            className={styles.filter__select}
            onChange={e => onFilterChange('paymentMethod', e.target.value)}
          >
            <option value="">Payment Method</option>
            <option value="Credit Card">Credit Card</option>
            <option value="Digital Wallet">Digital Wallet</option>
            <option value="Cash">Cash</option>
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
              placeholder="To Date"
              value={filters.dateFrom}
              className={styles.date__input}
              onChange={e => onFilterChange('dateTo', e.target.value)}
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

export default TransactionFilters;
