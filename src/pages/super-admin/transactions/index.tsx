import { useState } from 'react';

import type { NextApiRequest } from 'next';

import Image from 'next/image';

import { CreditCard, EyeIcon } from 'lucide-react';

import {
  transactionTrendData,
  transactionVolumeData,
} from '@/mocks/transactions/transaction-charts';
import { transactionsData } from '@/mocks/transactions/transaction-data';
import { transactionStats } from '@/mocks/transactions/transactions-stats';
import { SuperAdminPageMeta } from '@/pageMeta/meta';
import RevenueChart from '@/src/components/charts/RevenueChart';
import TransactionLineChart from '@/src/components/charts/TransactionLineChart';
import TransactionFilters from '@/src/components/filters/TransactionFilters';
import DashboardLayout from '@/src/components/layout/DashboardLayout';
import StatusBadge from '@/src/components/shared/status';
import ListTable from '@/src/components/ui/ListTable';
import StatsCard from '@/src/components/ui/StatsCard';
import styles from '@/src/styles/transactions/TransactionsPage.module.css';
import type { User } from '@/types';
import type { TableColumn } from '@/types/interfaces/admin-layout';
import type { TransactionsFilterState } from '@/types/interfaces/transactions';
import { isLoggedIn } from '@/utils/auth';

const TransactionsPage = () => {
  const [filters, setFilters] = useState<TransactionsFilterState>({
    search: '',
    status: '',
    paymentMethod: '',
    dateFrom: '',
    dateTo: '',
    amountMin: '',
    amountMax: '',
  });

  const [currentPage, setCurrentPage] = useState(1);
  const entriesPerPage = 15;

  const handleFilterChange = (
    key: keyof TransactionsFilterState,
    value: string
  ) => {
    setFilters(prev => ({ ...prev, [key]: value }));
    setCurrentPage(1);
  };

  const handleResetFilters = () => {
    setFilters({
      search: '',
      status: '',
      paymentMethod: '',
      dateFrom: '',
      dateTo: '',
      amountMin: '',
      amountMax: '',
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

  {
    /*==================== Transactions Table Columns ====================*/
  }
  const transactionsColumns: TableColumn[] = [
    { key: 'transactionId', label: 'Transaction ID' },
    {
      key: 'passenger',
      label: 'Passenger',
      render: (value, row) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div
            style={{
              width: '2rem',
              flexShrink: 0,
              height: '2rem',
              overflow: 'hidden',
              borderRadius: '50%',
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
              flexShrink: 0,
              height: '2rem',
              overflow: 'hidden',
              borderRadius: '50%',
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
      key: 'amount',
      label: 'Amount',
      render: value => <span>{formatCurrency(value as number)}</span>,
    },
    { key: 'paymentMethod', label: 'Payment Method' },
    {
      key: 'status',
      label: 'Status',
      render: value => <StatusBadge status={value as string} />,
    },
    {
      key: 'dateTime',
      label: 'Date & Time',
      render: value => (
        <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>
          {formatDateTime(value as string)}
        </span>
      ),
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
    /*==================== End of Transactions Table Columns ====================*/
  }

  {
    /*==================== Filter Logic ====================*/
  }
  const filteredTransactions = transactionsData.filter(transaction => {
    const matchesSearch =
      !filters.search ||
      transaction.transactionId
        .toLowerCase()
        .includes(filters.search.toLowerCase()) ||
      transaction.passenger
        .toLowerCase()
        .includes(filters.search.toLowerCase()) ||
      transaction.driver.toLowerCase().includes(filters.search.toLowerCase());

    const matchesStatus =
      !filters.status || transaction.status === filters.status;

    const matchesPaymentMethod =
      !filters.paymentMethod ||
      transaction.paymentMethod === filters.paymentMethod;

    const matchesAmountMin =
      !filters.amountMin || transaction.amount >= parseFloat(filters.amountMin);

    const matchesAmountMax =
      !filters.amountMax || transaction.amount <= parseFloat(filters.amountMax);

    return (
      matchesSearch &&
      matchesStatus &&
      matchesPaymentMethod &&
      matchesAmountMin &&
      matchesAmountMax
    );
  });
  {
    /*==================== End of Filter Logic ====================*/
  }

  {
    /*==================== Pagination Logic ====================*/
  }
  const totalEntries = filteredTransactions.length;
  const totalPages = Math.ceil(totalEntries / entriesPerPage);
  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = startIndex + entriesPerPage;
  const currentTransactions = filteredTransactions.slice(startIndex, endIndex);

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
      role="SUPER"
      title="Transactions"
      meta={SuperAdminPageMeta.transactionPage}
    >
      <div className={styles.transactions__page}>
        {/*==================== Stats Cards Section ====================*/}
        <div className={styles.stats__section}>
          {transactionStats.map((stat, index) => (
            <StatsCard
              key={index}
              icon={stat.icon}
              title={stat.title}
              value={stat.value}
            />
          ))}
        </div>
        {/*==================== End of Stats Cards Section ====================*/}

        {/*==================== Charts Section ====================*/}
        <div className={styles.charts__section}>
          <TransactionLineChart
            data={transactionTrendData}
            title="Transaction Trends (This Week)"
          />
          <RevenueChart
            data={transactionVolumeData.map(item => ({
              month: item.month,
              revenue: item.completed + item.pending + item.failed,
            }))}
            title="Total Transaction Volume"
          />
        </div>
        {/*==================== End of Charts Section ====================*/}

        {/*==================== Filters Section ====================*/}
        <TransactionFilters
          filters={filters}
          onFilterChange={handleFilterChange}
          onResetFilters={handleResetFilters}
        />
        {/*==================== End of Filters Section ====================*/}

        {/*==================== Transactions Table ====================*/}
        <div className={styles.table__with__icon}>
          <CreditCard size={20} color="#fbbf24" />
          <ListTable
            title="All Transactions"
            data={currentTransactions}
            columns={transactionsColumns}
          />
        </div>
        {/*==================== End of Transactions Table ====================*/}

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
    </DashboardLayout>
  );
};

export default TransactionsPage;

export const getServerSideProps = async ({ req }: { req: NextApiRequest }) => {
  const userData = isLoggedIn(req);

  if (!userData) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    };
  }

  const user = userData as User;

  if (user.role !== 'SUPER') {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      userData,
    },
  };
};
