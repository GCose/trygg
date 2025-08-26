import { useState, useEffect } from 'react';

import type { NextApiRequest } from 'next';

import { AdminPageMeta } from '@/pageMeta/meta';
import DashboardLayout from '@/src/components/layout/DashboardLayout';
import DriversPageComponent from '@/src/components/shared/drivers/drivers';
import DriversSkeleton from '@/src/components/shared/drivers/drivers-page-skeleton';
import type { User } from '@/types';
import { isLoggedIn } from '@/utils/auth';

const DriversPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <DashboardLayout
      role="SUB"
      title="Drivers"
      meta={AdminPageMeta.driversPage}
    >
      {isLoading ? <DriversSkeleton /> : <DriversPageComponent />}
    </DashboardLayout>
  );
};

export default DriversPage;

export const getServerSideProps = async ({ req }: { req: NextApiRequest }) => {
  const userData = isLoggedIn(req);

  if (!userData) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    };
  }

  const user = userData as User;

  if (user.role !== 'SUB') {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      userData,
    },
  };
};
