import DashboardLayout from '@/src/components/layout/DashboardLayout';
import { AdminPageMeta } from '@/pageMeta/meta';
import DriversPageComponent from '@/src/components/shared/drivers/drivers';
import { User } from '@/types';
import { isLoggedIn } from '@/utils/auth';
import { NextApiRequest } from 'next';

const DriversPage = () => {
  return (
    <DashboardLayout
      role="SUB"
      title="Drivers"
      meta={AdminPageMeta.driversPage}
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
