import { getServerSession } from 'next-auth';
import { authOptions } from './authOptions';

export async function getServerAuthSession() {
  return await getServerSession(authOptions);
}
