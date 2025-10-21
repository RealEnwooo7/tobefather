import React, { useRef, useState } from "react";

type Position = { x: number; y: number };

interface SpotlightCardProps extends React.PropsWithChildren {
    className?: string;
    spotlightColor?: string; // ex: "rgba(0, 229, 255, 0.2)"
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({
    children,
    className = "",
    spotlightColor = "rgba(255, 255, 255, 0.25)",
}) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [pos, setPos] = useState<Position>({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState<number>(0);

    const onMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
        if (!divRef.current) return;
        const r = divRef.current.getBoundingClientRect();
        setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
    };

    return (
        <div
            ref={divRef}
            tabIndex={0} // focus clavier
            onMouseMove={onMove}
            onMouseEnter={() => setOpacity(0.6)}
            onMouseLeave={() => setOpacity(0)}
            onFocus={() => setOpacity(0.6)}
            onBlur={() => setOpacity(0)}
            className={`spotlight-card ${className}`}
        >
            <div
                className="spotlight-overlay"
                style={{
                    opacity,
                    background: `radial-gradient(circle at ${pos.x}px ${pos.y}px, ${spotlightColor}, transparent 80%)`,
                }}
            />
            {children}
        </div>
    );
};

export default SpotlightCard;
