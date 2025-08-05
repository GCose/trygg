import { useState } from 'react';

import Image from 'next/image';

import { Eye, EyeOff, Upload } from 'lucide-react';

import styles from '@/src/styles/sub-admin/SubAdminForm.module.css';
import type {
  SubAdminFormProps,
  SubAdminFormData,
} from '@/types/interfaces/sub-admin';

const CreateSubAdminForm = ({ onCreateAdmin }: SubAdminFormProps) => {
  const [formData, setFormData] = useState<SubAdminFormData>({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    avatar: '/profiles/profile-1.avif',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (field: keyof SubAdminFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleAvatarUpload = () => {
    const profiles = [
      '/profiles/profile-1.avif',
      '/profiles/profile-2.avif',
      '/profiles/profile-3.avif',
      '/profiles/profile-4.avif',
      '/profiles/profile-5.avif',
    ];
    const currentIndex = profiles.indexOf(formData.avatar);
    const nextIndex = (currentIndex + 1) % profiles.length;
    setFormData(prev => ({ ...prev, avatar: profiles[nextIndex] }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      alert('Please fill in all fields');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    onCreateAdmin(formData);

    setFormData({
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
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
          <button
            type="button"
            onClick={handleAvatarUpload}
            className={styles.upload__button}
          >
            <Upload size={16} />
            Upload New
          </button>
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

          {/*==================== Password ====================*/}
          <div className={styles.field__group}>
            <label className={styles.field__label}>Password</label>
            <div className={styles.password__wrapper}>
              <input
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={e => handleInputChange('password', e.target.value)}
                placeholder="••••••••"
                className={styles.field__input}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className={styles.password__toggle}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
          {/*==================== End of Password ====================*/}

          {/*==================== Confirm Password ====================*/}
          <div className={styles.field__group}>
            <label className={styles.field__label}>Confirm Password</label>
            <div className={styles.password__wrapper}>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                value={formData.confirmPassword}
                onChange={e =>
                  handleInputChange('confirmPassword', e.target.value)
                }
                placeholder="••••••••"
                className={styles.field__input}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className={styles.password__toggle}
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
          {/*==================== End of Confirm Password ====================*/}
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
