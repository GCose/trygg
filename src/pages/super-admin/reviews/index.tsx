import { useState, useEffect } from 'react';

import type { NextApiRequest } from 'next';

import { SuperAdminPageMeta } from '@/pageMeta/meta';
import DashboardLayout from '@/src/components/layout/DashboardLayout';
import ReviewsPageComponent from '@/src/components/shared/reviews/reviews-page';
import ReviewsSkeleton from '@/src/components/shared/reviews/reviews-page-skeleton';
import type { User } from '@/types';
import { isLoggedIn } from '@/utils/auth';

const ReviewsPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <DashboardLayout
      role="SUPER"
      title="Reviews"
      meta={SuperAdminPageMeta.reviewsPage}
    >
      {isLoading ? <ReviewsSkeleton /> : <ReviewsPageComponent />}
    </DashboardLayout>
  );
};

export default ReviewsPage;

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
