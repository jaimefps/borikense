/******************************************
 *                Imports:
 *****************************************/

// npm modules:
const expect = require('expect');

// dictionaries for testing:
const borikenseDic = require('./borikenseDic');

// accent libs:
const borikense = require('../../src/accents/borikense');

/******************************************
 *      Class for all accent testing:
 *****************************************/

class Tester {
  static replace (dictionary, type, accent) {
    dictionary[type]['replace'].forEach((x) => {
      expect(accent[type](x.og)).toEqual(x.trans);
    })
  }
  static ignore (dictionary, type, accent) {
    dictionary[type]['ignore'].forEach((word) => {
      expect(accent[type](word)).toEqual(word);
    })
  }
  static exeption (dictionary, type, accent) {
    // TODO
  }
  static verify (dictionary, accent) {
    for (let type in accent) {
      describe (type, () => {
        const tests = ['replace', 'ignore'];
        tests.forEach((test) => it(test, this[test](dictionary, type, accent)));
      })
    }
  }
}

/******************************************
 *      Run tests for all accents:
 *****************************************/

// list of accents
const accents = [
  { 
    title: 'borikense',
    dic: borikenseDic,
    lib: borikense,
  }
];

// run tests for all accents:
accents.forEach((accent) => {
  describe (accent.title, () => Tester.verify(accent.dic, accent.lib));
})
