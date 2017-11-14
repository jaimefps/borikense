/**
 * Relgas de intercambiar "R" por "L":
 * 
 * 1- Si la "R" es la última letra de la palabra:
    * Ejemplos:
      * jugar = jugal,
      * bailar = bailal,
      * exprimir = ejprimil,
      * todos los verbos en forma de infinitivo...
 *
 * 2 - Si la "R" tiene una vocal antes y una consonante después (sin contar "RR"):
    * Ejemplos:
      * apartamento = apaltamento,
      * cerveza = celveza,
      * conversación = convelsación,
      * invierno = invielno,
      * puerta = puelta,
*/
function R_ComoEnPR(str) {
  return str.replace(/r(?=[^aeiour]|$)/g, 'l');
}

/**
 * Reglas de intercambiar "S" por aspiración (o por "J"):
 * 
 * ...
 */
function S_ComoEnPR(str) {
  return str.replace(/s(?=[^aeiou]|$)/g, 'j');
}
const types = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'a'];

for (type of types) {
  const elements = document.getElementsByTagName(type);
  console.log('test', elements)
  for ( el of elements ) {
    if (!el.innerHTML.match(/\<img/)) {
      el.innerHTML = S_ComoEnPR( R_ComoEnPR(el.innerHTML) );
    }
  }
}
