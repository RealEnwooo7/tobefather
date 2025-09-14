import SectionHeader from "@/components/SectionHeader";
import PricingTable from "@/components/PricingTable";

export default function PrixPage(){
  return (
    <main className="section container-12">
      <SectionHeader title="Prix & abonnements" subtitle="Transparence et simplicité." />
      <PricingTable />
      <section className="mt-10">
        <h3 className="font-display text-2xl font-bold">FAQ Pricing</h3>
        <ul className="list-disc list-inside text-white/80 mt-3 space-y-1">
          <li>Gratuit: essentiels + IA (5 questions/jour).</li>
          <li>Premium: 4,39 €/mois.</li>
          <li>Annuel: 35,99 €/an (3,59 €/mois, remise 20%).</li>
        </ul>
      </section>
    </main>
  )
}
