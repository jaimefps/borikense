# borikense 2026 ★

The 2026 face of borikense: a Vite + React app that translates "textbook"
Spanish into Puerto Rican Spanish, live as you type.

The rule engine is a direct port of `/lib/accents/borikense.js` (2018),
upgraded with case preservation and per-rule metadata for the UI.

## Run it

```sh
npm install
npm run dev
```

## Test it

```sh
npm test
```

The original 2018 test cases are ported in `src/lib/translate.test.js`.

## Add a rule (or a whole accent)

Accents live in `src/lib/accents/`. An accent is an ordered list of rules:

```js
{
  id: 'ado',                       // unique key
  label: '-ado → -au',             // shown on the toggle chip
  title: 'El participio relajao',  // shown in the chip's hover card
  detail: "Las palabras que terminan en 'ado' pierden la 'd'.",
  example: 'cansado → cansau',
  pattern: /\B(?:ado|ADO)(?=\W|$)/g,
  replace: (m) => matchCase(m, 'au'),
}
```

Rule order matters — `r → l` runs before `-ido → -ío`, so
"partido" → "paltido" → "paltío".
