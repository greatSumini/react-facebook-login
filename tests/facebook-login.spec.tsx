import '@testing-library/jest-dom';

import React from 'react';
import { render, screen } from '@testing-library/react';
import FacebookLogin from '../src/facebook-login';

const appId = '1088597931155576';

test("displays a 'Login with Facebook' message", () => {
  render(
    <FacebookLogin
      appId={appId}
      onSuccess={console.log}
      onFail={console.error}
    />
  );
  expect(screen.getByText('Login with Facebook')).toBeInTheDocument();
});
