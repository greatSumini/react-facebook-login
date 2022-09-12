import { CSSProperties, ReactElement, ReactNode, ReactNodeArray } from 'react';
import { FB } from './fb.type';

import { LoginResponse } from './response.type';

export type InitParams = {
  /** Your application ID. */
  appId: string;

  /** Determines which versions of the Graph API and any API dialogs or plugins are invoked
   *
   * (available versions: https://developers.facebook.com/docs/graph-api/changelog)
   * @default 'v9.0' */
  version?:
    | 'v7.0'
    | 'v8.0'
    | 'v9.0'
    | 'v10.0'
    | 'v11.0'
    | 'v12.0'
    | 'v13.0'
    | 'v14.0';

  /** Determines whether a cookie is created for the session or not. If enabled, it can be accessed by server-side code.
   * @default false */
  cookie?: boolean;

  /** Determines whether a long-lived access token for the session can be saved in localStorage. This enables maintaining a user's logged in status when 3rd party cookies are blocked from being sent to Facebook domains.
   * @default true */
  localStorage?: boolean;

  /** Determines whether XFBML tags used by social plugins are parsed, and therefore whether the plugins are rendered or not.
   * @default false */
  xfbml?: boolean;

  /** Frictionless Requests are available to games on Facebook.com or on mobile web using the JavaScript SDK. This parameter determines whether they are enabled.
   * @default false */
  frictionlessRequests?: boolean;

  /** This specifies a function that is called whenever it is necessary to hide Adobe Flash objects on a page. This is used when .api() requests are made, as Flash objects will always have a higher z-index than any other DOM element.
   *
   * @link https://developers.facebook.com/docs/games/gamesonfacebook/optimizing#handlingpopups */
  hideFlashCallback?: () => void;
};

export type DialogParams = {
  /** same as appId */
  client_id: string;

  /** The URL that you want to redirect the person logging in back to. This URL will capture the response from the Login Dialog. If you are using this in a webview within a desktop app, this must be set to https://www.facebook.com/connect/login_success.html. You can confirm that this URL is set for your app in the App Dashboard. Under Products in the App Dashboard's left side navigation menu, click Facebook Login, then click Settings. Verify the Valid OAuth redirect URIs in the Client OAuth Settings section.
   * @default (typeof window !== 'undefined' ? location.origin + location.pathname : '/') */
  redirect_uri: string;

  /** A string value created by your app to maintain state between the request and callback. This parameter should be used for preventing Cross-site Request Forgery and will be passed back to you, unchanged, in your redirect URI.
   * @default 'facebookdirect' */
  state: string;

  /** Determines whether the response data included when the redirect back to the app occurs is in URL parameters or fragments.
   *
   * This can be one of ('code', 'token', 'code%20token', 'grated_scopes')
   * @default 'code' */
  response_type?: string;

  /** Comma seperated list of permissions to request during login.
   *
   * (available permissions: https://developers.facebook.com/docs/permissions/reference)
   * @default 'public_profile, email' */
  scope?: string;
};

export type LoginOptions = {
  /** supports 3 values: rerequest, reauthenticate, reauthorize.
   *
   * Use 'rerequest' when re-requesting a declined permission. */
  auth_type?: 'rerequest' | 'reauthenticate' | 'reauthorize';

  scope: string;

  /** When true, the granted scopes will be returned in a comma-separated list in the grantedScopes field of the authResponse
   * @default false */
  return_scopes?: boolean;

  /** When true, prompt the user to grant permission for one or more Pages */
  enable_profile_selector?: boolean;

  /** Comma separated list of IDs to display in the profile selector */
  profile_selector_ids?: string;

  /** The auth_nonce parameter is intended to be a completely arbitrary alphanumeric code that your app generates. The process of generation and format of this code is entirely up to you. For example, a hashed version of a timestamp and a secret string may be sufficient, as long as it's completely unique to each Login attempt. This value enables your app to determine whether a user has been re-authenticated. */
  auth_nonce?: string | (() => string);
};

export type FacebookLoginProps = Pick<InitParams, 'appId'> & {
  /** @default 'en_US' */
  language?: string;

  /** Comma seperated list of permissions to request during login.
   *
   * (available permissions: https://developers.facebook.com/docs/permissions/reference)
   * @default 'public_profile, email' */
  scope?: string;

  /** fields return by /me (profile)
   * @default 'name,email,picture' */
  fields?: string;

  onSuccess?: (res: LoginResponse['authResponse']) => void;

  onFail?: (err: { status: string }) => void;

  onProfileSuccess?: (res: unknown) => void;

  className?: string;

  style?: CSSProperties;

  /** Children Component
   * @default "Login with Facebook" */
  children?: ReactNode | ReactNodeArray;

  /** render custom component */
  render?: (props: {
    onClick?: () => void;
    logout?: FB['logout'];
  }) => ReactElement;

  /** if true, request login on mount
   * @default false */
  autoLoad?: boolean;

  /** if true, use redirect instead of window.FB.login
   * @default false */
  useRedirect?: boolean;

  /** if true, append 'xfbml.customerchat' to sdk url (ex: 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js')
   * @default false */
  useCustomerChat?: boolean;

  initParams?: Omit<InitParams, 'appId'>;

  loginOptions?: Omit<LoginOptions, 'scope'>;

  dialogParams?: Pick<DialogParams, 'redirect_uri' | 'response_type' | 'state'>;
};
