import { InitParams, LoginOptions } from './params.type';
import { LoginResponse } from './response.type';

export interface FB {
  getLoginStatus: (
    callback: (res: LoginResponse) => void,
    isForcingRoudtrip?: boolean
  ) => void;

  init: (params: InitParams) => void;

  login: (
    callback: (res: LoginResponse) => void,
    options?: LoginOptions
  ) => void;

  logout: (callback: (res: unknown) => void) => void;

  api: (
    path: string,
    params: { fields: string },
    callback: (res: unknown) => void
  ) => void;
}
