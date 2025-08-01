import { User } from '@/types';
import { NextApiRequest } from 'next';
import { isLoggedIn } from '@/utils/auth';
import { SuperAdminPageMeta } from '@/pageMeta/meta';
import DashboardLayout from '@/src/components/layout/DashboardLayout';
import RideHistoryPageComponent from '@/src/components/shared/ride-history/ride-history';

const rideHistoryPage = () => {
  return (
    <DashboardLayout
      role="SUPER"
      title="Ride History"
      meta={SuperAdminPageMeta.rideHistoryPage}
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

  if (user.role !== 'SUPER') {
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
