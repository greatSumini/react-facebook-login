import { FB } from './fb.type';
export {};

declare global {
  interface Window {
    fbAsyncInit;
    FB: FB;
  }
}
