import createSupabaseServereClient from '@/lib/supabase/createSupabaseServereClient';
import { Liveblocks } from '@liveblocks/node';
import { NextRequest } from 'next/server';

const API_KEY = process.env.LIVEBLOCKS_SECRET_KEY;

const liveblocks = new Liveblocks({
  secret: API_KEY!,
});

export async function POST(request: NextRequest) {
  // Get the current user

  const supabase = createSupabaseServereClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log(user?.id, user?.user_metadata.name, user?.email)

  // Create a session for the current user
  const session = liveblocks.prepareSession(`user-${user?.id}`, {
    userInfo: {
      name: user?.user_metadata.name,
      email: user?.email,
      id: user?.id,
    },
  });

  // Give the user access to the room
  const { room } = await request.json();
  session.allow(room, session.FULL_ACCESS);

  // Authorize the user and return the result
  const { body, status } = await session.authorize();
  return new Response(body, { status });
}
