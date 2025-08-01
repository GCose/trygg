import { useState } from 'react';
import Image from 'next/image';
import PassengerFilters from '@/src/components/filters/PassengerFilters';
import StatsCard from '@/src/components/ui/StatsCard';
import ListTable from '@/src/components/ui/ListTable';
import { PassengersFilterState } from '@/types/interfaces/passengers';
import { passengersData } from '@/mocks/passenger/passengers-data';
import { passengerStats } from '@/mocks/passenger/passenger-stats';
import { TableColumn } from '@/types/interfaces/admin-layout';
import { EyeIcon, Users } from 'lucide-react';
import styles from '@/src/styles/passengers/PassengersPage.module.css';
import StatusBadge from '@/src/components/shared/status';

const PassengersPageComponent = () => {
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
    // {
    //   key: 'averageRating',
    //   label: 'Average Rating',
    //   render: (value) => (
    //     <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
    //       {renderStarRating(value as number)}
    //     </div>
    //   ),
    // },
    {
      key: 'status',
      label: 'Status',
      render: (value) => <StatusBadge status={value as string} />,
    },
    {
      key: 'action',
      label: 'Action',
      render: () => (
        <button title="Button" className={styles.action__button}>
          <EyeIcon size={18} color="#6b7280" />
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
      <div className={styles.table__with__icon}>
        <Users size={20} color="#fbbf24" />
        <ListTable
          title="Passengers List"
          data={currentPassengers}
          columns={passengersColumns}
        />
      </div>
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
  );
};

export default PassengersPageComponent;
