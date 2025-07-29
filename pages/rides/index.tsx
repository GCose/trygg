import { useState } from 'react';
import Image from 'next/image';
import DashboardLayout from '@/components/DashboardLayout';
import StatsCard from '@/components/ui/StatsCard';
import ListTable from '@/components/ui/ListTable';
import { SuperAdminPageMeta } from '@/pageMeta/meta';
import { RidesFilterState } from '@/interfaces/rides';
import { TableColumn } from '@/interfaces/admin-layout';
import { MoreHorizontal } from 'lucide-react';
import styles from '@/styles/rides/RidesPage.module.css';
import RideFilters from '@/components/filters/RideFilters';
import { ridesData } from '@/data/rides/rides-data';
import { rideStats } from '@/data/rides/rides-stats';
import { StatusBadge } from '@/utils/status';

const RidesPage = () => {
  const [filters, setFilters] = useState<RidesFilterState>({
    search: '',
    status: '',
    dateFrom: '',
    dateTo: '',
  });

  const [currentPage, setCurrentPage] = useState(1);
  const entriesPerPage = 15;

  const handleFilterChange = (key: keyof RidesFilterState, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setCurrentPage(1);
  };

  const handleResetFilters = () => {
    setFilters({
      search: '',
      status: '',
      dateFrom: '',
      dateTo: '',
    });
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(amount);
  };

  const formatDateTime = (dateTime: string) => {
    return new Date(dateTime).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const formatDuration = (minutes: number) => {
    return `${minutes} min`;
  };

  const formatDistance = (distance: number) => {
    return `${distance} km`;
  };

  {
    /*==================== Rides Table Columns ====================*/
  }
  const ridesColumns: TableColumn[] = [
    { key: 'rideId', label: 'Ride ID' },
    {
      key: 'passenger',
      label: 'Passenger',
      render: (value, row) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div
            style={{
              width: '2rem',
              height: '2rem',
              borderRadius: '50%',
              overflow: 'hidden',
              flexShrink: 0,
            }}
          >
            <Image
              width={32}
              height={32}
              alt="Passenger"
              src={row.passengerAvatar as string}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <span>{value as string}</span>
        </div>
      ),
    },
    {
      key: 'driver',
      label: 'Driver',
      render: (value, row) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div
            style={{
              width: '2rem',
              height: '2rem',
              borderRadius: '50%',
              overflow: 'hidden',
              flexShrink: 0,
            }}
          >
            <Image
              width={32}
              height={32}
              alt="Driver"
              src={row.driverAvatar as string}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <span>{value as string}</span>
        </div>
      ),
    },
    {
      key: 'pickupLocation',
      label: 'Pickup',
      render: (value) => (
        <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>
          {value as string}
        </span>
      ),
    },
    {
      key: 'dropoffLocation',
      label: 'Dropoff',
      render: (value) => (
        <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>
          {value as string}
        </span>
      ),
    },
    {
      key: 'distance',
      label: 'Distance',
      render: (value) => (
        <span style={{ fontWeight: '500' }}>
          {formatDistance(value as number)}
        </span>
      ),
    },
    {
      key: 'duration',
      label: 'Duration',
      render: (value) => (
        <span style={{ fontWeight: '500' }}>
          {formatDuration(value as number)}
        </span>
      ),
    },
    {
      key: 'fare',
      label: 'Fare',
      render: (value) => <span>{formatCurrency(value as number)}</span>,
    },
    {
      key: 'status',
      label: 'Status',
      render: (value) => <StatusBadge status={value as string} />,
    },
    {
      key: 'dateTime',
      label: 'Date & Time',
      render: (value) => (
        <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>
          {formatDateTime(value as string)}
        </span>
      ),
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
    /*==================== End of Rides Table Columns ====================*/
  }

  {
    /*==================== Filter Logic ====================*/
  }
  const filteredRides = ridesData.filter((ride) => {
    const matchesSearch =
      !filters.search ||
      ride.rideId.toLowerCase().includes(filters.search.toLowerCase()) ||
      ride.passenger.toLowerCase().includes(filters.search.toLowerCase()) ||
      ride.driver.toLowerCase().includes(filters.search.toLowerCase()) ||
      ride.pickupLocation
        .toLowerCase()
        .includes(filters.search.toLowerCase()) ||
      ride.dropoffLocation.toLowerCase().includes(filters.search.toLowerCase());

    const matchesStatus = !filters.status || ride.status === filters.status;

    return matchesSearch && matchesStatus;
  });
  {
    /*==================== End of Filter Logic ====================*/
  }

  {
    /*==================== Pagination Logic ====================*/
  }
  const totalEntries = filteredRides.length;
  const totalPages = Math.ceil(totalEntries / entriesPerPage);
  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = startIndex + entriesPerPage;
  const currentRides = filteredRides.slice(startIndex, endIndex);

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
    <DashboardLayout title="Rides" meta={SuperAdminPageMeta.ridesPage}>
      <div className={styles.rides__page}>
        {/*==================== Stats Cards Section ====================*/}
        <div className={styles.stats__section}>
          {rideStats.map((stat, index) => (
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
        <RideFilters
          filters={filters}
          onFilterChange={handleFilterChange}
          onResetFilters={handleResetFilters}
        />
        {/*==================== End of Filters Section ====================*/}

        {/*==================== Rides Table ====================*/}
        <ListTable
          title="All Rides"
          data={currentRides}
          columns={ridesColumns}
        />
        {/*==================== End of Rides Table ====================*/}

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

export default RidesPage;
