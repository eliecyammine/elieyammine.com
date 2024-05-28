import { headerItems } from '@/config/header.config';

import { FloatingNavbar } from '@/ui/components/core/aceternity-ui/floating-navbar';

// import { Spotlight } from '@/ui/components/core/aceternity-ui/spotlight';

/// ---------- || TYPES & INTERFACES || ---------- ///

interface LandingLayoutProps {
  children: React.ReactNode;
}

/// ---------- || LANDING LAYOUT || ---------- ///

export default function LandingLayout({ children }: Readonly<LandingLayoutProps>) {
  return (
    <>
      {/* <div className="absolute inset-0 flex size-full items-center justify-center bg-grid-black/[0.05] dark:bg-grid-white/[0.05]">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div> */}

      {/* <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="white" /> */}

      <div className="relative overflow-hidden">
        <FloatingNavbar navItems={headerItems} />

        <main className="container flex min-h-screen justify-center overflow-hidden pb-20 pt-32 sm:pt-36">
          {children}
        </main>
      </div>
    </>
  );
}
