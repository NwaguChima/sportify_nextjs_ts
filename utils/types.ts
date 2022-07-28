export type IProvider = {
  name: string;
  callbackUrl: string;
  id: string;
  signinUrl: string;
  type: string;
};

// export interface UseSessionOptions<boolean>.onUnauthenticated?: (() => void) | undefined
