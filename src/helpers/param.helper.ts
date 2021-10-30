export const isObject = (
  obj: unknown
): obj is Record<string, string | number | boolean> => {
  return Object.prototype.toString.call(obj) === '[object Object]';
};

/** Encode object to url parameters */
export const objectToParams = (obj: unknown): string => {
  if (!isObject(obj) || Object.keys(obj).length === 0) {
    return '';
  }

  return (
    '?' +
    Object.keys(obj)
      .map((key) => `${key}=${encodeURIComponent(obj[key])}`)
      .join('&')
  );
};

/** Decode params to object */
export const paramsToObject = (params: string): Record<string, string> =>
  params
    ?.replace(/^\?/, '')
    .split('&')
    .reduce((acc, chunk) => {
      if (!chunk) {
        return acc;
      }

      const [key, value] = chunk.split('=');
      return { ...acc, [key]: decodeURIComponent(value) };
    }, {}) || {};
