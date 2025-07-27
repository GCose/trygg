import { Star, TrendingUp } from 'lucide-react';
import { TopPerformerWidgetProps } from '@/interfaces/widgets';
import styles from '@/src/styles/widgets/TopPerformer.module.css';

const TopPerformerWidget = ({ data }: TopPerformerWidgetProps) => {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} size={16} fill="#fbbf24" color="#fbbf24" />);
    }

    const emptyStars = 5 - fullStars;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} size={16} color="#e5e7eb" />);
    }

    return stars;
  };

  return (
    <div className={styles.widget}>
      {/*==================== Header ====================*/}
      <div className={styles.header}>
        <h3 className={styles.title}>Top Performer This Month</h3>
        <TrendingUp size={20} color="#fbbf24" />
      </div>
      {/*==================== End of Header ====================*/}

      {/*==================== Content ====================*/}
      <div className={styles.content}>
        <div className={styles.performer}>
          <div className={styles.name}>{data.name}</div>

          <div className={styles.rating__section}>
            <div className={styles.stars}>{renderStars(data.rating)}</div>
            <span className={styles.rating__value}>{data.rating}</span>
          </div>

          <div className={styles.rides__info}>
            <span className={styles.rides__count}>{data.rides}</span>
            <span className={styles.rides__label}>rides completed</span>
          </div>
        </div>

        <div className={styles.view__all}>
          <span>View all rankings →</span>
        </div>
      </div>
      {/*==================== End of Content ====================*/}
    </div>
  );
};

export default TopPerformerWidget;
