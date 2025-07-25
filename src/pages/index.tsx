import { isLoggedIn } from '@/utils/auth';
import { NextApiRequest } from 'next';
import StatsCard from '@/components/ui/StatsCard';
import ListTable from '@/components/ui/ListTable';
import {
  dashboardStats,
  recentTransactions,
  pendingDrivers,
} from '@/data/dashboard-stats';
import { TableColumn } from '@/interfaces/navigation';
import styles from '@/src/styles/Dashboard.module.css';
import AdminLayout from '@/components/AdminLayout';

const Dashboard = () => {
  //  Transaction Columns
  const transactionColumns: TableColumn[] = [
    { key: 'id', label: 'S/N' },
    { key: 'passenger', label: 'Passenger' },
    { key: 'driver', label: 'Driver' },
    { key: 'amount', label: 'Amount' },
    { key: 'dateTime', label: 'Date/Time' },
  ];

  // Peanding Driver Columns
  const pendingDriverColumns: TableColumn[] = [
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

  return (
    <AdminLayout title="Dashboard">
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
      </div>
    </AdminLayout>
  );
};

export default Dashboard;

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
