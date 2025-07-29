import { serialize } from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const tokenCookie = serialize('trygg_admin', JSON.stringify({}), {
      httpOnly: true,
      secure: true,
      path: '/',
      maxAge: -1,
    });

    res.setHeader('Set-Cookie', [tokenCookie]);

    res.redirect('/auth');
  } catch (error) {
    res
      .status(500)
      .json({ message: `Logout failed. An error occurred. ${error}` });
  }
}
