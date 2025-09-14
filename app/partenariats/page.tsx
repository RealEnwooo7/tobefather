import SectionHeader from "@/components/SectionHeader";

export default function PartenariatsPage(){
  return (
    <main className="section container-12">
      <SectionHeader title="Offres entreprises & institutions" subtitle="Bénéfices RH, QVCT et égalité parentale." />
      <div className="grid md:grid-cols-2 gap-6">
        <div className="card p-6">
          <h3 className="font-display font-semibold">Pourquoi TBF pour vos équipes ?</h3>
          <ul className="list-disc list-inside text-white/80 mt-2 space-y-1">
            <li>Réduction de la charge mentale familiale</li>
            <li>Meilleure préparation des congés (paternité)</li>
            <li>Culture d’égalité parentale</li>
          </ul>
        </div>
        <div className="card p-6">
          <h3 className="font-display font-semibold">Contact</h3>
          <p className="mt-2">Écrivez-nous: <a className="underline" href="mailto:contact@tobefather.com">contact@tobefather.com</a></p>
        </div>
      </div>
    </main>
  )
}
