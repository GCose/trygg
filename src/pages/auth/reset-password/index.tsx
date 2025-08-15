import React, { useEffect, useState } from 'react';

import type { NextApiRequest } from 'next';

import Image from 'next/image';
import { useRouter } from 'next/router';

import { EyeOff, Eye, ArrowLeft } from 'lucide-react';

import styles from '@/src/styles/SignIn.module.css';
import type { User } from '@/types';
import { isLoggedIn } from '@/utils/auth';
import { showAlert } from '@/utils/sweet-alert';

const ResetPassword = () => {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData(e.currentTarget);
      const newPassword = formData.get('new-password') as string;
      const confirmPassword = formData.get('confirm-password') as string;

      // Simple validation
      if (newPassword !== confirmPassword) {
        showAlert({
          title: 'Error!',
          text: 'Passwords do not match.',
          icon: 'error',
        });
        return;
      }

      if (newPassword.length < 6) {
        showAlert({
          title: 'Error!',
          text: 'Password must be at least 6 characters long.',
          icon: 'error',
        });
        return;
      }

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Show success alert then redirect
      showAlert({
        title: 'Success!',
        text: 'Your password has been reset successfully.',
        icon: 'success',
        showCancelButton: false,
        confirmButtonText: 'OK',
      });

      router.push('/auth');
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackToLogin = () => {
    router.push('/auth');
  };

  useEffect(() => {
    document.title = 'Trygg Admin | Reset Password';
  }, []);

  return (
    <div className={styles.container}>
      {/*==================== Left Side - Form Section ====================*/}
      <div className={styles.form__section}>
        <div className={styles.login__card}>
          <div className={styles.logo__section}>
            <div className={styles.logo__placeholder}>
              <Image
                src="/icon.png"
                alt="Logo"
                width={64}
                height={64}
                className={styles.logo__image}
                priority
              />
            </div>
          </div>

          <div className={styles.welcome}>
            <h1 className={styles.title}>Reset Your Password</h1>
            <p className={styles.subtitle}>Enter your new password below</p>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.input__group}>
              <label htmlFor="new-password" className={styles.label}>
                New Password
              </label>
              <div className={styles.password__container}>
                <input
                  required
                  id="new-password"
                  name="new-password"
                  className={styles.input}
                  placeholder="Enter your new password"
                  type={showNewPassword ? 'text' : 'password'}
                />
                <button
                  type="button"
                  className={styles.password__toggle}
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  aria-label={
                    showNewPassword ? 'Hide password' : 'Show password'
                  }
                >
                  {showNewPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className={styles.input__group}>
              <label htmlFor="confirm-password" className={styles.label}>
                Confirm Password
              </label>
              <div className={styles.password__container}>
                <input
                  required
                  id="confirm-password"
                  name="confirm-password"
                  className={styles.input}
                  placeholder="Confirm your new password"
                  type={showConfirmPassword ? 'text' : 'password'}
                />
                <button
                  type="button"
                  className={styles.password__toggle}
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  aria-label={
                    showConfirmPassword ? 'Hide password' : 'Show password'
                  }
                >
                  {showConfirmPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`${styles.submit__button} ${isLoading ? styles.disabledButton : ''}`}
            >
              {isLoading ? 'Resetting...' : 'Reset Password'}
            </button>
          </form>

          <div className={styles.footer}>
            <button
              onClick={handleBackToLogin}
              className={styles.forgot__password}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                border: 'none',
                background: 'transparent',
              }}
            >
              <ArrowLeft size={16} />
              Back to Sign In
            </button>
          </div>
        </div>
      </div>
      {/*==================== End of Left Side - Form Section ====================*/}

      {/*==================== Right Side - Visual Content ====================*/}
      <div className={styles.visual__section}>
        <div className={styles.visual__content}>
          <Image
            priority
            width={450}
            height={450}
            src="/liquid-cheese.svg"
            alt="Password reset illustration"
          />
        </div>
      </div>
      {/*==================== End of Right Side - Visual Content ====================*/}
    </div>
  );
};

export default ResetPassword;

export const getServerSideProps = async ({ req }: { req: NextApiRequest }) => {
  const userData = isLoggedIn(req);

  if (userData) {
    const user = userData as User;

    if (user.role === 'SUB') {
      return {
        redirect: {
          destination: '/sub-admin',
          permanent: false,
        },
      };
    } else if (user.role === 'SUPER') {
      return {
        redirect: {
          destination: '/super-admin',
          permanent: false,
        },
      };
    }

    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
