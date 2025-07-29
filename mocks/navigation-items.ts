import { NavigationItem } from '@/types/interfaces/admin-layout';

export const navigationItems: NavigationItem[] = [
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
    id: 'transactions',
    label: 'Transactions',
    href: '/transactions',
    icon: 'CreditCard',
  },
  {
    id: 'rides',
    label: 'Ride History',
    href: '/ride-history',
    icon: 'Route',
  },
  {
    id: 'subadmins',
    label: 'Sub Admins',
    href: '/sub-admins',
    icon: 'User',
  },
  {
    id: 'settings',
    label: 'Settings',
    href: '/settings',
    icon: 'Settings',
  },
];
