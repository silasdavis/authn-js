declare interface Credentials {
  [index: string]: string;
  username: string;
  password: string;
}

declare interface JWTClaims {
  iss: string,
  aud: string,
  sub: number,
  iat: number,
  exp: number
}

import { Session } from "./session";

export interface SessionStore {
  session: Session | undefined,
  update(val: string): void,
  delete(): void
}
