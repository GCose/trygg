import React from 'react';

import styles from '@/src/styles/reviews/ReviewsPage.module.css';
import skeletonStyles from '@/src/styles/reviews/ReviewsPageSkeleton.module.css';

const ReviewsSkeleton = () => {
  return (
    <div className={styles.reviews__page}>
      {/*==================== Three Column Layout Skeleton ====================*/}
      <div className={styles.reviews__layout}>
        {/*==================== Left Column Skeleton ====================*/}
        <div className={styles.left__column}>
          {/*==================== Filter Tabs Card Skeleton ====================*/}
          <div className={styles.filter__card}>
            <div className={skeletonStyles.feedback__title} />
            <div className={skeletonStyles.filter__tabs}>
              {[...Array(5)].map((_, index) => (
                <div key={index} className={skeletonStyles.filter__tab} />
              ))}
            </div>
          </div>
          {/*==================== End of Filter Tabs Card Skeleton ====================*/}

          {/*==================== Overall Rating Card Skeleton ====================*/}
          <div className={styles.rating__card}>
            <div className={skeletonStyles.overall__rating}>
              <div className={skeletonStyles.rating__number} />
              <div className={skeletonStyles.rating__text} />
              <div className={skeletonStyles.star__display}>
                {[...Array(5)].map((_, index) => (
                  <div key={index} className={skeletonStyles.star__skeleton} />
                ))}
              </div>
            </div>
          </div>
          {/*==================== End of Overall Rating Card Skeleton ====================*/}
        </div>
        {/*==================== End of Left Column Skeleton ====================*/}

        {/*==================== Center Column - Reviews Skeleton ====================*/}
        <div className={styles.reviews__column}>
          {[...Array(6)].map((_, index) => (
            <div key={index} className={skeletonStyles.review__card}>
              {/*==================== Review Header Skeleton ====================*/}
              <div className={skeletonStyles.review__header}>
                <div className={skeletonStyles.reviewer__info}>
                  <div className={skeletonStyles.reviewer__avatar} />
                  <div className={skeletonStyles.reviewer__details}>
                    <div className={skeletonStyles.reviewer__name} />
                    <div className={skeletonStyles.review__date} />
                  </div>
                </div>
                <div className={skeletonStyles.review__rating}>
                  {[...Array(5)].map((_, starIndex) => (
                    <div
                      key={starIndex}
                      className={skeletonStyles.star__skeleton}
                    />
                  ))}
                </div>
              </div>
              {/*==================== End of Review Header Skeleton ====================*/}

              {/*==================== Review Content Skeleton ====================*/}
              <div className={skeletonStyles.review__content}>
                <div className={skeletonStyles.review__text} />
                <div className={skeletonStyles.review__text__line2} />
                <div className={skeletonStyles.review__text__line3} />
                <div className={skeletonStyles.driver__attribution} />
              </div>
              {/*==================== End of Review Content Skeleton ====================*/}
            </div>
          ))}
        </div>
        {/*==================== End of Center Column Skeleton ====================*/}

        {/*==================== Right Column - Top Drivers Skeleton ====================*/}
        <div className={styles.top__drivers__section}>
          {/*==================== Top Drivers Header Skeleton ====================*/}
          <div className={skeletonStyles.top__drivers__header}>
            <div className={skeletonStyles.top__drivers__title} />
          </div>
          {/*==================== End of Top Drivers Header Skeleton ====================*/}

          {/*==================== Top Drivers List Skeleton ====================*/}
          <div className={skeletonStyles.top__drivers__list}>
            {[...Array(10)].map((_, index) => (
              <div key={index} className={skeletonStyles.driver__item}>
                <div className={skeletonStyles.driver__rank} />
                <div className={skeletonStyles.driver__info}>
                  <div className={skeletonStyles.driver__avatar} />
                  <div className={skeletonStyles.driver__name} />
                </div>
                <div className={skeletonStyles.view__more__button} />
              </div>
            ))}
          </div>
          {/*==================== End of Top Drivers List Skeleton ====================*/}
        </div>
        {/*==================== End of Right Column Skeleton ====================*/}
      </div>
      {/*==================== End of Three Column Layout Skeleton ====================*/}
    </div>
  );
};

export default ReviewsSkeleton;
