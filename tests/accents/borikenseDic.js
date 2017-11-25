/**
 * "Exeptions" need to be built into the system:
 * 
 * Quick and dirty solution:
 * Make a first sweep of the text and create a list of "exeptions".
 * Replacements don't occur when the exeption is found. (wrapper function for "replace"" method)...
 */
module.exports = {

  s: {
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
    exeptions: []
  },

  r: {
    replace: [
      // 'r' in the middle of the word:
      { og:'puerto', trans:'puelto' },
      { og:'partido', trans:'paltido' }
    ],
    ignore: [
      // 'r' between vowels:
      'pero',
      'para',
      // 'rr':
      'perro',
      'barra'
    ],
    exeptions: []
  },

  ado: {
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
    exeptions: []  
  },

  ido : {
    replace: [
      // ends in 'ido':
      { og:'partido', trans:'partío' },
      { og:'molido', trans:'molío' }
    ],
    ignore: [
      // 'ido',
      'caído',
    ],
    exeptions: []  
  }

}
