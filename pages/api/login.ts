import { User } from '@/types';
import { getErrorMessage } from '@/utils/error';
import { BASE_URL } from '@/utils/url';
import axios from 'axios';
import { serialize } from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    try {
      const { data } = await axios.post(`${BASE_URL}/admin/login`, {
        email,
        password,
      });

      const token: string = data.data.accessToken;
      const role: string = data.data.admin.role;

      const cookieData: User = {
        token,
        role,
      };

      const tokenCookie = serialize('trygg_admin', JSON.stringify(cookieData), {
        httpOnly: true,
        secure: true,
        maxAge: 60 * 60, // 1 hour (60 seconds * 60 minutes)
        sameSite: 'strict',
        path: '/',
      });

      res.setHeader('Set-Cookie', [tokenCookie]);

      res.json({ token, role });
    } catch (error) {
      const { message, statusCode } = getErrorMessage(error);
      res.status(statusCode).json({ message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
