import type { NextApiRequest } from 'next';

import { SuperAdminPageMeta } from '@/pageMeta/meta';
import DashboardLayout from '@/src/components/layout/DashboardLayout';
import ReviewsPageComponent from '@/src/components/shared/reviews/reviews-page';
import type { User } from '@/types';
import { isLoggedIn } from '@/utils/auth';

const ReviewsPage = () => {
  return (
    <DashboardLayout
      role="SUPER"
      title="Reviews & Feedback"
      meta={SuperAdminPageMeta.reviewsPage}
    >
      <ReviewsPageComponent />
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
