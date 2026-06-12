/**
 * The borikense accent — ported from /lib/accents/borikense.js (2018)
 * and upgraded with case preservation and UI metadata.
 *
 * An accent is an ordered list of rules. Each rule is a regex pattern
 * plus a replacer; order matters (e.g. `r → l` runs before `-ido → -ío`,
 * so "partido" becomes "paltido" and then "paltío").
 */

const VOWELS = 'aeiouáéíóúAEIOUÁÉÍÓÚ';

// Map the casing of the matched text onto the replacement:
// "PARA" → "PA", "Para" → "Pa", "para" → "pa".
function matchCase(source, replacement) {
  const isUpper = (ch) => ch === ch.toUpperCase() && ch !== ch.toLowerCase();
  if ([...source].every((ch) => !/[a-záéíóúñü]/i.test(ch) || isUpper(ch)) && isUpper(source[0])) {
    return replacement.toUpperCase();
  }
  if (isUpper(source[0])) {
    return replacement[0].toUpperCase() + replacement.slice(1);
  }
  return replacement;
}

const borikense = {
  id: 'borikense',
  name: 'Borikense',
  region: 'Puerto Rico',
  rules: [
    {
      id: 'r',
      label: 'r → l',
      title: 'La ele caribeña',
      detail: "Una 'r' que no va seguida de vocal se relaja y se vuelve 'l'.",
      example: 'Puerto Rico → Puelto Rico',
      pattern: new RegExp(`[rR](?![rR${VOWELS}])`, 'g'),
      replace: (m) => matchCase(m, 'l'),
    },
    {
      id: 's',
      label: 's → j',
      title: 'La ese aspirá',
      detail: "Una 's' que no va seguida de vocal se aspira como una 'j' suave.",
      example: 'los vasos → loj vasoj',
      pattern: new RegExp(`[sS](?![${VOWELS}])`, 'g'),
      replace: (m) => matchCase(m, 'j'),
    },
    {
      id: 'ado',
      label: '-ado → -au',
      title: 'El participio relajao',
      detail: "Las palabras que terminan en 'ado' pierden la 'd'.",
      example: 'cansado → cansau',
      pattern: /\B(?:ado|ADO)(?=\W|$)/g,
      replace: (m) => matchCase(m, 'au'),
    },
    {
      id: 'ido',
      label: '-ido → -ío',
      title: 'La de que se esfuma',
      detail: "Las palabras que terminan en 'ido' pierden la 'd' y alargan la 'i'.",
      example: 'partido → partío',
      pattern: /\B(?:ido|IDO)(?=\W|$)/g,
      replace: (m) => matchCase(m, 'ío'),
    },
    {
      id: 'para',
      label: 'para → pa',
      title: "El 'pa' de siempre",
      detail: "'Para' completo casi nunca se dice: se queda en 'pa'.",
      example: 'para la playa → pa la playa',
      pattern: /\b(?:para|Para|PARA)(?=\W|$)/g,
      replace: (m) => matchCase(m, 'pa'),
    },
    {
      id: 'que_bueno',
      label: 'qué bueno → qué weno',
      title: 'El weno',
      detail: "En la exclamación, 'bueno' se ablanda en 'weno'.",
      example: '¡Qué bueno! → ¡Qué weno!',
      pattern: /\b(que|qué|Que|Qué|QUE|QUÉ)(\s+)(bueno|Bueno|BUENO)(?=\W|$)/g,
      replace: (_m, que, space, bueno) => que + space + matchCase(bueno, 'weno'),
    },
  ],
};

export default borikense;
