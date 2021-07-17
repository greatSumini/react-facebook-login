import { createScriptEle, objectToParams, paramsToObject } from './helpers';
import { DialogParams, InitParams, LoginOptions, LoginResponse } from './types';

export const FacebookClient = {
  getLoginStatus(
    callback: (res: LoginResponse) => void,
    isForcingRoudtrip = false
  ) {
    window.FB.getLoginStatus(callback, isForcingRoudtrip);
  },
  getProfile(callback: (res: unknown) => void, params: { fields: string }) {
    window.FB.api('me', params, callback);
  },
  init(callback: () => void, initParams: InitParams) {
    window.fbAsyncInit = () => {
      window.FB.init(initParams);
      callback();
    };
  },
  isRedirected(): boolean {
    const params = paramsToObject(window.location.search);

    return (
      params['state'] === 'facebookdirect' &&
      (params['code'] !== undefined || params['granted_scopes'] !== undefined)
    );
  },
  async loadSdk(language: string) {
    await createScriptEle(
      'facebook-jssdk',
      `https://connect.facebook.net/${language}/sdk.js`
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
    window.FB.login(callback, loginOptions);
  },
  logout(callback = () => null) {
    this.getLoginStatus((res) => {
      if (res.status === 'connected') {
        window.FB.logout(callback);
      }
    });
  },
};
