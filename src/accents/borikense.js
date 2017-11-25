/**
 * TODO
 * 1. add start of string checks
 * 2. add end of string checks
 * 3. play with words and phrases.
 * 
 * "exceptions" need to be built into the system:
 * 
 * Quick and dirty solution:
 * Make a first sweep of the text and create a list of "exceptions".
 * Replacements don't occur when the exception is found. (wrapper function for "replace"" method)...
 */

module.exports = {

  r: {
    method (str) {
      // if 'r' is not followed by vowel or 'r'
      return str.replace(/r(?![raeiouáéíóú])/g, 'l');   
    },
    cases: {
      replace: [
        // 'r' in the middle of the word:
        { og:'puerto', trans:'puelto' },
        { og:'partido', trans:'paltido' },
        // phrases:
        { og: '123asd partido 123asd', trans: '123asd paltido 123asd'}
      ],
      ignore: [
        // 'r' between vowels:
        'pero',
        'para',
        // 'rr':
        'perro',
        'barra',
        // phrases:
        '123asd barra 123asd'
      ],
      exceptions: []
    },
  },

  s: {
    method (str) {
      // if 's' is not followed by vowel
      return str.replace(/s(?![aeiouáéíóú])/g, 'j');
    },
    cases: {
      replace: [
        // 's' in the middle of the word:
        { og:'sastre', trans:'sajtre' },
        { og:'bastón', trans:'bajtón' },
        // 's' at the end of the word:
        { og:'vasos', trans:'vasoj' },
        { og:'niñas', trans:'niñaj' },
      ],
      ignore: [
        // 's' between vowels:
        'pesa',
        'beso',
      ],
      exceptions: []
    },
  },

  ado: {
    method (str) {
      // if the word ends in 'ado'
      return str.replace(/ado(?=[\W]|$)/g, 'au');
    },
    cases: {
      replace: [
        // ends in 'ado':
        { og:'cansado', trans:'cansau' },
        { og:'trepado', trans:'trepau' },
      ],
      ignore: [
      // 'ado' is not end of string:
      'adoquín',
      'adorar'
      ],
      exceptions: []  
    },
  },

  ido: {
    method (str) {
      // if the word ends in 'ido'
      return str.replace(/\Bido(?=[\W]|$)/g, 'ío');
    },
    cases: {
      replace: [
        // ends in 'ido':
        { og:'partido', trans:'partío' },
        { og:'molido', trans:'molío' }
      ],
      ignore: [
        'ido', // TODO : test not passed for this case!
        'caído',
      ],
      exceptions: []  
    }

  }

  // para (str) {
  //   return str.replace(/\Wpara\W/, 'pa')
  // },

  // diptongos, etc.
}