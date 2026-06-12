function Flag() {
  return (
    <svg
      className="masthead-flag"
      viewBox="0 0 60 40"
      role="img"
      aria-label="Bandera de Puerto Rico"
    >
      <rect width="60" height="40" fill="#fffdf6" />
      <rect y="0" width="60" height="8" fill="#e8542f" />
      <rect y="16" width="60" height="8" fill="#e8542f" />
      <rect y="32" width="60" height="8" fill="#e8542f" />
      {/* the light blue of the independence flag */}
      <polygon points="0,0 30,20 0,40" fill="#5bb8e8" />
      <polygon
        points="10,13.5 11.53,17.9 16.18,17.99 12.47,20.8 13.82,25.26 10,22.6 6.18,25.26 7.53,20.8 3.82,17.99 8.47,17.9"
        fill="#fffdf6"
      />
    </svg>
  );
}

export default function Masthead() {
  return (
    <header className="masthead rise">
      <Flag />
      <p className="masthead-eyebrow">★ traductor de acentos ★</p>
      <h1 className="masthead-title">
        bor
        <span className="star-i">
          ı<span className="star" aria-hidden="true">★</span>
        </span>
        kense
      </h1>
      <p className="masthead-tagline">
        El <mark>traductol</mark> oficial pa pasal del español de libro al{' '}
        <mark>boricua</mark> de la calle.
      </p>
    </header>
  );
}
