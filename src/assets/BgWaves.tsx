export function BgWaves(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 1440 900"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      {...props}
    >
      <defs>
        <linearGradient id="soft" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f6f7ff" />
          <stop offset="100%" stopColor="#ffffff" />
        </linearGradient>
      </defs>

      <rect width="1440" height="900" fill="url(#soft)" />

      <path
        d="M0,200 C300,300 600,100 900,200 1200,300 1440,200 1440,200 L1440,0 L0,0 Z"
        fill="#eef1ff"
        opacity="0.9"
      />

      <path
        d="M0,500 C300,600 600,400 900,500 1200,600 1440,500 1440,500 L1440,900 L0,900 Z"
        fill="#fdf3d6"
        opacity="0.6"
      />

      {/* símbolos decorativos */}
      <circle cx="1200" cy="180" r="6" fill="#facc15" />
      <rect x="1050" y="260" width="10" height="10" rx="2" fill="#8b5cf6" />
      <circle cx="300" cy="350" r="4" fill="#8b5cf6" />
    </svg>
  )
}
