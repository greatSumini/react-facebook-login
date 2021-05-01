export type FacebookInitParams = {
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

export type FacebookLoginProps = FacebookInitParams & {
  /**
   * Default value is 'en_US'
   */
  language?: string;

  /**
   * Optional key, supports 3 values: rerequest, reauthenticate, reauthorize. Use rerequest when re-requesting a declined permission.
   *
   * Default value is ''
   */
  authType?: string;

  /**
   * Comma seperated list of permissions to request during login.
   *
   * (available permissions: https://developers.facebook.com/docs/permissions/reference)
   *
   * Default value is 'public_profile, email'
   */
  scope?: string;

  /**
   * if true, redirect instead using window.FB
   *
   * Defaultly detected via userAgent
   */
  isMobile?: boolean;

  /**
   * The URL that you want to redirect the person logging in back to. This URL will capture the response from the Login Dialog. If you are using this in a webview within a desktop app, this must be set to https://www.facebook.com/connect/login_success.html. You can confirm that this URL is set for your app in the App Dashboard. Under Products in the App Dashboard's left side navigation menu, click Facebook Login, then click Settings. Verify the Valid OAuth redirect URIs in the Client OAuth Settings section.
   *
   * Default value is (window?.location.href || '/')
   */
  redirectUri?: string;

  /**
   * A string value created by your app to maintain state between the request and callback. This parameter should be used for preventing Cross-site Request Forgery and will be passed back to you, unchanged, in your redirect URI.
   *
   * Default value is 'facebookdirect'
   */
  state?: string;

  /**
   * Determines whether the response data included when the redirect back to the app occurs is in URL parameters or fragments.
   *
   * This can be one of ('code', 'token', 'code%20token', 'grated_scopes')
   *
   * Default value is 'code'
   */
  responseType?: string;

  /**
   * Default value is false
   */
  isDisabled?: boolean;
};

export type FacebookLoginStatusResponse = {
  status: 'connected' | 'not_authorized' | 'unknown';
  authResponse: {
    /**
     * An access token for the person using the webpage.
     */
    accessToken: string;

    /**
     * A UNIX time stamp when the token expires. Once the token expires, the person will need to login again.
     */
    expiresIn: string;

    /**
     * The amount of time before the login expires, in seconds, and the person will need to login again.
     */
    reauthorize_required_in: string;

    /**
     * A signed parameter that contains information about the person using your webpage.
     */
    signedRequest: string;

    /**
     * The ID of the person using your webpage.
     */
    userID: string;
  };
};

export type FacebookLoginDialogParams = {
  client_id: string;
  redirect_uri: string;
  state: string;
  response_type?: string;
  scope?: string;
};
