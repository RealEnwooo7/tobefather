import SectionHeader from "@/components/SectionHeader";

const tags = ["éducation","psychologie","nutrition","sommeil","juridique","social","économique","médical"];

export default function MediaPage(){
  return (
    <main className="section container-12">
      <SectionHeader title="Le média To Be Father" subtitle="Sélection de contenus. Suivez @tobefather.off" />
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map(t => <span key={t} className="badge">{t}</span>)}
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {[1,2,3,4,5,6].map(i => (
          <article key={i} className="card p-4">
            <h3 className="font-display font-semibold">Contenu #{i}</h3>
            <p className="text-white/80 mt-2">Placeholder d’article/vidéo. Bientôt: flux Instagram/YouTube.</p>
            <a className="btn btn-ghost mt-3" href="https://www.instagram.com/tobefather.off" target="_blank">Voir</a>
          </article>
        ))}
      </div>
    </main>
  )
}
