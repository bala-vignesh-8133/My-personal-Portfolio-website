// Abstract illustrations used until real screenshots are added (see `image` in data/projects.js).
// They are decorative, not screenshots of the actual applications.

function MandiCareArt() {
  return (
    <svg viewBox="0 0 400 250" className="art" aria-hidden="true">
      <defs>
        <linearGradient id="phoneGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fffdf6" />
          <stop offset="1" stopColor="#efe7d0" />
        </linearGradient>
      </defs>
      {/* phone */}
      <rect x="140" y="18" width="120" height="226" rx="22" fill="url(#phoneGrad)" />
      <rect x="188" y="26" width="24" height="5" rx="2.5" fill="#0f3b2c" opacity=".25" />
      <rect x="154" y="44" width="92" height="10" rx="5" fill="#0f3b2c" />
      {/* mandible arch */}
      <path d="M162 92 C162 150 186 164 200 164 C214 164 238 150 238 92" fill="none" stroke="#17513c" strokeWidth="5" strokeLinecap="round" />
      <circle cx="171" cy="128" r="6" fill="#f4b61f" />
      <circle cx="200" cy="164" r="6" fill="#f4b61f" />
      <circle cx="229" cy="128" r="6" fill="#17513c" />
      {/* list rows */}
      <rect x="154" y="184" width="92" height="10" rx="5" fill="#0f3b2c" opacity=".18" />
      <rect x="154" y="202" width="64" height="10" rx="5" fill="#0f3b2c" opacity=".18" />
      <rect x="154" y="220" width="78" height="10" rx="5" fill="#f4b61f" />
      {/* side cards */}
      <rect x="40" y="70" width="80" height="48" rx="12" fill="#17513c" stroke="#f4b61f" strokeOpacity=".5" />
      <rect x="52" y="84" width="40" height="6" rx="3" fill="#f4b61f" />
      <rect x="52" y="98" width="56" height="6" rx="3" fill="#eef5ef" opacity=".6" />
      <rect x="280" y="130" width="80" height="48" rx="12" fill="#17513c" stroke="#f4b61f" strokeOpacity=".5" />
      <rect x="292" y="144" width="40" height="6" rx="3" fill="#f4b61f" />
      <rect x="292" y="158" width="56" height="6" rx="3" fill="#eef5ef" opacity=".6" />
    </svg>
  )
}

function PpeArt() {
  return (
    <svg viewBox="0 0 400 250" className="art" aria-hidden="true">
      {/* camera frame */}
      <rect x="60" y="24" width="280" height="202" rx="18" fill="#17513c" stroke="#eef5ef" strokeOpacity=".25" strokeWidth="2" />
      <path d="M60 52 V42 a18 18 0 0 1 18-18 H88 M312 24 H322 a18 18 0 0 1 18 18 V52 M340 198 V208 a18 18 0 0 1-18 18 H312 M88 226 H78 a18 18 0 0 1-18-18 V198" fill="none" stroke="#f4b61f" strokeWidth="4" strokeLinecap="round" />
      {/* worker */}
      <circle cx="200" cy="112" r="26" fill="#eef5ef" opacity=".9" />
      <path d="M162 226 C162 170 238 170 238 226 Z" fill="#eef5ef" opacity=".9" />
      {/* helmet */}
      <path d="M170 106 a30 30 0 0 1 60 0 Z" fill="#f4b61f" />
      <rect x="164" y="104" width="72" height="8" rx="4" fill="#f4b61f" />
      {/* detection box */}
      <rect x="150" y="62" width="100" height="62" rx="6" fill="none" stroke="#f4b61f" strokeWidth="3" strokeDasharray="8 6" />
      <rect x="150" y="42" width="64" height="20" rx="4" fill="#f4b61f" />
      <text x="182" y="56.5" textAnchor="middle" fontSize="12" fontWeight="800" fill="#0f3b2c" fontFamily="sans-serif">
        Helmet
      </text>
    </svg>
  )
}

export default function ProjectArt({ kind }) {
  return kind === 'ppe' ? <PpeArt /> : <MandiCareArt />
}
