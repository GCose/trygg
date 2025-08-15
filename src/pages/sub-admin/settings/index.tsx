import type { NextApiRequest } from 'next';

import { AdminPageMeta } from '@/pageMeta/meta';
import DashboardLayout from '@/src/components/layout/DashboardLayout';
import SettingsPageComponent from '@/src/components/shared/settings/settings';
import type { User } from '@/types';
import { isLoggedIn } from '@/utils/auth';

const SettingsPage = () => {
  return (
    <DashboardLayout
      role="SUB"
      title="Settings"
      meta={AdminPageMeta.settingsPage}
    >
      <SettingsPageComponent
        role="SUB"
        defaultName="Sub Admin"
        defaultEmail="subadmin@trygg.com"
      />
    </DashboardLayout>
  );
};

export default SettingsPage;

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
