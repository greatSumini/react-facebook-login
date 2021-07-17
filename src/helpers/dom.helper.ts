export const createScriptEle = (id: string, src: string) => {
  return new Promise((resolve) => {
    const element = document.getElementsByTagName('script')[0];
    const fjs = element as Element;

    // return if script already exists
    if (document.getElementById(id)) {
      return;
    }

    const js: HTMLScriptElement = document.createElement('script');
    js.id = id;
    js.src = src;
    js.onload = resolve;

    fjs.parentNode!.insertBefore(js, fjs);
  });
};
