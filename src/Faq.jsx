import React, { useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Silk from "./components/Silk/Silk.tsx";
import GlassSurface from "./components/Glass-Surface/Glass-Surface.tsx";

/* Données */
const FAQ_DATA = [
  {
    title: "Quand sortira l’application ?",
    body: "Objectif : juillet 2026. Une sortie stable, testée et sécurisée pour garantir fiabilité et utilité.",
  },
  {
    title: "Sera-t-elle disponible sur iOS et Android ?",
    body: "Oui. L’application sera disponible sur l’App Store et Google Play.",
  },
  {
    title: "Puis-je l’utiliser dès la grossesse ?",
    body: "Oui. To Be Father accompagne dès l’annonce de la grossesse et jusqu’aux premières années de l’enfant.",
  },
  {
    title: "Y aura-t-il un espace d’échange entre pères ?",
    body: "Oui. C’est une fonctionnalité prévue à terme afin de permettre aux pères d’échanger et de se soutenir mutuellement.",
  },
  {
    title: "Existe-t-il une version gratuite ?",
    body: "Oui. La version gratuite donne accès aux fonctionnalités essentielles et à l’IA jusqu’à 5 questions par jour.",
  },
  {
    title: "Quel sera le prix de la version Premium ?",
    body: "4,39 € par mois ou 35,99 € par an, soit une réduction de 20 % sur l’abonnement annuel.",
  },
  {
    title: "Que comprend la version Premium ?",
    body: "Accès illimité à l’IA personnalisée, suivi évolutif, contenus exclusifs (vidéos, podcasts, articles, guides), outils pratiques et accès prioritaire aux experts partenaires.",
  },
  {
    title: "Y aura-t-il une offre annuelle ?",
    body: "Oui. Un abonnement annuel sera disponible à 35,99 € (3,59 €/mois).",
  },
  {
    title: "À qui s’adresse To Be Father ?",
    body: "À tous les pères : seuls, en couple, mariés, homosexuels ou séparés. L’application s’adapte à chaque situation et culture.",
  },
  {
    title: "Est-ce aussi utile pour les mamans ?",
    body: "Oui. En soutenant les pères, To Be Father soutient toute la famille et contribue à un meilleur équilibre parental.",
  },
  {
    title: "Est-ce que To Be Father est utile si je suis déjà papa ?",
    body: "Oui. L’application s’adapte à chaque parcours, que vous soyez futur père ou déjà papa.",
  },
  {
    title: "En quoi To Be Father est différent ?",
    body: "C’est la première application pensée pour les pères, combinant IA émotionnelle et accompagnement personnalisé selon chaque situation.",
  },
  {
    title: "Pourquoi avoir créé To Be Father ?",
    body: "175 millions d’hommes deviennent pères chaque année, mais peu d’outils leur sont dédiés. To Be Father veut combler ce manque et revaloriser le rôle du père.",
  },
  {
    title: "Quel est votre objectif principal ?",
    body: "Permettre aux pères de se sentir utiles, importants et soutenus dans leur rôle au sein de la famille.",
  },
  {
    title: "Quelle est votre position sur l’égalité parentale ?",
    body: "Nous défendons une parentalité équilibrée et partagée, essentielle au bien-être des enfants, des mères et des pères.",
  },
  {
    title: "Quels sont vos projets à long terme ?",
    body: "Convaincre les familles du monde entier que la paternité mérite un soutien concret et durable.",
  },
  {
    title: "To Be Father est-il seulement une application ?",
    body: "Non. C’est aussi un média engagé présent sur Instagram, TikTok, LinkedIn et Facebook.",
  },
  {
    title: "Quels thèmes aborde votre média ?",
    body: "Huit domaines clés : éducation, psychologie, nutrition, sommeil, juridique, social, économique et médical.",
  },
  {
    title: "Partagez-vous des témoignages de pères ?",
    body: "Oui. Les pères sont au cœur du projet, avec des témoignages, expériences et conseils partagés.",
  },
  {
    title: "Allez-vous lancer un podcast ou une chaîne YouTube ?",
    body: "Oui. Un format vidéo et audio est prévu sur YouTube, Spotify et Deezer.",
  },
  {
    title: "Avec quels professionnels travaillez-vous ?",
    body: "Nous collaborons avec des médecins, psychologues, obstétriciens, sages-femmes, sexologues et juristes.",
  },
  {
    title: "Êtes-vous liés à des mutuelles ou institutions ?",
    body: "Pas encore, mais nous travaillons à établir des partenariats pour promouvoir des sujets comme le congé paternité.",
  },
  {
    title: "Des entreprises peuvent-elles proposer To Be Father à leurs salariés ?",
    body: "Oui. L’application pourra être intégrée comme avantage RH pour les salariés.",
  },
  {
    title: "Peut-on collaborer avec vous comme professionnel de santé ?",
    body: "Oui. Les professionnels peuvent nous contacter à contact@tobefather.com.",
  },
  {
    title: "Mes données sont-elles protégées ?",
    body: "Oui. La sécurité et la confidentialité des données sont une priorité absolue. Aucune donnée ne sera revendue.",
  },
  {
    title: "Respectez-vous le RGPD ?",
    body: "Oui. To Be Father respecte les normes européennes du RGPD en matière de protection des données.",
  },
  {
    title: "Mes informations personnelles seront-elles partagées ?",
    body: "Non, sauf si vous choisissez de les partager (par exemple avec l’autre parent via une app complémentaire).",
  },
  {
    title: "Puis-je utiliser l’app anonymement ?",
    body: "Non. L’application est personnalisée, mais vos données restent totalement confidentielles.",
  },
  {
    title: "L’app sera-t-elle disponible à l’international ?",
    body: "Oui, mais progressivement, avec adaptation culturelle et experts locaux.",
  },
  {
    title: "Prévoyez-vous une traduction en plusieurs langues ?",
    body: "Oui. Les versions anglaise, espagnole et allemande seront les premières.",
  },
  {
    title: "Y aura-t-il une version web ?",
    body: "Pas dans un premier temps. L’application sera mobile uniquement au lancement.",
  },
  {
    title: "Aurez-vous une section pour les couples séparés ?",
    body: "Oui. Des parcours adaptés sont prévus pour les familles séparées ou recomposées.",
  },
];


/* Item accordéon */
function FAQItem({ title, children }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const maxH = open && ref.current ? ref.current.scrollHeight + "px" : "0px";

  return (
    <div
      style={{
        borderRadius: 12,
        background: "rgba(255,255,255,0.08)",
        border: "1px solid rgba(255,255,255,0.12)",
        backdropFilter: "blur(6px)",
        padding: 0,
      }}
    >
      <button
        onClick={() => setOpen(v => !v)}
        aria-expanded={open}
        style={{
          width: "100%",
          textAlign: "left",
          background: "transparent",
          border: 0,
          padding: "16px 18px",
          color: "#e8f1ff",
          fontWeight: 700,
          display: "grid",
          gridTemplateColumns: "1fr auto",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <span>{title}</span>
        <span
          aria-hidden
          style={{
            width: 20,
            height: 20,
            display: "inline-block",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform .2s ease",
          }}
        >
          ▼
        </span>
      </button>

      <div
        style={{
          overflow: "hidden",
          transition: "max-height .28s ease, opacity .28s ease",
          maxHeight: maxH,
          opacity: open ? 1 : 0,
        }}
      >
        <div ref={ref} style={{ padding: "0 18px 16px 18px", color: "#cfe6ff" }}>
          {children}
        </div>
      </div>
    </div>
  );
}

/* Page */
export default function Faq() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return FAQ_DATA;
    return FAQ_DATA.filter(x => x.title.toLowerCase().includes(s));
  }, [q]);

  return (
    <div style={{ minHeight: "100svh", display: "flex", flexDirection: "column", position: "relative" }}>
      {/* BG soyeux */}
      <div className="site-bg">
        <Silk
          speed={5}
          scale={1}
          color="#5888a7ff"
          noiseIntensity={0.5}
          rotation={0}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        />
      </div>

      {/* Navbar identique Home */}
      <header className="navbar">
        <div className="nav-wrap">
          <Link to="/" className="brand" aria-label="Accueil">
            <img src="/assets/images/logo.png" alt="To Be Father" className="brand-img" />
          </Link>

          <button
            className={`burger ${menuOpen ? "is-open" : ""}`}
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(v => !v)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`nav-links ${menuOpen ? "show" : ""}`} onClick={() => setMenuOpen(false)}>
            <Link to="/">Accueil</Link>
            <Link to="/#apropos">À propos</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/#prix">Prix</Link>
          </nav>
        </div>
      </header>

      <div className={`nav-backdrop ${menuOpen ? "show" : ""}`} onClick={() => setMenuOpen(false)} />

      {/* Contenu */}
      <main style={{ padding: "48px 0" }}>
        <section id="faq">
          {/* Mot géant en arrière-plan + header compact */}

          <div className="container pricing-header" style={{ position: "relative", zIndex: 1, marginBottom: 12 }}>
            <div className="pricing-bg-word" aria-hidden style={{ userSelect: "none" }}>
              FAQ
            </div>

            <h2 style={{ margin: 0, fontWeight: 900 }}>Questions Souvent Posées</h2>
            <p style={{ marginTop: 8, color: "#d7e9ffb3" }}>
              Les réponses rapides aux questions fréquentes.
            </p>
          </div>

          {/* Carte shell centrée */}
          <div style={{ maxWidth: 800, margin: "0 auto", paddingInline: 16 }}>
            <div
              style={{
                position: "relative",
                borderRadius: 16,
                padding: 20,
                overflow: "hidden",
                isolation: "isolate",
              }}
            >
              {/* Barre de recherche clean avec GlassSurface dessous */}
              <div
                style={{
                  position: "relative",
                  marginBottom: 16,
                  borderRadius: 12,
                  overflow: "hidden",
                  background: "rgba(255, 255, 255, 0.23)",
                  backdropFilter: "blur(16px) saturate(180%) brightness(1.1)",
                  WebkitBackdropFilter: "blur(16px) saturate(180%) brightness(1.1)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  boxShadow:
                    "inset 0 1px 0 rgba(255,255,255,0.25), 0 8px 24px rgba(0,0,0,0.2)",
                }}
              >
                <input
                  type="search"
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Rechercher une question…"
                  style={{
                    width: "100%",
                    padding: "12px 14px",
                    border: "none",
                    outline: "none",
                    background: "transparent",
                    color: "#ffffffff",
                    fontWeight: 600,
                    fontSize: "15px",
                    position: "relative",
                    zIndex: 1,
                    backdropFilter: "none",
                    WebkitBackdropFilter: "none",
                  }}
                />
                <style>
                  {`
    input::placeholder {
      color: rgba(232, 241, 255, 0.76);
      font-weight: 500;
    }
  `}
                </style>
              </div>


              {/* Liste d’items type Webflow */}
              <div style={{ display: "grid", gap: 12, position: "relative", zIndex: 1 }}>
                {(filtered.length ? filtered : [{ title: "Aucun résultat", body: "Essaie un autre mot-clé." }]).map(x => (
                  <FAQItem key={x.title} title={x.title}>
                    <p style={{ margin: 0 }}>{x.body}</p>
                  </FAQItem>
                ))}
              </div>

              {/* Liseré glass discret du shell */}
              {/* <GlassSurface
                className="glass-surface-bg"
                borderRadius={20}
                borderWidth={1}
                blur={12}
                opacity={0.9}
                brightness={1.08}
                backgroundOpacity={0.06}
                style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
              /> */}
            </div>

            {/* CTA retour */}
            <div style={{ textAlign: "center", marginTop: 24, position: "relative", zIndex: 1 }}>
              <Link
               to="/" className="cta primary"
               onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Retour à l’accueil
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer collé bas */}
      <footer className="footer" style={{ marginTop: "auto" }}>
        <div className="container footer-grid">
          <p>© {new Date().getFullYear()} To Be Father</p>
          <nav className="footer-links">
            <Link to="/#apropos">À propos</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/#prix">Prix</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
