import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/ui/components/core/shadcn-ui/card';

import { GitHubLoginButton } from './github-login-button';

/// ---------- || PORTAL LOGIN SECTION || ---------- ///

export default async function PortalLoginSection() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="items-center">
        <CardTitle className="text-2xl">{'Portal Login'}</CardTitle>

        <CardDescription>{'Welcome back!'}</CardDescription>
      </CardHeader>

      <CardFooter>
        <GitHubLoginButton />
      </CardFooter>
    </Card>
  );
}
