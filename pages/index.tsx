import {
  dashboardStats,
  recentTransactions,
  pendingDrivers,
} from '@/data/dashboard-stats';
import {
  topDriverData,
  driverStatusData,
  alertsSummaryData,
  driverApplicationStatsData,
} from '@/data/widgets-data';
import Image from 'next/image';
import { NextApiRequest } from 'next';
import { isLoggedIn } from '@/utils/auth';
import StatsCard from '@/components/ui/StatsCard';
import ListTable from '@/components/ui/ListTable';
import { ArrowLeftRight, Clock } from 'lucide-react';
import { SuperAdminPageMeta } from '@/pageMeta/meta';
import { monthlyRevenueData } from '@/data/chart-data';
import { TableColumn } from '@/interfaces/admin-layout';
import DashboardLayout from '@/components/DashboardLayout';
import TopDriverWidget from '@/components/TopDriverWidget';
import RevenueChart from '@/components/charts/RevenueChart';
import DriverStatusWidget from '@/components/DriverStatusWidget';
import AlertsSummaryWidget from '@/components/AlertsSummaryWidget';
import styles from '@/styles/dashboard/DashboardPage.module.css';
import DriverApplicationStatsWidget from '@/components/DriverApplicationStatsWidget';

const DashboardPage = () => {
  // Transaction Columns
  const transactionColumns: TableColumn[] = [
    { key: 'id', label: 'Driver ID' },
    {
      key: 'passenger',
      label: 'Passenger',
      render: (value) => (
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
      render: (value) => (
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

  // Pending Driver Columns
  const pendingDriverColumns: TableColumn[] = [
    {
      key: 'name',
      label: 'Driver',
      render: (value, row) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div
            style={{
              width: '2.5rem',
              height: '2.5rem',
              borderRadius: '50%',
              overflow: 'hidden',
              flexShrink: 0,
            }}
          >
            <Image
              width={40}
              height={40}
              alt="Driver"
              src={(row.profilePicture as string) || '/profiles/profile-1.avif'}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
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
    <DashboardLayout title="Dashboard" meta={SuperAdminPageMeta.dashboardPage}>
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

        {/*==================== Row 3: Recent Transactions Full Width ====================*/}
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

  return {
    props: {
      userData,
    },
  };
};

// export const getServerSideProps = async ({ req }: { req: NextApiRequest }) => {
//   const userData = isLoggedIn(req);

//   if (!userData) {
//     return {
//       redirect: {
//         destination: '/auth',
//         permanent: false,
//       },
//     };
//   }

//   const user = userData as User;

//   if (user.role === "SUB") {
//     return {
//       redirect: {
//         destination: '/sub',
//         permanent: false,
//       },
//     };
//   }
//   else if (user.role === "SUPER") {
//     return {
//       redirect: {
//         destination: '/super-admin',
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {

//     },
//   };
// };
