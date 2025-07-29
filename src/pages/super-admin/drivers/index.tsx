import DashboardLayout from '@/src/components/layout/DashboardLayout';
import { SuperAdminPageMeta } from '@/pageMeta/meta';
import DriversPageComponent from '@/src/components/shared/drivers/drivers';
import { NextApiRequest } from 'next';
import { isLoggedIn } from '@/utils/auth';
import { User } from '@/types';

const DriversPage = () => {
  return (
    <DashboardLayout
      role="SUPER"
      title="Drivers"
      meta={SuperAdminPageMeta.driversPage}
    >
      <DriversPageComponent />
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
