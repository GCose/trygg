import type { NextApiRequest } from 'next';

import { SuperAdminPageMeta } from '@/pageMeta/meta';
import DashboardLayout from '@/src/components/layout/DashboardLayout';
import PassengersPageComponent from '@/src/components/shared/passengers/passengers';
import type { User } from '@/types';
import { isLoggedIn } from '@/utils/auth';

const PassengersPage = () => {
  return (
    <DashboardLayout
      role="SUPER"
      title="Passengers"
      meta={SuperAdminPageMeta.passengersPage}
    >
      <PassengersPageComponent />
    </DashboardLayout>
  );
};

export default PassengersPage;

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
