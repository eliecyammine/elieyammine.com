'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { ThemeProviderProps } from 'next-themes/dist/types';
import { THEME_STORAGE_KEY } from 'next.constants.mjs';

/// ---------- || THEME PROVIDER || ---------- ///

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      storageKey={THEME_STORAGE_KEY}
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
