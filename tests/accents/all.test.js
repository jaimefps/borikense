const expect = require('expect');
const accents = require('./accents');

// util for testing all accents:
const AccentTester = {
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
        testCases.forEach((test) => it(test, () => this[test](accent, type)));
      })
    }
  },
}

// run tests for all accents:
accents.forEach((x) => {
  describe (x.title, () => {
    AccentTester.verify(x.lib);
  })
})
