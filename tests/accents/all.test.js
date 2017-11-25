/******************************************************************************
 *  Only change to this file should be to add elements to the "accents" array:
 *****************************************************************************/
const accents = [
  { title: 'BORIKENSE', lib: require('../../src/accents/borikense') }
];

const expect = require('expect');

// util for testing all accents:
const Tester = {
  replace (accent, type) {
    accent[type].cases.replace.forEach((x) => {
      expect(accent[type].method(x.og)).toEqual(x.trans);
    })
  },
  ignore (accent, type) {
    accent[type].cases.ignore.forEach((word) => {
      expect(accent[type].method(word)).toEqual(word);
    })
  },
  exception (accent, type) {
    // TODO
  },
  verify (accent) {
    for (let type in accent) {
      describe (type, () => {
        const testCases = ['replace', 'ignore']; // TODO : add "exception".
        testCases.forEach(test => it(test, () => this[test](accent, type)));
      })
    }
  }
}

// run tests for all accents:
accents.forEach((accent) => {
  describe (accent.title, () => Tester.verify(accent.lib));
})
