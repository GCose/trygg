/**=======================
 * Dashboard Statistics.
 =======================*/
export const dashboardStats = [
  {
    title: 'Transaction Value',
    value: '$124,850.00',
    icon: 'DollarSign',
    trend: { value: 12.5, isPositive: true },
  },
  {
    title: 'Total Drivers',
    value: '1,247',
    icon: 'Car',
    trend: { value: 8.2, isPositive: true },
  },
  {
    title: 'Total Passengers',
    value: '8,329',
    icon: 'Users',
    trend: { value: 15.3, isPositive: true },
  },
  {
    title: 'Total Referrals',
    value: '342',
    icon: 'Share2',
    trend: { value: 4.1, isPositive: false },
  },
];

/**============================
 * Recent Transactions Data.
 ============================*/
export const recentTransactions = [
  {
    id: '1',
    passenger: 'John Smith',
    driver: 'Mike Johnson',
    amount: '$25.50',
    dateTime: '2025-01-24 14:30',
  },
  {
    id: '2',
    passenger: 'Sarah Wilson',
    driver: 'David Brown',
    amount: '$18.75',
    dateTime: '2025-01-24 14:15',
  },
  {
    id: '3',
    passenger: 'Emily Davis',
    driver: 'James Miller',
    amount: '$32.00',
    dateTime: '2025-01-24 14:05',
  },
  {
    id: '4',
    passenger: 'Michael Chen',
    driver: 'Robert Garcia',
    amount: '$45.25',
    dateTime: '2025-01-24 13:45',
  },
  {
    id: '5',
    passenger: 'Lisa Anderson',
    driver: 'William Jones',
    amount: '$22.80',
    dateTime: '2025-01-24 13:30',
  },
  {
    id: '6',
    passenger: 'Chris Martinez',
    driver: 'Thomas Wilson',
    amount: '$38.90',
    dateTime: '2025-01-24 13:15',
  },
  {
    id: '7',
    passenger: 'Anna Taylor',
    driver: 'Charles Moore',
    amount: '$16.45',
    dateTime: '2025-01-24 13:00',
  },
  {
    id: '8',
    passenger: 'Mark Thompson',
    driver: 'Daniel Lee',
    amount: '$28.70',
    dateTime: '2025-01-24 12:45',
  },
  {
    id: '9',
    passenger: 'Rachel Green',
    driver: 'Kevin White',
    amount: '$34.15',
    dateTime: '2025-01-24 12:30',
  },
  {
    id: '10',
    passenger: 'Tom Wilson',
    driver: 'Steven Clark',
    amount: '$19.60',
    dateTime: '2025-01-24 12:15',
  },
];

/**===============================
 * Pending Driver Applications.
 ===============================*/
export const pendingDrivers = [
  {
    id: '1',
    name: 'Alex Rodriguez',
    appliedDate: '2025-01-23',
    vehicleType: 'Toyota Camry',
  },
  {
    id: '2',
    name: 'Maria Santos',
    appliedDate: '2025-01-23',
    vehicleType: 'Honda Civic',
  },
  {
    id: '3',
    name: 'Peter Kim',
    appliedDate: '2025-01-22',
    vehicleType: 'Ford Focus',
  },
  {
    id: '4',
    name: 'Jennifer Lopez',
    appliedDate: '2025-01-22',
    vehicleType: 'Nissan Altima',
  },
];

/**=========================
 * Driver Status Overview.
 =========================*/
export const driverStatus = {
  online: 89,
  offline: 158,
  busy: 45,
  pending: 12,
};

/**===============
 * Active Rides.
 ===============*/
export const activeRides = {
  current: 23,
  completed: 145,
  cancelled: 8,
};

/**=================
 * Recent Issues.
 =================*/
export const recentIssues = [
  {
    id: '1',
    type: 'Driver Complaint',
    description: 'Passenger was rude',
    priority: 'low',
    time: '1h ago',
  },
  {
    id: '2',
    type: 'Payment Issue',
    description: 'Payment failed after ride',
    priority: 'high',
    time: '2h ago',
  },
  {
    id: '3',
    type: 'Vehicle Problem',
    description: 'Car breakdown during trip',
    priority: 'medium',
    time: '3h ago',
  },
];
