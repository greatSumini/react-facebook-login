import { createScriptEle, objectToParams, paramsToObject } from './helpers';
import { DialogParams, InitParams, LoginOptions } from './types';

export const FacebookClient = {
  init(initParams: InitParams, callback?: () => void) {
    window.fbAsyncInit = () => {
      window.FB.init(initParams);
      callback && callback();
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
};
