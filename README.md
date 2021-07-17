# React Facebook Login

[![NPM version](https://img.shields.io/npm/v/@greatsumini/react-facebook-login)](https://www.npmjs.com/package/@greatsumini/react-facebook-login)
[![NPM downloads](https://img.shields.io/npm/dt/@greatsumini/react-facebook-login)](https://www.npmjs.com/package/@greatsumini/react-facebook-login)
[![NPM bundle size](https://img.shields.io/bundlephobia/min/@greatsumini/react-facebook-login)](https://www.npmjs.com/package/@greatsumini/react-facebook-login)
[![CI](https://img.shields.io/github/workflow/status/greatSumini/react-facebook-login/CI?label=CI)](https://github.com/greatSumini/react-facebook-login/actions/workflows/ci.yml)
[![CD](https://img.shields.io/github/workflow/status/greatSumini/react-facebook-login/CD?label=CD)](https://github.com/greatSumini/react-facebook-login/actions/workflows/cd.yml)
[![GitHub Stars](https://img.shields.io/github/stars/greatSumini/react-facebook-login?style=social)](https://github.com/greatSumini/react-facebook-login)

> Well-Typed React Component for Facebook Login

[한글 가이드](https://sumini.dev/guide/016-react-facebook-login/), [Live Demo](https://sumini.dev/react-facebook-login)<br>
This project aims to improve [react-facebook-login](https://github.com/keppelen/react-facebook-login).

- 💙 Typescript support
- 📦 5kb mini library
- 👫 All browsers supported
- 🏃 Currently maintaining

## 1. Getting Started

```shell
npm i --save @greatsumini/react-facebook-login
# or
yarn add @greatsumini/react-facebook-login
```

## 2. Usage

### 2.1. import

```tsx
import FacebookLogin from '@greatsumini/react-facebook-login';
```

### 2.2. Default

```tsx
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
/>
```

### 2.3. Custom Style

```tsx
<FacebookLogin
  appId="1088597931155576"
  style={{
    backgroundColor: '#4267b2',
    color: '#fff',
    fontSize: '16px',
    padding: '12px 24px',
    border: 'none',
    borderRadius: '4px',
  }}
/>
```

### 2.3. Custom Render Function

```tsx
<FacebookLogin
  appId="1088597931155576"
  render={({ onSuccess, onProfileSuccess, onFail, onClick }) => (
    <CustonComponent
      onSuccess={onSuccess}
      onProfileSuccess={onProfileSuccess}
      onFail={onFail}
      onClick={onClick}
    />
  )}
/>
```

### 2.3. Custom Params, Options

Check all available options in [params.md](https://github.com/greatSumini/react-facebook-login/blob/master/docs/params.md)

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

## 3. Props

| Property         | Description                                                                                                                     | Type                        | Default                                                                                             |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------- | --------------------------- | --------------------------------------------------------------------------------------------------- |
| appId \*         | Your application ID.                                                                                                            | string                      | -                                                                                                   |
| language         | API version                                                                                                                     | string                      | 'en_US'                                                                                             |
| scope            | Comma seperated list of permissions for login.                                                                                  | string                      | 'public_profile, email'                                                                             |
| fields           | fields return by /me (profile)                                                                                                  | string                      | 'name,email,picture'                                                                                |
| onSuccess        |                                                                                                                                 | function                    | -                                                                                                   |
| onFail           |                                                                                                                                 | function                    | -                                                                                                   |
| onProfileSuccess |                                                                                                                                 | function                    | -                                                                                                   |
| style            | css properties for login button                                                                                                 | CSSProperties               | -                                                                                                   |
| children         | Children Component                                                                                                              | ReactNode \| ReactNodeArray | "Login with Facebook"                                                                               |
| render           | Callback which render custom component                                                                                          | function                    | -                                                                                                   |
| autoLoad         | if true, request login on mount                                                                                                 | boolean                     | false                                                                                               |
| useRedirect      | if true, use redirect instead of window.FB.login                                                                                | boolean                     | false                                                                                               |
| initParams       | params for FB.init ([docs](https://github.com/greatSumini/react-facebook-login/blob/master/docs/params.md#1-initparams))        | InitParams                  | [docs](https://github.com/greatSumini/react-facebook-login/blob/master/docs/params.md#1-initparams) |
| dialogParams     | params for login dialog ([docs](https://github.com/greatSumini/react-facebook-login/blob/master/docs/params.md#2-dialogparams)) | DialogParams                | [docs](https://github.com/greatSumini/react-facebook-login/blob/master/docs/params.md#1-initparams) |
| loginOptions     | options for FB.login ([docs](https://github.com/greatSumini/react-facebook-login/blob/master/docs/params.md#3-loginoptions))    | LoginOptions                | [docs](https://github.com/greatSumini/react-facebook-login/blob/master/docs/params.md#1-initparams) |

## Author

- [Sumin Choi](https://sumini.dev)

## 4. Links

- [NPM](https://www.npmjs.com/package/@greatsumini/react-facebook-login)
- [GitHub](https://github.com/greatSumini/react-facebook-login)
- [Storybook](https://sumini.dev/react-facebook-login)
- [(Official) Facebook Login Guide](https://developers.facebook.com/docs/facebook-login/web)
