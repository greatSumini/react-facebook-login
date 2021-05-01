import { FB } from './fb';
export {};

declare global {
  interface Window {
    fbAsyncInit;
    FB: FB;
  }
}
