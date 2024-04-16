'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import React from 'react';

const LogIn = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <p>{session.user?.name}</p>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }

  return (
    <>
      <button onClick={() => signIn('spotify')}>Sign in with spotify</button>
    </>
  );
};

export default LogIn;
