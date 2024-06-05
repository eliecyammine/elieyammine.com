import * as z from 'zod';

/// ---------- || PORTAL LOGIN SCHEMA || ---------- ///

export const portalLoginSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid Email Address'),
  password: z.string().min(1, 'Password is required'),
});
