import React, { useState, useEffect } from 'react';

import { FacebookLoginProps } from './types';
import { checkIsMobile } from './utils';
import { loadFacebookSdk } from './utils/facebook';

export default function FacebookLogin(props: FacebookLoginProps) {
  const [isProcessing, setProcessing] = useState(false);

  const {
    appId,
    authType = '',
    scope = 'public_profile, email',
    isMobile = checkIsMobile(),
    redirectUri = window?.location.href || '/',
    state = 'facebookdirect',
    responseType = 'code',
    isDisabled = false,
  } = props;

  const setFBAsyncInit = () => {
    const {
      version = '9.0',
      xfbml = false,
      cookie = false,
      localStorage = true,
    } = props;

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

  return <>Hello World!</>;
}
