import * as Icons from 'lucide-react';
import styles from '@/src/styles/StatsCard.module.css';
import { TAppColors } from '@/constants/colors';
import { StatsCardProps } from '@/types/interfaces/admin-layout';

const StatsCard = ({ title, value, icon, trend }: StatsCardProps) => {
  const IconComponent = Icons[
    icon as keyof typeof Icons
  ] as React.ComponentType<{ size: number; color: string }>;

  return (
    <div className={styles.card}>
      {/*==================== Icon Section ====================*/}
      <div className={styles.icon__wrapper}>
        <IconComponent size={24} color={TAppColors.primaryColor} />
      </div>
      {/*==================== End of Icon Section ====================*/}

      {/*==================== Content Section ====================*/}
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.value}>{value}</p>

        {trend && (
          <div
            className={`${styles.trend} ${trend.isPositive ? styles.positive : styles.negative}`}
          >
            <Icons.TrendingUp size={14} />
            <span>
              {trend.isPositive ? '+' : '-'}
              {Math.abs(trend.value)}%
            </span>
          </div>
        )}
      </div>
      {/*==================== End of Content Section ====================*/}
    </div>
  );
};

export default StatsCard;
