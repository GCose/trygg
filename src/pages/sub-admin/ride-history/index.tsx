import { useState, useEffect } from 'react';

import type { NextApiRequest } from 'next';

import { AdminPageMeta } from '@/pageMeta/meta';
import DashboardLayout from '@/src/components/layout/DashboardLayout';
import RideHistoryPageComponent from '@/src/components/shared/ride-history/ride-history';
import RideHistorySkeleton from '@/src/components/shared/ride-history/ride-history-skeleton';
import type { User } from '@/types';
import { isLoggedIn } from '@/utils/auth';

const RideHistoryPage = () => {
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
      title="Ride History"
      meta={AdminPageMeta.rideHistoryPage}
    >
      {isLoading ? <RideHistorySkeleton /> : <RideHistoryPageComponent />}
    </DashboardLayout>
  );
};

export default RideHistoryPage;

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
