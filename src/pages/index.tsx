import { isLoggedIn } from '@/utils/auth';
import { NextApiRequest } from 'next';
import Image from 'next/image';
import StatsCard from '@/components/ui/StatsCard';
import ListTable from '@/components/ui/ListTable';
import {
  dashboardStats,
  recentTransactions,
  pendingDrivers,
  driverLeaderboard,
  documentsExpiring,
  offlineDrivers,
} from '@/data/dashboard-stats';
import { TableColumn } from '@/interfaces/admin-layout';
import styles from '@/src/styles/Dashboard.module.css';
import DashboardLayout from '@/components/DashboardLayout';
import { SuperAdminPageMeta } from '@/pageMeta/meta';

const DashboardPage = () => {
  //  Transaction Columns
  const transactionColumns: TableColumn[] = [
    { key: 'id', label: 'S/N' },
    { key: 'passenger', label: 'Passenger' },
    { key: 'driver', label: 'Driver' },
    { key: 'amount', label: 'Amount' },
    { key: 'dateTime', label: 'Date/Time' },
  ];

  // Pending Driver Columns
  const pendingDriverColumns: TableColumn[] = [
    {
      key: 'profilePicture',
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
            src={(value as string) || '/profile-1.avif'}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      ),
    },
    { key: 'name', label: 'Driver Name' },
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

  // Driver Leaderboard Columns
  const leaderboardColumns: TableColumn[] = [
    {
      key: 'profilePicture',
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
            src={(value as string) || '/profile-1.avif'}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      ),
    },
    { key: 'name', label: 'Driver Name' },
    { key: 'rides', label: 'Rides' },
    { key: 'rating', label: 'Rating' },
  ];

  // Documents Expiring Columns
  const documentsColumns: TableColumn[] = [
    {
      key: 'profilePicture',
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
            src={(value as string) || '/profile-1.avif'}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      ),
    },
    { key: 'driverName', label: 'Driver Name' },
    { key: 'documentType', label: 'Document' },
    { key: 'expiryDate', label: 'Expires' },
    {
      key: 'daysLeft',
      label: 'Days Left',
      render: (value) => (
        <span
          className={(value as number) <= 7 ? styles.urgent : styles.warning}
        >
          {String(value)} days
        </span>
      ),
    },
  ];

  // Offline Drivers Columns
  const offlineColumns: TableColumn[] = [
    {
      key: 'profilePicture',
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
            src={(value as string) || '/profile-1.avif'}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      ),
    },
    { key: 'name', label: 'Driver Name' },
    { key: 'lastSeen', label: 'Last Seen' },
  ];

  return (
    <DashboardLayout title="Dashboard" meta={SuperAdminPageMeta.dashboardPage}>
      <div className={styles.dashboard}>
        {/*==================== Stats Cards ====================*/}
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
        {/*==================== End of Stats Cards ====================*/}

        {/*==================== Main Content Grid ====================*/}
        <div className={styles.content__grid}>
          {/*==================== Recent Transactions ====================*/}
          <div className={styles.transactions__section}>
            <ListTable
              maxHeight="500px"
              data={recentTransactions}
              title="Recent Transactions"
              columns={transactionColumns}
            />
          </div>
          {/*==================== End of Recent Transactions ====================*/}

          {/*==================== Right Side Content ====================*/}
          <div className={styles.right__panel}>
            {/*==================== Pending Driver Applications ====================*/}
            <div className={styles.pending__drivers}>
              <ListTable
                maxHeight="600px"
                data={pendingDrivers}
                columns={pendingDriverColumns}
                title="Pending Driver Applications"
              />
            </div>
            {/*==================== End of Pending Driver Applications ====================*/}
          </div>
          {/*==================== End of Right Side Content ====================*/}
        </div>
        {/*==================== End of Main Content Grid ====================*/}

        {/*==================== Three Widget Grid ====================*/}
        <div className={styles.widgets__grid}>
          {/*==================== Driver Leaderboard ====================*/}
          <div className={styles.widget}>
            <ListTable
              maxHeight="300px"
              data={driverLeaderboard}
              columns={leaderboardColumns}
              title="Top Drivers This Month"
            />
          </div>
          {/*==================== End of Driver Leaderboard ====================*/}

          {/*==================== Documents Expiring ====================*/}
          <div className={styles.widget}>
            <ListTable
              maxHeight="300px"
              data={documentsExpiring}
              columns={documentsColumns}
              title="Driver Documents Expiring Soon"
            />
          </div>
          {/*==================== End of Documents Expiring ====================*/}

          {/*==================== Offline Drivers ====================*/}
          <div className={styles.widget}>
            <ListTable
              maxHeight="300px"
              data={offlineDrivers}
              title="Offline Drivers"
              columns={offlineColumns}
            />
          </div>
          {/*==================== End of Offline Drivers ====================*/}
        </div>
        {/*==================== End of Three Widget Grid ====================*/}
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
