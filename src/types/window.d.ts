import { FacebookInitParams } from './facebook';
export {};

declare global {
  interface Window {
    fbAsyncInit;
    FB: {
      init: (params: FacebookInitParams) => null;
    };
  }
}
