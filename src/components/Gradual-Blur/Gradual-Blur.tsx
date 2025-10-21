import React, {
    CSSProperties,
    PropsWithChildren,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";

type GradualBlurProps = PropsWithChildren<{
    position?: "top" | "bottom" | "left" | "right";
    strength?: number;        // 1..6
    height?: string;          // e.g. "6rem"
    width?: string;           // for left/right
    divCount?: number;        // 3..12
    exponential?: boolean;
    zIndex?: number;
    animated?: boolean | "scroll";
    duration?: string;        // "0.3s"
    easing?: string;          // "ease-out"
    opacity?: number;         // 0..1
    curve?: "linear" | "bezier" | "ease-in" | "ease-out" | "ease-in-out";
    responsive?: boolean;
    hoverIntensity?: number;  // e.g. 1.5
    target?: "parent" | "page";
    className?: string;
    style?: CSSProperties;
    onAnimationComplete?: () => void;
}>;

const DEFAULTS: Required<Omit<GradualBlurProps,
    "children" | "onAnimationComplete" | "className" | "style">> = {
    position: "bottom",
    strength: 3,
    height: "6rem",
    width: "",
    divCount: 8,
    exponential: false,
    zIndex: 1000,
    animated: false,
    duration: "0.3s",
    easing: "ease-out",
    opacity: 1,
    curve: "linear",
    responsive: false,
    hoverIntensity: 0,
    target: "parent",
};

const curveFn: Record<NonNullable<GradualBlurProps["curve"]>, (p: number) => number> = {
    linear: (p) => p,
    bezier: (p) => p * p * (3 - 2 * p),
    "ease-in": (p) => p * p,
    "ease-out": (p) => 1 - (1 - p) * (1 - p),
    "ease-in-out": (p) => (p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2),
};

const dir = (pos: string) =>
    ({ top: "to top", bottom: "to bottom", left: "to left", right: "to right" } as const)[pos as any] || "to bottom";

const GradualBlur: React.FC<GradualBlurProps> = (props) => {
    const cfg = { ...DEFAULTS, ...props };
    const containerRef = useRef<HTMLDivElement>(null);
    const [hover, setHover] = useState(false);
    const [visible, setVisible] = useState(cfg.animated !== "scroll");

    // Minimal intersection observer when animated === 'scroll'
    useEffect(() => {
        if (cfg.animated !== "scroll" || !containerRef.current) return;
        const obs = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.05 });
        obs.observe(containerRef.current);
        return () => obs.disconnect();
    }, [cfg.animated]);

    const layers = useMemo(() => {
        const out: React.ReactNode[] = [];
        const inc = 100 / cfg.divCount;
        const strength = hover && cfg.hoverIntensity ? cfg.strength * cfg.hoverIntensity : cfg.strength;
        const f = curveFn[cfg.curve];

        for (let i = 1; i <= cfg.divCount; i++) {
            let p = f(i / cfg.divCount);
            const blurRem = (cfg.exponential ? Math.pow(2, p * 4) * 0.0625 : 0.0625 * (p * cfg.divCount + 1)) * strength;

            // band edges
            const p1 = Math.max(0, +(inc * (i - 1)).toFixed(1));
            const p2 = Math.min(100, +(inc * i).toFixed(1));
            const p3 = Math.min(100, +(inc * (i + 1)).toFixed(1));
            const p4 = Math.min(100, +(inc * (i + 2)).toFixed(1));

            // white = visible blur, transparent = hidden
            let gradient = `transparent ${p1}%, white ${p2}%`;
            if (p3 <= 100) gradient += `, white ${p3}%`;
            if (p4 <= 100) gradient += `, transparent ${p4}%`;

            const style: CSSProperties = {
                position: "absolute",
                inset: 0,
                // Force Safari to actually render the backdrop filter:
                backgroundColor: "rgba(0,0,0,0.001)",
                maskImage: `linear-gradient(${dir(cfg.position)}, ${gradient})`,
                WebkitMaskImage: `linear-gradient(${dir(cfg.position)}, ${gradient})`,
                backdropFilter: `blur(${blurRem.toFixed(3)}rem)`,
                WebkitBackdropFilter: `blur(${blurRem.toFixed(3)}rem)`,
                opacity: cfg.opacity,
                transition:
                    cfg.animated && cfg.animated !== "scroll"
                        ? `backdrop-filter ${cfg.duration} ${cfg.easing}, -webkit-backdrop-filter ${cfg.duration} ${cfg.easing}`
                        : undefined,
            };
            out.push(<div key={i} style={style} />);
        }
        return out;
    }, [cfg.divCount, cfg.curve, cfg.exponential, cfg.opacity, cfg.position, cfg.easing, cfg.duration, cfg.strength, cfg.hoverIntensity, hover]);

    const wrapperStyle: CSSProperties = useMemo(() => {
        const vertical = cfg.position === "top" || cfg.position === "bottom";
        const fixed = cfg.target === "page";
        const base: CSSProperties = {
            position: fixed ? "fixed" : "absolute",
            zIndex: fixed ? cfg.zIndex + 100 : cfg.zIndex,
            pointerEvents: cfg.hoverIntensity ? "auto" : "none",
            opacity: visible ? 1 : 0,
            transition: cfg.animated ? `opacity ${cfg.duration} ${cfg.easing}` : undefined,
            isolation: "isolate", // ensure its own stacking context
            ...props.style,
        };
        if (vertical) {
            base.height = cfg.height;
            base.width = cfg.width || "100%";
            (base as any)[cfg.position] = 0;
            base.left = 0;
            base.right = 0;
        } else {
            base.width = cfg.width || cfg.height;
            base.height = "100%";
            (base as any)[cfg.position] = 0;
            base.top = 0;
            base.bottom = 0;
        }
        return base;
    }, [cfg, visible, props.style]);

    return (
        <div
            ref={containerRef}
            className={`gradual-blur ${props.className || ""}`}
            style={wrapperStyle}
            onMouseEnter={cfg.hoverIntensity ? () => setHover(true) : undefined}
            onMouseLeave={cfg.hoverIntensity ? () => setHover(false) : undefined}
        >
            {/* stacking helper */}
            <div style={{ position: "relative", width: "100%", height: "100%" }}>{layers}</div>
            {props.children ? <div style={{ position: "relative" }}>{props.children}</div> : null}
        </div>
    );
};

export default React.memo(GradualBlur);
