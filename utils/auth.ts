import { User } from '@/types';
import { parse } from 'cookie';
import { NextApiRequest } from 'next';

export const isLoggedIn = (req: NextApiRequest): boolean | User => {
  if (!req || !req.headers || !req.headers.cookie) {
    return false;
  }

  const cookies = parse(req.headers.cookie || '');

  if (cookies && cookies.trygg_admin)
    return JSON.parse(cookies.trygg_admin) as User;

  return false;
};
