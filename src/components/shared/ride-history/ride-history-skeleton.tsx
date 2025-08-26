import React from 'react';

import styles from '@/src/styles/ride-history/RideHistoryPage.module.css';
import skeletonStyles from '@/src/styles/ride-history/RideHistorySkeleton.module.css';

const RideHistorySkeleton = () => {
  return (
    <div className={styles.rides__page}>
      {/*==================== Stats Cards Section Skeleton ====================*/}
      <div className={styles.stats__section}>
        {[...Array(4)].map((_, index) => (
          <div key={index} className={skeletonStyles.stats__card}>
            {/*==================== Icon Section ====================*/}
            <div className={skeletonStyles.icon__wrapper} />
            {/*==================== End of Icon Section ====================*/}

            {/*==================== Content Section ====================*/}
            <div className={skeletonStyles.content}>
              <div className={skeletonStyles.title} />
              <div className={skeletonStyles.value} />
            </div>
            {/*==================== End of Content Section ====================*/}
          </div>
        ))}
      </div>
      {/*==================== End of Stats Cards Section Skeleton ====================*/}

      {/*==================== Filters Section Skeleton ====================*/}
      <div className={skeletonStyles.filters__section}>
        <div className={skeletonStyles.filters__row}>
          {/*==================== Search Input Skeleton ====================*/}
          <div className={skeletonStyles.search__wrapper}>
            <div className={skeletonStyles.search__icon} />
            <div className={skeletonStyles.search__input} />
          </div>
          {/*==================== End of Search Input Skeleton ====================*/}

          {/*==================== Filter Dropdowns Skeleton ====================*/}
          <div className={skeletonStyles.filters__group}>
            <div className={skeletonStyles.filter__select} />
            <div className={skeletonStyles.date__input} />
            <div className={skeletonStyles.date__input} />
            <div className={skeletonStyles.reset__button} />
          </div>
          {/*==================== End of Filter Dropdowns Skeleton ====================*/}
        </div>
      </div>
      {/*==================== End of Filters Section Skeleton ====================*/}

      {/*==================== Rides Table Skeleton ====================*/}
      <div className={styles.table__with__icon}>
        <div className={skeletonStyles.table__container}>
          <div className={skeletonStyles.table__header}>
            <div className={skeletonStyles.table__title} />
            <div className={skeletonStyles.table__icon} />
          </div>
          <div className={skeletonStyles.table__content}>
            <div className={skeletonStyles.table__headers}>
              {[...Array(11)].map((_, index) => (
                <div
                  key={index}
                  className={skeletonStyles.table__header__item}
                />
              ))}
            </div>
            {[...Array(15)].map((_, index) => (
              <div key={index} className={skeletonStyles.table__row}>
                <div className={skeletonStyles.ride__id} />
                <div className={skeletonStyles.table__cell__with__avatar}>
                  <div className={skeletonStyles.table__avatar} />
                  <div className={skeletonStyles.table__name} />
                </div>
                <div className={skeletonStyles.table__cell__with__avatar}>
                  <div className={skeletonStyles.table__avatar} />
                  <div className={skeletonStyles.table__name} />
                </div>
                <div className={skeletonStyles.pickup__location} />
                <div className={skeletonStyles.dropoff__location} />
                <div className={skeletonStyles.distance} />
                <div className={skeletonStyles.duration} />
                <div className={skeletonStyles.fare} />
                <div className={skeletonStyles.status__badge} />
                <div className={skeletonStyles.date__time} />
                <div className={skeletonStyles.action__menu}>
                  <div className={skeletonStyles.dots__menu} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/*==================== End of Rides Table Skeleton ====================*/}

      {/*==================== Pagination Section Skeleton ====================*/}
      <div className={styles.pagination__section}>
        <div className={skeletonStyles.pagination__info} />
        <div className={skeletonStyles.pagination__controls}>
          <div className={skeletonStyles.pagination__button} />
          <div className={skeletonStyles.pagination__button} />
          <div className={skeletonStyles.pagination__button} />
          <div className={skeletonStyles.pagination__button} />
          <div className={skeletonStyles.pagination__button} />
          <div className={skeletonStyles.pagination__button} />
        </div>
      </div>
      {/*==================== End of Pagination Section Skeleton ====================*/}
    </div>
  );
};

export default RideHistorySkeleton;
