import { isLoggedIn } from '@/utils/auth';
import { NextApiRequest } from 'next';
import StatsCard from '@/components/ui/StatsCard';
import ListTable from '@/components/ui/ListTable';
import {
  dashboardStats,
  recentTransactions,
  driverStatus,
  activeRides,
  recentIssues,
  pendingDrivers,
} from '@/data/dashboard-stats';
import { TableColumn } from '@/interfaces/navigation';
import { TAppColors } from '@/constants/Colors';
import * as Icons from 'lucide-react';
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
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
              trend={stat.trend}
            />
          ))}
        </div>
        {/*==================== End of Stats Cards ====================*/}

        {/*==================== Main Content Grid ====================*/}
        <div className={styles.content__grid}>
          {/*==================== Recent Transactions ====================*/}
          <div className={styles.transactions__section}>
            <ListTable
              columns={transactionColumns}
              data={recentTransactions}
              title="Recent Transactions"
              maxHeight="500px"
            />
          </div>
          {/*==================== End of Recent Transactions ====================*/}

          {/*==================== Right Side Content ====================*/}
          <div className={styles.right__panel}>
            {/*==================== Pending Driver Applications ====================*/}
            <div className={styles.pending__drivers}>
              <ListTable
                maxHeight="300px"
                data={pendingDrivers}
                columns={pendingDriverColumns}
                title="Pending Driver Applications"
              />
            </div>
            {/*==================== End of Pending Driver Applications ====================*/}

            {/*==================== Active Rides Counter ====================*/}
            <div className={styles.activerides__card}>
              <div className={styles.card__header}>
                <Icons.Activity size={20} color={TAppColors.primaryColor} />
                <h3>Live Rides</h3>
              </div>
              <div className={styles.rides__stats}>
                <div className={styles.ride__stat}>
                  <span className={styles.ride__number}>
                    {activeRides.current}
                  </span>
                  <span className={styles.ride__label}>Active</span>
                </div>
                <div className={styles.ride__stat}>
                  <span className={styles.ride__number}>
                    {activeRides.completed}
                  </span>
                  <span className={styles.ride__label}>Completed Today</span>
                </div>
                <div className={styles.ride__stat}>
                  <span className={styles.ride__number}>
                    {activeRides.cancelled}
                  </span>
                  <span className={styles.ride__label}>Cancelled</span>
                </div>
              </div>
            </div>
            {/*==================== End of Active Rides Counter ====================*/}
          </div>
          {/*==================== End of Right Side Content ====================*/}
        </div>

        {/*==================== Bottom Section ====================*/}
        <div className={styles.bottom__section}>
          {/*==================== Driver Status Overview ====================*/}
          <div className={styles.driverstatus__card}>
            <div className={styles.card__header}>
              <Icons.Users size={20} color={TAppColors.primaryColor} />
              <h3>Driver Status Overview</h3>
            </div>
            <div className={styles.status__grid}>
              <div className={styles.status__item}>
                <div className={`${styles.status__dot} ${styles.online}`}></div>
                <span className={styles.status__label}>
                  Online: {driverStatus.online}
                </span>
              </div>
              <div className={styles.status__item}>
                <div className={`${styles.status__dot} ${styles.busy}`}></div>
                <span className={styles.status__label}>
                  Busy: {driverStatus.busy}
                </span>
              </div>
              <div className={styles.status__item}>
                <div
                  className={`${styles.status__dot} ${styles.offline}`}
                ></div>
                <span className={styles.status__label}>
                  Offline: {driverStatus.offline}
                </span>
              </div>
              <div className={styles.status__item}>
                <div
                  className={`${styles.status__dot} ${styles.pending}`}
                ></div>
                <span className={styles.status__label}>
                  Pending: {driverStatus.pending}
                </span>
              </div>
            </div>
          </div>
          {/*==================== End of Driver Status Overview ====================*/}

          {/*==================== Recent Issues ====================*/}
          <div className={styles.issues__card}>
            <div className={styles.card__header}>
              <Icons.AlertTriangle size={20} color={TAppColors.orangeColor} />
              <h3>Recent Issues</h3>
            </div>
            <div className={styles.issues__list}>
              {recentIssues.map((issue) => (
                <div key={issue.id} className={styles.issue__item}>
                  <div className={styles.issue__content}>
                    <span className={styles.issue__type}>{issue.type}</span>
                    <span className={styles.issue__description}>
                      {issue.description}
                    </span>
                  </div>
                  <div className={styles.issue__right}>
                    <span
                      className={`${styles.priority} ${styles[issue.priority]}`}
                    >
                      {issue.priority}
                    </span>
                    <span className={styles.issue__time}>{issue.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/*==================== End of Recent Issues ====================*/}
        </div>
        {/*==================== End of Bottom Section ====================*/}
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
