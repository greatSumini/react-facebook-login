import { InitParams } from './params';
export {};

declare global {
  interface Window {
    fbAsyncInit;
    FB: {
      init: (params: InitParams) => null;
    };
  }
}
