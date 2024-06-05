import type { Metadata } from 'next';

import { DESCRIPTION } from '@/lib/constants/site';

import PortalLoginSection from './_components/portal-login-section';

/// ---------- || METADATA || ---------- ///

export const metadata: Metadata = {
  title: 'Portal Login',

  description: DESCRIPTION,
};

/// ---------- || PORTAL LOGIN PAGE || ---------- ///

export default function PortalLoginPage() {
  return <PortalLoginSection />;
}
