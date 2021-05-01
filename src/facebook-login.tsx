import React, { useEffect } from 'react';

import { DialogParams, Props } from './types';
import {
  checkIsMobile,
  loadFacebookSdk,
  objectToParams,
  paramsToObject,
} from './utils';

export default function FacebookLogin(props: Props) {
  const {
    appId,
    language = 'en_US',
    scope = 'public_profile, email',
    children = 'Login with Facebook',
    isMobile = checkIsMobile(),
    disableMobileRedirect = false,
    initParams = {
      version: 'v9.0',
      xfbml: false,
      cookie: false,
      localStorage: true,
    },
    loginOptions = {
      auth_type: '',
      return_scopes: false,
    },
    dialogParams = {
      redirect_uri: window?.location.href || '/',
      state: 'facebookdirect',
      response_type: 'code',
    },
  } = props;

  useEffect(() => {
    init();
  }, []);

  const checkIsRedirectedFromFb = () => {
    const params = paramsToObject(window.location.search);

    return (
      params['state'] === 'facebookdirect' &&
      (params['code'] || params['granted_scopes'])
    );
  };

  const init = async () => {
    await loadFacebookSdk(language);

    window.fbAsyncInit = () => {
      window.FB.init({
        appId,
        ...initParams,
      });
      if (checkIsRedirectedFromFb()) {
        requestLogin();
      }
    };
  };

  const requestLogin = () => {
    const { onSuccess, onFail } = props;

    window.FB.login(
      (res) => {
        if (!res.authResponse) {
          onFail({ status: 'loginCancelled' });
          return;
        }

        onSuccess(res.authResponse);
      },
      { ...loginOptions, scope }
    );
  };

  const handleButtonClick = () => {
    if (isMobile && !disableMobileRedirect) {
      const params: DialogParams = {
        ...dialogParams,
        client_id: appId,
      };
      window.location.href = `https://www.facebook.com/dialog/oauth${objectToParams(
        params
      )}`;
      return;
    }

    const { onFail } = props;

    if (!window.FB) {
      onFail({ status: 'facebookNotLoaded' });
      return;
    }

    requestLogin();
  };

  return (
    <button type="button" onClick={handleButtonClick}>
      {children}
    </button>
  );
}
