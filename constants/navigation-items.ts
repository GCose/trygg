import { NavigationItem } from '@/types/interfaces/admin-layout';

export const subAdminNavigationItems: NavigationItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    href: '/sub-admin',
    icon: 'LayoutDashboard',
  },
  {
    id: 'drivers',
    label: 'Drivers',
    href: '/sub-admin/drivers',
    icon: 'Car',
  },
  {
    id: 'passengers',
    label: 'Passengers',
    href: '/sub-admin/passengers',
    icon: 'Users',
  },
  {
    id: 'rides',
    label: 'Ride History',
    href: '/sub-admin/ride-history',
    icon: 'Route',
  },
  {
    id: 'settings',
    label: 'Settings',
    href: '/sub-admin/settings',
    icon: 'Settings',
  },
];

export const superAdminNavigationItems: NavigationItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    href: '/super-admin',
    icon: 'LayoutDashboard',
  },
  {
    id: 'drivers',
    label: 'Drivers',
    href: '/super-admin/drivers',
    icon: 'Car',
  },
  {
    id: 'passengers',
    label: 'Passengers',
    href: '/super-admin/passengers',
    icon: 'Users',
  },
  {
    id: 'rides',
    label: 'Ride History',
    href: '/super-admin/ride-history',
    icon: 'Route',
  },
  {
    id: 'transactions',
    label: 'Transactions',
    href: '/super-admin/transactions',
    icon: 'CreditCard',
  },
  {
    id: 'subadmins',
    label: 'Sub Admins',
    href: '/super-admin/sub-admins',
    icon: 'User',
  },
  {
    id: 'settings',
    label: 'Settings',
    href: '/super-admin/settings',
    icon: 'Settings',
  },
];
