import { useState } from 'react';
import Image from 'next/image';
import DashboardLayout from '@/components/DashboardLayout';
import PassengerFilters from '@/components/ui/PassengerFilters';
import StatsCard from '@/components/ui/StatsCard';
import ListTable from '@/components/ui/ListTable';
import { SuperAdminPageMeta } from '@/pageMeta/meta';
import { PassengersFilterState } from '@/interfaces/passengers';
import { passengersData } from '@/data/passenger/passengers-data';
import { passengerStats } from '@/data/passenger/passenger-stats';
import { TableColumn } from '@/interfaces/admin-layout';
import { MoreHorizontal, Star, StarHalf } from 'lucide-react';
import styles from '@/src/styles/passengers/PassengersPage.module.css';

const PassengersPage = () => {
  const [filters, setFilters] = useState<PassengersFilterState>({
    search: '',
    rating: '',
    status: '',
    fromDate: '',
  });

  const [currentPage, setCurrentPage] = useState(1);
  const entriesPerPage = 15;

  const handleFilterChange = (
    key: keyof PassengersFilterState,
    value: string
  ) => {
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

  //   const handleViewDetails = (passengerId: string) => {
  //     console.log('View details for passenger:', passengerId);
  //   };

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

    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} size={16} color="#e5e7eb" />);
    }

    return <div style={{ display: 'flex', gap: '2px' }}>{stars}</div>;
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(amount);
  };

  {
    /*==================== Passengers Table Columns ====================*/
  }
  const passengersColumns: TableColumn[] = [
    { key: 'passengerId', label: 'Passenger ID' },
    {
      key: 'name',
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
              src={row.avatar as string}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <span>{value as string}</span>
        </div>
      ),
    },
    { key: 'phoneNumber', label: 'Phone Number' },
    { key: 'totalRides', label: 'Total Rides' },
    {
      key: 'totalSpent',
      label: 'Total Spent',
      render: (value) => formatCurrency(value as number),
    },
    {
      key: 'averageRating',
      label: 'Average Rating',
      render: (value) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {renderStarRating(value as number)}
          <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>
            {(value as number).toFixed(1)}
          </span>
        </div>
      ),
    },
    {
      key: 'status',
      label: 'Status',
      render: (value) => {
        const status = value as string;
        const statusClass =
          status === 'ACTIVE'
            ? '#059669'
            : status === 'INACTIVE'
              ? '#6b7280'
              : '#dc2626';

        return (
          <span
            style={{
              color: statusClass,
              fontWeight: '500',
              fontSize: '0.875rem',
            }}
          >
            {status}
          </span>
        );
      },
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
    /*==================== End of Passengers Table Columns ====================*/
  }

  {
    /*==================== Filter Logic ====================*/
  }
  const filteredPassengers = passengersData.filter((passenger) => {
    const matchesSearch =
      !filters.search ||
      passenger.name.toLowerCase().includes(filters.search.toLowerCase()) ||
      passenger.passengerId
        .toLowerCase()
        .includes(filters.search.toLowerCase()) ||
      passenger.phoneNumber.includes(filters.search);

    const matchesRating =
      !filters.rating || passenger.averageRating >= parseFloat(filters.rating);

    const matchesStatus =
      !filters.status || passenger.status === filters.status;

    return matchesSearch && matchesRating && matchesStatus;
  });
  {
    /*==================== End of Filter Logic ====================*/
  }

  {
    /*==================== Pagination Logic ====================*/
  }
  const totalEntries = filteredPassengers.length;
  const totalPages = Math.ceil(totalEntries / entriesPerPage);
  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = startIndex + entriesPerPage;
  const currentPassengers = filteredPassengers.slice(startIndex, endIndex);

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
    <DashboardLayout
      title="Passengers"
      meta={SuperAdminPageMeta.passengersPage}
    >
      <div className={styles.passengers__page}>
        {/*==================== Stats Cards Section ====================*/}
        <div className={styles.stats__section}>
          {passengerStats.map((stat, index) => (
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
        <PassengerFilters
          filters={filters}
          onFilterChange={handleFilterChange}
          onResetFilters={handleResetFilters}
        />
        {/*==================== End of Filters Section ====================*/}

        {/*==================== Passengers Table ====================*/}
        <ListTable
          title="Passengers List"
          data={currentPassengers}
          columns={passengersColumns}
        />
        {/*==================== End of Passengers Table ====================*/}

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

export default PassengersPage;
