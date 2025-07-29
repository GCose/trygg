import DashboardLayout from '@/src/components/layout/DashboardLayout';
import { SuperAdminPageMeta } from '@/pageMeta/meta';
import React from 'react';
import { User } from '@/types';
import { NextApiRequest } from 'next';
import { isLoggedIn } from '@/utils/auth';

const SettingsPage = () => {
  return (
    <DashboardLayout
      role="SUPER"
      title="Settings"
      meta={SuperAdminPageMeta.settingsPage}
    ></DashboardLayout>
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
