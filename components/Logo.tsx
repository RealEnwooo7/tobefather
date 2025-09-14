export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`} aria-label="To Be Father">
      <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-gradientStart via-gradientMid to-gradientEnd" />
      <span className="font-display font-semibold tracking-wide">TBF</span>
    </div>
  );
}
