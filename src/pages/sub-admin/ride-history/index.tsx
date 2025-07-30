import DashboardLayout from '@/src/components/layout/DashboardLayout';
import { AdminPageMeta } from '@/pageMeta/meta';
import { isLoggedIn } from '@/utils/auth';
import { NextApiRequest } from 'next';
import { User } from '@/types';
import RideHistoryPageComponent from '@/src/components/shared/ride-history/ride-history';

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
