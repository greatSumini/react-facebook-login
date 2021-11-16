# React Facebook Login

[![NPM version](https://img.shields.io/npm/v/@greatsumini/react-facebook-login)](https://www.npmjs.com/package/@greatsumini/react-facebook-login)
[![NPM downloads](https://img.shields.io/npm/dt/@greatsumini/react-facebook-login)](https://www.npmjs.com/package/@greatsumini/react-facebook-login)
[![NPM bundle size](https://img.shields.io/bundlephobia/min/@greatsumini/react-facebook-login)](https://www.npmjs.com/package/@greatsumini/react-facebook-login)
[![CI](https://img.shields.io/github/workflow/status/greatSumini/react-facebook-login/CI?label=CI)](https://github.com/greatSumini/react-facebook-login/actions/workflows/ci.yml)
[![CD](https://img.shields.io/github/workflow/status/greatSumini/react-facebook-login/CD?label=CD)](https://github.com/greatSumini/react-facebook-login/actions/workflows/cd.yml)
[![GitHub Stars](https://img.shields.io/github/stars/greatSumini/react-facebook-login?style=social)](https://github.com/greatSumini/react-facebook-login)

> Well-Typed React Component for Facebook Login

[English Guide](https://sumini.dev/react-facebook-login), [한글 가이드](https://sumini.dev/guide/016-react-facebook-login/)<br/>
This project aims to improve [react-facebook-login](https://github.com/keppelen/react-facebook-login).

- 💙 Typescript support
- 📦 6kb mini library
- 👫 All browsers supported
- 🏃 Currently maintaining

## 1. Getting Started

```shell
npm i --save @greatsumini/react-facebook-login
# or
yarn add @greatsumini/react-facebook-login
```

## 2. Usage

Check all usages [here](https://sumini.dev/react-facebook-login/?path=/story/usages--default)

```tsx
import FacebookLogin from '@greatsumini/react-facebook-login';

<FacebookLogin
  appId="1088597931155576"
  onSuccess={(response) => {
    console.log('Login Success!', response);
  }}
  onFail={(error) => {
    console.log('Login Failed!', error);
  }}
  onProfileSuccess={(response) => {
    console.log('Get Profile Success!', response);
  }}
/>;
```

## 3. Props

Check all available props [here](https://sumini.dev/react-facebook-login/?path=/story/api-references-props--page)!

## 4. FacebookLoginClient

You can manually call facebook sdk related functions with FacebookLoginClient

```tsx
import { FacebookLoginClient } from '@greatsumini/react-facebook-login';

FacebookLoginClient.getLoginStatus((res) => {
  console.log(res.status);
});

FacebookLoginClient.login((res) => {
  console.log(res);
});

FacebookLoginClient.getProfile((res) => {
  console.log(res.id, res.name, res.email);
});

FacebookLoginClient.logout(() => {
  console.log('logout completed!');
});
```

## 5. Author

- [Sumin Choi](https://sumini.dev)

## 6. Links

- [Guide](https://sumini.dev/react-facebook-login)
- [NPM](https://www.npmjs.com/package/@greatsumini/react-facebook-login)
- [GitHub](https://github.com/greatSumini/react-facebook-login)
- [(Official) Facebook Login Guide](https://developers.facebook.com/docs/facebook-login/web)
