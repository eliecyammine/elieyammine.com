/// ---------- || HOME PAGE || ---------- ///
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="space-x-3">
      <h2 className="text-2xl font-semibold">Home Page</h2>
      <Link href="/about">About</Link>
      <Link href="/projects">Projects</Link>
    </div>
  );
}
