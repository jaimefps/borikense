/**
 * how puertorricans substitute 'r' for 'l' in some cases:
 */
function R_ComoEnPR(str) {
  return str.replace(/r(?=[^aeiouráéíóú]|$)/g, 'l');   
}

/**
 * how puertorricans substitute 's' for an aspirated sound:
 */
function S_ComoEnPR(str) {
  return str.replace(/s(?=[^aeiouáéíóú]|$)/g, 'j');
}

const types = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'a'];

for (type of types) {
  const elements = document.getElementsByTagName(type);
  for (el of elements) {
    if (!el.innerHTML.match(/\<img/)) {
      el.innerHTML = S_ComoEnPR(R_ComoEnPR(el.innerHTML));
    }
  }
}
