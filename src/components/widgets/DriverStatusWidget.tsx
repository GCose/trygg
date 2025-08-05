import { Users, Clock } from 'lucide-react';

import styles from '@/src/styles/widgets/DriverStatus.module.css';
import type { DriverStatusWidgetProps } from '@/types/interfaces/widgets';

const DriverStatusWidget = ({ data }: DriverStatusWidgetProps) => {
  return (
    <div className={styles.widget}>
      {/*==================== Header ====================*/}
      <div className={styles.header}>
        <h3 className={styles.title}>Driver Status</h3>
        <Users size={20} color="#fbbf24" />
      </div>
      {/*==================== End of Header ====================*/}

      {/*==================== Content ====================*/}
      <div className={styles.content}>
        <div className={styles.main__stat}>
          <span className={styles.count}>{data.totalOffline}</span>
          <span className={styles.label}>Drivers Offline</span>
        </div>

        <div className={styles.breakdown}>
          <div className={styles.breakdown__item}>
            <div className={styles.indicator__critical} />
            <span className={styles.breakdown__text}>
              {data.criticalOffline} offline &gt;2hrs
            </span>
          </div>

          <div className={styles.breakdown__item}>
            <div className={styles.indicator__warning} />
            <span className={styles.breakdown__text}>
              {data.recentOffline} offline &lt;2hrs
            </span>
          </div>
        </div>

        <div className={styles.view__details}>
          <Clock size={14} color="#6b7280" />
          <span>View offline drivers →</span>
        </div>
      </div>
      {/*==================== End of Content ====================*/}
    </div>
  );
};

export default DriverStatusWidget;
