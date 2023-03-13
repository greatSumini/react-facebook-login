<!-- markdownlint-disable MD024 MD034 MD033 -->

# Release Notes

## 3.3.0

### Core

- enhance(): update allowed Facebook API versions

## 3.2.0

### Core

- feat(): add frictionlessRequests,hideFlashCallback to InitParams

- feat(): add FacebookLoginClient.clear

- enhance(): update FacebookLoginClient.init

  call window.FB.init directly (not use window.fbAsyncInit

- docs(stories): add WithMultipleApp story

## 3.1.0

### Core

- [feat(): add available versions](https://github.com/greatSumini/react-facebook-login/commit/8a486973e67fea94d4aea5f52ccd8c947eff2af3)

  'v11.0', 'v12.0', 'v13.0'
  resolves https://github.com/greatSumini/react-facebook-login/issues/190
  Special Thanks to @jerryeechan

- [enhance(): remove deprecated versions](https://github.com/greatSumini/react-facebook-login/commit/374189366e6f783e59716678d7760e442c6c602e)

  'v3.2', 'v3.3', 'v4.0', 'v5.0', 'v6.0'

- [feat(): add enable_profile_selector,profile_selector_ids to LoginOptions](https://github.com/greatSumini/react-facebook-login/commit/fc8e1a1d5850fdc77f3a5b72edbfc0a3c281fd09)
- [enhance(): add auth_nonce to FacebookLoginProps.loginOptions](https://github.com/greatSumini/react-facebook-login/commit/3882448596b84bddc538aa78bef83b1283e7bc3d)
- [feat(): allow passing funciton for LoginOptions.auth_nonce](https://github.com/greatSumini/react-facebook-login/commit/177ed880c3d9cf962f2a03a85038d37a893f0ff6)

  resolves https://github.com/greatSumini/react-facebook-login/issues/56
  Special Thanks to @Hamaad-Siddiqui

- update dependencies (by @renovate-bot)

### Misc

- [enhance(): update LoginOptions.auth_type type declaration](https://github.com/greatSumini/react-facebook-login/commit/ad9bbdd4c7784822ad67abf770c4b90f2482de80)

  string -> string literal

## 3.0.0

### Core

- fix: 🐛 exclude onSuccess,onFail,onProfileSuccess from render props
- update dependencies (by @renovate-bot)

### Misc

- fix: 🐛 fix .storybook/main.js stories glob
- chore: 🙈 add renovate.json to .npmignore

## 2.1.5

### Core

- fix: 🔨 update prepublish script

  add missing build command
  Special thanks to @john-dupuy

## 2.1.4

### Core

- fix: 🐛 add decodeURIComponent to paramsToObject helper
- update dependencies (by @renovate-bot)

### Misc

- update README
- add storybook mdx files

## 2.1.3

### Core

- enhance(client): update FacebookLoginClient.isRedirected verify logic

  fix #4
  Special thanks to @tabishmahfuz1

## 2.1.2

### Core

- feat: :sparkles: add useCustomerChant prop

  for who use Customer Chat plugin with Facebook login.
  if true, append 'xfbml.customerchat' to sdk url (ex: 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js')
  With this URL, you will still be able to access all of the Facebook Javascript SDK plus all features of the Customer Chat SDK.
  (ref: https://developers.facebook.com/docs/messenger-platform/discovery/customer-chat-plugin/sdk/)

  resolve #55
  Special thanks to @akshatamohanty

### Misc

- chore: 🔧 update .npmrc
- chore: 🔥 remove format script
- test: 🔧 set jest.config.testEnvironment as 'jsdom'
- update dependencies (by @renovate-bot)

## 2.1.1

- feat: :label: add LoginOptions.auth_nonce
- feat(client): :sparkles: add FacebookLoginClient.getFB
- enhance(client): update getLoginStatus to call callback when window.FB is not found
- enhance(client): update logout to call callback when loginStatus is not "connected"

## 2.1.0

- rename FacebookClient -> FacebookLoginClient

## 2.0.0

- add FacebookClient

  you can use facebook sdk functions diretly with FacebookClient <br>
  supports: getLoginStatus, getProfile, login, logout

- refactor directory structure (6fc3f07)

  /utils -> /helpers

## 1.3.5

- upgrade dependencies (322bec3)

## 1.3.4

- ignore tsconfig.json (791db2f)

## 1.3.3

- update FacebookLoginProps.children type (9835bac)

## 1.3.2

- add className to FacebookLoginProps (b8f7b73)

## 1.3.1

- add korean guide to README.md (17e4e2c)

## 1.3.0

- remove deprecated props (isMobile, disableMobileRedirect) (d6897a2)
- rename Props to FacebookLoginProps (555c5c2)
- update README.md Usage section (43c3835)

## 1.2.2

- add CHANGELOG.md
- fix LoginStatus enum declare error
- add Props section to README.md
- add docs/params.md
- add tests (FacebookLogin, objectToParams, paramsToObject)

## 1.2.1

- rename usePopup prop to useRedirect (d06e38d)

## 1.2.0

- fix inifinite redirect at login (5e682c7)
- update tsconfig rules (0fa550f)
