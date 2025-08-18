import { useState } from 'react';

import Image from 'next/image';

import styles from '@/src/styles/sub-admin/SubAdminForm.module.css';
import type {
  SubAdminFormProps,
  SubAdminFormData,
} from '@/types/interfaces/sub-admin';

const CreateSubAdminForm = ({ onCreateAdmin }: SubAdminFormProps) => {
  const [formData, setFormData] = useState<SubAdminFormData>({
    fullName: '',
    email: '',
    phoneNumber: '',
    avatar: '/profiles/profile-1.avif',
  });

  const handleInputChange = (field: keyof SubAdminFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.phoneNumber) {
      alert('Please fill in all fields');
      return;
    }

    onCreateAdmin(formData);

    setFormData({
      fullName: '',
      email: '',
      phoneNumber: '',
      avatar: '/profiles/profile-1.avif',
    });
  };

  return (
    <div className={styles.form__container}>
      {/*==================== Header ====================*/}
      <h2 className={styles.form__title}>Create Sub Admin</h2>
      {/*==================== End of Header ====================*/}

      <form onSubmit={handleSubmit} className={styles.form}>
        {/*==================== Avatar Upload ====================*/}
        <div className={styles.avatar__section}>
          <div className={styles.avatar__wrapper}>
            <Image
              width={80}
              height={80}
              src={formData.avatar}
              alt="Admin Avatar"
              className={styles.avatar__image}
            />
          </div>
        </div>
        {/*==================== End of Avatar Upload ====================*/}

        {/*==================== Form Fields ====================*/}
        <div className={styles.form__fields}>
          {/*==================== Full Name ====================*/}
          <div className={styles.field__group}>
            <label className={styles.field__label}>Full Name</label>
            <input
              type="text"
              value={formData.fullName}
              onChange={e => handleInputChange('fullName', e.target.value)}
              placeholder="John Migurdia"
              className={styles.field__input}
            />
          </div>
          {/*==================== End of Full Name ====================*/}

          {/*==================== Email ====================*/}
          <div className={styles.field__group}>
            <label className={styles.field__label}>Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={e => handleInputChange('email', e.target.value)}
              placeholder="example@gmail.com"
              className={styles.field__input}
            />
          </div>
          {/*==================== End of Email ====================*/}

          {/*==================== Phone Number ====================*/}
          <div className={styles.field__group}>
            <label className={styles.field__label}>Phone Number</label>
            <input
              type="tel"
              value={formData.phoneNumber}
              onChange={e => handleInputChange('phoneNumber', e.target.value)}
              placeholder="+46 70 123 45 67"
              className={styles.field__input}
            />
          </div>
          {/*==================== End of Phone Number ====================*/}
        </div>
        {/*==================== End of Form Fields ====================*/}

        {/*==================== Submit Button ====================*/}
        <button type="submit" className={styles.submit__button}>
          Create Sub Admin
        </button>
        {/*==================== End of Submit Button ====================*/}
      </form>
    </div>
  );
};

export default CreateSubAdminForm;
