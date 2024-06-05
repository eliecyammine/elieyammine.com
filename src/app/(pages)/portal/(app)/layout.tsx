/// ---------- || TYPES & INTERFACES || ---------- ///
import { redirect } from 'next/navigation';

import { createClient } from '@/lib/providers/supabase/server';

// import Sidebar from './_components/sidebar';

interface PortalLayoutProps {
  children: React.ReactNode;
}

/// ---------- || PORTAL APP LAYOUT || ---------- ///

export default async function PortalAppLayout({ children }: Readonly<PortalLayoutProps>) {
  const supabase = createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return redirect('/portal/login');
  }

  return (
    <>
      {/* <Sidebar /> */}

      <main className="container flex min-h-screen items-center justify-center overflow-hidden">
        {children}
      </main>
    </>
  );
}
