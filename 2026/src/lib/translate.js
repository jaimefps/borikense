/**
 * The translation engine — the 2026 version of /lib/filters/_apply.js.
 *
 * applyAccent runs the rules in order and also reports how many times
 * each rule fired, so the UI can show live counts per quirk.
 */
export function applyAccent(text, rules) {
  let output = text;
  const counts = {};
  for (const rule of rules) {
    const matches = output.match(rule.pattern);
    counts[rule.id] = matches ? matches.length : 0;
    output = output.replace(rule.pattern, rule.replace);
  }
  return { output, counts };
}

/**
 * Align the original and translated text word-by-word so the UI can
 * highlight exactly what changed. The rules never add or remove
 * whitespace, so splitting both strings on whitespace yields two
 * arrays of equal length that zip cleanly.
 */
export function annotate(original, translated) {
  const og = original.split(/(\s+)/);
  const tr = translated.split(/(\s+)/);
  if (og.length !== tr.length) {
    return [{ text: translated, og: original, changed: original !== translated }];
  }
  return tr.map((text, i) => ({ text, og: og[i], changed: text !== og[i] }));
}
