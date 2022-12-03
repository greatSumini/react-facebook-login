export enum LoginStatus {
  Connected = 'connected',
  NotAuthorized = 'not_authorized',
  Unknown = 'unknown',
}

export type LoginResponse = {
  status: LoginStatus;
  authResponse?: AuthResponse;
};

export type AuthResponse = {
  /** An access token for the person using the webpage. */
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

  /** The ID of the person using your webpage. */
  userID: string;
};

export type MeResponse = {};
