'use client';

import { useState } from 'react';

import { useSearchParams } from 'next/navigation';

import { GithubIcon, Loader2Icon } from 'lucide-react';

import { createClient } from '@/lib/providers/supabase/client';

import { Button } from '@/ui/components/core/shadcn-ui/button';

export function GitHubLoginButton() {
  const supabase = createClient();

  const searchParams = useSearchParams();
  const returnTo = searchParams.get('return_to');

  const [isLoading, setLoading] = useState(false);

  const handleSignIn = async () => {
    setLoading(true);

    const redirectTo = new URL('/api/auth/callback', window.location.origin);

    if (returnTo) {
      redirectTo.searchParams.append('return_to', returnTo);
    }

    redirectTo.searchParams.append('provider', 'github');

    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: redirectTo.toString(),
      },
    });
  };

  return (
    <Button onClick={handleSignIn} className="w-full space-x-2">
      {isLoading ? (
        <Loader2Icon className="size-5 animate-spin" />
      ) : (
        <>
          <GithubIcon size={18} />

          <span>{'Sign in with GitHub'}</span>
        </>
      )}
    </Button>
  );
}
