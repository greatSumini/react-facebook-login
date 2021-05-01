import React from 'react';
import FacebookLogin from './facebook-login';

const appId = 'APP_ID';

export default {
  title: 'FacebookLogin',
  component: FacebookLogin,
};

export const Default = () => <FacebookLogin appId={appId} />;
