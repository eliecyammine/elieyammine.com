import { headerItems } from '@/config/header.config';

import { FloatingNavbar } from '@/ui/components/core/aceternity-ui/floating-navbar';

/// ---------- || TYPES & INTERFACES || ---------- ///

interface LandingLayoutProps {
  children: React.ReactNode;
}

/// ---------- || LANDING LAYOUT || ---------- ///

export default function LandingLayout({ children }: Readonly<LandingLayoutProps>) {
  return (
    <div>
      <FloatingNavbar navItems={headerItems} />

      <main className="container flex min-h-screen items-center justify-center">{children}</main>
    </div>
  );
}
