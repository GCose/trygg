import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

import styles from '@/src/styles/ErrorPage.module.css';

const Unauthorized = () => {
  const router = useRouter();

  const handleBack = () => router.back();
  const handleLogin = () => router.push('/auth');

  return (
    <>
      <Head>
        <title>Unauthorized Access | Trygg Admin</title>
        <meta name="description" content="Unauthorized access" />
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
            <h1 className={styles.error__code}>401</h1>
            <h2 className={styles.error__title}>Unauthorized Access</h2>
            <p className={styles.error__description}>
              You don't have permission to access this page. Please log in with
              proper credentials.
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

export default Unauthorized;
