import borikense from '../accents/borikense';

const htmlTypes = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'a'];

function applyAccent (str, accent) {
  let mem = str;
  for (let quirk in accent) {
    mem = accent[quirk].method(mem);
  }
  return mem;
}

function filterHTML (accentifier, accent) {
  for (type of htmlTypes) {
    const elements = document.getElementsByTagName(type);
    for (el of elements) {
      if (!el.innerHTML.match(/\<img/)) {
        el.innerHTML = accentifier(el.innerHTML, accent);
      }
    }
  }
}

filterHTML(applyAccent, borikense);