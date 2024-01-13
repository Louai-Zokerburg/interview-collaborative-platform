import { createServerClient } from '@supabase/ssr';
import { getCookie, setCookie } from 'cookies-next';

import type { NextResponse, NextRequest } from 'next/server';

export default function createSupabaseReqResClient(
  req: NextRequest,
  res: NextResponse
) {
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get: (name) => getCookie(name, { req, res }),
        set: (name, value, options) => {
          setCookie(name, value, { req, res, ...options });
        },
        remove: (name, options) => {
          setCookie(name, '', { req, res, ...options });
        },
      },
    }
  );
}
