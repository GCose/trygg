import { useState, useEffect } from 'react';

import type { NextApiRequest } from 'next';

import { SuperAdminPageMeta } from '@/pageMeta/meta';
import DashboardLayout from '@/src/components/layout/DashboardLayout';
import DashboardPageComponent from '@/src/components/shared/dashboard/dashboard-page-component';
import DashboardSkeleton from '@/src/components/shared/dashboard/dashboard-page-skeleton';
import type { User } from '@/types';
import { isLoggedIn } from '@/utils/auth';

const DashboardPage = () => {
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
      title="Dashboard"
      meta={SuperAdminPageMeta.dashboardPage}
    >
      {isLoading ? <DashboardSkeleton /> : <DashboardPageComponent />}
    </DashboardLayout>
  );
};

export default DashboardPage;

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
