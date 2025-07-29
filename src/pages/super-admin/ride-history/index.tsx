import DashboardLayout from '@/src/components/layout/DashboardLayout';
import { SuperAdminPageMeta } from '@/pageMeta/meta';
import RidesPageComponent from '@/src/components/shared/rides/rides';
import { NextApiRequest } from 'next';
import { isLoggedIn } from '@/utils/auth';
import { User } from '@/types';

const RidesPage = () => {
  return (
    <DashboardLayout
      role="SUPER"
      title="Ride History"
      meta={SuperAdminPageMeta.ridesPage}
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
