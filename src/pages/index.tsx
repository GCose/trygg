import { isLoggedIn } from '@/utils/auth';
import { LogOut } from 'lucide-react';
import { NextApiRequest } from 'next';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  const handleLogout = async () => {
    router.push('/api/logout');
  };

  return (
    <div>
      <p>Hello World!!</p>

      <LogOut onClick={handleLogout} size={20} />
    </div>
  );
}

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

  return {
    props: {
      userData,
    },
  };
};
