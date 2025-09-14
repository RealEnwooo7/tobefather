import { Check } from "lucide-react";

export default function PricingTable(){
  const features = [
    "IA personnalisée illimitée (Premium)",
    "Suivi avancé & checklists",
    "Contenus & outils exclusifs",
    "Rappels & partages (progressif)"
  ];
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="card p-6">
        <h3 className="font-display text-2xl font-bold">Gratuit</h3>
        <p className="text-white/80 mt-2">Essentiels + IA (jusqu’à 5 questions/jour).</p>
        <p className="text-4xl font-bold mt-6">0 €</p>
        <a href="#waitlist" className="btn btn-primary mt-6">Être informé du lancement</a>
      </div>
      <div className="card p-6 border-2 border-gradientEnd">
        <h3 className="font-display text-2xl font-bold">Premium</h3>
        <p className="text-white/80 mt-2">Accès illimité & fonctionnalités avancées.</p>
        <div className="mt-6 space-y-2">
          <p className="text-4xl font-bold">4,39 €<span className="text-base font-medium"> / mois</span></p>
          <p className="text-white/80">Annuel: 35,99 € (3,59 €/mois, remise 20%)</p>
        </div>
        <ul className="mt-6 space-y-2">
          {features.map((f, i) => (
            <li key={i} className="flex items-center gap-3 text-white/90">
              <Check className="text-success" /> {f}
            </li>
          ))}
        </ul>
        <a href="#waitlist" className="btn btn-primary mt-6">Être informé du lancement</a>
      </div>
    </div>
  )
}
