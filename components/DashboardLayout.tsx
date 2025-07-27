import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { DashboardLayoutProps } from '@/interfaces/admin-layout';
import { navigationItems } from '@/data/navigation-items';
import * as Icons from 'lucide-react';
import Image from 'next/image';
import styles from '@/src/styles/dashboard/DashboardLayout.module.css';
import Head from 'next/head';
import Link from 'next/link';

const DashboardLayout = ({ children, title, meta }: DashboardLayoutProps) => {
  const router = useRouter();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleLogout = () => {
    router.push('/api/logout');
  };

  const isActiveRoute = (href: string) => {
    return router.pathname === href;
  };

  const handleMenuToggle = () => {
    if (isMobile) {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    } else {
      setIsSidebarCollapsed(!isSidebarCollapsed);
    }
  };

  const handleOverlayClick = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavItemClick = () => {
    if (isMobile) {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (mobile) {
        setIsSidebarCollapsed(false);
        setIsMobileMenuOpen(false);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        {meta.description && (
          <meta name="description" content={meta.description} />
        )}
        <link rel="icon" href="/images/Icon.png" />
      </Head>

      <div className={styles.layout}>
        {/*==================== Mobile Overlay ====================*/}
        {isMobile && isMobileMenuOpen && (
          <div className={styles.overlay} onClick={handleOverlayClick} />
        )}
        {/*==================== End of Mobile Overlay ====================*/}

        {/*==================== Sidebar ====================*/}
        <aside
          className={`${styles.sidebar} ${
            isSidebarCollapsed ? styles.collapsed : ''
          } ${
            isMobile
              ? isMobileMenuOpen
                ? styles.mobile__open
                : styles.mobile__closed
              : ''
          }`}
        >
          {/*==================== Logo Section ====================*/}
          <div className={styles.logo__section}>
            <div className={styles.logo__wrapper}>
              <Image
                width={40}
                height={40}
                src="/icon.png"
                alt="Trygg Logo"
                className={styles.logo__image}
              />
            </div>
            {!isSidebarCollapsed && (
              <span className={styles.logo__text}>Trygg Admin</span>
            )}
          </div>
          {/*==================== End of Logo Section ====================*/}

          {/*==================== Navigation ====================*/}
          <nav className={styles.navigation}>
            {navigationItems.map((item) => {
              const IconComponent = Icons[
                item.icon as keyof typeof Icons
              ] as React.ComponentType<{ size: number }>;
              const isActive = isActiveRoute(item.href);

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={handleNavItemClick}
                  className={`${styles.nav__item} ${isActive ? styles.active : ''}`}
                >
                  <IconComponent size={20} />
                  {!isSidebarCollapsed && <span>{item.label}</span>}
                </Link>
              );
            })}

            <button
              onClick={handleLogout}
              className={`${styles.nav__item} ${styles.logout__nav}`}
            >
              {!isSidebarCollapsed && <span>Log out</span>}
              <Icons.LogOut size={18} />
            </button>
          </nav>
          {/*==================== End of Navigation ====================*/}
        </aside>
        {/*==================== End of Sidebar ====================*/}

        {/*==================== Main Content ====================*/}
        <div className={styles.main__content}>
          {/*==================== Header ====================*/}
          <header
            className={`${styles.header} ${
              isMobile ? styles.header__mobile : ''
            } ${
              !isMobile && isSidebarCollapsed ? styles.header__collapsed : ''
            }`}
          >
            <div className={styles.header__left}>
              <button
                onClick={handleMenuToggle}
                className={styles.menu__toggle}
              >
                <Icons.Menu size={20} />
              </button>
              {title && <h1 className={styles.page__title}>{title}</h1>}
            </div>

            <div className={styles.header__right}>
              <div className={styles.admin__profile}>
                <div className={styles.profile__info}>
                  <span className={styles.admin__name}>Admin User</span>
                  <span className={styles.admin__role}>Super Admin</span>
                </div>
              </div>
            </div>
          </header>
          {/*==================== End of Header ====================*/}

          {/*==================== Page Content ====================*/}
          <main className={styles.page__content}>{children}</main>
          {/*==================== End of Page Content ====================*/}
        </div>
        {/*==================== End of Main Content ====================*/}
      </div>
    </>
  );
};

export default DashboardLayout;
