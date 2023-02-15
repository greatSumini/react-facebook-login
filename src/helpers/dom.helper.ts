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

    if (fjs) {
      fjs.parentNode?.insertBefore(js, fjs);
    } else {
      const children = document.body.childNodes;
      document.body.insertBefore(js, children.item(children.length - 1));
    }
  });
};
