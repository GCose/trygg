import { NavigationItem } from '@/types/interfaces/admin-layout';

export const subAdminNavigationItems: NavigationItem[] = [];

export const adminNavigationItems: NavigationItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    href: '/',
    icon: 'LayoutDashboard',
  },
  {
    id: 'drivers',
    label: 'Drivers',
    href: '/drivers',
    icon: 'Car',
  },
  {
    id: 'passengers',
    label: 'Passengers',
    href: '/passengers',
    icon: 'Users',
  },

  {
    id: 'rides',
    label: 'Ride History',
    href: '/ride-history',
    icon: 'Route',
  },
  {
    id: 'settings',
    label: 'Settings',
    href: '/settings',
    icon: 'Settings',
  },
];

export const superAdminNavigationItems: NavigationItem[] = [
  ...adminNavigationItems,
  {
    id: 'transactions',
    label: 'Transactions',
    href: '/transactions',
    icon: 'CreditCard',
  },
  {
    id: 'subadmins',
    label: 'Sub Admins',
    href: '/sub-admins',
    icon: 'User',
  },
];
