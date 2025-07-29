import DashboardLayout from '@/src/components/layout/DashboardLayout';
import { AdminPageMeta } from '@/pageMeta/meta';
import React from 'react';
import { NextApiRequest } from 'next';
import { isLoggedIn } from '@/utils/auth';
import { User } from '@/types';

const SettingsPage = () => {
  return (
    <DashboardLayout
      role="SUB"
      title="Settings"
      meta={AdminPageMeta.settingsPage}
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
