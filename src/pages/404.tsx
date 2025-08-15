import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

import styles from '@/src/styles/ErrorPage.module.css';

const Error404Page = () => {
  const router = useRouter();

  const handleBack = () => router.back();
  const handleLogin = () => router.push('/auth');

  return (
    <>
      <Head>
        <title>404 - Page Not Found | Trygg Admin</title>
        <meta name="description" content="Page not found" />
      </Head>

      <div className={styles.container}>
        {/*==================== Error Content ====================*/}
        <div className={styles.content}>
          <div className={styles.icon__wrapper}>
            <Image
              width={80}
              height={80}
              src="/icon.png"
              alt="Trygg Logo"
              className={styles.logo}
            />
          </div>

          <div className={styles.error__info}>
            <h1 className={styles.error__code}>404</h1>
            <h2 className={styles.error__title}>Page Not Found</h2>
            <p className={styles.error__description}>
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>

          <div className={styles.actions}>
            <button onClick={handleBack} className={styles.btn__secondary}>
              Go Back
            </button>
            <button onClick={handleLogin} className={styles.btn__primary}>
              Go to Login
            </button>
          </div>
        </div>
        {/*==================== End of Error Content ====================*/}
      </div>
    </>
  );
};

export default Error404Page;
