import type { NextApiRequest } from 'next';

import { AdminPageMeta } from '@/pageMeta/meta';
import DashboardLayout from '@/src/components/layout/DashboardLayout';
import RideHistoryPageComponent from '@/src/components/shared/ride-history/ride-history';
import type { User } from '@/types';
import { isLoggedIn } from '@/utils/auth';

const rideHistoryPage = () => {
  return (
    <DashboardLayout
      role="SUB"
      title="Ride History"
      meta={AdminPageMeta.rideHistoryPage}
    >
      <RideHistoryPageComponent />
    </DashboardLayout>
  );
};

export default rideHistoryPage;

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
