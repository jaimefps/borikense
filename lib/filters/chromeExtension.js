import apply from './_apply';
import borikense from '../accents/borikense';

function filterHTML (appplier, accent) {
  const htmlTypes = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'a'];
  for (type of htmlTypes) {
    const elements = document.getElementsByTagName(type);
    for (el of elements) {
      if (!el.innerHTML.match(/\<img/)) {
        el.innerHTML = appplier(el.innerHTML, accent);
      }
    }
  }
}

// TODO : make accent dynamic
filterHTML(apply, borikense);