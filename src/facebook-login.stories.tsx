import React from 'react';
import FacebookLogin from './facebook-login';

const appId = '2363450737249976';

export default {
  title: 'FacebookLogin',
  component: FacebookLogin,
};

export const Default = () => <FacebookLogin appId={appId} isMobile={false} />;
