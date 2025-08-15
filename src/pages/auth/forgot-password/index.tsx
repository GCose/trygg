import React, { useEffect, useState } from 'react';

import type { NextApiRequest } from 'next';

import Image from 'next/image';
import { useRouter } from 'next/router';

import { ArrowLeft } from 'lucide-react';

import VerificationCodeModal from '@/src/components/modals/VerificationCodeModal';
import styles from '@/src/styles/SignIn.module.css';
import type { User } from '@/types';
import { isLoggedIn } from '@/utils/auth';

const ForgotPassword = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const emailValue = formData.get('email') as string;
    setEmail(emailValue);
    setIsModalOpen(true);
  };

  const handleBackToLogin = () => {
    router.push('/auth');
  };

  const handleCodeVerified = () => {
    setIsModalOpen(false);
    router.push('/auth/reset-password');
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    document.title = 'Trygg Admin | Forgot Password';
  }, []);

  return (
    <>
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
              <h1 className={styles.title}>Forgot Password?</h1>
              <p className={styles.subtitle}>
                Enter your email address and we'll send you a verification code
              </p>
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.input__group}>
                <label htmlFor="email" className={styles.label}>
                  Email Address
                </label>
                <input
                  required
                  id="email"
                  type="email"
                  name="email"
                  className={styles.input}
                  placeholder="Enter your email address"
                />
              </div>

              <button type="submit" className={styles.submit__button}>
                Send Verification Code
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

      {/*==================== Verification Code Modal ====================*/}
      <VerificationCodeModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onVerified={handleCodeVerified}
        email={email}
      />
      {/*==================== End of Verification Code Modal ====================*/}
    </>
  );
};

export default ForgotPassword;

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
