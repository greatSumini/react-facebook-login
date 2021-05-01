import React, { useState, useEffect } from 'react';

import { FacebookLoginProps } from './types';
import { checkIsMobile, loadFacebookSdk } from './utils';

export default function FacebookLogin(props: FacebookLoginProps) {
  const [isProcessing, setProcessing] = useState(false);

  const {
    isDisabled = false,
    isMobile = checkIsMobile(),
    scope = 'public_profile, email',
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

  const setFBAsyncInit = () => {
    const { appId, initParams } = props;
    const {
      version = '9.0',
      xfbml = false,
      cookie = false,
      localStorage = true,
    } = initParams;

    window.fbAsyncInit = () => {
      window.FB.init({
        appId,
        version,
        xfbml,
        cookie,
        localStorage,
      });
    };
  };

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    const { language = 'en_US' } = props;

    await loadFacebookSdk(language);
    setFBAsyncInit();
  };

  const {} = props;

  return <button type="button"></button>;
}
