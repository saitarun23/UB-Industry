export default function FoodPacketIcon({ size = 48, color = "white" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      stroke={color}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Outer pouch – slightly tapered with top & bottom seals */}
      <path
        d="
          M22 10
          L42 10
          L48 16
          V48
          L42 54
          H22
          L16 48
          V16
          Z
        "
      />

      {/* Top crimp / tear edge */}
      <path d="M18 16 L22 13 L26 16 L30 13 L34 16 L38 13 L42 16 L46 13" />

      {/* Bottom crimp */}
      <path d="M18 48 L22 51 L26 48 L30 51 L34 48 L38 51 L42 48 L46 51" />

      {/* Label area */}
      <rect x="23" y="22" width="18" height="14" rx="3" />

      {/* Chip illustration inside the label */}
      <path d="M26 30c1.5-2 4-3 6-3s4.5 1 6 3" />
      <path d="M26 32c1.5 2 4 3 6 3s4.5-1 6-3" />
    </svg>
  );
}
