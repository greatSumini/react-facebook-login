import React from 'react';
import FacebookLogin from './facebook-login';

const appId = '1088597931155576';

export default {
  title: 'FacebookLogin',
  component: FacebookLogin,
};

export const Default = () => <FacebookLogin appId={appId} isMobile={false} />;

export const WithChildren = () => (
  <FacebookLogin
    appId={appId}
    isMobile={false}
    children={<div>Hello Facebook!</div>}
  />
);

export const WithRender = () => (
  <FacebookLogin
    appId={appId}
    isMobile={false}
    render={({ onClick }) => <a onClick={onClick}>Custom Component</a>}
  />
);
