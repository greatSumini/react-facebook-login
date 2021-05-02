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

test('displays children', () => {
  render(
    <FacebookLogin appId={appId} onSuccess={console.log} onFail={console.error}>
      Hello World!
    </FacebookLogin>
  );
  expect(screen.getByText('Hello World!')).toBeInTheDocument();

  render(
    <FacebookLogin appId={appId} onSuccess={console.log} onFail={console.error}>
      <div data-testid="test" />
    </FacebookLogin>
  );
  expect(screen.getByTestId('test')).toBeInTheDocument();
});

test('render custom component', () => {
  render(
    <FacebookLogin
      appId={appId}
      onSuccess={console.log}
      onFail={console.error}
      render={() => <div data-testid="test" />}
    />
  );
  expect(screen.getByTestId('test')).toBeInTheDocument();
});
