import type { Metadata } from 'next';

import { DESCRIPTION } from '@/lib/constants/site';

/// ---------- || METADATA || ---------- ///

export const metadata: Metadata = {
  title: 'Portal',

  description: DESCRIPTION,
};

/// ---------- || PORTAL PAGE || ---------- ///

export default function PortalPage() {
  return <h2 className="text-2xl font-semibold">{'Portal Page'}</h2>;
}
