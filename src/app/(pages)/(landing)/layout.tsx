/// ---------- || TYPES & INTERFACES || ---------- ///

interface LandingLayoutProps {
  children: React.ReactNode;
}

/// ---------- || LANDING LAYOUT || ---------- ///

export default function LandingLayout({ children }: Readonly<LandingLayoutProps>) {
  return (
    <main className="container flex min-h-screen items-center justify-center">{children}</main>
  );
}
