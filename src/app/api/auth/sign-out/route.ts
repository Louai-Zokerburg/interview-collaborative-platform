import createSupabaseServereClient from '@/lib/supabase/createSupabaseServereClient';
import { type NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const requestUrl = new URL(request.url);

  const supabase = createSupabaseServereClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    await supabase.auth.signOut();
  }

  return NextResponse.redirect(`${requestUrl.origin}/auth`, { status: 302 });
}
