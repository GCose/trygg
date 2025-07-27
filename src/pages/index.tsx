import { isLoggedIn } from '@/utils/auth';
import { NextApiRequest } from 'next';
import Image from 'next/image';
import StatsCard from '@/components/ui/StatsCard';
import ListTable from '@/components/ui/ListTable';
import TopDriverWidget from '@/components/ui/TopDriverWidget';
import DriverStatusWidget from '@/components/ui/DriverStatusWidget';
import AlertsSummaryWidget from '@/components/ui/AlertsSummaryWidget';
import DriverApplicationStatsWidget from '@/components/ui/DriverApplicationStatsWidget';
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
import { TableColumn } from '@/interfaces/admin-layout';
import { ArrowLeftRight } from 'lucide-react';
import styles from '@/src/styles/dashboard/DashboardPage.module.css';
import DashboardLayout from '@/components/DashboardLayout';
import { SuperAdminPageMeta } from '@/pageMeta/meta';

const DashboardPage = () => {
  // Transaction Columns
  const transactionColumns: TableColumn[] = [
    { key: 'id', label: 'Driver ID' },
    {
      key: 'passenger',
      label: 'Passenger',
      render: (value) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div
            style={{
              width: '32px',
              height: '32px',
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
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div
            style={{
              width: '32px',
              height: '32px',
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
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              width: '40px',
              height: '40px',
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

        {/*==================== Row 2: Transactions Left, Driver Widgets Right ====================*/}
        <div className={styles.second__row}>
          {/*==================== Recent Transactions ====================*/}
          <div className={styles.transactions__section}>
            <div className={styles.table__with__icon}>
              <ArrowLeftRight size={20} color="#fbbf24" />
              <ListTable
                data={recentTransactions}
                title="Recent Transactions"
                columns={transactionColumns}
              />
            </div>
          </div>
          {/*==================== End of Recent Transactions ====================*/}

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

        {/*==================== Row 3: Application Stats Left, Pending Drivers Right ====================*/}
        <div className={styles.third__row}>
          {/*==================== Left Column ====================*/}
          <div className={styles.left__widgets}>
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
          {/*==================== End of Left Column ====================*/}

          {/*==================== Right Column ====================*/}
          <div className={styles.right__widgets}>
            {/*==================== Pending Driver Applications ====================*/}
            <div className={styles.widget}>
              <ListTable
                data={pendingDrivers}
                columns={pendingDriverColumns}
                title="Pending Driver Applications"
              />
            </div>
            {/*==================== End of Pending Driver Applications ====================*/}
          </div>
          {/*==================== End of Right Column ====================*/}
        </div>
        {/*==================== End of Row 3 ====================*/}
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
