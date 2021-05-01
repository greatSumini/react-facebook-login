import { ReactChild } from 'react';
import { LoginResponse } from './response';

export type InitParams = {
  /**
   * Your application ID.
   */
  appId: string;

  /**
   * Determines which versions of the Graph API and any API dialogs or plugins are invoked
   *
   * (available versions: https://developers.facebook.com/docs/graph-api/changelog)
   *
   * Default value is '9.0'
   */
  version?: string;

  /**
   * Determines whether a cookie is created for the session or not. If enabled, it can be accessed by server-side code.
   *
   * Default value is false
   */
  cookie?: boolean;

  /**
   * Determines whether a long-lived access token for the session can be saved in localStorage. This enables maintaining a user's logged in status when 3rd party cookies are blocked from being sent to Facebook domains.
   *
   * Default value is true
   */
  localStorage?: boolean;

  /**
   * Determines whether XFBML tags used by social plugins are parsed, and therefore whether the plugins are rendered or not.
   *
   * Default value is false
   */
  xfbml?: boolean;
};

export type DialogParams = {
  /**
   * same as appId
   */
  client_id: string;

  /**
   * The URL that you want to redirect the person logging in back to. This URL will capture the response from the Login Dialog. If you are using this in a webview within a desktop app, this must be set to https://www.facebook.com/connect/login_success.html. You can confirm that this URL is set for your app in the App Dashboard. Under Products in the App Dashboard's left side navigation menu, click Facebook Login, then click Settings. Verify the Valid OAuth redirect URIs in the Client OAuth Settings section.
   *
   * Default value is (window?.location.href || '/')
   */
  redirect_uri: string;

  /**
   * A string value created by your app to maintain state between the request and callback. This parameter should be used for preventing Cross-site Request Forgery and will be passed back to you, unchanged, in your redirect URI.
   *
   * Default value is 'facebookdirect'
   */
  state: string;

  /**
   * Determines whether the response data included when the redirect back to the app occurs is in URL parameters or fragments.
   *
   * This can be one of ('code', 'token', 'code%20token', 'grated_scopes')
   *
   * Default value is 'code'
   */
  response_type?: string;

  /**
   * Comma seperated list of permissions to request during login.
   *
   * (available permissions: https://developers.facebook.com/docs/permissions/reference)
   *
   * Default value is 'public_profile, email'
   */
  scope?: string;
};

export type LoginOptions = {
  /**
   * supports 3 values: rerequest, reauthenticate, reauthorize.
   *
   * Default value is ''
   */
  auth_type?: string;

  scope: string;

  /**
   * When true, the granted scopes will be returned in a comma-separated list in the grantedScopes field of the authResponse
   *
   * Default value is false
   */
  return_scopes?: boolean;
};

export type Props = Pick<InitParams, 'appId'> & {
  /**
   * Default value is 'en_US'
   */
  language?: string;

  /**
   * Comma seperated list of permissions to request during login.
   *
   * (available permissions: https://developers.facebook.com/docs/permissions/reference)
   *
   * Default value is 'public_profile, email'
   */
  scope?: string;

  /**
   * fields return by /me
   *
   * Default value is 'name,email,picture'
   */
  fields?: string;

  onSuccess: (res: LoginResponse['authResponse']) => void;

  onFail: (err: unknown) => void;

  onProfileSuccess?: (res: unknown) => void;

  /** Children Component @default "Login with Facebook" */
  children?: ReactChild;

  /**
   * Default value is false
   */
  isDisabled?: boolean;

  /**
   * if true, redirect to dialog instead using window.FB
   *
   * Defaultly detected via userAgent
   */
  isMobile?: boolean;

  /**
   * if true, use window.FB.login in mobile agent
   *
   * Default value is false
   */
  disableMobileRedirect?: boolean;

  initParams?: Omit<InitParams, 'appId'>;

  loginOptions?: Pick<LoginOptions, 'auth_type' | 'return_scopes'>;

  dialogParams?: Pick<DialogParams, 'redirect_uri' | 'response_type' | 'state'>;
};
