import { DriverDetails } from '@/types/interfaces/driver-details';

/**======================
 * Driver Details Data.
 ======================*/
export const driverDetailsData: DriverDetails[] = [
  {
    id: '1',
    driverId: 'DVR001',
    fullName: 'Ellen Tromp',
    profilePicture: '/profiles/profile-1.avif',
    email: 'ellen.tromp@gmail.com',
    phone: '+1 313-487-0073',
    cityDriveIn: 'New York, USA',
    registerDate: '14 Sept 2023 at 08:30:00',
    averageRating: 4.8,
    totalRatings: 156,
    status: 'ACTIVE',
    isOnline: true,
    licenseNumber: 'DL123456789',
    licenseImage: '/documents/passbook.jpg',
    licenseExpiry: '2026-09-14',
    applicationStatus: 'APPROVED',
    vehicle: {
      image: '/vehicles/toyota-corolla.avif',
      brand: 'Toyota',
      model: 'Corolla',
      year: '2022',
      color: 'White',
    },
  },
  {
    id: '2',
    driverId: 'DVR002',
    fullName: 'Domi Olson',
    profilePicture: '/profiles/profile-2.avif',
    email: 'domi.olson@gmail.com',
    phone: '+1 313-487-0074',
    cityDriveIn: 'Los Angeles, USA',
    registerDate: '15 Sept 2023 at 10:15:00',
    averageRating: 4.2,
    totalRatings: 189,
    status: 'ACTIVE',
    isOnline: false,
    licenseNumber: 'DL987654321',
    licenseImage: '/documents/driver-license.jpg',
    licenseExpiry: '2025-12-20',
    applicationStatus: 'APPROVED',
    vehicle: {
      image: '/vehicles/honda-civic.avif',
      brand: 'Honda',
      model: 'Civic',
      year: '2021',
      color: 'Black',
    },
  },
  {
    id: '3',
    driverId: 'DVR003',
    fullName: 'Howard G.',
    profilePicture: '/profiles/profile-3.avif',
    email: 'howard.g@gmail.com',
    phone: '+1 313-487-0075',
    cityDriveIn: 'Chicago, USA',
    registerDate: '16 Sept 2023 at 14:20:00',
    averageRating: 3.5,
    totalRatings: 108,
    status: 'ACTIVE',
    isOnline: true,
    licenseNumber: 'DL456789123',
    licenseImage: '/documents/license.jpg',
    licenseExpiry: '2027-03-10',
    applicationStatus: 'APPROVED',
    vehicle: {
      image: '/vehicles/nissan-sentra.avif',
      brand: 'Nissan',
      model: 'Sentra',
      year: '2020',
      color: 'Blue',
    },
  },
  {
    id: '4',
    driverId: 'DVR004',
    fullName: 'Coil Tromp',
    profilePicture: '/profiles/profile-4.avif',
    email: 'coil.tromp@gmail.com',
    phone: '+1 313-487-0076',
    cityDriveIn: 'Miami, USA',
    registerDate: '17 Sept 2023 at 16:30:00',
    averageRating: 4.7,
    totalRatings: 96,
    status: 'INACTIVE',
    isOnline: false,
    licenseNumber: 'DL789123456',
    licenseImage: '/documents/passbook.jpg',
    licenseExpiry: '2026-08-15',
    applicationStatus: 'SUSPENDED',
    vehicle: {
      image: '/vehicles/hyundai-elantra.avif',
      brand: 'Hyundai',
      model: 'Elantra',
      year: '2023',
      color: 'Red',
    },
  },
  {
    id: '5',
    driverId: 'DVR005',
    fullName: 'Sam Effertz',
    profilePicture: '/profiles/profile-5.avif',
    email: 'sam.effertz@gmail.com',
    phone: '+1 313-487-0077',
    cityDriveIn: 'Dallas, USA',
    registerDate: '18 Sept 2023 at 11:45:00',
    averageRating: 4.3,
    totalRatings: 165,
    status: 'ACTIVE',
    isOnline: true,
    licenseNumber: 'DL321654987',
    licenseImage: '/documents/driver-license.jpg',
    licenseExpiry: '2025-11-30',
    applicationStatus: 'APPROVED',
    vehicle: {
      image: '/vehicles/kia-forte.avif',
      brand: 'Kia',
      model: 'Forte',
      year: '2021',
      color: 'Silver',
    },
  },
  {
    id: '6',
    driverId: 'DVR006',
    fullName: 'Miss Merle',
    profilePicture: '/profiles/profile-6.avif',
    email: 'miss.merle@gmail.com',
    phone: '+1 313-487-0078',
    cityDriveIn: 'Houston, USA',
    registerDate: '19 Sept 2023 at 09:10:00',
    averageRating: 4.9,
    totalRatings: 132,
    status: 'ACTIVE',
    isOnline: false,
    licenseNumber: 'DL654321123',
    licenseImage: '/documents/license.jpg',
    licenseExpiry: '2027-01-20',
    applicationStatus: 'APPROVED',
    vehicle: {
      image: '/vehicles/toyota-corolla.avif',
      brand: 'Toyota',
      model: 'Corolla',
      year: '2022',
      color: 'White',
    },
  },
  {
    id: '7',
    driverId: 'DVR007',
    fullName: 'Domi Olson',
    profilePicture: '/profiles/profile-7.avif',
    email: 'domi.olson2@gmail.com',
    phone: '+1 313-487-0079',
    cityDriveIn: 'Phoenix, USA',
    registerDate: '20 Sept 2023 at 13:40:00',
    averageRating: 4.8,
    totalRatings: 159,
    status: 'ACTIVE',
    isOnline: true,
    licenseNumber: 'DL852741963',
    licenseImage: '/documents/passbook.jpg',
    licenseExpiry: '2026-10-15',
    applicationStatus: 'APPROVED',
    vehicle: {
      image: '/vehicles/honda-civic.avif',
      brand: 'Honda',
      model: 'Civic',
      year: '2021',
      color: 'Black',
    },
  },
  {
    id: '8',
    driverId: 'DVR008',
    fullName: 'James Wilson',
    profilePicture: '/profiles/profile-8.avif',
    email: 'james.wilson@gmail.com',
    phone: '+1 313-487-0080',
    cityDriveIn: 'Seattle, USA',
    registerDate: '21 Sept 2023 at 10:00:00',
    averageRating: 4.1,
    totalRatings: 143,
    status: 'INACTIVE',
    isOnline: false,
    licenseNumber: 'DL789456123',
    licenseImage: '/documents/driver-license.jpg',
    licenseExpiry: '2025-07-19',
    applicationStatus: 'PENDING_APPROVAL',
    vehicle: {
      image: '/vehicles/nissan-sentra.avif',
      brand: 'Nissan',
      model: 'Sentra',
      year: '2020',
      color: 'Blue',
    },
  },
  {
    id: '9',
    driverId: 'DVR009',
    fullName: 'Sarah Mitchell',
    profilePicture: '/profiles/profile-9.avif',
    email: 'sarah.mitchell@gmail.com',
    phone: '+1 313-487-0081',
    cityDriveIn: 'Atlanta, USA',
    registerDate: '22 Sept 2023 at 14:25:00',
    averageRating: 4.6,
    totalRatings: 178,
    status: 'ACTIVE',
    isOnline: true,
    licenseNumber: 'DL369258147',
    licenseImage: '/documents/license.jpg',
    licenseExpiry: '2026-05-01',
    applicationStatus: 'APPROVED',
    vehicle: {
      image: '/vehicles/hyundai-elantra.avif',
      brand: 'Hyundai',
      model: 'Elantra',
      year: '2023',
      color: 'Red',
    },
  },
  {
    id: '10',
    driverId: 'DVR010',
    fullName: 'Michael Chen',
    profilePicture: '/profiles/profile-10.avif',
    email: 'michael.chen@gmail.com',
    phone: '+1 313-487-0082',
    cityDriveIn: 'San Francisco, USA',
    registerDate: '23 Sept 2023 at 17:30:00',
    averageRating: 3.8,
    totalRatings: 92,
    status: 'INACTIVE',
    isOnline: false,
    licenseNumber: 'DL147258369',
    licenseImage: '/documents/passbook.jpg',
    licenseExpiry: '2024-12-31',
    applicationStatus: 'REJECTED',
    vehicle: {
      image: '/vehicles/kia-forte.avif',
      brand: 'Kia',
      model: 'Forte',
      year: '2021',
      color: 'Silver',
    },
  },
  {
    id: '11',
    driverId: 'DVR011',
    fullName: 'Lisa Anderson',
    profilePicture: '/profiles/profile-1.avif',
    email: 'lisa.anderson@gmail.com',
    phone: '+1 313-487-0083',
    cityDriveIn: 'Orlando, USA',
    registerDate: '24 Sept 2023 at 09:45:00',
    averageRating: 4.4,
    totalRatings: 167,
    status: 'ACTIVE',
    isOnline: true,
    licenseNumber: 'DL963852741',
    licenseImage: '/documents/driver-license.jpg',
    licenseExpiry: '2026-11-10',
    applicationStatus: 'APPROVED',
    vehicle: {
      image: '/vehicles/toyota-corolla.avif',
      brand: 'Toyota',
      model: 'Corolla',
      year: '2022',
      color: 'White',
    },
  },
  {
    id: '12',
    driverId: 'DVR012',
    fullName: 'Robert Garcia',
    profilePicture: '/profiles/profile-2.avif',
    email: 'robert.garcia@gmail.com',
    phone: '+1 313-487-0084',
    cityDriveIn: 'Denver, USA',
    registerDate: '25 Sept 2023 at 11:20:00',
    averageRating: 4.2,
    totalRatings: 134,
    status: 'INACTIVE',
    isOnline: false,
    licenseNumber: 'DL321987654',
    licenseImage: '/documents/license.jpg',
    licenseExpiry: '2025-09-25',
    applicationStatus: 'SUSPENDED',
    vehicle: {
      image: '/vehicles/honda-civic.avif',
      brand: 'Honda',
      model: 'Civic',
      year: '2021',
      color: 'Black',
    },
  },
  {
    id: '13',
    driverId: 'DVR013',
    fullName: 'Emily Davis',
    profilePicture: '/profiles/profile-3.avif',
    email: 'emily.davis@gmail.com',
    phone: '+1 313-487-0085',
    cityDriveIn: 'Detroit, USA',
    registerDate: '26 Sept 2023 at 15:00:00',
    averageRating: 4.7,
    totalRatings: 198,
    status: 'ACTIVE',
    isOnline: true,
    licenseNumber: 'DL753159852',
    licenseImage: '/documents/driver-license.jpg',
    licenseExpiry: '2027-04-09',
    applicationStatus: 'APPROVED',
    vehicle: {
      image: '/vehicles/nissan-sentra.avif',
      brand: 'Nissan',
      model: 'Sentra',
      year: '2020',
      color: 'Blue',
    },
  },
  {
    id: '14',
    driverId: 'DVR014',
    fullName: 'David Brown',
    profilePicture: '/profiles/profile-4.avif',
    email: 'david.brown@gmail.com',
    phone: '+1 313-487-0086',
    cityDriveIn: 'Las Vegas, USA',
    registerDate: '27 Sept 2023 at 12:00:00',
    averageRating: 3.9,
    totalRatings: 123,
    status: 'ACTIVE',
    isOnline: false,
    licenseNumber: 'DL112358132',
    licenseImage: '/documents/license.jpg',
    licenseExpiry: '2025-06-18',
    applicationStatus: 'PENDING_APPROVAL',
    vehicle: {
      image: '/vehicles/hyundai-elantra.avif',
      brand: 'Hyundai',
      model: 'Elantra',
      year: '2023',
      color: 'Red',
    },
  },
  {
    id: '15',
    driverId: 'DVR015',
    fullName: 'Jennifer Lopez',
    profilePicture: '/profiles/profile-5.avif',
    email: 'jennifer.lopez@gmail.com',
    phone: '+1 313-487-0087',
    cityDriveIn: 'Boston, USA',
    registerDate: '28 Sept 2023 at 10:50:00',
    averageRating: 4.5,
    totalRatings: 176,
    status: 'ACTIVE',
    isOnline: true,
    licenseNumber: 'DL141421356',
    licenseImage: '/documents/passbook.jpg',
    licenseExpiry: '2026-04-30',
    applicationStatus: 'APPROVED',
    vehicle: {
      image: '/vehicles/kia-forte.avif',
      brand: 'Kia',
      model: 'Forte',
      year: '2021',
      color: 'Silver',
    },
  },
  {
    id: '16',
    driverId: 'DVR016',
    fullName: 'William Jones',
    profilePicture: '/profiles/profile-6.avif',
    email: 'william.jones@gmail.com',
    phone: '+1 313-487-0088',
    cityDriveIn: 'Columbus, USA',
    registerDate: '29 Sept 2023 at 09:30:00',
    averageRating: 4.3,
    totalRatings: 145,
    status: 'ACTIVE',
    isOnline: true,
    licenseNumber: 'DL314159265',
    licenseImage: '/documents/license.jpg',
    licenseExpiry: '2027-02-12',
    applicationStatus: 'APPROVED',
    vehicle: {
      image: '/vehicles/toyota-corolla.avif',
      brand: 'Toyota',
      model: 'Corolla',
      year: '2022',
      color: 'White',
    },
  },
  {
    id: '17',
    driverId: 'DVR017',
    fullName: 'Maria Santos',
    profilePicture: '/profiles/profile-7.avif',
    email: 'maria.santos@gmail.com',
    phone: '+1 313-487-0089',
    cityDriveIn: 'San Diego, USA',
    registerDate: '30 Sept 2023 at 11:55:00',
    averageRating: 4.8,
    totalRatings: 187,
    status: 'ACTIVE',
    isOnline: true,
    licenseNumber: 'DL271828182',
    licenseImage: '/documents/passbook.jpg',
    licenseExpiry: '2025-09-14',
    applicationStatus: 'APPROVED',
    vehicle: {
      image: '/vehicles/honda-civic.avif',
      brand: 'Honda',
      model: 'Civic',
      year: '2021',
      color: 'Black',
    },
  },
  {
    id: '18',
    driverId: 'DVR018',
    fullName: 'Thomas Wilson',
    profilePicture: '/profiles/profile-8.avif',
    email: 'thomas.wilson@gmail.com',
    phone: '+1 313-487-0090',
    cityDriveIn: 'Austin, USA',
    registerDate: '1 Oct 2023 at 16:10:00',
    averageRating: 3.6,
    totalRatings: 89,
    status: 'INACTIVE',
    isOnline: false,
    licenseNumber: 'DL173205080',
    licenseImage: '/documents/driver-license.jpg',
    licenseExpiry: '2025-12-01',
    applicationStatus: 'SUSPENDED',
    vehicle: {
      image: '/vehicles/nissan-sentra.avif',
      brand: 'Nissan',
      model: 'Sentra',
      year: '2020',
      color: 'Blue',
    },
  },
  {
    id: '19',
    driverId: 'DVR019',
    fullName: 'Amanda Taylor',
    profilePicture: '/profiles/profile-9.avif',
    email: 'amanda.taylor@gmail.com',
    phone: '+1 313-487-0091',
    cityDriveIn: 'Charlotte, USA',
    registerDate: '2 Oct 2023 at 13:45:00',
    averageRating: 4.6,
    totalRatings: 156,
    status: 'ACTIVE',
    isOnline: true,
    licenseNumber: 'DL707106781',
    licenseImage: '/documents/license.jpg',
    licenseExpiry: '2026-07-07',
    applicationStatus: 'APPROVED',
    vehicle: {
      image: '/vehicles/hyundai-elantra.avif',
      brand: 'Hyundai',
      model: 'Elantra',
      year: '2023',
      color: 'Red',
    },
  },
  {
    id: '20',
    driverId: 'DVR020',
    fullName: 'Christopher Lee',
    profilePicture: '/profiles/profile-10.avif',
    email: 'christopher.lee@gmail.com',
    phone: '+1 313-487-0092',
    cityDriveIn: 'Philadelphia, USA',
    registerDate: '3 Oct 2023 at 10:05:00',
    averageRating: 4.1,
    totalRatings: 134,
    status: 'INACTIVE',
    isOnline: false,
    licenseNumber: 'DL161803398',
    licenseImage: '/documents/passbook.jpg',
    licenseExpiry: '2024-08-15',
    applicationStatus: 'REJECTED',
    vehicle: {
      image: '/vehicles/kia-forte.avif',
      brand: 'Kia',
      model: 'Forte',
      year: '2021',
      color: 'Silver',
    },
  },
  {
    id: '21',
    driverId: 'DVR021',
    fullName: 'Jessica Moore',
    profilePicture: '/profiles/profile-1.avif',
    email: 'jessica.moore@gmail.com',
    phone: '+1 313-487-0093',
    cityDriveIn: 'Portland, USA',
    registerDate: '4 Oct 2023 at 08:30:00',
    averageRating: 4.4,
    totalRatings: 167,
    status: 'INACTIVE',
    isOnline: false,
    licenseNumber: 'DL134626913',
    licenseImage: '/documents/license.jpg',
    licenseExpiry: '2025-06-30',
    applicationStatus: 'PENDING_APPROVAL',
    vehicle: {
      image: '/vehicles/toyota-corolla.avif',
      brand: 'Toyota',
      model: 'Corolla',
      year: '2022',
      color: 'White',
    },
  },
  {
    id: '22',
    driverId: 'DVR022',
    fullName: 'Daniel Martinez',
    profilePicture: '/profiles/profile-2.avif',
    email: 'daniel.martinez@gmail.com',
    phone: '+1 313-487-0094',
    cityDriveIn: 'Minneapolis, USA',
    registerDate: '5 Oct 2023 at 14:00:00',
    averageRating: 4.7,
    totalRatings: 189,
    status: 'ACTIVE',
    isOnline: true,
    licenseNumber: 'DL999888777',
    licenseImage: '/documents/driver-license.jpg',
    licenseExpiry: '2026-09-12',
    applicationStatus: 'APPROVED',
    vehicle: {
      image: '/vehicles/honda-civic.avif',
      brand: 'Honda',
      model: 'Civic',
      year: '2021',
      color: 'Black',
    },
  },
  {
    id: '23',
    driverId: 'DVR023',
    fullName: 'Ashley Johnson',
    profilePicture: '/profiles/profile-3.avif',
    email: 'ashley.johnson@gmail.com',
    phone: '+1 313-487-0095',
    cityDriveIn: 'Indianapolis, USA',
    registerDate: '6 Oct 2023 at 15:45:00',
    averageRating: 3.8,
    totalRatings: 112,
    status: 'INACTIVE',
    isOnline: false,
    licenseNumber: 'DL333222111',
    licenseImage: '/documents/license.jpg',
    licenseExpiry: '2025-03-22',
    applicationStatus: 'SUSPENDED',
    vehicle: {
      image: '/vehicles/nissan-sentra.avif',
      brand: 'Nissan',
      model: 'Sentra',
      year: '2020',
      color: 'Blue',
    },
  },
  {
    id: '24',
    driverId: 'DVR024',
    fullName: 'Matthew Clark',
    profilePicture: '/profiles/profile-4.avif',
    email: 'matthew.clark@gmail.com',
    phone: '+1 313-487-0096',
    cityDriveIn: 'Cleveland, USA',
    registerDate: '7 Oct 2023 at 17:30:00',
    averageRating: 4.5,
    totalRatings: 178,
    status: 'ACTIVE',
    isOnline: true,
    licenseNumber: 'DL123321123',
    licenseImage: '/documents/hyundai-elantra.avif',
    licenseExpiry: '2026-01-01',
    applicationStatus: 'APPROVED',
    vehicle: {
      image: '/vehicles/hyundai-elantra.avif',
      brand: 'Hyundai',
      model: 'Elantra',
      year: '2023',
      color: 'Red',
    },
  },
  {
    id: '25',
    driverId: 'DVR025',
    fullName: 'Stephanie White',
    profilePicture: '/profiles/profile-5.avif',
    email: 'stephanie.white@gmail.com',
    phone: '+1 313-487-0097',
    cityDriveIn: 'Salt Lake City, USA',
    registerDate: '8 Oct 2023 at 09:15:00',
    averageRating: 4.2,
    totalRatings: 143,
    status: 'ACTIVE',
    isOnline: true,
    licenseNumber: 'DL565656565',
    licenseImage: '/documents/passbook.jpg',
    licenseExpiry: '2025-12-12',
    applicationStatus: 'APPROVED',
    vehicle: {
      image: '/vehicles/kia-forte.avif',
      brand: 'Kia',
      model: 'Forte',
      year: '2021',
      color: 'Silver',
    },
  },
  {
    id: '26',
    driverId: 'DVR026',
    fullName: 'Andrew Rodriguez',
    profilePicture: '/profiles/profile-6.avif',
    email: 'andrew.rodriguez@gmail.com',
    phone: '+1 313-487-0098',
    cityDriveIn: 'Albany, USA',
    registerDate: '9 Oct 2023 at 10:30:00',
    averageRating: 4.8,
    totalRatings: 201,
    status: 'ACTIVE',
    isOnline: true,
    licenseNumber: 'DL998877665',
    licenseImage: '/documents/license.jpg',
    licenseExpiry: '2026-10-09',
    applicationStatus: 'APPROVED',
    vehicle: {
      image: '/vehicles/toyota-corolla.avif',
      brand: 'Toyota',
      model: 'Corolla',
      year: '2022',
      color: 'White',
    },
  },
  {
    id: '27',
    driverId: 'DVR027',
    fullName: 'Nicole Thompson',
    profilePicture: '/profiles/profile-7.avif',
    email: 'nicole.thompson@gmail.com',
    phone: '+1 313-487-0099',
    cityDriveIn: 'Tampa, USA',
    registerDate: '10 Oct 2023 at 11:45:00',
    averageRating: 3.7,
    totalRatings: 98,
    status: 'INACTIVE',
    isOnline: false,
    licenseNumber: 'DL123789456',
    licenseImage: '/documents/passbook.jpg',
    licenseExpiry: '2025-05-10',
    applicationStatus: 'REJECTED',
    vehicle: {
      image: '/vehicles/honda-civic.avif',
      brand: 'Honda',
      model: 'Civic',
      year: '2021',
      color: 'Black',
    },
  },
  {
    id: '28',
    driverId: 'DVR028',
    fullName: 'Kevin Miller',
    profilePicture: '/profiles/profile-8.avif',
    email: 'kevin.miller@gmail.com',
    phone: '+1 313-487-0100',
    cityDriveIn: 'Fresno, USA',
    registerDate: '11 Oct 2023 at 12:15:00',
    averageRating: 4.6,
    totalRatings: 165,
    status: 'ACTIVE',
    isOnline: true,
    licenseNumber: 'DL456321789',
    licenseImage: '/documents/driver-license.jpg',
    licenseExpiry: '2026-12-01',
    applicationStatus: 'APPROVED',
    vehicle: {
      image: '/vehicles/nissan-sentra.avif',
      brand: 'Nissan',
      model: 'Sentra',
      year: '2020',
      color: 'Blue',
    },
  },
  {
    id: '29',
    driverId: 'DVR029',
    fullName: 'Rachel Green',
    profilePicture: '/profiles/profile-9.avif',
    email: 'rachel.green@gmail.com',
    phone: '+1 313-487-0101',
    cityDriveIn: 'El Paso, USA',
    registerDate: '12 Oct 2023 at 08:30:00',
    averageRating: 4.3,
    totalRatings: 156,
    status: 'INACTIVE',
    isOnline: false,
    licenseNumber: 'DL321123456',
    licenseImage: '/documents/license.jpg',
    licenseExpiry: '2025-08-30',
    applicationStatus: 'PENDING_APPROVAL',
    vehicle: {
      image: '/vehicles/hyundai-elantra.avif',
      brand: 'Hyundai',
      model: 'Elantra',
      year: '2023',
      color: 'Red',
    },
  },
  {
    id: '30',
    driverId: 'DVR030',
    fullName: 'Brian Adams',
    profilePicture: '/profiles/profile-10.avif',
    email: 'brian.adams@gmail.com',
    phone: '+1 313-487-0102',
    cityDriveIn: 'Milwaukee, USA',
    registerDate: '13 Oct 2023 at 09:45:00',
    averageRating: 4.1,
    totalRatings: 127,
    status: 'INACTIVE',
    isOnline: false,
    licenseNumber: 'DL741852963',
    licenseImage: '/documents/passbook.jpg',
    licenseExpiry: '2025-06-15',
    applicationStatus: 'SUSPENDED',
    vehicle: {
      image: '/vehicles/kia-forte.avif',
      brand: 'Kia',
      model: 'Forte',
      year: '2021',
      color: 'Silver',
    },
  },
  {
    id: '31',
    driverId: 'DVR031',
    fullName: 'Michelle Baker',
    profilePicture: '/profiles/profile-1.avif',
    email: 'michelle.baker@gmail.com',
    phone: '+1 313-487-0103',
    cityDriveIn: 'Jacksonville, USA',
    registerDate: '14 Oct 2023 at 10:30:00',
    averageRating: 4.4,
    totalRatings: 174,
    status: 'ACTIVE',
    isOnline: true,
    licenseNumber: 'DL111000999',
    licenseImage: '/documents/driver-license.jpg',
    licenseExpiry: '2026-09-17',
    applicationStatus: 'APPROVED',
    vehicle: {
      image: '/vehicles/toyota-corolla.avif',
      brand: 'Toyota',
      model: 'Corolla',
      year: '2022',
      color: 'White',
    },
  },
  {
    id: '32',
    driverId: 'DVR032',
    fullName: 'Steven Hill',
    profilePicture: '/profiles/profile-2.avif',
    email: 'steven.hill@gmail.com',
    phone: '+1 313-487-0104',
    cityDriveIn: 'Mesa, USA',
    registerDate: '15 Oct 2023 at 11:00:00',
    averageRating: 3.9,
    totalRatings: 119,
    status: 'INACTIVE',
    isOnline: false,
    licenseNumber: 'DL665544332',
    licenseImage: '/documents/license.jpg',
    licenseExpiry: '2025-05-28',
    applicationStatus: 'REJECTED',
    vehicle: {
      image: '/vehicles/honda-civic.avif',
      brand: 'Honda',
      model: 'Civic',
      year: '2021',
      color: 'Black',
    },
  },
  {
    id: '33',
    driverId: 'DVR033',
    fullName: 'Laura Scott',
    profilePicture: '/profiles/profile-3.avif',
    email: 'laura.scott@gmail.com',
    phone: '+1 313-487-0105',
    cityDriveIn: 'Baltimore, USA',
    registerDate: '16 Oct 2023 at 13:25:00',
    averageRating: 4.7,
    totalRatings: 192,
    status: 'ACTIVE',
    isOnline: true,
    licenseNumber: 'DL111223344',
    licenseImage: '/documents/driver-license.jpg',
    licenseExpiry: '2026-04-02',
    applicationStatus: 'APPROVED',
    vehicle: {
      image: '/vehicles/nissan-sentra.avif',
      brand: 'Nissan',
      model: 'Sentra',
      year: '2020',
      color: 'Blue',
    },
  },
  {
    id: '34',
    driverId: 'DVR034',
    fullName: 'Joseph Wright',
    profilePicture: '/profiles/profile-4.avif',
    email: 'joseph.wright@gmail.com',
    phone: '+1 313-487-0106',
    cityDriveIn: 'Cincinnati, USA',
    registerDate: '17 Oct 2023 at 09:20:00',
    averageRating: 4.2,
    totalRatings: 148,
    status: 'ACTIVE',
    isOnline: true,
    licenseNumber: 'DL908070605',
    licenseImage: '/documents/license.jpg',
    licenseExpiry: '2025-12-20',
    applicationStatus: 'APPROVED',
    vehicle: {
      image: '/vehicles/hyundai-elantra.avif',
      brand: 'Hyundai',
      model: 'Elantra',
      year: '2023',
      color: 'Red',
    },
  },
  {
    id: '35',
    driverId: 'DVR035',
    fullName: 'Kimberly King',
    profilePicture: '/profiles/profile-5.avif',
    email: 'kimberly.king@gmail.com',
    phone: '+1 313-487-0107',
    cityDriveIn: 'Anchorage, USA',
    registerDate: '18 Oct 2023 at 08:45:00',
    averageRating: 4.5,
    totalRatings: 183,
    status: 'INACTIVE',
    isOnline: false,
    licenseNumber: 'DL010203040',
    licenseImage: '/documents/passbook.jpg',
    licenseExpiry: '2025-11-11',
    applicationStatus: 'PENDING_APPROVAL',
    vehicle: {
      image: '/vehicles/kia-forte.avif',
      brand: 'Kia',
      model: 'Forte',
      year: '2021',
      color: 'Silver',
    },
  },
  {
    id: '36',
    driverId: 'DVR036',
    fullName: 'Mark Turner',
    profilePicture: '/profiles/profile-6.avif',
    email: 'mark.turner@gmail.com',
    phone: '+1 313-487-0108',
    cityDriveIn: 'Buffalo, USA',
    registerDate: '19 Oct 2023 at 10:10:00',
    averageRating: 3.8,
    totalRatings: 106,
    status: 'INACTIVE',
    isOnline: false,
    licenseNumber: 'DL314159265',
    licenseImage: '/documents/license.jpg',
    licenseExpiry: '2026-02-15',
    applicationStatus: 'SUSPENDED',
    vehicle: {
      image: '/vehicles/toyota-corolla.avif',
      brand: 'Toyota',
      model: 'Corolla',
      year: '2022',
      color: 'White',
    },
  },
  {
    id: '37',
    driverId: 'DVR037',
    fullName: 'Melissa Harris',
    profilePicture: '/profiles/profile-7.avif',
    email: 'melissa.harris@gmail.com',
    phone: '+1 313-487-0109',
    cityDriveIn: 'Raleigh, USA',
    registerDate: '20 Oct 2023 at 09:25:00',
    averageRating: 4.6,
    totalRatings: 171,
    status: 'ACTIVE',
    isOnline: true,
    licenseNumber: 'DL888777666',
    licenseImage: '/documents/passbook.jpg',
    licenseExpiry: '2026-10-30',
    applicationStatus: 'APPROVED',
    vehicle: {
      image: '/vehicles/honda-civic.avif',
      brand: 'Honda',
      model: 'Civic',
      year: '2021',
      color: 'Black',
    },
  },
  {
    id: '38',
    driverId: 'DVR038',
    fullName: 'Ryan Parker',
    profilePicture: '/profiles/profile-8.avif',
    email: 'ryan.parker@gmail.com',
    phone: '+1 313-487-0110',
    cityDriveIn: 'Louisville, USA',
    registerDate: '21 Oct 2023 at 08:40:00',
    averageRating: 4.3,
    totalRatings: 152,
    status: 'ACTIVE',
    isOnline: true,
    licenseNumber: 'DL444555666',
    licenseImage: '/documents/driver-license.jpg',
    licenseExpiry: '2025-04-18',
    applicationStatus: 'APPROVED',
    vehicle: {
      image: '/vehicles/nissan-sentra.avif',
      brand: 'Nissan',
      model: 'Sentra',
      year: '2020',
      color: 'Blue',
    },
  },
  {
    id: '39',
    driverId: 'DVR039',
    fullName: 'Catherine Evans',
    profilePicture: '/profiles/profile-9.avif',
    email: 'catherine.evans@gmail.com',
    phone: '+1 313-487-0111',
    cityDriveIn: 'Scottsdale, USA',
    registerDate: '22 Oct 2023 at 13:00:00',
    averageRating: 4.8,
    totalRatings: 196,
    status: 'ACTIVE',
    isOnline: true,
    licenseNumber: 'DL555444333',
    licenseImage: '/documents/license.jpg',
    licenseExpiry: '2026-09-01',
    applicationStatus: 'APPROVED',
    vehicle: {
      image: '/vehicles/hyundai-elantra.avif',
      brand: 'Hyundai',
      model: 'Elantra',
      year: '2023',
      color: 'Red',
    },
  },
  {
    id: '40',
    driverId: 'DVR040',
    fullName: 'Gary Collins',
    profilePicture: '/profiles/profile-10.avif',
    email: 'gary.collins@gmail.com',
    phone: '+1 313-487-0112',
    cityDriveIn: 'Boise, USA',
    registerDate: '23 Oct 2023 at 15:45:00',
    averageRating: 3.6,
    totalRatings: 94,
    status: 'INACTIVE',
    isOnline: false,
    licenseNumber: 'DL222333444',
    licenseImage: '/documents/passbook.jpg',
    licenseExpiry: '2024-11-30',
    applicationStatus: 'REJECTED',
    vehicle: {
      image: '/vehicles/kia-forte.avif',
      brand: 'Kia',
      model: 'Forte',
      year: '2021',
      color: 'Silver',
    },
  },
  {
    id: '41',
    driverId: 'DVR041',
    fullName: 'Deborah Stewart',
    profilePicture: '/profiles/profile-1.avif',
    email: 'deborah.stewart@gmail.com',
    phone: '+1 313-487-0113',
    cityDriveIn: 'Tucson, USA',
    registerDate: '24 Oct 2023 at 10:10:00',
    averageRating: 4.4,
    totalRatings: 164,
    status: 'INACTIVE',
    isOnline: false,
    licenseNumber: 'DL777888999',
    licenseImage: '/documents/driver-license.jpg',
    licenseExpiry: '2025-10-20',
    applicationStatus: 'PENDING_APPROVAL',
    vehicle: {
      image: '/vehicles/toyota-corolla.avif',
      brand: 'Toyota',
      model: 'Corolla',
      year: '2022',
      color: 'White',
    },
  },
  {
    id: '42',
    driverId: 'DVR042',
    fullName: 'Timothy Morris',
    profilePicture: '/profiles/profile-2.avif',
    email: 'timothy.morris@gmail.com',
    phone: '+1 313-487-0114',
    cityDriveIn: 'Wichita, USA',
    registerDate: '25 Oct 2023 at 08:30:00',
    averageRating: 4.1,
    totalRatings: 139,
    status: 'INACTIVE',
    isOnline: false,
    licenseNumber: 'DL111222333',
    licenseImage: '/documents/license.jpg',
    licenseExpiry: '2025-07-10',
    applicationStatus: 'SUSPENDED',
    vehicle: {
      image: '/vehicles/honda-civic.avif',
      brand: 'Honda',
      model: 'Civic',
      year: '2021',
      color: 'Black',
    },
  },
  {
    id: '43',
    driverId: 'DVR043',
    fullName: 'Dorothy Reed',
    profilePicture: '/profiles/profile-3.avif',
    email: 'dorothy.reed@gmail.com',
    phone: '+1 313-487-0115',
    cityDriveIn: 'Chandler, USA',
    registerDate: '26 Oct 2023 at 14:20:00',
    averageRating: 4.7,
    totalRatings: 187,
    status: 'ACTIVE',
    isOnline: true,
    licenseNumber: 'DL444333222',
    licenseImage: '/documents/driver-license.jpg',
    licenseExpiry: '2026-03-03',
    applicationStatus: 'APPROVED',
    vehicle: {
      image: '/vehicles/nissan-sentra.avif',
      brand: 'Nissan',
      model: 'Sentra',
      year: '2020',
      color: 'Blue',
    },
  },
  {
    id: '44',
    driverId: 'DVR044',
    fullName: 'Kenneth Cook',
    profilePicture: '/profiles/profile-4.avif',
    email: 'kenneth.cook@gmail.com',
    phone: '+1 313-487-0116',
    cityDriveIn: 'Reno, USA',
    registerDate: '27 Oct 2023 at 12:30:00',
    averageRating: 4.2,
    totalRatings: 146,
    status: 'ACTIVE',
    isOnline: true,
    licenseNumber: 'DL987123456',
    licenseImage: '/documents/license.jpg',
    licenseExpiry: '2026-06-06',
    applicationStatus: 'APPROVED',
    vehicle: {
      image: '/vehicles/hyundai-elantra.avif',
      brand: 'Hyundai',
      model: 'Elantra',
      year: '2023',
      color: 'Red',
    },
  },
  {
    id: '45',
    driverId: 'DVR045',
    fullName: 'Helen Bailey',
    profilePicture: '/profiles/profile-5.avif',
    email: 'helen.bailey@gmail.com',
    phone: '+1 313-487-0117',
    cityDriveIn: 'Des Moines, USA',
    registerDate: '28 Oct 2023 at 09:40:00',
    averageRating: 4.5,
    totalRatings: 179,
    status: 'ACTIVE',
    isOnline: true,
    licenseNumber: 'DL123654789',
    licenseImage: '/documents/passbook.jpg',
    licenseExpiry: '2026-01-22',
    applicationStatus: 'APPROVED',
    vehicle: {
      image: '/vehicles/kia-forte.avif',
      brand: 'Kia',
      model: 'Forte',
      year: '2021',
      color: 'Silver',
    },
  },
  {
    id: '46',
    driverId: 'DVR046',
    fullName: 'Jerry Rivera',
    profilePicture: '/profiles/profile-6.avif',
    email: 'jerry.rivera@gmail.com',
    phone: '+1 313-487-0118',
    cityDriveIn: 'Lexington, USA',
    registerDate: '29 Oct 2023 at 15:00:00',
    averageRating: 3.9,
    totalRatings: 113,
    status: 'INACTIVE',
    isOnline: false,
    licenseNumber: 'DL111999888',
    licenseImage: '/documents/driver-license.jpg',
    licenseExpiry: '2025-04-01',
    applicationStatus: 'REJECTED',
    vehicle: {
      image: '/vehicles/toyota-corolla.avif',
      brand: 'Toyota',
      model: 'Corolla',
      year: '2022',
      color: 'White',
    },
  },
  {
    id: '47',
    driverId: 'DVR047',
    fullName: 'Ruth Cooper',
    profilePicture: '/profiles/profile-7.avif',
    email: 'ruth.cooper@gmail.com',
    phone: '+1 313-487-0119',
    cityDriveIn: 'Lincoln, USA',
    registerDate: '30 Oct 2023 at 10:20:00',
    averageRating: 4.6,
    totalRatings: 168,
    status: 'INACTIVE',
    isOnline: false,
    licenseNumber: 'DL888333111',
    licenseImage: '/documents/license.jpg',
    licenseExpiry: '2026-02-28',
    applicationStatus: 'PENDING_APPROVAL',
    vehicle: {
      image: '/vehicles/honda-civic.avif',
      brand: 'Honda',
      model: 'Civic',
      year: '2021',
      color: 'Black',
    },
  },
  {
    id: '48',
    driverId: 'DVR048',
    fullName: 'Wayne Richardson',
    profilePicture: '/profiles/profile-8.avif',
    email: 'wayne.richardson@gmail.com',
    phone: '+1 313-487-0120',
    cityDriveIn: 'Spokane, USA',
    registerDate: '31 Oct 2023 at 08:00:00',
    averageRating: 4.3,
    totalRatings: 155,
    status: 'ACTIVE',
    isOnline: true,
    licenseNumber: 'DL555222333',
    licenseImage: '/documents/driver-license.jpg',
    licenseExpiry: '2026-08-18',
    applicationStatus: 'APPROVED',
    vehicle: {
      image: '/vehicles/nissan-sentra.avif',
      brand: 'Nissan',
      model: 'Sentra',
      year: '2020',
      color: 'Blue',
    },
  },
  {
    id: '49',
    driverId: 'DVR049',
    fullName: 'Frances Cox',
    profilePicture: '/profiles/profile-9.avif',
    email: 'frances.cox@gmail.com',
    phone: '+1 313-487-0121',
    cityDriveIn: 'Omaha, USA',
    registerDate: '1 Nov 2023 at 11:10:00',
    averageRating: 4.8,
    totalRatings: 193,
    status: 'ACTIVE',
    isOnline: true,
    licenseNumber: 'DL789123321',
    licenseImage: '/documents/license.jpg',
    licenseExpiry: '2027-01-10',
    applicationStatus: 'APPROVED',
    vehicle: {
      image: '/vehicles/hyundai-elantra.avif',
      brand: 'Hyundai',
      model: 'Elantra',
      year: '2023',
      color: 'Red',
    },
  },
  {
    id: '50',
    driverId: 'DVR050',
    fullName: 'Arthur Ward',
    profilePicture: '/profiles/profile-10.avif',
    email: 'arthur.ward@gmail.com',
    phone: '+1 313-487-0122',
    cityDriveIn: 'Madison, USA',
    registerDate: '2 Nov 2023 at 14:00:00',
    averageRating: 4.0,
    totalRatings: 128,
    status: 'INACTIVE',
    isOnline: false,
    licenseNumber: 'DL999777555',
    licenseImage: '/documents/passbook.jpg',
    licenseExpiry: '2025-03-15',
    applicationStatus: 'SUSPENDED',
    vehicle: {
      image: '/vehicles/kia-forte.avif',
      brand: 'Kia',
      model: 'Forte',
      year: '2021',
      color: 'Silver',
    },
  },
];

/**=====================================
 * Get Driver By ID Helper Function
 * @param driverId 
 * @returns 
 =====================================*/
export const getDriverById = (driverId: string): DriverDetails | undefined => {
  return driverDetailsData.find((driver) => driver.driverId === driverId);
};
