"use client";
import { useState } from "react";

export default function LeadForm(){
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return <p className="p-4 rounded-xl bg-success/10 border border-success/30">Merci ! Nous vous tiendrons informé(e) du lancement.</p>;
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3" aria-labelledby="leadFormTitle">
      <input required type="text" name="name" placeholder="Nom" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10" />
      <input required type="email" name="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10" />
      <label className="flex gap-2 text-sm text-white/80">
        <input type="checkbox" required aria-required="true" />
        J’accepte d’être contacté·e et la <a className="underline ml-1" href="/confidentialite" target="_blank" rel="noopener">politique de confidentialité</a>.
      </label>
      <button className="btn btn-primary">Rejoindre la liste d’attente</button>
    </form>
  );
}
