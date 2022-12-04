export enum LoginStatus {
  Connected = 'connected',
  NotAuthorized = 'not_authorized',
  Unknown = 'unknown',
}

export type LoginResponse = {
  status: LoginStatus;
  authResponse?: SuccessResponse;
};

export type SuccessResponse = {
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

export type FailResponse = { 
  status: 'loginCancelled' | 'facebookNotLoaded' 
}

/**
 * Response from /me endpoint. These values will vary depending on provided fields param.
 * 
 * @see https://developers.facebook.com/docs/graph-api/reference/user/
 */
export type ProfileSuccessResponse = {
  id?: string,
  email?: string,
  name?: string,
  picture?: {
    data: {
      height: number,
      width: string,
      is_silhouette: boolean,
      url: string,
    }
  }
};
