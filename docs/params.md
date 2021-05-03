# React Facebook Login Params

## 1. InitParams

| Property     | Description                                                                                                  | Type    | Default |
| ------------ | ------------------------------------------------------------------------------------------------------------ | ------- | ------- |
| version      | API version ([available versions](https://developers.facebook.com/docs/graph-api/changelog))                 | string  | 'v9.0'  |
| cookie       | whether a cookie is created for the session or not.                                                          | boolean | false   |
| localStorage | whether a long-lived access token for the session can be saved in localStorage.                              | boolean | true    |
| xfbml        | whether XFBML tags used by social plugins are parsed, and therefore whether the plugins are rendered or not. | boolean | false   |
