'use client';

import { MonitorIcon, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/ui/components/core/shadcn-ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/ui/components/core/shadcn-ui/dropdown-menu';

import { Separator } from '../core/shadcn-ui/separator';

/// ---------- || THEME TOGGLE || ---------- ///

export function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <div className="fixed bottom-1 right-1 z-50 m-2 hidden sm:flex">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <Sun className="size-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />

            <Moon className="absolute size-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />

            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="space-y-1">
          <DropdownMenuItem onClick={() => setTheme('light')}>
            <div className="flex flex-row items-center">
              <Sun className="mr-2 size-3.5" />
              Light
            </div>
          </DropdownMenuItem>

          <DropdownMenuItem onClick={() => setTheme('dark')}>
            <div className="flex flex-row items-center">
              <Moon className="mr-2 size-3.5" />
              Dark
            </div>
          </DropdownMenuItem>

          <Separator />

          <DropdownMenuItem onClick={() => setTheme('system')}>
            <div className="flex flex-row items-center">
              <MonitorIcon className="mr-2 size-3.5" />
              System
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
