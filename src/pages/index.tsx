import { NextApiRequest } from 'next';
import { isLoggedIn } from '@/utils/auth';
import { User } from '@/types';

import React from 'react';

const PageRoot = () => {
  return <div></div>;
};

export default PageRoot;

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

  if (user.role === 'SUB') {
    return {
      redirect: {
        destination: '/sub-admin',
        permanent: false,
      },
    };
  } else if (user.role === 'SUPER') {
    return {
      redirect: {
        destination: '/super-admin',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
