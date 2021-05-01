# React Facebook Login

[![NPM version](https://img.shields.io/npm/v/@greatsumini/react-facebook-login)](https://www.npmjs.com/package/@greatsumini/react-facebook-login)
[![CI](https://img.shields.io/github/workflow/status/greatSumini/react-facebook-login/CI?label=CI)](https://github.com/greatSumini/react-facebook-login/actions/workflows/ci.yml)
[![CD](https://img.shields.io/github/workflow/status/greatSumini/react-facebook-login/CD?label=CD)](https://github.com/greatSumini/react-facebook-login/actions/workflows/cd.yml)
[![GitHub Stars](https://img.shields.io/github/stars/greatSumini/react-facebook-login?style=social)](https://github.com/greatSumini/react-facebook-login)

> An Well-Typed React Component for Facebook Login

[Storybook](https://sumini.dev/react-facebook-login)

## Getting Started

```shell
npm i --save @greatsumini/react-facebook-login
# or
yarn add @greatsumini/react-facebook-login
```

## Usage

```tsx
import FacebookLogin from '@greatsumini/react-facebook-login';

...

    <FacebookLogin
        appId="1088597931155576"
        render={renderProps => (
            <button onClick={renderProps.onClick}>This is my custom FB button</button>
        )}
    />
```
