export default function TetrisDivider({
  variant = "default",
  flip = false,
}: {
  variant?: "default" | "dark" | "light";
  flip?: boolean;
}) {
  const colors = {
    default: { bg: "#98d208", opacity: "0.06" },
    dark: { bg: "#98d208", opacity: "0.12" },
    light: { bg: "#98d208", opacity: "0.04" },
  };

  const { bg, opacity } = colors[variant];

  return (
    <div
      className={`w-full overflow-hidden ${flip ? "rotate-180" : ""}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        className="w-full h-8 lg:h-12"
      >
        {/* Sharp stepped block pattern */}
        <rect x="0" y="0" width="100" height="20" fill={bg} opacity={opacity} />
        <rect x="100" y="10" width="100" height="20" fill={bg} opacity={opacity} />
        <rect x="200" y="20" width="100" height="20" fill={bg} opacity={opacity} />
        <rect x="300" y="10" width="100" height="20" fill={bg} opacity={opacity} />
        <rect x="400" y="30" width="100" height="20" fill={bg} opacity={opacity} />
        <rect x="500" y="20" width="100" height="20" fill={bg} opacity={opacity} />
        <rect x="600" y="0" width="100" height="20" fill={bg} opacity={opacity} />
        <rect x="700" y="10" width="100" height="20" fill={bg} opacity={opacity} />
        <rect x="800" y="30" width="100" height="20" fill={bg} opacity={opacity} />
        <rect x="900" y="20" width="100" height="20" fill={bg} opacity={opacity} />
        <rect x="1000" y="10" width="100" height="20" fill={bg} opacity={opacity} />
        <rect x="1100" y="0" width="100" height="20" fill={bg} opacity={opacity} />
      </svg>
    </div>
  );
}
