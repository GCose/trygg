import { useState, useEffect } from 'react';

import type { NextApiRequest } from 'next';

import { AdminPageMeta } from '@/pageMeta/meta';
import DashboardLayout from '@/src/components/layout/DashboardLayout';
import PassengersSkeleton from '@/src/components/shared/passengers/passengers-page-skeleton';
import PassengersPageComponent from '@/src/components/shared/passengers/passengers';
import type { User } from '@/types';
import { isLoggedIn } from '@/utils/auth';

const PassengersPage = () => {
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
      title="Passengers"
      meta={AdminPageMeta.passengersPage}
    >
      {isLoading ? <PassengersSkeleton /> : <PassengersPageComponent />}
    </DashboardLayout>
  );
};

export default PassengersPage;

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
