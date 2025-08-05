import React from 'react';

import type { NextApiRequest } from 'next';

import Image from 'next/image';

import { ArrowLeftRight } from 'lucide-react';

import { monthlyRevenueData } from '@/mocks/chart-data';
import { dashboardStats, recentTransactions } from '@/mocks/dashboard-stats';
import { topDriverData, driverStatusData } from '@/mocks/widgets-data';
import { SuperAdminPageMeta } from '@/pageMeta/meta';
import RevenueChart from '@/src/components/charts/RevenueChart';
import DashboardLayout from '@/src/components/layout/DashboardLayout';
import ListTable from '@/src/components/ui/ListTable';
import StatsCard from '@/src/components/ui/StatsCard';
import DriverStatusWidget from '@/src/components/widgets/DriverStatusWidget';
import TopDriverWidget from '@/src/components/widgets/TopDriverWidget';
import styles from '@/src/styles/dashboard/DashboardPage.module.css';
import type { User } from '@/types';
import type { TableColumn } from '@/types/interfaces/admin-layout';
import { isLoggedIn } from '@/utils/auth';

const DashboardPage = () => {
  const transactionColumns: TableColumn[] = [
    { key: 'id', label: 'Driver ID' },
    {
      key: 'passenger',
      label: 'Passenger',
      render: value => (
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
              src="/profiles/profile-1.avif"
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
      render: value => (
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
              src="/profiles/profile-2.avif"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <span>{value as string}</span>
        </div>
      ),
    },
    { key: 'amount', label: 'Amount' },
    { key: 'dateTime', label: 'Date/Time' },
  ];

  return (
    <DashboardLayout
      role="SUB"
      title="Dashboard"
      meta={SuperAdminPageMeta.dashboardPage}
    >
      <div className={styles.dashboard}>
        {/*==================== Row 1: Stats Cards ====================*/}
        <div className={styles.stats__grid}>
          {dashboardStats.map((stat, index) => (
            <StatsCard
              key={index}
              icon={stat.icon}
              title={stat.title}
              value={stat.value}
            />
          ))}
        </div>
        {/*==================== End of Row 1: Stats Cards ====================*/}

        {/*==================== Row 2: Chart Left, Driver Widgets Right ====================*/}
        <div className={styles.chart__row}>
          {/*==================== Revenue Chart ====================*/}
          <div className={styles.chart__section}>
            <RevenueChart
              data={monthlyRevenueData}
              title="Monthly Revenue Overview"
            />
          </div>
          {/*==================== End of Revenue Chart ====================*/}

          {/*==================== Driver Widgets Column ====================*/}
          <div className={styles.driver__widgets}>
            {/*==================== Top Driver Widget ====================*/}
            <div className={styles.widget}>
              <TopDriverWidget data={topDriverData} />
            </div>
            {/*==================== End of Top Driver Widget ====================*/}

            {/*==================== Driver Status Widget ====================*/}
            <div className={styles.widget}>
              <DriverStatusWidget data={driverStatusData} />
            </div>
            {/*==================== End of Driver Status Widget ====================*/}
          </div>
          {/*==================== End of Driver Widgets Column ====================*/}
        </div>
        {/*==================== End of Row 2 ====================*/}

        {/*==================== Row 3: Recent Transactions  ====================*/}
        <div className={styles.full__width__section}>
          <div className={styles.table__with__icon}>
            <ArrowLeftRight size={20} color="#fbbf24" />
            <ListTable
              data={recentTransactions}
              title="Recent Transactions"
              columns={transactionColumns}
            />
          </div>
        </div>
        {/*==================== End of Row 3: Recent Transactions ====================*/}
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;

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

  if (user.role !== 'SUB') {
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
