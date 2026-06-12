import { useMemo, useRef, useState } from 'react';
import borikense from './lib/accents/borikense';
import { applyAccent, annotate } from './lib/translate';
import Masthead from './components/Masthead.jsx';
import QuirkBoard from './components/QuirkBoard.jsx';
import Studio from './components/Studio.jsx';

const EXAMPLES = [
  '¡Qué bueno verte! Estoy cansado de esperar para ir a Puerto Rico.',
  'El partido estuvo bueno, pero mi carro quedó estacionado lejos.',
  'Vamos para la playa, que el arroz ya está cocinado.',
  'Estoy aburrido de estar sentado mirando el mercado cerrado.',
  'Compré dos vasos de agua para los muchachos del barrio.',
];

export default function App() {
  const [input, setInput] = useState(EXAMPLES[0]);
  const [activeIds, setActiveIds] = useState(() => new Set(borikense.rules.map((r) => r.id)));
  const [toast, setToast] = useState(null);
  const exampleIdx = useRef(0);
  const toastTimer = useRef(null);

  const activeRules = borikense.rules.filter((r) => activeIds.has(r.id));

  const { output, counts } = useMemo(
    () => applyAccent(input, activeRules),
    [input, activeIds] // eslint-disable-line react-hooks/exhaustive-deps
  );
  const segments = useMemo(() => annotate(input, output), [input, output]);
  const totalChanges = segments.filter((s) => s.changed).length;

  const showToast = (message) => {
    clearTimeout(toastTimer.current);
    setToast(message);
    toastTimer.current = setTimeout(() => setToast(null), 2200);
  };

  const toggleRule = (id) => {
    setActiveIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const nextExample = () => {
    exampleIdx.current = (exampleIdx.current + 1) % EXAMPLES.length;
    setInput(EXAMPLES[exampleIdx.current]);
  };

  const copyOutput = async () => {
    if (!output) return;
    try {
      await navigator.clipboard.writeText(output);
      showToast('¡Copiao! 📋');
    } catch {
      showToast('No se pudo copial 😕');
    }
  };

  return (
    <div className="page">
      <div className="ribbon" aria-hidden="true" />
      <Masthead />
      <main className="container">
        <QuirkBoard
          rules={borikense.rules}
          activeIds={activeIds}
          counts={counts}
          onToggle={toggleRule}
        />
        <Studio
          input={input}
          onInput={setInput}
          segments={segments}
          totalChanges={totalChanges}
          onClear={() => setInput('')}
          onCopy={copyOutput}
          onExample={nextExample}
        />
      </main>
      <footer className="footer rise" style={{ '--delay': '0.5s' }}>
        <span className="footer-star">★</span> hecho con orgullo · el motol de reglaj nació en el
        2018, la cara bonita en el 2026 ·{' '}
        <a
          className="footer-link"
          href="https://github.com/jaimefps/borikense"
          target="_blank"
          rel="noreferrer"
        >
          el código vive en GitHub
        </a>{' '}
        <span className="footer-star">★</span>
      </footer>
      {toast && (
        <div className="toast" role="status">
          {toast}
        </div>
      )}
    </div>
  );
}
