/// ---------- || TYPES & INTERFACES || ---------- ///

interface PortalLayoutProps {
  children: React.ReactNode;
}

/// ---------- || PORTAL LAYOUT || ---------- ///

export default function PortalLayout({ children }: Readonly<PortalLayoutProps>) {
  return (
    <main className="container flex min-h-screen justify-center overflow-hidden">{children}</main>
  );
}
