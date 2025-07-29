import { UserCheck, Clock, UserX, Users } from 'lucide-react';
import styles from '@/src/styles/widgets/DriverApplicationStats.module.css';
import { DriverApplicationStatsWidgetProps } from '@/types/interfaces/widgets';

const DriverApplicationStatsWidget = ({
  data,
}: DriverApplicationStatsWidgetProps) => {
  return (
    <div className={styles.widget}>
      {/*==================== Header ====================*/}
      <div className={styles.header}>
        <h3 className={styles.title}>Driver Applications</h3>
        <Users size={20} color="#fbbf24" />
      </div>
      {/*==================== End of Header ====================*/}

      {/*==================== Content ====================*/}
      <div className={styles.content}>
        <div className={styles.main__stat}>
          <span className={styles.count}>{data.totalApplications}</span>
          <span className={styles.label}>Total Applications</span>
        </div>

        <div className={styles.breakdown}>
          <div className={styles.breakdown__item}>
            <div className={styles.stat__section}>
              <UserCheck size={16} color="#059669" />
              <span className={styles.stat__count}>{data.approved}</span>
            </div>
            <span className={styles.breakdown__text}>Approved</span>
          </div>

          <div className={styles.breakdown__item}>
            <div className={styles.stat__section}>
              <Clock size={16} color="#f59e0b" />
              <span className={styles.stat__count}>{data.pending}</span>
            </div>
            <span className={styles.breakdown__text}>Pending</span>
          </div>

          <div className={styles.breakdown__item}>
            <div className={styles.stat__section}>
              <UserX size={16} color="#dc2626" />
              <span className={styles.stat__count}>{data.rejected}</span>
            </div>
            <span className={styles.breakdown__text}>Rejected</span>
          </div>
        </div>

        <div className={styles.view__details}>
          <span>View all applications →</span>
        </div>
      </div>
      {/*==================== End of Content ====================*/}
    </div>
  );
};

export default DriverApplicationStatsWidget;
