import { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import DriverFilters from '@/components/ui/DriverFilters';
import DriversTable from '@/components/ui/DriversTable';
import { SuperAdminPageMeta } from '@/pageMeta/meta';
import { DriversFilterState } from '@/interfaces/drivers';
import { driversData } from '@/data/drivers-data';
import styles from '@/src/styles/drivers/DriversPage.module.css';

const DriversPage = () => {
  const [filters, setFilters] = useState<DriversFilterState>({
    search: '',
    rating: '',
    status: '',
    fromDate: '',
  });

  const [currentPage, setCurrentPage] = useState(1);
  const entriesPerPage = 7;

  const handleFilterChange = (key: keyof DriversFilterState, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setCurrentPage(1);
  };

  const handleResetFilters = () => {
    setFilters({
      search: '',
      rating: '',
      status: '',
      fromDate: '',
    });
    setCurrentPage(1);
  };

  const handleViewDetails = (driverId: string) => {
    console.log('View details for driver:', driverId);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Filter drivers based on current filters
  const filteredDrivers = driversData.filter((driver) => {
    const matchesSearch =
      !filters.search ||
      driver.name.toLowerCase().includes(filters.search.toLowerCase()) ||
      driver.driverId.toLowerCase().includes(filters.search.toLowerCase()) ||
      driver.mobileNumber.includes(filters.search);

    const matchesRating =
      !filters.rating || driver.rating >= parseFloat(filters.rating);

    const matchesStatus = !filters.status || driver.status === filters.status;

    return matchesSearch && matchesRating && matchesStatus;
  });

  // Pagination logic
  const totalEntries = filteredDrivers.length;
  const totalPages = Math.ceil(totalEntries / entriesPerPage);
  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = startIndex + entriesPerPage;
  const currentDrivers = filteredDrivers.slice(startIndex, endIndex);

  const getPaginationButtons = () => {
    const buttons = [];
    const maxVisibleButtons = 5;
    let startPage = Math.max(
      1,
      currentPage - Math.floor(maxVisibleButtons / 2)
    );
    const endPage = Math.min(totalPages, startPage + maxVisibleButtons - 1);

    if (endPage - startPage + 1 < maxVisibleButtons) {
      startPage = Math.max(1, endPage - maxVisibleButtons + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(i);
    }

    return buttons;
  };

  return (
    <DashboardLayout title="Drivers" meta={SuperAdminPageMeta.driversPage}>
      <div className={styles.drivers__page}>
        {/*==================== Filters Section ====================*/}
        <DriverFilters
          filters={filters}
          onFilterChange={handleFilterChange}
          onResetFilters={handleResetFilters}
        />
        {/*==================== End of Filters Section ====================*/}

        {/*==================== Drivers Table ====================*/}
        <DriversTable
          drivers={currentDrivers}
          onViewDetails={handleViewDetails}
        />
        {/*==================== End of Drivers Table ====================*/}

        {/*==================== Pagination Section ====================*/}
        <div className={styles.pagination__section}>
          <div className={styles.pagination__info}>
            Showing {startIndex + 1} to {Math.min(endIndex, totalEntries)} of{' '}
            {totalEntries} entries
          </div>

          <div className={styles.pagination__controls}>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={styles.pagination__button}
            >
              Previous
            </button>

            {getPaginationButtons().map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`${styles.pagination__button} ${
                  currentPage === page ? styles.active : ''
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={styles.pagination__button}
            >
              Next
            </button>
          </div>
        </div>
        {/*==================== End of Pagination Section ====================*/}
      </div>
    </DashboardLayout>
  );
};

export default DriversPage;
