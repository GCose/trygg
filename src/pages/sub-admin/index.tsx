import type { NextApiRequest } from 'next';

import { SuperAdminPageMeta } from '@/pageMeta/meta';
import DashboardLayout from '@/src/components/layout/DashboardLayout';
import DashboardPageComponent from '@/src/components/shared/dashboard/dashboard-page-component';
import type { User } from '@/types';
import { isLoggedIn } from '@/utils/auth';

const DashboardPage = () => {
  return (
    <DashboardLayout
      role="SUB"
      title="Dashboard"
      meta={SuperAdminPageMeta.dashboardPage}
    >
      <DashboardPageComponent />
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
