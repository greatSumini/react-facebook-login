import React, { useEffect } from 'react';

import {
  DialogParams,
  InitParams,
  LoginOptions,
  FacebookLoginProps,
} from './types';
import { loadFacebookSdk, objectToParams, paramsToObject } from './utils';

export default function FacebookLogin(props: FacebookLoginProps) {
  const {
    appId,
    language = 'en_US',
    scope = 'public_profile, email',
    fields = 'name,email,picture',
    onSuccess,
    onFail,
    onProfileSuccess,
    style,
    children = 'Login with Facebook',
    render,
    autoLoad = false,
    useRedirect = false,
  } = props;

  const initParams: InitParams = {
    version: 'v9.0',
    xfbml: false,
    cookie: false,
    localStorage: true,
    ...props.initParams,
    appId,
  };
  const dialogParams: DialogParams = {
    redirect_uri:
      typeof window !== 'undefined' ? location.origin + location.pathname : '/',
    state: 'facebookdirect',
    response_type: 'code',
    ...props.dialogParams,
    client_id: appId,
  };
  const loginOptions: LoginOptions = {
    auth_type: '',
    return_scopes: false,
    ...props.loginOptions,
    scope,
  };

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
      window.FB.init(initParams);
      if (autoLoad && !checkIsRedirectedFromFb()) {
        handleButtonClick();
        return;
      }
      if (checkIsRedirectedFromFb() && useRedirect) {
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
          window.FB.api('me', { fields }, onProfileSuccess);
        }
      },
      { ...loginOptions, scope }
    );
  };

  const handleButtonClick = () => {
    if (useRedirect) {
      window.location.href = `https://www.facebook.com/dialog/oauth${objectToParams(
        {
          ...dialogParams,
          ...loginOptions,
        }
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
    <button type="button" onClick={handleButtonClick} style={style}>
      {children}
    </button>
  );
}
