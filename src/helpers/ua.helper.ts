export const isFacebookApp = () => {
  if (typeof window === 'undefined') {
    return false;
  }

  const ua = navigator.userAgent || navigator.vendor || (window as any).opera;
  return (
    ua.indexOf('FBAN') > -1 ||
    ua.indexOf('FBAV') > -1 ||
    ua.indexOf('Instagram') > -1
  );
};
