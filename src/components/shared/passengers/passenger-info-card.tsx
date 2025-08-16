import { useState } from 'react';

import Image from 'next/image';

import { Check, X, Shield, Globe, Share2 } from 'lucide-react';

import styles from '@/src/styles/passengers/PassengerInfoCard.module.css';
import type { PassengerInfoCardProps } from '@/types/interfaces/passenger-details';

const PassengerInfoCard = ({ passenger }: PassengerInfoCardProps) => {
  const [activeTab, setActiveTab] = useState<'account' | 'referral'>('account');

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatLastLogin = (dateString: string) => {
    const now = new Date();
    const loginDate = new Date(dateString);
    const diffInHours = Math.floor(
      (now.getTime() - loginDate.getTime()) / (1000 * 60 * 60)
    );

    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours} hours ago`;
    if (diffInHours < 48) return 'Yesterday';
    return formatDate(dateString);
  };

  const renderAccountContent = () => (
    <div className={styles.tab__display}>
      <div className={styles.account__info}>
        <div className={styles.info__item}>
          <span className={styles.info__label}>Account Created</span>
          <span className={styles.info__value}>
            {formatDate(passenger.createdAt)}
          </span>
        </div>
        <div className={styles.info__item}>
          <span className={styles.info__label}>Last Updated</span>
          <span className={styles.info__value}>
            {formatDate(passenger.updatedAt)}
          </span>
        </div>
        <div className={styles.info__item}>
          <span className={styles.info__label}>Last Active</span>
          <span className={styles.info__value}>
            {formatLastLogin(passenger.lastLogin)}
          </span>
        </div>
        <div className={styles.info__item}>
          <span className={styles.info__label}>Preferred Language</span>
          <div className={styles.language__value}>
            <Globe size={14} />
            <span>{passenger.preferredLanguage.toUpperCase()}</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderReferralContent = () => (
    <div className={styles.tab__display}>
      <div className={styles.referral__info}>
        <div className={styles.info__item}>
          <span className={styles.info__label}>Referral Code</span>
          <div className={styles.referral__code}>
            <Share2 size={14} className={styles.referral__icon} />
            <span className={styles.code__value}>{passenger.referralCode}</span>
          </div>
        </div>
        {passenger.referredBy ? (
          <div className={styles.info__item}>
            <span className={styles.info__label}>Referred By</span>
            <span className={styles.info__value}>{passenger.referredBy}</span>
          </div>
        ) : (
          <div className={styles.no__referral}>
            <span>No referral information</span>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className={styles.passenger__info__card}>
      {/*==================== Passenger Profile Section ====================*/}
      <div className={styles.passenger__profile}>
        <div className={styles.profile__left}>
          <div className={styles.passenger__avatar}>
            <Image
              width={48}
              height={48}
              src={passenger.profilePicture}
              alt={passenger.fullName}
              className={styles.avatar__image}
            />
          </div>
          <div className={styles.passenger__info}>
            <h2 className={styles.passenger__name}>{passenger.fullName}</h2>
            <div className={styles.status__container}>
              <span
                className={`${styles.status__badge} ${styles[passenger.status.toLowerCase()]}`}
              >
                {passenger.status}
              </span>
              {passenger.isEmailVerified && (
                <div className={styles.verified__badge}>
                  <Check size={12} />
                  <span>Verified</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className={styles.profile__right}>
          <div className={styles.language__badge}>
            <Globe size={14} />
            <span>{passenger.preferredLanguage.toUpperCase()}</span>
          </div>
        </div>
      </div>
      {/*==================== End of Passenger Profile Section ====================*/}

      {/*==================== Passenger Details Grid ====================*/}
      <div className={styles.passenger__details__grid}>
        <div className={styles.detail__item}>
          <span className={styles.detail__label}>Email</span>
          <span className={styles.detail__value}>{passenger.email}</span>
        </div>

        <div className={styles.detail__item}>
          <span className={styles.detail__label}>Phone Number</span>
          <span className={styles.detail__value}>{passenger.phone}</span>
        </div>

        <div className={styles.detail__item}>
          <span className={styles.detail__label}>Join Date</span>
          <span className={styles.detail__value}>
            {formatDate(passenger.createdAt)}
          </span>
        </div>

        <div className={styles.detail__item}>
          <span className={styles.detail__label}>Last Login</span>
          <span className={styles.detail__value}>
            {formatLastLogin(passenger.lastLogin)}
          </span>
        </div>

        <div className={styles.detail__item}>
          <span className={styles.detail__label}>Biometric Security</span>
          <div className={styles.detail__value}>
            <Shield size={16} className={styles.detail__icon} />
            <span
              className={
                passenger.biometricEnabled ? styles.security__value : ''
              }
            >
              {passenger.biometricEnabled ? 'Enabled' : 'Disabled'}
            </span>
          </div>
        </div>

        <div className={styles.detail__item}>
          <span className={styles.detail__label}>Email Verification</span>
          <div className={styles.detail__value}>
            {passenger.isEmailVerified ? (
              <Check size={16} className={styles.verified__icon} />
            ) : (
              <X size={16} className={styles.unverified__icon} />
            )}
            <span className={styles.verification__value}>
              {passenger.isEmailVerified ? 'Verified' : 'Unverified'}
            </span>
          </div>
        </div>
      </div>
      {/*==================== End of Passenger Details Grid ====================*/}

      {/*==================== Two Column Section ====================*/}
      <div className={styles.two__column__section}>
        {/*==================== Account Activity Column ====================*/}
        <div className={styles.activity__column}>
          <h3 className={styles.section__title}>Account Activity</h3>

          <div className={styles.tab__content}>
            <div className={styles.tab__nav}>
              <button
                className={`${styles.nav__item} ${activeTab === 'account' ? styles.active : ''}`}
                onClick={() => setActiveTab('account')}
              >
                Account Info
              </button>
            </div>

            {renderAccountContent()}
          </div>
        </div>
        {/*==================== End of Account Activity Column ====================*/}

        {/*==================== Referral Information Column ====================*/}
        <div className={styles.referral__column}>
          <h3 className={styles.section__title}>Referral Information</h3>

          <div className={styles.tab__content}>
            <div className={styles.tab__nav}>
              <button
                className={`${styles.nav__item} ${activeTab === 'referral' ? styles.active : ''}`}
                onClick={() => setActiveTab('referral')}
              >
                Referral Code
              </button>
            </div>

            {renderReferralContent()}
          </div>
        </div>
        {/*==================== End of Referral Information Column ====================*/}
      </div>
      {/*==================== End of Two Column Section ====================*/}
    </div>
  );
};

export default PassengerInfoCard;
