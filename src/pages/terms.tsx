import Head from 'next/head';
import Image from 'next/image';

import styles from '@/src/styles/Terms.module.css';

const Terms = () => {
  return (
    <>
      <Head>
        <title>Terms and Conditions | Trygg Admin</title>
        <meta
          name="description"
          content="Terms and Conditions for Trygg Admin Platform"
        />
      </Head>

      <div className={styles.container}>
        {/*==================== Header Section ====================*/}
        <div className={styles.header}>
          <div className={styles.logo__section}>
            <Image
              width={60}
              height={60}
              src="/icon.png"
              alt="Trygg Logo"
              className={styles.logo}
            />
            <h1 className={styles.main__title}>Terms and Conditions</h1>
            <p className={styles.last__updated}>
              Last updated: August 15, 2025
            </p>
          </div>
        </div>
        {/*==================== End of Header Section ====================*/}

        {/*==================== Content Section ====================*/}
        <div className={styles.content}>
          {/*==================== Introduction ====================*/}
          <section className={styles.section}>
            <h2 className={styles.section__title}>1. Introduction</h2>
            <p className={styles.paragraph}>
              Welcome to Trygg Admin Platform. These Terms and Conditions govern
              your use of our administrative system designed for managing
              transportation services, drivers, passengers, and related
              operations. By accessing or using this platform, you agree to be
              bound by these terms.
            </p>
          </section>
          {/*==================== End of Introduction ====================*/}

          {/*==================== Acceptance of Terms ====================*/}
          <section className={styles.section}>
            <h2 className={styles.section__title}>2. Acceptance of Terms</h2>
            <p className={styles.paragraph}>
              By accessing and using the Trygg Admin Platform, you acknowledge
              that you have read, understood, and agree to be bound by these
              Terms and Conditions. If you do not agree to these terms, you must
              not use this platform.
            </p>
          </section>
          {/*==================== End of Acceptance of Terms ====================*/}

          {/*==================== Platform Access ====================*/}
          <section className={styles.section}>
            <h2 className={styles.section__title}>3. Platform Access</h2>
            <div className={styles.subsection}>
              <h3 className={styles.subsection__title}>3.1 Authorization</h3>
              <p className={styles.paragraph}>
                Access to this platform is restricted to authorized personnel
                only. Users must possess valid credentials and appropriate
                authorization levels to access specific features.
              </p>
            </div>
            <div className={styles.subsection}>
              <h3 className={styles.subsection__title}>3.2 Account Security</h3>
              <p className={styles.paragraph}>
                Users are responsible for maintaining the confidentiality of
                their login credentials and for all activities that occur under
                their account.
              </p>
            </div>
          </section>
          {/*==================== End of Platform Access ====================*/}

          {/*==================== Data Management ====================*/}
          <section className={styles.section}>
            <h2 className={styles.section__title}>4. Data Management</h2>
            <div className={styles.subsection}>
              <h3 className={styles.subsection__title}>4.1 Data Integrity</h3>
              <p className={styles.paragraph}>
                Users must ensure all data entered into the system is accurate,
                complete, and up-to-date. Any intentional entry of false or
                misleading information is strictly prohibited.
              </p>
            </div>
            <div className={styles.subsection}>
              <h3 className={styles.subsection__title}>
                4.2 Privacy Compliance
              </h3>
              <p className={styles.paragraph}>
                All personal data must be handled in accordance with applicable
                privacy laws and regulations. Users must respect the privacy
                rights of drivers, passengers, and other stakeholders.
              </p>
            </div>
          </section>
          {/*==================== End of Data Management ====================*/}

          {/*==================== User Responsibilities ====================*/}
          <section className={styles.section}>
            <h2 className={styles.section__title}>5. User Responsibilities</h2>
            <ul className={styles.list}>
              <li className={styles.list__item}>
                Maintain accurate and current information in all records
              </li>
              <li className={styles.list__item}>
                Comply with all applicable laws and regulations
              </li>
              <li className={styles.list__item}>
                Protect confidential and sensitive information
              </li>
              <li className={styles.list__item}>
                Report any security incidents or data breaches immediately
              </li>
              <li className={styles.list__item}>
                Use the platform solely for authorized business purposes
              </li>
            </ul>
          </section>
          {/*==================== End of User Responsibilities ====================*/}

          {/*==================== Prohibited Activities ====================*/}
          <section className={styles.section}>
            <h2 className={styles.section__title}>6. Prohibited Activities</h2>
            <p className={styles.paragraph}>
              Users are expressly prohibited from:
            </p>
            <ul className={styles.list}>
              <li className={styles.list__item}>
                Attempting to gain unauthorized access to any part of the system
              </li>
              <li className={styles.list__item}>
                Sharing login credentials with unauthorized individuals
              </li>
              <li className={styles.list__item}>
                Using the platform for personal or non-business purposes
              </li>
              <li className={styles.list__item}>
                Modifying, reverse engineering, or attempting to extract source
                code
              </li>
              <li className={styles.list__item}>
                Interfering with the normal operation of the platform
              </li>
            </ul>
          </section>
          {/*==================== End of Prohibited Activities ====================*/}

          {/*==================== Limitation of Liability ====================*/}
          <section className={styles.section}>
            <h2 className={styles.section__title}>
              7. Limitation of Liability
            </h2>
            <p className={styles.paragraph}>
              Trygg Admin Platform is provided "as is" without warranties of any
              kind. To the fullest extent permitted by law, we disclaim all
              liability for any damages arising from the use of this platform,
              including but not limited to direct, indirect, incidental, or
              consequential damages.
            </p>
          </section>
          {/*==================== End of Limitation of Liability ====================*/}

          {/*==================== Termination ====================*/}
          <section className={styles.section}>
            <h2 className={styles.section__title}>8. Termination</h2>
            <p className={styles.paragraph}>
              We reserve the right to terminate or suspend access to the
              platform at any time, without prior notice, for violations of
              these terms or for any other reason we deem appropriate.
            </p>
          </section>
          {/*==================== End of Termination ====================*/}

          {/*==================== Changes to Terms ====================*/}
          <section className={styles.section}>
            <h2 className={styles.section__title}>9. Changes to Terms</h2>
            <p className={styles.paragraph}>
              We reserve the right to modify these Terms and Conditions at any
              time. Users will be notified of significant changes, and continued
              use of the platform constitutes acceptance of the modified terms.
            </p>
          </section>
          {/*==================== End of Changes to Terms ====================*/}

          {/*==================== Contact Information ====================*/}
          <section className={styles.section}>
            <h2 className={styles.section__title}>10. Contact Information</h2>
            <p className={styles.paragraph}>
              For questions regarding these Terms and Conditions, please contact
              our legal department or system administrators through the
              appropriate channels within your organization.
            </p>
          </section>
          {/*==================== End of Contact Information ====================*/}
        </div>
        {/*==================== End of Content Section ====================*/}
      </div>
    </>
  );
};

export default Terms;
