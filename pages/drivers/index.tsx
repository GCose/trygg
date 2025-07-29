import { useState } from 'react';
import Image from 'next/image';
import DashboardLayout from '@/components/DashboardLayout';
import DriverFilters from '@/components/filters/DriverFilters';
import ListTable from '@/components/ui/ListTable';
import { SuperAdminPageMeta } from '@/pageMeta/meta';
import { DriversFilterState } from '@/interfaces/drivers';
import { driversData } from '@/data/drivers/drivers-data';
import { TableColumn } from '@/interfaces/admin-layout';
import { MoreHorizontal, Star, StarHalf } from 'lucide-react';
import styles from '@/styles/drivers/DriversPage.module.css';
import StatsCard from '@/components/ui/StatsCard';
import { driverStats } from '@/data/drivers/drivers-stats';
import { StatusBadge } from '@/utils/status';

const DriversPage = () => {
  const [filters, setFilters] = useState<DriversFilterState>({
    search: '',
    rating: '',
    status: '',
    fromDate: '',
  });

  const [currentPage, setCurrentPage] = useState(1);
  const entriesPerPage = 15;

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

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const renderStarRating = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} size={16} fill="#fbbf24" color="#fbbf24" />);
    }

    if (hasHalfStar) {
      stars.push(
        <StarHalf key="half" size={16} fill="#fbbf24" color="#fbbf24" />
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} size={16} color="#e5e7eb" />);
    }

    return <div style={{ display: 'flex', gap: '2px' }}>{stars}</div>;
  };

  const driversColumns: TableColumn[] = [
    { key: 'driverId', label: 'Driver ID' },
    {
      key: 'avatar',
      label: 'Photo',
      render: (value) => (
        <div
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            overflow: 'hidden',
          }}
        >
          <Image
            width={40}
            height={40}
            alt="Driver"
            src={(value as string) || '/profiles/profile-1.avif'}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      ),
    },
    { key: 'name', label: 'Driver Name' },
    { key: 'mobileNumber', label: 'Mobile Number' },
    {
      key: 'rating',
      label: 'Ratings',
      render: (value) => renderStarRating(value as number),
    },
    { key: 'totalTrips', label: 'Total Trips' },
    {
      key: 'totalEarning',
      label: 'Total Earning',
      render: (value) => `$${(value as number).toLocaleString()}.00`,
    },
    {
      key: 'status',
      label: 'Status',
      render: (value) => <StatusBadge status={value as string} />,
    },
    {
      key: 'action',
      label: 'Action',
      render: () => (
        <button className={styles.action__button}>
          <MoreHorizontal size={18} color="#6b7280" />
        </button>
      ),
    },
  ];

  {
    /*==================== Filter Logic ====================*/
  }
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
  {
    /*==================== End of Filter Logic ====================*/
  }

  {
    /*==================== Pagination Logic ====================*/
  }
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
  {
    /*==================== End of Pagination Logic ====================*/
  }

  return (
    <DashboardLayout title="Drivers" meta={SuperAdminPageMeta.driversPage}>
      <div className={styles.drivers__page}>
        {/*==================== Stats Cards Section ====================*/}
        <div className={styles.stats__section}>
          {driverStats.map((stat, index) => (
            <StatsCard
              key={index}
              icon={stat.icon}
              title={stat.title}
              value={stat.value}
            />
          ))}
        </div>
        {/*==================== End of Stats Cards Section ====================*/}

        {/*==================== Filters Section ====================*/}
        <DriverFilters
          filters={filters}
          onFilterChange={handleFilterChange}
          onResetFilters={handleResetFilters}
        />
        {/*==================== End of Filters Section ====================*/}

        {/*==================== Drivers Table ====================*/}
        <ListTable
          title="Drivers List"
          data={currentDrivers}
          columns={driversColumns}
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
