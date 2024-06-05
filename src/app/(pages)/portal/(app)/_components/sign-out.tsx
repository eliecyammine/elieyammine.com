'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';

import { Button } from '@/ui/components/core/shadcn-ui/button';

import { signOutAction } from '../../../../../lib/actions/sign-out-action';

export function SignOut() {
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignOut = async () => {
    setLoading(true);
    signOutAction();
    router.refresh();
  };

  return (
    <Button onClick={handleSignOut} className=" w-full">
      {isLoading ? 'Loading...' : 'Sign out'}
    </Button>
  );
}
