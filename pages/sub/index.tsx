import { User } from '@/types';
import { isLoggedIn } from '@/utils/auth';
import { NextApiRequest } from 'next';
import React from 'react';

const index = () => {
  return <div>index</div>;
};

export default index;

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
