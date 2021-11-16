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

### 3. Params, Options

Check all available params/options in [params.md](https://sumini.dev/react-facebook-login/?path=/story/api-references-params--page)

```tsx
<FacebookLogin
  appId="1088597931155576"
  useRedirect
  initParams={{
    version: 'v10.0',
    xfbml: true,
  }}
  dialogParams={{
    response_type: 'token',
  }}
  loginOptions={{
    return_scopes: true,
  }}
/>
```

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

## 5. Props

| Property         | Description                                                                                                                       | Type                        | Default                                                                                                 |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------- | ------------------------------------------------------------------------------------------------------- |
| appId \*         | Your application ID.                                                                                                              | string                      | -                                                                                                       |
| language         | API version                                                                                                                       | string                      | 'en_US'                                                                                                 |
| scope            | Comma seperated list of permissions for login.                                                                                    | string                      | 'public_profile, email'                                                                                 |
| fields           | fields return by /me (profile)                                                                                                    | string                      | 'name,email,picture'                                                                                    |
| onSuccess        |                                                                                                                                   | function                    | -                                                                                                       |
| onFail           |                                                                                                                                   | function                    | -                                                                                                       |
| onProfileSuccess |                                                                                                                                   | function                    | -                                                                                                       |
| style            | css properties for login button                                                                                                   | CSSProperties               | -                                                                                                       |
| children         | Children Component                                                                                                                | ReactNode \| ReactNodeArray | "Login with Facebook"                                                                                   |
| render           | Callback which render custom component                                                                                            | function                    | -                                                                                                       |
| autoLoad         | if true, request login on mount                                                                                                   | boolean                     | false                                                                                                   |
| useRedirect      | if true, use redirect instead of window.FB.login                                                                                  | boolean                     | false                                                                                                   |
| useCustomChat    | if true, append 'xfbml.customerchat' to sdk url                                                                                   | boolean                     | false                                                                                                   |
| initParams       | params for FB.init ([docs](https://sumini.dev/react-facebook-login/?path=/story/api-references-params--page#1-initparams))        | InitParams                  | [docs](https://github.com/greatSumini/react-facebook-login/blob/master/docs/params.md#1-initparams)     |
| dialogParams     | params for login dialog ([docs](https://sumini.dev/react-facebook-login/?path=/story/api-references-params--page#2-dialogparams)) | DialogParams                | [docs](https://sumini.dev/react-facebook-login/?path=/story/api-references-params--page#2-dialogparams) |
| loginOptions     | options for FB.login ([docs](https://sumini.dev/react-facebook-login/?path=/story/api-references-params--page#3-loginoptions))    | LoginOptions                | [docs]((https://sumini.dev/react-facebook-login/?path=/story/api-references-params--page#1-initparams)  |

## 6. Author

- [Sumin Choi](https://sumini.dev)

## 7. Links

- [Guide](https://sumini.dev/react-facebook-login)
- [NPM](https://www.npmjs.com/package/@greatsumini/react-facebook-login)
- [GitHub](https://github.com/greatSumini/react-facebook-login)
- [(Official) Facebook Login Guide](https://developers.facebook.com/docs/facebook-login/web)
