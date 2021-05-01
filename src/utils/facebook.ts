export const loadFacebookSdk = (language: string) => {
  return new Promise((resolve) => {
    const id = 'facebook-jssdk';

    const element = document.getElementsByTagName('script')[0];
    const fjs = element as Element;
    if (document.getElementById(id)) {
      return;
    }

    const js: HTMLScriptElement = document.createElement('script');
    js.id = id;
    js.src = `https://connect.facebook.net/${language}/sdk.js`;
    js.onload = resolve;

    fjs.parentNode!.insertBefore(js, fjs);
  });
};
