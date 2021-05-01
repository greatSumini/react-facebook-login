export const isObject = (obj: unknown): obj is Record<string, any> => {
  return Object.prototype.toString.call(obj) === '[object Object]';
};

/**
 * Encode object to url parameters
 *
 * @param      {Object} paramsObj The object needs to encode as url parameters
 * @return     {String} Encoded url parameters
 */
export const objectToParams = (params: unknown) =>
  isObject(params)
    ? '?' +
      Object.keys(params)
        .map((param) => `${param}=${encodeURIComponent(params[param])}`)
        .join('&')
    : null;
