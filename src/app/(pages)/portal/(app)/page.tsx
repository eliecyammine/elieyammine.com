import type { Metadata } from 'next';

import { DESCRIPTION } from '@/lib/constants/site';

/// ---------- || METADATA || ---------- ///

export const metadata: Metadata = {
  title: 'Portal App',

  description: DESCRIPTION,
};

/// ---------- || PORTAL APP PAGE || ---------- ///

export default function PortalAppPage() {
  return (
    <>
      <h2 className="text-2xl font-semibold">{'Portal App Page'}</h2>
    </>
  );
}
