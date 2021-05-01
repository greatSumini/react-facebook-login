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
    onSuccess,
    onFail,
    onProfileSuccess,
    children = 'Login with Facebook',
    render,
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
    window.FB.login(
      (res) => {
        if (!res.authResponse) {
          onFail && onFail({ status: 'loginCancelled' });
          return;
        }

        onSuccess && onSuccess(res.authResponse);

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

    if (!window.FB) {
      onFail && onFail({ status: 'facebookNotLoaded' });
      return;
    }

    requestLogin();
  };

  if (render) {
    return render({
      onSuccess,
      onFail,
      onProfileSuccess,
      onClick: handleButtonClick,
    });
  }

  return (
    <button type="button" onClick={handleButtonClick}>
      {children}
    </button>
  );
}
