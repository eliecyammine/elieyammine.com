import type { Metadata } from 'next';

import { DESCRIPTION } from '@/lib/constants/site';

import PortalLoginForm from './_components/portal-login-form';

/// ---------- || METADATA || ---------- ///

export const metadata: Metadata = {
  title: 'Portal Login',

  description: DESCRIPTION,
};

/// ---------- || PORTAL LOGIN PAGE || ---------- ///

export default function PortalLoginPage() {
  return <PortalLoginForm />;
}
