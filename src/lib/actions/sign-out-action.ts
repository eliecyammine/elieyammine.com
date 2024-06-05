'use server';

import { createClient } from '@/lib/providers/supabase/server';

export async function signOutAction() {
  const supabase = createClient();

  await supabase.auth.signOut({
    scope: 'local',
  });
}
