type Props = {
  size?: number;
  className?: string;
};

/** Decorative rotating zodiac wheel — pure SVG, no external deps. */
export default function ZodiacWheel({ size = 200, className = '' }: Props) {
  const signs = ['♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓'];
  const radius = size / 2 - 14;
  const cx = size / 2;
  const cy = size / 2;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={className}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="zwGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fcd34d" stopOpacity="0.25" />
          <stop offset="70%" stopColor="#b45309" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#7f1d1d" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx={cx} cy={cy} r={size / 2 - 2} fill="url(#zwGlow)" />
      <circle cx={cx} cy={cy} r={radius} fill="none" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.5" />
      <circle cx={cx} cy={cy} r={radius - 22} fill="none" stroke="currentColor" strokeWidth="0.4" strokeOpacity="0.35" />
      <circle cx={cx} cy={cy} r={radius - 40} fill="none" stroke="currentColor" strokeWidth="0.3" strokeOpacity="0.25" />

      {/* spokes */}
      {signs.map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180;
        const x1 = cx + Math.cos(angle) * (radius - 22);
        const y1 = cy + Math.sin(angle) * (radius - 22);
        const x2 = cx + Math.cos(angle) * radius;
        const y2 = cy + Math.sin(angle) * radius;
        return (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.4" />
        );
      })}

      {/* zodiac glyphs */}
      {signs.map((s, i) => {
        const angle = (i * 30 - 90) * (Math.PI / 180);
        const x = cx + Math.cos(angle) * (radius - 11);
        const y = cy + Math.sin(angle) * (radius - 11);
        return (
          <text
            key={s}
            x={x}
            y={y}
            textAnchor="middle"
            dominantBaseline="central"
            fontSize="13"
            fill="currentColor"
            opacity="0.85"
          >
            {s}
          </text>
        );
      })}

      {/* center star */}
      <g transform={`translate(${cx}, ${cy})`}>
        <path
          d="M0,-12 L3.5,-3.5 L12,0 L3.5,3.5 L0,12 L-3.5,3.5 L-12,0 L-3.5,-3.5 Z"
          fill="currentColor"
          opacity="0.7"
        />
      </g>
    </svg>
  );
}
