import React, { useEffect, useState } from 'react';
import FacebookLogin from './facebook-login';
import { FacebookLoginClient } from './facebook-login.client';

const appId = '1088597931155576';

export default {
  title: 'Overview/Usages',
  component: FacebookLogin,
};

export const Default = () => <FacebookLogin appId={appId} />;

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
  <FacebookLogin appId={appId} children={<div>Hello Facebook!</div>} />
);

export const WithRender = () => (
  <FacebookLogin
    appId={appId}
    render={({ onClick }) => <a onClick={onClick}>Custom Component</a>}
  />
);

export const WithMultipleApp = () => {
  const [app, setApp] = useState(0);
  const appIds = ['1088597931155576', '2363450737249976'];

  const toggleApp = () => setApp((prev) => 1 - prev);

  useEffect(() => {
    loadFB();
  }, [app]);

  const loadFB = async () => {
    FacebookLoginClient.clear();
    await FacebookLoginClient.loadSdk('en_US');
    FacebookLoginClient.init({ appId: appIds[app], version: 'v9.0' });
  };

  return (
    <div>
      <button onClick={toggleApp} style={{ marginBottom: '12px' }}>
        toggle app
      </button>
      <button
        onClick={() =>
          FacebookLoginClient.login(console.log, {
            scope: 'public_profile, email',
          })
        }
      >
        Login to APP {app}
      </button>
    </div>
  );
};
