import Link from 'next/link';

import { GithubIcon } from 'lucide-react';

import { Button } from '@/ui/components/core/shadcn-ui/button';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/ui/components/core/shadcn-ui/card';

/// ---------- || PORTAL LOGIN FORM || ---------- ///

export default function PortalLoginForm() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="items-center">
        <CardTitle className="text-2xl">Portal Login</CardTitle>

        <CardDescription>Welcome back!</CardDescription>
      </CardHeader>

      <CardFooter>
        <Button className="w-full" asChild>
          <Link href="/portal">
            <div className="flex flex-row items-center gap-2">
              <GithubIcon size={18} />

              <span>Sign in with GitHub</span>
            </div>
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
