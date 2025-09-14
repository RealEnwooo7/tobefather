export default function SectionHeader({ kicker, title, subtitle }:{kicker?: string, title: string, subtitle?: string}){
  return (
    <div className="text-center max-w-3xl mx-auto mb-10">
      {kicker && <p className="badge mx-auto">{kicker}</p>}
      <h2 className="font-display text-3xl md:text-4xl font-bold mt-4">{title}</h2>
      {subtitle && <p className="text-white/80 mt-3">{subtitle}</p>}
    </div>
  )
}
