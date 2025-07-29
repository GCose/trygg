import { Search, Calendar } from 'lucide-react';
import styles from '@/styles/passengers/PassengerFilters.module.css';
import { PassengerFiltersProps } from '@/types/interfaces/passengers';

const PassengerFilters = ({
  filters,
  onFilterChange,
  onResetFilters,
}: PassengerFiltersProps) => {
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
            onChange={(e) => onFilterChange('search', e.target.value)}
            className={styles.search__input}
          />
        </div>
        {/*==================== End of Search Input ====================*/}

        {/*==================== Filter Dropdowns ====================*/}
        <div className={styles.filters__group}>
          <select
            value={filters.rating}
            onChange={(e) => onFilterChange('rating', e.target.value)}
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
            onChange={(e) => onFilterChange('status', e.target.value)}
            className={styles.filter__select}
          >
            <option value="">Status</option>
            <option value="ACTIVE">Active</option>
            <option value="INACTIVE">Inactive</option>
            <option value="SUSPENDED">Suspended</option>
          </select>

          <div className={styles.date__wrapper}>
            <input
              type="date"
              value={filters.fromDate}
              onChange={(e) => onFilterChange('fromDate', e.target.value)}
              className={styles.date__input}
              placeholder="From Date"
            />
            <Calendar size={18} className={styles.date__icon} />
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

export default PassengerFilters;
