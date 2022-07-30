export type IProvider = {
  name: string;
  callbackUrl: string;
  id: string;
  signinUrl: string;
  type: string;
};

export type Session = {
  expires: string;
  accessToken: string;
  user: {
    name: string;
    email: string;
    id: string;
  };
};

export type MusicItem = {
  albumUrl: string;
  artist: string;
  id: string;
  title: string;
  uri: string;
};

// export interface UseSessionOptions<boolean>.onUnauthenticated?: (() => void) | undefined
