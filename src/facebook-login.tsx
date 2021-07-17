import React, { useEffect } from 'react';

import { FacebookClient } from './facebook.client';
import {
  DialogParams,
  InitParams,
  LoginOptions,
  FacebookLoginProps,
} from './types';

export default function FacebookLogin(props: FacebookLoginProps) {
  const {
    appId,
    language = 'en_US',
    scope = 'public_profile, email',
    fields = 'name,email,picture',
    onSuccess,
    onFail,
    onProfileSuccess,
    className,
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

  const init = async () => {
    await FacebookClient.loadSdk(language);
    FacebookClient.init(() => {
      const isRedirected = FacebookClient.isRedirected();
      if (autoLoad && !isRedirected) {
        handleButtonClick();
        return;
      }
      if (isRedirected && useRedirect) {
        requestLogin();
      }
    }, initParams);
  };

  const requestLogin = () => {
    FacebookClient.login(
      (res) => {
        if (!res.authResponse) {
          onFail && onFail({ status: 'loginCancelled' });
          return;
        }

        onSuccess && onSuccess(res.authResponse);

        if (onProfileSuccess) {
          FacebookClient.getProfile(onProfileSuccess, { fields });
        }
      },
      { ...loginOptions, scope }
    );
  };

  const handleButtonClick = () => {
    if (useRedirect) {
      FacebookClient.redirectToDialog(dialogParams, loginOptions);
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
    <button
      type="button"
      onClick={handleButtonClick}
      className={className}
      style={style}
    >
      {children}
    </button>
  );
}
