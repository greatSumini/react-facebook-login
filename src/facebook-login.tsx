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
    fields = 'name,email,picture',
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
    const { onSuccess, onFail, onProfileSuccess } = props;

    window.FB.login(
      (res) => {
        if (!res.authResponse) {
          onFail({ status: 'loginCancelled' });
          return;
        }

        onSuccess(res.authResponse);

        if (onProfileSuccess) {
          window.FB.api(`me`, { fields }, onProfileSuccess);
        }
      },
      { ...loginOptions, scope }
    );
  };

  const handleButtonClick = () => {
    if (isMobile && !disableMobileRedirect) {
      const params: DialogParams = {
        redirect_uri:
          typeof window !== 'undefined' ? window?.location.href : '/',
        state: 'facebookdirect',
        response_type: 'code',
        ...props.dialogParams,
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
