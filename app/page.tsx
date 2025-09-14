"use client";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import PricingTable from "@/components/PricingTable";
import FAQAccordion, { FAQ } from "@/components/FAQAccordion";
import TestimonialSlider from "@/components/TestimonialSlider";
import LeadForm from "@/components/LeadForm";
import { CheckCircle2, ShieldCheck, GraduationCap, Users } from "lucide-react";

export default function HomePage() {
  const faq: FAQ[] = [
    { q: "Quand sortira l’application ?", a: "Juillet 2026." },
    { q: "iOS & Android ?", a: "Oui (App Store & Google Play)." },
    { q: "Utilisable dès la grossesse ?", a: "Absolument." },
    { q: "Espace pour échanger ?", a: "Souhaité à terme." },
    { q: "Version gratuite ?", a: "Oui, essentiels + IA (5 questions/jour)." },
    { q: "Prix premium ?", a: "4,39 € / mois." },
    { q: "Que comprend l’abonnement ?", a: "IA illimitée, suivi avancé, contenus & outils exclusifs." },
    { q: "Offre annuelle ?", a: "35,99 € / an (−20%)." },
    { q: "À qui ?", a: "À tous les pères; multiculturel & personnalisé." },
    { q: "Utile pour les mamans ?", a: "Oui, rééquilibre la charge mentale." },
    { q: "Déjà papa ?", a: "Oui." },
    { q: "Différences vs autres apps ?", a: "1er assistant personnel de paternité, IA spécialisée qui s’adapte en temps réel." },
    { q: "Pourquoi ?", a: "Peu d’outils pour 175M de nouveaux pères/an." },
    { q: "Objectif principal ?", a: "Soutien concret & place pleine du père." },
    { q: "Égalité parentale ?", a: "Équilibrée & partagée." },
    { q: "Long terme ?", a: "Convaincre France/Europe/Monde." },
    { q: "Seulement une app ?", a: "Non, aussi un média engagé." },
    { q: "Où suivre ?", a: "@tobefather.off (IG/LinkedIn/Facebook/TikTok)." },
    { q: "Témoignages ?", a: "Oui, au centre du projet." },
    { q: "Podcast/YouTube ?", a: "Prévu (YouTube/Spotify/Deezer)." },
    { q: "Quels pros ?", a: "Médecins & spécialistes en activité (voir story PRO TBF)." },
    { q: "Liés à des mutuelles/institutions ?", a: "Pas encore, en travail." },
    { q: "Entreprises ?", a: "Oui, avantage RH possible." },
    { q: "Pro de santé ?", a: "Oui: contact@tobefather.com." },
    { q: "Données protégées ?", a: "Oui, priorité absolue; jamais revendues sans accord." },
    { q: "RGPD ?", a: "Oui, respect strict." },
    { q: "Partage d’infos perso ?", a: "Non, sauf choix explicite (ex. autre parent)." },
    { q: "Anonymat ?", a: "Non (app personnalisée), mais données sécurisées." },
    { q: "International ?", a: "Oui, progressivement avec experts locaux." },
    { q: "Traductions ?", a: "Anglais, espagnol, allemand (priorité)." },
    { q: "Version web ?", a: "Pas au début; installation requise." },
    { q: "Couples séparés ?", a: "Oui, prévu." }
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faq.slice(0, 20).map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  };

  return (
    <main id="content">
      {/* HERO */}
      <section className="relative section gradient-hero overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="container-12 flex flex-col items-center text-center"
        >
          <p className="badge mt-6">Lancement: juillet 2026 · iOS & Android</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold mt-6">La première application copilote de la paternité.</h1>
          <p className="text-white/85 mt-4 max-w-2xl">
            To Be Father accompagne les futurs et jeunes pères, dès l’annonce de la grossesse jusqu’aux premières années de l’enfant.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="#waitlist" className="btn btn-primary">Rejoindre la liste d’attente</a>
            <a href="#media" className="btn btn-ghost">Découvrir le média</a>
          </div>
          <div className="mt-8 flex gap-3">
            <span className="badge">iOS & Android</span>
            <span className="badge">Lancement: juillet 2026</span>
          </div>
          <div className="absolute -z-10 inset-0 opacity-20 animate-slowGradient" aria-hidden="true"></div>
        </motion.div>
        <div className="container-12 mt-12 grid grid-cols-2 md:grid-cols-4 gap-3">
          {["IA spécialisée","Checklists & rappels personnalisés","Conseils médicaux, juridiques et pratiques","Soutien émotionnel"].map((txt,i)=>(
            <div key={i} className="badge justify-center">{txt}</div>
          ))}
        </div>
      </section>

      {/* Application */}
      <section id="application" className="section">
        <SectionHeader
          kicker="📱 L’Application To Be Father"
          title="Votre copilote de la paternité"
          subtitle="IA spécialisée, conseils experts et checklists personnalisées."
        />
        <div className="container-12 grid md:grid-cols-2 gap-6">
          <div className="card p-6">
            <p>To Be Father est la première application copilote de la paternité. Grâce à une IA spécialisée, elle accompagne les futurs et jeunes pères dès l’annonce de la grossesse jusqu’aux premières années de l’enfant.</p>
            <ul className="mt-4 space-y-2">
              <li className="flex gap-3"><CheckCircle2 className="text-success" /> Conseils médicaux, juridiques et pratiques</li>
              <li className="flex gap-3"><CheckCircle2 className="text-success" /> Checklists et rappels personnalisés</li>
              <li className="flex gap-3"><CheckCircle2 className="text-success" /> Soutien émotionnel et (à terme) espace communautaire</li>
            </ul>
            <p className="mt-4 badge">Sortie prévue: juillet 2026 · iOS & Android</p>
          </div>
          <div className="card p-6">
            <SectionHeader kicker="Fonctionnalités clés" title="Tout pour être prêt" />
            <div className="grid grid-cols-2 gap-4">
              {[
                {icon: GraduationCap, label: "IA personnalisée"},
                {icon: ShieldCheck, label: "Suivi & checklists"},
                {icon: Users, label: "Communauté (prévu)"},
                {icon: ShieldCheck, label: "Conseils en temps réel"}
              ].map((it,i)=> (
                <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3 hover:scale-105 transition">
                  <it.icon /> <span>{it.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Média */}
      <section id="media" className="section">
        <SectionHeader kicker="📰 Le Média To Be Father" title="Un média engagé" subtitle="Tabous brisés, témoignages et experts." />
        <div className="container-12 grid md:grid-cols-2 gap-6">
          <div className="card p-6">
            <p>Plus qu’une app, To Be Father est aussi un média engagé. Nous brisons les tabous, partageons des témoignages et donnons la parole aux experts.</p>
            <ul className="mt-4 list-disc list-inside text-white/80">
              <li>Interviews de spécialistes</li>
              <li>Réels éducatifs et inspirants</li>
              <li>Contenus dédiés aux papas et à leur vie pro/perso</li>
            </ul>
            <a className="btn btn-ghost mt-4" href="https://www.instagram.com/tobefather.off" target="_blank" rel="noopener">Suivre @tobefather.off</a>
          </div>
          <TestimonialSlider />
        </div>
      </section>

      {/* Vision & valeurs */}
      <section className="section">
        <SectionHeader title="Pourquoi To Be Father ? (Vision & valeurs)" />
        <div className="container-12 grid md:grid-cols-4 gap-4">
          {[
            {t:"Constat", d:"175 millions d’hommes deviennent pères chaque année, mais trop peu d’outils leur sont dédiés."},
            {t:"Objectif", d:"Permettre aux pères de se sentir utiles, importants et soutenus."},
            {t:"Égalité parentale", d:"Parentalité équilibrée et partagée: une nécessité pour le bien-être de tous."},
            {t:"Ambition", d:"Convaincre en France, Europe et monde que la paternité mérite un soutien concret."}
          ].map((c,i)=> (
            <div key={i} className="card p-5 hover:shadow-lg transition hover:scale-[1.02]">
              <h3 className="font-display font-semibold">{c.t}</h3>
              <p className="text-white/80 mt-2">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pour qui */}
      <section className="section">
        <SectionHeader title="Pour qui ?" />
        <div className="container-12 grid md:grid-cols-3 gap-6">
          <div className="card p-6 md:col-span-2">
            <p>À tous les pères: seuls, en couple, mariés, homosexuels… Application multiculturelle et personnalisée. Utile aussi pour les mamans (rééquilibrage de la charge mentale).</p>
            <p className="badge mt-4">Déjà papa ? Oui, l’app s’adapte à votre situation.</p>
          </div>
          <div className="card p-6">
            <h3 className="font-display font-semibold">Médias & réseaux</h3>
            <p className="text-white/80 mt-2">Depuis septembre 2025, To Be Father est aussi un média présent sur Instagram, LinkedIn, Facebook et TikTok: @tobefather.off.</p>
            <div className="mt-3 flex gap-3">
              <a className="btn btn-ghost" href="https://www.instagram.com/tobefather.off" target="_blank">Instagram</a>
              <a className="btn btn-ghost" href="https://www.linkedin.com" target="_blank">LinkedIn</a>
            </div>
          </div>
        </div>
      </section>

      {/* Prix */}
      <section id="prix" className="section">
        <SectionHeader title="Prix & abonnements" />
        <div className="container-12">
          <PricingTable />
          <div id="waitlist" className="mt-8 card p-6">
            <h3 id="leadFormTitle" className="font-display text-2xl font-bold">Être informé du lancement</h3>
            <LeadForm />
          </div>
        </div>
      </section>

      {/* Partenariats */}
      <section id="partenariats" className="section">
        <SectionHeader title="Partenariats & experts" />
        <div className="container-12 grid md:grid-cols-2 gap-6">
          <div className="card p-6">
            <p>Nous collaborons avec des médecins et spécialistes (obstétriciens, sages-femmes, psychologues, sexologues, juristes…). Découvrez-les dans la story à la une “PRO TBF” sur Instagram.</p>
            <p className="mt-3">Entreprises & institutions: contactez-nous pour proposer To Be Father à vos équipes. Partenariats mutuelles/institutions à venir (congé paternité, coûts famille…).</p>
          </div>
          <div className="card p-6">
            <h3 className="font-display font-semibold">Proposer TBF à vos salariés</h3>
            <p className="text-white/80 mt-2">Contactez-nous et parlons partenariat.</p>
            <a href="#contact" className="btn btn-primary mt-4">Nous contacter</a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section">
        <SectionHeader title="FAQ" />
        <div className="container-12">
          <FAQAccordion items={faq} />
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <SectionHeader title="Contact" />
        <div className="container-12 grid md:grid-cols-2 gap-6">
          <div className="card p-6">
            <p>Email: <a className="underline" href="mailto:contact@tobefather.com">contact@tobefather.com</a></p>
            <p className="mt-2">Entreprises / institutions / professionnels de santé: parlons partenariat.</p>
          </div>
          <div className="card p-6">
            <form action="mailto:contact@tobefather.com" method="post" className="space-y-3">
              <input required name="name" placeholder="Nom" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10" />
              <input required type="email" name="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10" />
              <input required name="subject" placeholder="Sujet" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10" />
              <textarea required name="message" placeholder="Message" rows={5} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10"></textarea>
              <label className="flex gap-2 text-sm text-white/80">
                <input type="checkbox" required aria-required="true" /> J’accepte la <a className="underline ml-1" href="/confidentialite" target="_blank" rel="noopener">politique de confidentialité</a>.
              </label>
              <button className="btn btn-primary">Envoyer</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="section border-t border-white/10">
        <div className="container-12 grid md:grid-cols-4 gap-6 text-sm">
          <div>
            <h3 className="font-display font-semibold text-lg">To Be Father</h3>
            <p className="text-white/70 mt-2">© To Be Father</p>
          </div>
          <div className="space-y-2">
            <a href="/">Accueil</a><br/>
            <a href="#application">Application</a><br/>
            <a href="#media">Média</a><br/>
            <a href="#prix">Prix</a>
          </div>
          <div className="space-y-2">
            <a href="#faq">FAQ</a><br/>
            <a href="#partenariats">Partenariats</a><br/>
            <a href="#contact">Contact</a>
          </div>
          <div className="space-y-2">
            <a href="/confidentialite">RGPD & Politique de confidentialité</a><br/>
            <a href="/mentions-legales">Mentions légales</a><br/>
            <a href="/cgu">CGU</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
