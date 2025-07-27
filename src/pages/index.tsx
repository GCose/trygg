import { isLoggedIn } from '@/utils/auth';
import { NextApiRequest } from 'next';
import Image from 'next/image';
import StatsCard from '@/components/ui/StatsCard';
import ListTable from '@/components/ui/ListTable';
import TopPerformerWidget from '@/components/ui/TopPerformerWidget';
import DriverStatusWidget from '@/components/ui/DriverStatusWidget';
import AlertsSummaryWidget from '@/components/ui/AlertsSummaryWidget';
import {
  dashboardStats,
  recentTransactions,
  pendingDrivers,
  documentsExpiring,
} from '@/data/dashboard-stats';
import {
  topPerformerData,
  driverStatusData,
  alertsSummaryData,
} from '@/data/widgets-data';
import { TableColumn } from '@/interfaces/admin-layout';
import styles from '@/src/styles/dashboard/Dashboard.module.css';
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
        <div className={styles.main__grid}>
          {/*==================== Left Column ====================*/}
          <div className={styles.left__column}>
            {/*==================== Top Widgets Row ====================*/}
            <div className={styles.top__widgets}>
              {/*==================== Top Performer Widget ====================*/}
              <div className={styles.widget}>
                <TopPerformerWidget data={topPerformerData} />
              </div>
              {/*==================== End of Top Performer Widget ====================*/}

              {/*==================== Driver Status Widget ====================*/}
              <div className={styles.widget}>
                <DriverStatusWidget data={driverStatusData} />
              </div>
              {/*==================== End of Driver Status Widget ====================*/}
            </div>
            {/*==================== End of Top Widgets Row ====================*/}

            {/*==================== Recent Transactions ====================*/}
            <div className={styles.transactions__section}>
              <ListTable
                data={recentTransactions}
                title="Recent Transactions"
                columns={transactionColumns}
              />
            </div>
            {/*==================== End of Recent Transactions ====================*/}
          </div>
          {/*==================== End of Left Column ====================*/}

          {/*==================== Right Column ====================*/}
          <div className={styles.right__column}>
            {/*==================== Document Alerts Widget ====================*/}
            <div className={styles.widget}>
              <AlertsSummaryWidget data={alertsSummaryData} />
            </div>
            {/*==================== End of Document Alerts Widget ====================*/}

            {/*==================== Documents Expiring ====================*/}
            <div className={styles.widget}>
              <ListTable
                data={documentsExpiring}
                columns={documentsColumns}
                title="Driver License Expiring Soon"
              />
            </div>
            {/*==================== End of Documents Expiring ====================*/}

            {/*==================== Pending Driver Applications ====================*/}
            <div className={styles.pending__drivers}>
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
        {/*==================== End of Main Content Grid ====================*/}
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
