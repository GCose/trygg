import { useState } from 'react';

import Image from 'next/image';

import { EyeIcon, Users } from 'lucide-react';

import { getPassengerById } from '@/mocks/passenger/passenger-details-data';
import { passengerStats } from '@/mocks/passenger/passenger-stats';
import { passengersData } from '@/mocks/passenger/passengers-data';
import PassengerFilters from '@/src/components/filters/PassengerFilters';
import PassengerDetailsModal from '@/src/components/modals/PassengerDetailsModal';
import StatusBadge from '@/src/components/shared/status';
import ListTable from '@/src/components/ui/ListTable';
import StatsCard from '@/src/components/ui/StatsCard';
import styles from '@/src/styles/passengers/PassengersPage.module.css';
import type { TableColumn } from '@/types/interfaces/admin-layout';
import type { PassengerDetails } from '@/types/interfaces/passenger-details';
import type { PassengersFilterState } from '@/types/interfaces/passengers';

const PassengersPageComponent = () => {
  const [filters, setFilters] = useState<PassengersFilterState>({
    search: '',
    rating: '',
    status: '',
    fromDate: '',
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPassenger, setSelectedPassenger] =
    useState<PassengerDetails | null>(null);
  const entriesPerPage = 15;

  const handleFilterChange = (
    key: keyof PassengersFilterState,
    value: string
  ) => {
    setFilters(prev => ({ ...prev, [key]: value }));
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

  const handleRowClick = (row: Record<string, unknown>) => {
    const passengerId = row.passengerId as string;
    const passenger = getPassengerById(passengerId);

    if (passenger) {
      setSelectedPassenger(passenger);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPassenger(null);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(amount);
  };

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
      render: value => formatCurrency(value as number),
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
      render: value => <StatusBadge status={value as string} />,
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

  const filteredPassengers = passengersData.filter(passenger => {
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

  return (
    <>
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
            onRowClick={handleRowClick}
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

            {getPaginationButtons().map(page => (
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

      {/*==================== Passenger Details Modal ====================*/}
      <PassengerDetailsModal
        isOpen={isModalOpen}
        passenger={selectedPassenger}
        onClose={handleCloseModal}
      />
      {/*==================== End of Passenger Details Modal ====================*/}
    </>
  );
};

export default PassengersPageComponent;
