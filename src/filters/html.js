import borikense from '../accents/borikense';

function applyAccent (str, accent) {
  let mem = str;
  for (let quirk in accent) {
    mem = accent[quirk].method(mem);
  }
  return mem;
}

function filterHTML (accentifier, accent) {
  const htmlTypes = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'a'];
  for (type of htmlTypes) {
    const elements = document.getElementsByTagName(type);
    for (el of elements) {
      if (!el.innerHTML.match(/\<img/)) {
        el.innerHTML = accentifier(el.innerHTML, accent);
      }
    }
  }
}

// TODO : make accent dynamic
filterHTML(applyAccent, borikense);