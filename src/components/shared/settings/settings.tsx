import { useState } from 'react';

import Image from 'next/image';

import { User, Lock, Globe, Eye, EyeOff, Upload } from 'lucide-react';

import styles from '@/src/styles/SettingsPage.module.css';

type TabType = 'profile' | 'security' | 'language';

interface SettingsPageComponentProps {
  role: 'SUPER' | 'SUB';
  defaultName: string;
  defaultEmail: string;
}

const SettingsPageComponent = ({
  defaultName,
  defaultEmail,
}: SettingsPageComponentProps) => {
  const [activeTab, setActiveTab] = useState<TabType>('profile');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  {
    /*==================== Profile Form Data ====================*/
  }
  const [profileData, setProfileData] = useState({
    fullName: defaultName,
    email: defaultEmail,
    phone: '+46 123 456 789',
    avatar: '/profiles/profile-1.avif',
  });
  {
    /*==================== End of Profile Form Data ====================*/
  }

  {
    /*==================== Security Form Data ====================*/
  }
  const [securityData, setSecurityData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    twoFactorEnabled: false,
  });
  {
    /*==================== End of Security Form Data ====================*/
  }

  {
    /*==================== Language Form Data ====================*/
  }
  const [languageData, setLanguageData] = useState({
    language: 'en',
    timezone: 'Europe/Stockholm',
    dateFormat: 'DD/MM/YYYY',
  });
  {
    /*==================== End of Language Form Data ====================*/
  }

  const handleProfileChange = (field: string, value: string) => {
    setProfileData(prev => ({ ...prev, [field]: value }));
  };

  const handleSecurityChange = (field: string, value: string | boolean) => {
    setSecurityData(prev => ({ ...prev, [field]: value }));
  };

  const handleLanguageChange = (field: string, value: string) => {
    setLanguageData(prev => ({ ...prev, [field]: value }));
  };

  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Profile updated:', profileData);
  };

  const handleSecuritySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Security updated:', securityData);
  };

  const handleLanguageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Language updated:', languageData);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <form onSubmit={handleProfileSubmit} className={styles.form}>
            {/*==================== Avatar Section ====================*/}
            <div className={styles.avatar__section}>
              <div className={styles.avatar__wrapper}>
                <Image
                  width={80}
                  height={80}
                  alt="Profile Avatar"
                  src={profileData.avatar}
                  className={styles.avatar__image}
                />
              </div>
              <button type="button" className={styles.upload__button}>
                <Upload size={16} />
                Change Avatar
              </button>
            </div>
            {/*==================== End of Avatar Section ====================*/}

            {/*==================== Profile Fields ====================*/}
            <div className={styles.form__fields}>
              <div className={styles.field__group}>
                <label className={styles.field__label}>Full Name</label>
                <input
                  type="text"
                  value={profileData.fullName}
                  onChange={e =>
                    handleProfileChange('fullName', e.target.value)
                  }
                  className={styles.field__input}
                />
              </div>

              <div className={styles.field__group}>
                <label className={styles.field__label}>Email Address</label>
                <input
                  type="email"
                  value={profileData.email}
                  onChange={e => handleProfileChange('email', e.target.value)}
                  className={styles.field__input}
                />
              </div>

              <div className={styles.field__group}>
                <label className={styles.field__label}>Phone Number</label>
                <input
                  type="tel"
                  value={profileData.phone}
                  onChange={e => handleProfileChange('phone', e.target.value)}
                  className={styles.field__input}
                />
              </div>
            </div>
            {/*==================== End of Profile Fields ====================*/}

            <button type="submit" className={styles.submit__button}>
              Update Profile
            </button>
          </form>
        );

      case 'security':
        return (
          <form onSubmit={handleSecuritySubmit} className={styles.form}>
            {/*==================== Password Fields ====================*/}
            <div className={styles.form__fields}>
              <div className={styles.field__group}>
                <label className={styles.field__label}>Current Password</label>
                <div className={styles.password__wrapper}>
                  <input
                    type={showCurrentPassword ? 'text' : 'password'}
                    value={securityData.currentPassword}
                    onChange={e =>
                      handleSecurityChange('currentPassword', e.target.value)
                    }
                    placeholder="••••••••"
                    className={styles.field__input}
                  />
                  <button
                    type="button"
                    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                    className={styles.password__toggle}
                  >
                    {showCurrentPassword ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </button>
                </div>
              </div>

              <div className={styles.field__group}>
                <label className={styles.field__label}>New Password</label>
                <div className={styles.password__wrapper}>
                  <input
                    type={showNewPassword ? 'text' : 'password'}
                    value={securityData.newPassword}
                    onChange={e =>
                      handleSecurityChange('newPassword', e.target.value)
                    }
                    placeholder="••••••••"
                    className={styles.field__input}
                  />
                  <button
                    type="button"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    className={styles.password__toggle}
                  >
                    {showNewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div className={styles.field__group}>
                <label className={styles.field__label}>
                  Confirm New Password
                </label>
                <div className={styles.password__wrapper}>
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={securityData.confirmPassword}
                    onChange={e =>
                      handleSecurityChange('confirmPassword', e.target.value)
                    }
                    placeholder="••••••••"
                    className={styles.field__input}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className={styles.password__toggle}
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </button>
                </div>
              </div>

              {/*==================== Two Factor Authentication ====================*/}
              <div className={styles.field__group}>
                <div className={styles.checkbox__container}>
                  <input
                    type="checkbox"
                    id="twoFactor"
                    checked={securityData.twoFactorEnabled}
                    onChange={e =>
                      handleSecurityChange('twoFactorEnabled', e.target.checked)
                    }
                    className={styles.checkbox}
                  />
                  <label htmlFor="twoFactor" className={styles.checkbox__label}>
                    Enable Two-Factor Authentication
                  </label>
                </div>
              </div>
              {/*==================== End of Two Factor Authentication ====================*/}
            </div>
            {/*==================== End of Password Fields ====================*/}

            <button type="submit" className={styles.submit__button}>
              Update Security
            </button>
          </form>
        );

      case 'language':
        return (
          <form onSubmit={handleLanguageSubmit} className={styles.form}>
            {/*==================== Language Fields ====================*/}
            <div className={styles.form__fields}>
              <div className={styles.field__group}>
                <label className={styles.field__label}>Language</label>
                <select
                  value={languageData.language}
                  onChange={e =>
                    handleLanguageChange('language', e.target.value)
                  }
                  className={styles.field__select}
                >
                  <option value="en">English</option>
                  <option value="sv">Svenska (Swedish)</option>
                </select>
              </div>

              <div className={styles.field__group}>
                <label className={styles.field__label}>Timezone</label>
                <select
                  value={languageData.timezone}
                  onChange={e =>
                    handleLanguageChange('timezone', e.target.value)
                  }
                  className={styles.field__select}
                >
                  <option value="Europe/Stockholm">Stockholm (GMT+1)</option>
                  <option value="UTC">UTC (GMT+0)</option>
                  <option value="Europe/London">London (GMT+0)</option>
                </select>
              </div>

              <div className={styles.field__group}>
                <label className={styles.field__label}>Date Format</label>
                <select
                  value={languageData.dateFormat}
                  onChange={e =>
                    handleLanguageChange('dateFormat', e.target.value)
                  }
                  className={styles.field__select}
                >
                  <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                  <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                  <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                </select>
              </div>
            </div>
            {/*==================== End of Language Fields ====================*/}

            <button type="submit" className={styles.submit__button}>
              Update Preferences
            </button>
          </form>
        );

      default:
        return null;
    }
  };

  return (
    <div className={styles.settings}>
      {/*==================== Settings Container ====================*/}
      <div className={styles.settings__container}>
        {/*==================== Tab Navigation ====================*/}
        <div className={styles.tab__navigation}>
          <button
            onClick={() => setActiveTab('profile')}
            className={`${styles.tab__button} ${activeTab === 'profile' ? styles.active : ''}`}
          >
            <User size={18} />
            Profile
          </button>
          <button
            onClick={() => setActiveTab('security')}
            className={`${styles.tab__button} ${activeTab === 'security' ? styles.active : ''}`}
          >
            <Lock size={18} />
            Security
          </button>
          <button
            onClick={() => setActiveTab('language')}
            className={`${styles.tab__button} ${activeTab === 'language' ? styles.active : ''}`}
          >
            <Globe size={18} />
            Language
          </button>
        </div>
        {/*==================== End of Tab Navigation ====================*/}

        {/*==================== Tab Content ====================*/}
        <div className={styles.tab__content}>{renderTabContent()}</div>
        {/*==================== End of Tab Content ====================*/}
      </div>
      {/*==================== End of Settings Container ====================*/}
    </div>
  );
};

export default SettingsPageComponent;
