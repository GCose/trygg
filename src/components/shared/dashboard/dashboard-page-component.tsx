import React from 'react';

import Image from 'next/image';

import { ArrowLeftRight, Clock } from 'lucide-react';

import { monthlyRevenueData } from '@/mocks/chart-data';
import {
  dashboardStats,
  recentTransactions,
  pendingDrivers,
} from '@/mocks/dashboard-stats';
import {
  topDriverData,
  driverStatusData,
  alertsSummaryData,
  driverApplicationStatsData,
} from '@/mocks/widgets-data';
import RevenueChart from '@/src/components/charts/RevenueChart';
import ListTable from '@/src/components/ui/ListTable';
import StatsCard from '@/src/components/ui/StatsCard';
import AlertsSummaryWidget from '@/src/components/widgets/AlertsSummaryWidget';
import DriverApplicationStatsWidget from '@/src/components/widgets/DriverApplicationStatsWidget';
import DriverStatusWidget from '@/src/components/widgets/DriverStatusWidget';
import TopDriverWidget from '@/src/components/widgets/TopDriverWidget';
import styles from '@/src/styles/dashboard/DashboardPage.module.css';
import type { TableColumn } from '@/types/interfaces/admin-layout';

const passengerProfiles: Record<string, string> = {
  'John Smith': '/profiles/profile-1.avif',
  'Sarah Wilson': '/profiles/profile-2.avif',
  'Emily Davis': '/profiles/profile-3.avif',
  'Michael Chen': '/profiles/profile-4.avif',
  'Lisa Anderson': '/profiles/profile-5.avif',
  'Chris Martinez': '/profiles/profile-6.avif',
  'Anna Taylor': '/profiles/profile-7.avif',
  'Mark Thompson': '/profiles/profile-8.avif',
  'Rachel Green': '/profiles/profile-9.avif',
  'Tom Wilson': '/profiles/profile-10.avif',
};

const driverProfiles: Record<string, string> = {
  'Mike Johnson': '/profiles/profile-10.avif',
  'David Brown': '/profiles/profile-9.avif',
  'James Miller': '/profiles/profile-8.avif',
  'Robert Garcia': '/profiles/profile-7.avif',
  'William Jones': '/profiles/profile-6.avif',
  'Thomas Wilson': '/profiles/profile-5.avif',
  'Charles Moore': '/profiles/profile-4.avif',
  'Daniel Lee': '/profiles/profile-3.avif',
  'Kevin White': '/profiles/profile-2.avif',
  'Steven Clark': '/profiles/profile-1.avif',
};

const DashboardPageComponent = () => {
  const transactionColumns: TableColumn[] = [
    { key: 'id', label: 'Driver ID' },
    {
      key: 'passenger',
      label: 'Passenger',
      render: (value, row) => {
        const passengerName = value as string;
        const profilePicture =
          passengerProfiles[passengerName] || '/profiles/profile-1.avif';

        return (
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
                src={profilePicture}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <span>{passengerName}</span>
          </div>
        );
      },
    },
    {
      key: 'driver',
      label: 'Driver',
      render: (value, row) => {
        const driverName = value as string;
        const profilePicture =
          driverProfiles[driverName] || '/profiles/profile-2.avif';

        return (
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
                src={profilePicture}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <span>{driverName}</span>
          </div>
        );
      },
    },
    { key: 'amount', label: 'Amount' },
    { key: 'dateTime', label: 'Date/Time' },
  ];

  const pendingDriverColumns: TableColumn[] = [
    { key: 'driverId', label: 'Driver ID' },
    {
      key: 'name',
      label: 'Driver',
      render: (value, row) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div
            style={{
              flexShrink: 0,
              width: '2.5rem',
              height: '2.5rem',
              overflow: 'hidden',
              borderRadius: '50%',
            }}
          >
            <Image
              width={40}
              height={40}
              alt="Driver"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              src={(row.profilePicture as string) || '/profiles/profile-1.avif'}
            />
          </div>
          <span style={{ fontWeight: 500, color: '#111827' }}>
            {value as string}
          </span>
        </div>
      ),
    },
    { key: 'vehicleType', label: 'Vehicle' },
    { key: 'appliedDate', label: 'Applied' },
    {
      key: 'action',
      label: 'Action',
      render: () => (
        <div className={styles.action__buttons}>
          <button className={styles.approve__btn}>Approve</button>
          <button className={styles.reject__btn}>Reject</button>
        </div>
      ),
    },
  ];

  return (
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

      {/*==================== Row 4: Stats Widgets Left, Pending Applications Right ====================*/}
      <div className={styles.final__row}>
        {/*==================== Stats Widgets ====================*/}
        <div className={styles.stats__widgets}>
          {/*==================== Document Alerts Widget ====================*/}
          <div className={styles.widget}>
            <AlertsSummaryWidget data={alertsSummaryData} />
          </div>
          {/*==================== End of Document Alerts Widget ====================*/}

          {/*==================== Driver Application Stats Widget ====================*/}
          <div className={styles.widget}>
            <DriverApplicationStatsWidget data={driverApplicationStatsData} />
          </div>
          {/*==================== End of Driver Application Stats Widget ====================*/}
        </div>
        {/*==================== End of Stats Widgets ====================*/}

        {/*==================== Pending Applications Section ====================*/}
        <div className={styles.pending__section}>
          <div className={styles.table__with__pending__icon}>
            <Clock size={20} color="#fbbf24" />
            <ListTable
              data={pendingDrivers}
              columns={pendingDriverColumns}
              title="Pending Driver Applications"
            />
          </div>
        </div>
        {/*==================== End of Pending Applications Section ====================*/}
      </div>
      {/*==================== End of Row 4 ====================*/}
    </div>
  );
};

export default DashboardPageComponent;
