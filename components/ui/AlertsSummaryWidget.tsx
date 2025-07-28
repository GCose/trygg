import { AlertTriangle, FileText } from 'lucide-react';
import styles from '@/src/styles/widgets/AlertsSummary.module.css';
import { AlertsSummaryWidgetProps } from '@/interfaces/widgets';

const AlertsSummaryWidget = ({ data }: AlertsSummaryWidgetProps) => {
  return (
    <div className={styles.widget}>
      {/*==================== Header ====================*/}
      <div className={styles.header}>
        <h3 className={styles.title}>Document Alerts</h3>
        <AlertTriangle size={20} color="#fbbf24" />
      </div>
      {/*==================== End of Header ====================*/}

      {/*==================== Content ====================*/}
      <div className={styles.content}>
        <div className={styles.main__stat}>
          <span className={styles.count}>{data.totalExpiring}</span>
          <span className={styles.label}>Documents Expiring Soon</span>
        </div>

        <div className={styles.breakdown}>
          <div className={styles.breakdown__item}>
            <div className={styles.indicator__critical}></div>
            <span className={styles.breakdown__text}>
              {data.criticalAlerts} Critical (≤7 days)
            </span>
          </div>

          <div className={styles.breakdown__item}>
            <div className={styles.indicator__warning}></div>
            <span className={styles.breakdown__text}>
              {data.warningAlerts} Warning (≤30 days)
            </span>
          </div>
        </div>

        <div className={styles.view__details}>
          <FileText size={14} color="#6b7280" />
          <span>View all alerts →</span>
        </div>
      </div>
      {/*==================== End of Content ====================*/}
    </div>
  );
};

export default AlertsSummaryWidget;
