import React from 'react';

import Link from 'next/link';

import { sidebarItems } from '@/config/sidebar.config';

import { Button } from '@/ui/components/core/shadcn-ui/button';

import { SignOut } from './sign-out';

export default function Sidebar() {
  return (
    <aside className="fixed top-0 flex h-screen w-12 shrink-0 flex-col items-center justify-between border-r-2 border-dashed border-border px-2 py-5 md:w-56 md:items-start">
      <div className="w-full">
        <Link href="/">
          <span className="!cursor-pointer text-xl font-bold tracking-wider">EY.</span>
        </Link>

        {sidebarItems.map((item, index) => (
          <Button variant="ghost" key={index} className="flex w-full justify-start gap-2">
            {item.icon}
            {item.name}
          </Button>
        ))}
      </div>

      <SignOut />
    </aside>
  );
}
