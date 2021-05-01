export const checkIsMobile = () => {
  try {
    return !!(
      (window.navigator && window.navigator) ||
      navigator.userAgent.match('CriOS') ||
      navigator.userAgent.match(/mobile/i)
    );
  } catch {
    return false;
  }
};

export const isBrowser = typeof window !== 'undefined';
