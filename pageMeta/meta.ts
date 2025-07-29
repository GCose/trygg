export const AdminPageMeta = {
  dashboardPage: {
    title: 'Trygg Admin | Dashboard',
    description: 'Track all Trygg recent activites.',
  },

  driversPage: {
    title: 'Trygg Admin | Drivers',
    description: 'Track all Trygg drivers.',
  },

  passengersPage: {
    title: 'Trygg Admin | Passengers',
    description: 'Track all Trygg passengers.',
  },

  ridesPage: {
    title: 'Trygg Admin | Ride History',
    description: 'Track all Trygg rides.',
  },

  settingsPage: {
    title: 'Trygg Admin | Settings',
    description: 'Change your Trygg admin dashboard settings.',
  },
};

export const SuperAdminPageMeta = {
  ...AdminPageMeta,

  transactionPage: {
    title: 'Trygg Admin | Transactions',
    description: 'Track all Trygg transactions.',
  },

  subAdminsPage: {
    title: 'Trygg Admin | Sub Admins',
    description: 'Track all Trygg Sub Admins.',
  },
};
