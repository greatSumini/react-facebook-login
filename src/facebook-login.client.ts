import { createScriptEle, objectToParams, paramsToObject } from './helpers';
import {
  DialogParams,
  InitParams,
  LoginOptions,
  LoginResponse,
  LoginStatus,
} from './types';

export const SDK_SCRIPT_ELE_ID = 'facebook-jssdk';

export const FacebookLoginClient = {
  getFB: () => {
    if (!window.FB) {
      console.warn('FB not found');
      return;
    }
    return window.FB;
  },
  getLoginStatus(
    callback: (res: LoginResponse) => void,
    isForcingRoudtrip = false
  ) {
    const FB = this.getFB();

    if (!FB) {
      callback({ status: 'unknown' as LoginStatus });
      return;
    }

    FB.getLoginStatus(callback, isForcingRoudtrip);
  },
  getProfile(callback: (res: unknown) => void, params: { fields: string }) {
    this.getFB()?.api('me', params, callback);
  },
  init(callback: () => void, initParams: InitParams) {
    window.fbAsyncInit = () => {
      this.getFB()?.init(initParams);
      callback();
    };
  },
  clear() {
    window.FB = null;
    const scriptEle = document.getElementById(SDK_SCRIPT_ELE_ID);
    if (scriptEle) {
      scriptEle.remove();
    }
  },
  isRedirected(dialogParams?: DialogParams): boolean {
    const params = paramsToObject(window.location.search);

    return (
      (params['state'] === dialogParams?.state ?? 'facebookdirect') &&
      params[dialogParams?.response_type ?? ''] !== undefined
    );
  },
  async loadSdk(language: string, useCustomerChat?: boolean) {
    await createScriptEle(
      SDK_SCRIPT_ELE_ID,
      `https://connect.facebook.net/${language}/sdk${
        useCustomerChat ? '/xfbml.customerchat' : ''
      }.js`
    );
  },
  redirectToDialog(dialogParams: DialogParams, loginOptions: LoginOptions) {
    window.location.href = `https://www.facebook.com/dialog/oauth${objectToParams(
      {
        ...dialogParams,
        ...loginOptions,
      }
    )}`;
  },
  login(callback: (res: LoginResponse) => void, loginOptions: LoginOptions) {
    this.getFB()?.login(callback, loginOptions);
  },
  logout(callback: (res?: unknown) => void) {
    this.getLoginStatus((res) => {
      if (res.status === 'connected') {
        this.getFB()?.logout(callback);
      } else {
        callback();
      }
    });
  },
};
