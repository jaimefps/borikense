const TONES = ['coral', 'cobalt', 'teal', 'mango'];

export default function QuirkBoard({ rules, activeIds, counts, onToggle }) {
  return (
    <section className="quirks rise" style={{ '--delay': '0.1s' }}>
      <h2 className="quirks-heading">las reglas del flow</h2>
      <div className="quirks-row">
        {rules.map((rule, i) => {
          const on = activeIds.has(rule.id);
          const count = counts[rule.id] || 0;
          return (
            <button
              key={rule.id}
              type="button"
              className={`chip ${on ? 'chip-on' : 'chip-off'}`}
              data-tone={TONES[i % TONES.length]}
              data-tip={`${rule.title}: ${rule.detail} (${rule.example})`}
              aria-pressed={on}
              onClick={() => onToggle(rule.id)}
            >
              <span className="chip-label">{rule.label}</span>
              {on && count > 0 && (
                <span className="chip-count" key={count}>
                  {count}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </section>
  );
}
