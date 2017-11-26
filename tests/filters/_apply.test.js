const expect = require('expect');
const apply = require('../../src/filters/_apply');
const borikense = require('../../src/accents/borikense');

describe('Accent Applier', () => {

  it('simple str', () => {
    const og = 'partido';
    const trans = 'paltío';
    expect(apply(og, borikense)).toEqual(trans);
  })

  it('complex str', () => {
    const og = 'partido cantado que bueno puerto añasco';
    const trans = 'paltío cantau que weno puelto añajco';
    expect(apply(og, borikense)).toEqual(trans);
  })
  
})

