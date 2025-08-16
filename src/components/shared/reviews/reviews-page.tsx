import Image from 'next/image';
import router from 'next/router';

import { Star } from 'lucide-react';

import { reviewsPageData } from '@/mocks/reviews-data';
import styles from '@/src/styles/ReviewsPage.module.css';

const ReviewsPageComponent = () => {
  const { overallRating, reviews, topDrivers } = reviewsPageData;

  const renderStarRating = (rating: number) => {
    return (
      <div className={styles.star__rating}>
        {[1, 2, 3, 4, 5].map(star => (
          <Star
            key={star}
            size={16}
            className={`${styles.star} ${star <= rating ? styles.filled : ''}`}
            fill={star <= rating ? 'currentColor' : 'none'}
          />
        ))}
      </div>
    );
  };

  function handleClickEvent() {
    router.push('/drivers');
  }

  return (
    <div className={styles.reviews__page}>
      {/*==================== Three Column Layout ====================*/}
      <div className={styles.reviews__layout}>
        {/*==================== Left Column - Filter Tabs & Rating ====================*/}
        <div className={styles.left__column}>
          {/*==================== Filter Tabs Card ====================*/}
          <div className={styles.filter__card}>
            <h1 className={styles.feedback__title}>Feedback</h1>
            <div className={styles.filter__tabs}>
              <button className={`${styles.filter__tab} ${styles.active}`}>
                5 Stars (10 Ratings)
              </button>
              <button className={styles.filter__tab}>
                4 Stars (8 Ratings)
              </button>
              <button className={styles.filter__tab}>
                3 Stars (2 Ratings)
              </button>
              <button className={styles.filter__tab}>
                2 Stars (3 Ratings)
              </button>
              <button className={styles.filter__tab}>
                1 Stars (0 Ratings)
              </button>
            </div>
          </div>
          {/*==================== End of Filter Tabs Card ====================*/}

          {/*==================== Overall Rating Card ====================*/}
          <div className={styles.rating__card}>
            <div className={styles.overall__rating}>
              <div className={styles.rating__number}>
                {overallRating.averageRating}
              </div>
              <div className={styles.rating__details}>
                <div className={styles.rating__text}>
                  based on {overallRating.totalRatings} ratings
                </div>
                <div className={styles.overall__stars}>
                  {renderStarRating(Math.round(overallRating.averageRating))}
                </div>
              </div>
            </div>
          </div>
          {/*==================== End of Overall Rating Card ====================*/}
        </div>
        {/*==================== End of Left Column ====================*/}

        {/*==================== Middle Column - Reviews List ====================*/}
        <div className={styles.reviews__column}>
          {reviews.map(review => (
            <div key={review.id} className={styles.review__card}>
              {/*==================== Review Header ====================*/}
              <div className={styles.review__header}>
                <div className={styles.reviewer__info}>
                  <div className={styles.reviewer__avatar}>
                    <Image
                      width={40}
                      height={40}
                      src={review.reviewerAvatar}
                      alt={review.reviewerName}
                      className={styles.avatar__image}
                    />
                  </div>
                  <div className={styles.reviewer__details}>
                    <h3 className={styles.reviewer__name}>
                      {review.reviewerName}
                    </h3>
                    <span className={styles.review__date}>{review.date}</span>
                  </div>
                </div>
                <div className={styles.review__rating}>
                  {renderStarRating(review.rating)}
                </div>
              </div>
              {/*==================== End of Review Header ====================*/}

              {/*==================== Review Content ====================*/}
              <div className={styles.review__content}>
                <p className={styles.review__text}>{review.reviewText}</p>
                <span className={styles.driver__attribution}>
                  -{review.driverName} (Driver)
                </span>
              </div>
              {/*==================== End of Review Content ====================*/}
            </div>
          ))}
        </div>
        {/*==================== End of Middle Column ====================*/}

        {/*==================== Right Column - Top Drivers ====================*/}
        <div className={styles.top__drivers__section}>
          {/*==================== Top Drivers Header ====================*/}
          <div className={styles.top__drivers__header}>
            <h2 className={styles.top__drivers__title}>Top Drivers</h2>
          </div>
          {/*==================== End of Top Drivers Header ====================*/}

          {/*==================== Top Drivers List ====================*/}
          <div className={styles.top__drivers__list}>
            {topDrivers.map((driver, index) => (
              <div
                key={driver.id}
                className={`${styles.driver__item} ${index < topDrivers.length - 1 ? styles.with__border : ''}`}
              >
                {/*==================== Driver Rank ====================*/}
                <span className={styles.driver__rank}>{driver.rank}.</span>
                {/*==================== End of Driver Rank ====================*/}

                {/*==================== Driver Info ====================*/}
                <div className={styles.driver__info}>
                  <div className={styles.driver__avatar}>
                    <Image
                      width={32}
                      height={32}
                      src={driver.avatar}
                      alt={driver.name}
                      className={styles.avatar__image}
                    />
                  </div>
                  <span className={styles.driver__name}>{driver.name}</span>
                </div>
                {/*==================== End of Driver Info ====================*/}

                {/*==================== Driver Action ====================*/}
                <button
                  onClick={handleClickEvent}
                  className={styles.driver__view__more}
                >
                  View more
                </button>
                {/*==================== End of Driver Action ====================*/}
              </div>
            ))}
          </div>
          {/*==================== End of Top Drivers List ====================*/}
        </div>
        {/*==================== End of Right Column ====================*/}
      </div>
      {/*==================== End of Three Column Layout ====================*/}
    </div>
  );
};

export default ReviewsPageComponent;
