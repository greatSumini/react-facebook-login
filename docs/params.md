# React Facebook Login Params

## 1. InitParams

| Property     | Description                                                                                                  | Type    | Default |
| ------------ | ------------------------------------------------------------------------------------------------------------ | ------- | ------- |
| version      | API version ([available versions](https://developers.facebook.com/docs/graph-api/changelog))                 | string  | 'v9.0'  |
| cookie       | whether a cookie is created for the session or not.                                                          | boolean | false   |
| localStorage | whether a long-lived access token for the session can be saved in localStorage.                              | boolean | true    |
| xfbml        | whether XFBML tags used by social plugins are parsed, and therefore whether the plugins are rendered or not. | boolean | false   |

## 2. DialogParams

| Property      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Type   | Default                                                                     |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | --------------------------------------------------------------------------- |
| redirect_uri  | The URL that you want to redirect the person logging in back to. This URL will capture the response from the Login Dialog. If you are using this in a webview within a desktop app, this must be set to https://www.facebook.com/connect/login_success.html. You can confirm that this URL is set for your app in the App Dashboard. Under Products in the App Dashboard's left side navigation menu, click Facebook Login, then click Settings. Verify the Valid OAuth redirect URIs in the Client OAuth Settings section. | string | (typeof window !== 'undefined' ? location.origin + location.pathname : '/') |
| state         | A string value created by your app to maintain state between the request and callback. This parameter should be used for preventing Cross-site Request Forgery and will be passed back to you, unchanged, in your redirect URI.                                                                                                                                                                                                                                                                                             | string | 'facebookdirect'                                                            |
| response_type | Determines whether the response data included when the redirect back to the app occurs is in URL parameters or fragments. This can be one of ('code', 'token', 'code%20token', 'grated_scopes')                                                                                                                                                                                                                                                                                                                             | string | 'code'                                                                      |

## 3. LoginOptions

| Property      | Description                                                                                                             | Type    | Default     |
| ------------- | ----------------------------------------------------------------------------------------------------------------------- | ------- | ----------- |
| auth_type     | supports 3 values: rerequest, reauthenticate, reauthorize.                                                              | string  | ''          |
| scope         | Comma seperated list of permissions for login.                                                                          | string  | props.scope |
| return_scopes | When true, the granted scopes will be returned in a comma-separated list in the grantedScopes field of the authResponse | boolean | false       |
| auth_nonce    | This value enables your app to determine whether a user has been re-authenticated.                                      | string  | -           |
| ignoreSdkError    | When true, errors catched from window.FB.login() will be ignored.                                      | boolean  | -           |
