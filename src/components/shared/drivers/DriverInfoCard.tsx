import Image from 'next/image';
import { useState } from 'react';
import { Star } from 'lucide-react';
import styles from '@/src/styles/drivers/DriverInfoCard.module.css';
import { DriverInfoCardProps } from '@/types/interfaces/driver-details';

const DriverInfoCard = ({ driver }: DriverInfoCardProps) => {
  const [activeDocumentTab, setActiveDocumentTab] = useState('license');
  const [activeVehicleTab, setActiveVehicleTab] = useState('image');

  const renderStarRating = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} size={16} fill="#fbbf24" color="#fbbf24" />);
    }

    if (hasHalfStar) {
      stars.push(<Star key="half" size={16} fill="#fbbf24" color="#fbbf24" />);
    }

    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} size={16} color="#e5e7eb" />);
    }

    return <div className={styles.rating__stars}>{stars}</div>;
  };

  const renderVehicleContent = () => {
    switch (activeVehicleTab) {
      case 'image':
        return (
          <div className={styles.vehicle__image__container}>
            <Image
              width={200}
              height={150}
              alt="Vehicle"
              src={driver.vehicle.image}
              className={styles.vehicle__image}
            />
          </div>
        );
      case 'brand':
        return (
          <div className={styles.vehicle__info}>
            <span className={styles.vehicle__label}>Brand</span>
            <span className={styles.vehicle__value}>
              {driver.vehicle.brand}
            </span>
          </div>
        );
      case 'model':
        return (
          <div className={styles.vehicle__info}>
            <span className={styles.vehicle__label}>Model</span>
            <span className={styles.vehicle__value}>
              {driver.vehicle.model}
            </span>
          </div>
        );
      case 'year':
        return (
          <div className={styles.vehicle__info}>
            <span className={styles.vehicle__label}>Year</span>
            <span className={styles.vehicle__value}>{driver.vehicle.year}</span>
          </div>
        );
      case 'color':
        return (
          <div className={styles.vehicle__info}>
            <span className={styles.vehicle__label}>Color</span>
            <span className={styles.vehicle__value}>
              {driver.vehicle.color}
            </span>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles.driver__info__card}>
      {/*==================== Driver Profile Section ====================*/}
      <div className={styles.driver__profile}>
        <div className={styles.profile__left}>
          <div className={styles.driver__avatar}>
            <Image
              width={48}
              height={48}
              src={driver.profilePicture}
              alt={driver.fullName}
              className={styles.avatar__image}
            />
          </div>
          <div className={styles.driver__info}>
            <h2 className={styles.driver__name}>{driver.fullName}</h2>
            <div className={styles.rating__container}>
              {renderStarRating(driver.averageRating)}
              <span className={styles.rating__text}>
                ({driver.totalRatings} Reviews)
              </span>
            </div>
          </div>
        </div>

        <div className={styles.profile__right}>
          {driver.isOnline && (
            <div className={styles.online__status}>
              <div className={styles.online__dot}></div>
              <span className={styles.online__text}>Online</span>
            </div>
          )}
        </div>
      </div>
      {/*==================== End of Driver Profile Section ====================*/}

      {/*==================== Driver Details Grid ====================*/}
      <div className={styles.driver__details__grid}>
        <div className={styles.detail__item}>
          <span className={styles.detail__label}>Driver ID</span>
          <span className={styles.detail__value}>{driver.driverId}</span>
        </div>

        <div className={styles.detail__item}>
          <span className={styles.detail__label}>Mobile Number</span>
          <span className={styles.detail__value}>{driver.phone}</span>
        </div>

        <div className={styles.detail__item}>
          <span className={styles.detail__label}>E-Mail</span>
          <span className={styles.detail__value}>{driver.email}</span>
        </div>

        <div className={styles.detail__item}>
          <span className={styles.detail__label}>City Drive In</span>
          <span className={styles.detail__value}>{driver.cityDriveIn}</span>
        </div>

        <div className={styles.detail__item}>
          <span className={styles.detail__label}>Register Date</span>
          <span className={styles.detail__value}>{driver.registerDate}</span>
        </div>
      </div>
      {/*==================== End of Driver Details Grid ====================*/}

      {/*==================== Two Column Section ====================*/}
      <div className={styles.two__column__section}>
        {/*==================== Documents Details Column ====================*/}
        <div className={styles.documents__column}>
          <h3 className={styles.section__title}>Documents Details</h3>

          <div className={styles.tab__content}>
            <div className={styles.tab__nav}>
              <button
                className={`${styles.nav__item} ${activeDocumentTab === 'license' ? styles.active : ''}`}
                onClick={() => setActiveDocumentTab('license')}
              >
                Driver Licence
              </button>
            </div>

            <div className={styles.tab__display}>
              <div className={styles.document__image__container}>
                <Image
                  width={200}
                  height={150}
                  src={driver.licenseImage}
                  alt="Driver License"
                  className={styles.document__image}
                />
                <span className={styles.document__filename}>License.jpg</span>
              </div>
            </div>
          </div>
        </div>
        {/*==================== End of Documents Details Column ====================*/}

        {/*==================== Vehicle Details Column ====================*/}
        <div className={styles.vehicle__column}>
          <h3 className={styles.section__title}>Vehicle Details</h3>

          <div className={styles.tab__content}>
            <div className={styles.tab__nav}>
              <button
                className={`${styles.nav__item} ${activeVehicleTab === 'image' ? styles.active : ''}`}
                onClick={() => setActiveVehicleTab('image')}
              >
                Image
              </button>
              <button
                className={`${styles.nav__item} ${activeVehicleTab === 'brand' ? styles.active : ''}`}
                onClick={() => setActiveVehicleTab('brand')}
              >
                Brand
              </button>
              <button
                className={`${styles.nav__item} ${activeVehicleTab === 'model' ? styles.active : ''}`}
                onClick={() => setActiveVehicleTab('model')}
              >
                Model
              </button>
              <button
                className={`${styles.nav__item} ${activeVehicleTab === 'year' ? styles.active : ''}`}
                onClick={() => setActiveVehicleTab('year')}
              >
                Year
              </button>
              <button
                className={`${styles.nav__item} ${activeVehicleTab === 'color' ? styles.active : ''}`}
                onClick={() => setActiveVehicleTab('color')}
              >
                Color
              </button>
            </div>

            <div className={styles.tab__display}>{renderVehicleContent()}</div>
          </div>
        </div>
        {/*==================== End of Vehicle Details Column ====================*/}
      </div>
      {/*==================== End of Two Column Section ====================*/}
    </div>
  );
};

export default DriverInfoCard;
