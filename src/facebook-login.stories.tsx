import React from 'react';
import FacebookLogin from './facebook-login';

const appId = '1088597931155576';

export default {
  title: 'FacebookLogin',
  component: FacebookLogin,
};

export const Default = () => <FacebookLogin appId={appId} isMobile={false} />;

export const WithStyle = () => (
  <FacebookLogin
    appId={appId}
    initParams={{
      version: 'v10.0',
    }}
    style={{
      backgroundColor: '#4267b2',
      color: '#fff',
      fontSize: '16px',
      padding: '12px 24px',
      border: 'none',
      borderRadius: '4px',
    }}
  />
);

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
