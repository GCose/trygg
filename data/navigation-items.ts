import { NavigationItem } from '@/interfaces/navigation';

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
];
