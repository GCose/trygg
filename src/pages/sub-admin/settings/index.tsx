import React from 'react';

import type { NextApiRequest } from 'next';

import { AdminPageMeta } from '@/pageMeta/meta';
import DashboardLayout from '@/src/components/layout/DashboardLayout';
import type { User } from '@/types';
import { isLoggedIn } from '@/utils/auth';

const SettingsPage = () => {
  return (
    <DashboardLayout
      role="SUB"
      title="Settings"
      meta={AdminPageMeta.settingsPage}
    />
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
