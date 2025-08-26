import React from 'react';

import styles from '@/src/styles/drivers/DriversPage.module.css';
import skeletonStyles from '@/src/styles/drivers/DriversSkeleton.module.css';

const DriversSkeleton = () => {
  return (
    <div className={styles.drivers__page}>
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
            <div className={skeletonStyles.filter__select} />
            <div className={skeletonStyles.date__input} />
            <div className={skeletonStyles.reset__button} />
          </div>
          {/*==================== End of Filter Dropdowns Skeleton ====================*/}
        </div>
      </div>
      {/*==================== End of Filters Section Skeleton ====================*/}

      {/*==================== Drivers Table Skeleton ====================*/}
      <div className={styles.table__with__icon}>
        <div className={skeletonStyles.table__container}>
          <div className={skeletonStyles.table__header}>
            <div className={skeletonStyles.table__title} />
            <div className={skeletonStyles.table__icon} />
          </div>
          <div className={skeletonStyles.table__content}>
            <div className={skeletonStyles.table__headers}>
              {[...Array(8)].map((_, index) => (
                <div
                  key={index}
                  className={skeletonStyles.table__header__item}
                />
              ))}
            </div>
            {[...Array(15)].map((_, index) => (
              <div key={index} className={skeletonStyles.table__row}>
                <div className={skeletonStyles.table__cell} />
                <div className={skeletonStyles.table__cell__with__avatar}>
                  <div className={skeletonStyles.table__avatar} />
                  <div className={skeletonStyles.table__name} />
                </div>
                <div className={skeletonStyles.table__cell} />
                <div className={skeletonStyles.table__cell__stars}>
                  {[...Array(5)].map((_, starIndex) => (
                    <div
                      key={starIndex}
                      className={skeletonStyles.star__skeleton}
                    />
                  ))}
                </div>
                <div className={skeletonStyles.table__cell} />
                <div className={skeletonStyles.table__cell} />
                <div className={skeletonStyles.table__cell__badge} />
                <div className={skeletonStyles.table__cell__action}>
                  <div className={skeletonStyles.action__button} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/*==================== End of Drivers Table Skeleton ====================*/}

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

export default DriversSkeleton;
