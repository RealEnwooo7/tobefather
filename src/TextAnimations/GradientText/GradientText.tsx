import React, { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number; // seconds
  showBorder?: boolean;
}

export default function GradientText({
  children,
  className = "",
  colors = ["#ffaa40", "#9c40ff", "#ffaa40"],
  animationSpeed = 8,
  showBorder = false,
}: GradientTextProps) {
  const gradientStyle: React.CSSProperties = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    backgroundSize: "300% 100%",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    animationDuration: `${animationSpeed}s`, // overrides Tailwind duration
  };

  return (
    <div
      className={`relative mx-auto inline-flex items-center justify-center rounded-[1.25rem] font-medium backdrop-blur transition-shadow duration-500 overflow-hidden cursor-pointer ${className}`}
    >
      {showBorder && (
        <div
          className="pointer-events-none absolute inset-0 animate-gradient z-0"
          style={{ backgroundImage: `linear-gradient(90deg, ${colors.join(",")})`, backgroundSize: "300% 100%" }}
        />
      )}
      <span className="relative z-10 animate-gradient" style={gradientStyle}>
        {children}
      </span>
    </div>
  );
}
