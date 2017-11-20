const Borikense = {
  R_ComoEnPR(str) {
    return str.replace(/r(?![raeiouáéíóú])/g, 'l');   
  },
  S_ComoEnPR(str) {
    return str.replace(/s(?![aeiouáéíóú])/g, 'j');
  },
  Ado_ComoEnPR (str) {
    return str.replace(/ado(?=[\s\.])/g, 'au')
  },
}

const htmlTypes = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'a'];

function applyAccent (str, accents) {
  let mem = str
  for (let regex in accents) {
    mem = accents[regex](mem)
  }
  return mem
}

function filterHTML () {
  for (type of htmlTypes) {
    const elements = document.getElementsByTagName(type);
    for (el of elements) {
      if (!el.innerHTML.match(/\<img/)) {
        el.innerHTML = applyAccent(el.innerHTML, Borikense)
      }
    }
  }
}

filterHTML();