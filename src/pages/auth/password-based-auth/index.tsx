import React, { useEffect, useRef, useState } from 'react';

import type { NextApiRequest } from 'next';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import axios from 'axios';
import { EyeOff, Eye } from 'lucide-react';

import styles from '@/src/styles/SignIn.module.css';
import type { User } from '@/types';
import { isLoggedIn } from '@/utils/auth';
import { getErrorMessage } from '@/utils/error';
import { showAlert } from '@/utils/sweet-alert';

const SignIn = () => {
  const admin_email = useRef<HTMLInputElement>(null);
  const admin_password = useRef<HTMLInputElement>(null);

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (
        admin_email.current?.value.trim().length &&
        admin_password.current?.value.trim().length
      ) {
        const email = admin_email.current.value;
        const password = admin_password.current.value;

        const { data } = await axios.post('/api/login', { email, password });

        showAlert({
          title: 'Success!',
          text: 'Sign in successful. Welcome back!',
          icon: 'success',
          showCancelButton: false,
          confirmButtonText: 'OK',
        });

        if (data.role === 'SUB') {
          router.push('/sub-admin');
        } else if (data.role === 'SUPER') {
          router.push('/super-admin');
        }
      } else {
        showAlert({
          title: 'Error!',
          text: 'Fill up the inputs completely.',
          icon: 'error',
        });
      }
    } catch (error) {
      const { message } = getErrorMessage(error);

      showAlert({
        title: 'Login Failed!',
        text: message,
        icon: 'error',
        showCancelButton: false,
        confirmButtonText: 'OK',
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    document.title = 'Trygg Admin | Log In';
  }, []);

  return (
    <div className={styles.container}>
      {/*==================== Left Side - Form Section ====================*/}
      <div className={styles.form__section}>
        <div className={styles.login__card}>
          <div className={styles.logo__section}>
            <div className={styles.logo__placeholder}>
              <Image
                priority
                alt="Logo"
                width={64}
                height={64}
                src="/icon.png"
                className={styles.logo__image}
              />
            </div>
          </div>

          <div className={styles.welcome}>
            <h1 className={styles.title}>Welcome Back</h1>
            <p className={styles.subtitle}>Please sign in to your account</p>
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
                ref={admin_email}
                className={styles.input}
                placeholder="Enter your email"
              />
            </div>

            <div className={styles.input__group}>
              <label htmlFor="password" className={styles.label}>
                Password
              </label>
              <div className={styles.password__container}>
                <input
                  required
                  id="password"
                  name="password"
                  ref={admin_password}
                  className={styles.input}
                  placeholder="Enter your password"
                  type={showPassword ? 'text' : 'password'}
                />
                <button
                  type="button"
                  className={styles.password__toggle}
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className={styles.form__options}>
              <Link
                href="/auth/forgot-password"
                className={styles.forgot__password}
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`${styles.submit__button} ${isLoading ? styles.disabledButton : ''}`}
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
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
            alt="Sign in illustration"
          />
        </div>
      </div>
      {/*==================== End of Right Side - Visual Content ====================*/}
    </div>
  );
};

export default SignIn;

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
