import Link from 'next/link';
import { redirect } from 'next/navigation';

import { ChevronLeftIcon } from 'lucide-react';

import { createClient } from '@/lib/providers/supabase/server';
import { cn } from '@/lib/utils';

import { buttonVariants } from '@/ui/components/core/shadcn-ui/button';

/// ---------- || TYPES & INTERFACES || ---------- ///

interface PortalAuthLayoutProps {
  children: React.ReactNode;
}

/// ---------- || PORTAL AUTH LAYOUT || ---------- ///

export default async function PortalAuthLayout({ children }: Readonly<PortalAuthLayoutProps>) {
  const supabase = createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    return redirect('/portal');
  }

  return (
    <>
      <Link
        href="/"
        className={cn(
          buttonVariants({
            variant: 'ghost',
            size: 'sm',
          }),
          'absolute left-4 top-4',
        )}
      >
        <>
          <ChevronLeftIcon className="mr-2 size-4" />

          {'Back'}
        </>
      </Link>

      <main className="container flex min-h-screen items-center justify-center overflow-hidden">
        {children}
      </main>
    </>
  );
}
