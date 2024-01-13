import { createClient } from '@liveblocks/client';
import { createRoomContext } from '@liveblocks/react';
import LiveblocksProvider from '@liveblocks/yjs';

const client = createClient({
  authEndpoint: '/api/liveblocks',
  // throttle: 100,
});


type Presence = {
  // cursor: { x: number; y: number } | null;
  // ...
};


type Storage = {
  // author: LiveObject<{ firstName: string, lastName: string }>,
  // ...
};

type UserMeta = {
  id: string; // Accessible through `user.id`
  info: {
    name: string;
    email: string;
    id: string;
  }; // Accessible through `user.info`
};

type RoomEvent = {
  // type: "NOTIFICATION",
  // ...
};
export type UserAwareness = {
  user?: UserMeta["info"];
};

export type AwarenessList = [number, UserAwareness][];

export type TypedLiveblocksProvider = LiveblocksProvider<
  Presence,
  Storage,
  UserMeta,
  RoomEvent
>;

export const {
  suspense: {
    RoomProvider,
    useRoom,
    useMyPresence,
    useUpdateMyPresence,
    useSelf,
    useOthers,
    useOthersMapped,
    useOthersConnectionIds,
    useOther,
    useBroadcastEvent,
    useEventListener,
    useErrorListener,
    useStorage,
    useObject,
    useMap,
    useList,
    useBatch,
    useHistory,
    useUndo,
    useRedo,
    useCanUndo,
    useCanRedo,
    useMutation,
    useStatus,
    useLostConnectionListener,
  },
} = createRoomContext<Presence, Storage, UserMeta, RoomEvent>(client);
