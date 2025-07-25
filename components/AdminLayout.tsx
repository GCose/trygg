import { useState } from 'react';
import { useRouter } from 'next/router';
import { AdminLayoutProps } from '@/interfaces/admin-layout';
import { navigationItems } from '@/data/navigation-items';
import * as Icons from 'lucide-react';
import Image from 'next/image';
import styles from '@/src/styles/Admin.Layout.module.css';

const AdminLayout = ({ children, title }: AdminLayoutProps) => {
  const router = useRouter();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const handleLogout = () => {
    router.push('/api/logout');
  };

  const isActiveRoute = (href: string) => {
    return router.pathname === href;
  };

  return (
    <div className={styles.layout}>
      {/*==================== Sidebar ====================*/}
      <aside
        className={`${styles.sidebar} ${isSidebarCollapsed ? styles.collapsed : ''}`}
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
              <button
                key={item.id}
                onClick={() => router.push(item.href)}
                className={`${styles.nav__item} ${isActive ? styles.active : ''}`}
              >
                <IconComponent size={20} />
                {!isSidebarCollapsed && <span>{item.label}</span>}
              </button>
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
        <header className={styles.header}>
          <div className={styles.header__left}>
            <button
              onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
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
                <span className={styles.admin__role}>Administrator</span>
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
  );
};

export default AdminLayout;
