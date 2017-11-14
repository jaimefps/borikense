function R_ComoEnPR(str) {
  return str.replace(/r(?=[^aeiour]|$)/g, 'l');
}
function S_ComoEnPR(str) {
  return str.replace(/s(?=[^aeiou]|$)/g, 'j');
}
const types = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'a'];

for (type of types) {
  const elements = document.getElementsByTagName(type);
  for ( el of elements ) {
    if (typeof el.innerHTML == 'string') {
      el.innerHTML = S_ComoEnPR( R_ComoEnPR(el.innerHTML) );
    }
  }
}
