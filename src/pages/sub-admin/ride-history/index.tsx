import DashboardLayout from '@/src/components/layout/DashboardLayout';
import { AdminPageMeta } from '@/pageMeta/meta';
import RidesPageComponent from '@/src/components/shared/rides/rides';
import { isLoggedIn } from '@/utils/auth';
import { NextApiRequest } from 'next';
import { User } from '@/types';

const RidesPage = () => {
  return (
    <DashboardLayout
      role="SUB"
      title="Ride History"
      meta={AdminPageMeta.ridesPage}
    >
      <RidesPageComponent />
    </DashboardLayout>
  );
};

export default RidesPage;

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
