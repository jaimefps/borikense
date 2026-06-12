// Touch devices have no hover: tooltips become tap-to-peek toasts,
// and we skip autofocus so the keyboard doesn't pop up on load.
const IS_TOUCH =
  typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches;

export default function Studio({
  input,
  onInput,
  segments,
  totalChanges,
  onClear,
  onCopy,
  onExample,
  onPeek,
}) {
  const hasOutput = segments.some((s) => s.text.trim() !== '');

  return (
    <>
      <section className="studio rise" style={{ '--delay': '0.2s' }}>
        <div className="panel panel-in">
          <div className="panel-head">
            <span className="dot dot-cobalt" aria-hidden="true" />
            <span className="panel-label">español</span>
            {input && (
              <button type="button" className="panel-clear" onClick={onClear}>
                limpiar ✕
              </button>
            )}
          </div>
          <textarea
            className="panel-input"
            value={input}
            onChange={(e) => onInput(e.target.value)}
            placeholder="Escribe aquí tu español de libro…"
            spellCheck={false}
            autoFocus={!IS_TOUCH}
          />
        </div>

        <div className="arrow" aria-hidden="true">→</div>

        <div className="panel panel-out">
          <div className="panel-head">
            <span className="dot dot-coral" aria-hidden="true" />
            <span className="panel-label">boricua</span>
            <span className="panel-changes" key={totalChanges}>
              {totalChanges} {totalChanges === 1 ? 'cambio' : 'cambioj'}
            </span>
          </div>
          <div className="panel-output" aria-live="polite">
            {hasOutput ? (
              segments.map((seg, i) =>
                seg.changed ? (
                  <mark key={i} data-og={seg.og} onClick={() => onPeek(seg.og)}>
                    {seg.text}
                  </mark>
                ) : (
                  <span key={i}>{seg.text}</span>
                )
              )
            ) : (
              <span className="panel-empty">Aquí sale tu texto, tal y como se dice…</span>
            )}
          </div>
          <div className="panel-actions">
            <button type="button" className="btn btn-cobalt" onClick={onCopy} disabled={!hasOutput}>
              📋 Copial
            </button>
          </div>
        </div>
      </section>

      <div className="toolbar rise" style={{ '--delay': '0.3s' }}>
        <button type="button" className="btn btn-mango" onClick={onExample}>
          🎲 Tírame un ejemplo
        </button>
        <p className="toolbar-hint">
          {IS_TOUCH ? 'toca' : 'pasa el mouse por'} las palabras{' '}
          <mark className="hint-mark">marcadas</mark> pa ver el original
        </p>
      </div>
    </>
  );
}
