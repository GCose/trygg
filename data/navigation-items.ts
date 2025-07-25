import { NavigationItem } from '@/interfaces/admin-layout';

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
    label: 'Rides',
    href: '/rides',
    icon: 'Route',
  },
  {
    id: 'subadmins',
    label: 'SubAdmins',
    href: '/sub-admin',
    icon: 'User',
  },
  {
    id: 'settings',
    label: 'Settings',
    href: '/settings',
    icon: 'Settings',
  },
];
