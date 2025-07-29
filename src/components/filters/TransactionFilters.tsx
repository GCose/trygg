import { Search, Calendar } from 'lucide-react';
import { TransactionFiltersProps } from '@/types/interfaces/transactions';
import styles from '@/src/styles/transactions/TransactionFilters.module.css';

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
            placeholder="Search transactions..."
            value={filters.search}
            onChange={(e) => onFilterChange('search', e.target.value)}
            className={styles.search__input}
          />
        </div>
        {/*==================== End of Search Input ====================*/}

        {/*==================== Filter Dropdowns ====================*/}
        <div className={styles.filters__group}>
          <select
            value={filters.status}
            onChange={(e) => onFilterChange('status', e.target.value)}
            className={styles.filter__select}
          >
            <option value="">All Status</option>
            <option value="COMPLETED">Completed</option>
            <option value="PENDING">Pending</option>
            <option value="FAILED">Failed</option>
          </select>

          <select
            value={filters.paymentMethod}
            onChange={(e) => onFilterChange('paymentMethod', e.target.value)}
            className={styles.filter__select}
          >
            <option value="">Payment Method</option>
            <option value="Credit Card">Credit Card</option>
            <option value="Digital Wallet">Digital Wallet</option>
            <option value="Cash">Cash</option>
          </select>

          <div className={styles.date__wrapper}>
            <input
              type="date"
              value={filters.dateFrom}
              onChange={(e) => onFilterChange('dateFrom', e.target.value)}
              className={styles.date__input}
              placeholder="From Date"
            />
            <Calendar size={18} className={styles.date__icon} />
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
