const clients = [
  { icon: <MarketIcon />, label: "Marketi", href: "#nasi-partneri" },
  { icon: <RestaurantIcon />, label: "Restorani" },
  { icon: <CafeIcon />, label: "Kafići" },
  { icon: <ClubIcon />, label: "Noćni klubovi" },
  { icon: <GasIcon />, label: "Benzinske pumpe" },
  { icon: <FestivalIcon />, label: "Festivali" },
  { icon: <CelebrationIcon />, label: "Proslave" },
  { icon: <EventIcon />, label: "Eventi" },
];

export default function ClientTypesSection() {
  return (
    <section className="bg-navy border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="text-center mb-10">
          <p className="text-accent font-bold tracking-[0.2em] text-sm uppercase mb-3">
            Naši klijenti
          </p>
          <h2
            className="font-heading text-4xl sm:text-5xl font-bold text-white uppercase"
            style={{ fontFamily: "var(--font-barlow), sans-serif" }}
          >
            OD BARA DO FESTIVALA
          </h2>
          <p className="text-white/70 mt-3 max-w-md mx-auto">
            Kristalno čist led za svaku namenu i svako mesto
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {clients.map((c) => {
            const inner = (
              <>
                <div className="text-white/80 group-hover:text-accent transition-colors">
                  {c.icon}
                </div>
                <span className="text-white/90 group-hover:text-white transition-colors text-sm font-semibold text-center leading-tight">
                  {c.label}
                </span>
                {c.href && (
                  <span className="text-white text-[11px] font-semibold transition-colors flex items-center gap-0.5">
                    Vidi više
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
                  </span>
                )}
              </>
            );
            const cls = "flex flex-col items-center gap-3 py-5 px-3 rounded-xl bg-white/[0.04] border border-white/[0.07] hover:border-primary/40 hover:bg-primary/10 transition-all duration-200 group";
            return c.href ? (
              <a key={c.label} href={c.href} className={cls}>{inner}</a>
            ) : (
              <div key={c.label} className={cls}>{inner}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function MarketIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 6H17C17 3.24 14.76 1 12 1S7 3.24 7 6H5C3.9 6 3 6.9 3 8V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V8C21 6.9 20.1 6 19 6ZM12 3C13.66 3 15 4.34 15 6H9C9 4.34 10.34 3 12 3ZM19 20H5V8H19V20ZM12 12C10.34 12 9 10.66 9 9H7C7 11.76 9.24 14 12 14S17 11.76 17 9H15C15 10.66 13.66 12 12 12Z" />
    </svg>
  );
}

function RestaurantIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.06 22.99h1.66c.84 0 1.53-.64 1.63-1.46L23 5.05h-5V1h-1.97v4.05h-4.97l.3 2.34c1.71.47 3.31 1.32 4.27 2.26 1.44 1.42 2.43 2.89 2.43 5.29v8.05zM1 21.99V21h15.03v.99c0 .55-.45 1-1.01 1H2.01c-.56 0-1.01-.45-1.01-1zm15.03-7c0-8-15.03-8-15.03 0h15.03zM1.02 17h15v2h-15z" />
    </svg>
  );
}

function CafeIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4z" />
    </svg>
  );
}

function ClubIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 3v9.28c-.47-.17-.97-.28-1.5-.28C8.01 12 6 14.01 6 16.5S8.01 21 10.5 21c2.31 0 4.2-1.75 4.45-4H15V6h4V3h-7z" />
    </svg>
  );
}

function GasIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.77 7.23l.01-.01-3.72-3.72-1.06 1.06 2.11 2.11c-.94.36-1.61 1.26-1.61 2.33 0 1.38 1.12 2.5 2.5 2.5.36 0 .69-.08 1-.21v7.21c0 .55-.45 1-1 1s-1-.45-1-1V14c0-1.1-.9-2-2-2h-1V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v16h10v-7.5h1.5v5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V9c0-.69-.28-1.32-.73-1.77zM18 10c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM8 18v-4.5H6L10 7v4.5h2L8 18z" />
    </svg>
  );
}

function FestivalIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
    </svg>
  );
}

function CelebrationIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
      <path d="M9.5 13.09l1.41 1.41-4.5 4.5H9v2H3v-6h2v2.59l4.5-4.5zm1.41-3.59L9.5 10.91 5 6.41V9H3V3h6v2H6.41l4.5 4.5zm3.59 3.59l4.5 4.5V15h2v6h-6v-2h2.59l-4.5-4.5 1.41-1.41zM14.09 9.5l4.5-4.5H16V3h6v6h-2V6.41l-4.5 4.5-1.41-1.41z" />
    </svg>
  );
}

function EventIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" />
    </svg>
  );
}
