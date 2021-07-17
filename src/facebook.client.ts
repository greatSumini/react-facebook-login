import { createScriptEle } from './helpers';

export class FacebookClient {
  static async loadSdk(language: string) {
    await createScriptEle(
      'facebook-jssdk',
      `https://connect.facebook.net/${language}/sdk.js`
    );
  }
}
