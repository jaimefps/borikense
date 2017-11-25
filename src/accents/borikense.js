module.exports = {
  /**
   *  Parts of words:
   */
  r (str) {
    // if 'r' is not followed by vowel or 'r'
    return str.replace(/r(?![raeiouáéíóú])/g, 'l');   
  },

  s (str) {
    // if 's' is not followed by vowel
    return str.replace(/s(?![aeiouáéíóú])/g, 'j');
  },

  ado (str) {
    // if the word ends in 'ado'
    return str.replace(/ado(?=[\W]|$)/g, 'au');
  },

  ido (str) {
    // if the word ends in 'ido'
    return str.replace(/ido(?=[\W]|$)/g, 'ío');
  },

  /**
   *  Words and Phrases:
   */
  // para (str) {
  //   return str.replace(/\Wpara\W/, 'pa')
  // }


}