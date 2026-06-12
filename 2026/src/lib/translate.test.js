import { describe, it, expect } from 'vitest';
import borikense from './accents/borikense';
import { applyAccent, annotate } from './translate';

const rule = (id) => borikense.rules.find((r) => r.id === id);
const applyOne = (id, str) => str.replace(rule(id).pattern, rule(id).replace);

// Cases ported from /tests and /lib/accents/borikense.js (2018).
describe('rule: r → l', () => {
  it.each([
    ['puerto', 'puelto'],
    ['partido', 'paltido'],
    ['123asd partido 123asd', '123asd paltido 123asd'],
  ])('replaces %s → %s', (og, trans) => {
    expect(applyOne('r', og)).toBe(trans);
  });

  it.each(['pero', 'para', 'perro', 'barra', '123asd barra 123asd'])('ignores %s', (word) => {
    expect(applyOne('r', word)).toBe(word);
  });
});

describe('rule: s → j', () => {
  it.each([
    ['sastre', 'sajtre'],
    ['bastón', 'bajtón'],
    ['vasos', 'vasoj'],
    ['niñas', 'niñaj'],
  ])('replaces %s → %s', (og, trans) => {
    expect(applyOne('s', og)).toBe(trans);
  });

  it.each(['pesa', 'beso'])('ignores %s', (word) => {
    expect(applyOne('s', word)).toBe(word);
  });
});

describe('rule: -ado → -au', () => {
  it.each([
    ['cansado', 'cansau'],
    ['trepado', 'trepau'],
    ['asd123 trepado asd123', 'asd123 trepau asd123'],
  ])('replaces %s → %s', (og, trans) => {
    expect(applyOne('ado', og)).toBe(trans);
  });

  it.each(['adoquín', 'adorar'])('ignores %s', (word) => {
    expect(applyOne('ado', word)).toBe(word);
  });
});

describe('rule: -ido → -ío', () => {
  it.each([
    ['partido', 'partío'],
    ['molido', 'molío'],
    ['123asd molido asd123', '123asd molío asd123'],
  ])('replaces %s → %s', (og, trans) => {
    expect(applyOne('ido', og)).toBe(trans);
  });

  it.each(['ido', 'caído'])('ignores %s', (word) => {
    expect(applyOne('ido', word)).toBe(word);
  });
});

describe('rule: para → pa', () => {
  it.each([
    ['para', 'pa'],
    ['asd123 para 123ads', 'asd123 pa 123ads'],
  ])('replaces %s → %s', (og, trans) => {
    expect(applyOne('para', og)).toBe(trans);
  });

  it.each(['paramédico', 'parar', 'acapara'])('ignores %s', (word) => {
    expect(applyOne('para', word)).toBe(word);
  });
});

describe('rule: qué bueno → qué weno', () => {
  it.each([
    ['que bueno', 'que weno'],
    ['¡Qué bueno!', '¡Qué weno!'],
    ['asd123 que bueno 123ads', 'asd123 que weno 123ads'],
  ])('replaces %s → %s', (og, trans) => {
    expect(applyOne('que_bueno', og)).toBe(trans);
  });

  it.each(['que malo', 'que bien', 'bueno', 'que'])('ignores %s', (phrase) => {
    expect(applyOne('que_bueno', phrase)).toBe(phrase);
  });
});

describe('case preservation (new in 2026)', () => {
  it('keeps capitalization', () => {
    expect(applyOne('para', 'Para eso')).toBe('Pa eso');
    expect(applyOne('r', 'Rosa')).toBe('Rosa'); // R followed by vowel
    expect(applyOne('r', 'Roberto')).toBe('Robelto'); // r before consonant, case kept
    expect(applyOne('r', 'PUERTO')).toBe('PUELTO');
  });
});

describe('applyAccent (full pipeline)', () => {
  it('translates a full sentence and counts rule firings', () => {
    const { output, counts } = applyAccent(
      '¡Qué bueno verte! Estoy cansado de esperar para ir a Puerto Rico.',
      borikense.rules
    );
    expect(output).toBe('¡Qué weno velte! Ejtoy cansau de ejperal pa il a Puelto Rico.');
    expect(counts.para).toBe(1);
    expect(counts.que_bueno).toBe(1);
    expect(counts.ado).toBe(1);
  });
});

describe('annotate', () => {
  it('aligns original and translated words and flags the changed ones', () => {
    const original = 'los vasos para todos';
    const { output } = applyAccent(original, borikense.rules);
    const segments = annotate(original, output);
    const changed = segments.filter((s) => s.changed);
    expect(changed.map((s) => s.text)).toEqual(['loj', 'vasoj', 'pa', 'todoj']);
    expect(changed.map((s) => s.og)).toEqual(['los', 'vasos', 'para', 'todos']);
  });
});
