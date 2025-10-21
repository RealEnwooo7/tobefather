// App.jsx
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import "./Media.css"

import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

import Silk from "./components/Silk/Silk.tsx";
import GlassSurface from "./components/Glass-Surface/Glass-Surface.tsx";
import SpotlightCard from "./components/SpotLight/SpotLight.tsx";
import InfiniteScroll from "./components/Infinite-Scroll/Infinite-Scroll.tsx";
import LogoLoop from "./components/Logo-Loop/Logo-Loop.tsx"

import Home from "./App.jsx";
import Faq from "./Faq.jsx";

/* --- Données FAQ --- */
const items = [
  {
    content: (
      <>
        <h4>Quand sortira l’application ?</h4>
        <p>
          Objectif : <strong>juillet 2026</strong>. Une sortie stable et testée pour garantir fiabilité, sécurité et utilité.
        </p>
      </>
    ),
  },
  {
    content: (
      <>
        <h4>Sera-t-elle disponible sur iOS et Android ?</h4>
        <p>
          Oui. Elle sera disponible sur <strong>App Store</strong> et <strong>Google Play</strong>.
        </p>
      </>
    ),
  },
  {
    content: (
      <>
        <h4>Puis-je l’utiliser dès la grossesse ?</h4>
        <p>
          Oui, To Be Father accompagne dès <strong>l’annonce de la grossesse</strong> jusqu’aux premières années de vie de l’enfant.
        </p>
      </>
    ),
  },
  {
    content: (
      <>
        <h4>Y aura-t-il un espace d’échange entre pères ?</h4>
        <p>Oui, c’est une fonctionnalité prévue à terme pour favoriser les échanges entre pères.</p>
      </>
    ),
  },
  {
    content: (
      <>
        <h4>Existe-t-il une version gratuite ?</h4>
        <p>
          Oui. Accès aux fonctionnalités essentielles et à l’IA jusqu’à <strong>5 questions par jour</strong>.
        </p>
      </>
    ),
  },
];

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];



/* Contenu de la page d’accueil (inchangé) */
function HomeInline() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Background */}
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

      {/* Navbar */}
      <header className="navbar">
        <div className="nav-wrap">
          <a href="#top" className="brand" aria-label="Accueil">
            <img src="/assets/images/logo.png" alt="To Be Father" className="brand-img" />
          </a>

          <button
            className={`burger ${menuOpen ? "is-open" : ""}`}
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`nav-links ${menuOpen ? "show" : ""}`} onClick={() => setMenuOpen(false)}>
            <a href="#top">Accueil</a>
            <a href="#apropos">À propos</a>
            <a href="#faq">FAQ</a>
            <a href="#prix">Prix</a>
          </nav>
        </div>
      </header>

      {/* Backdrop mobile */}
      <div className={`nav-backdrop ${menuOpen ? "show" : ""}`} onClick={() => setMenuOpen(false)} />


      {/* Page */}
      <div className="app">
        <main>
          {/* Hero */}
          <section className="hero" id="top">
            <div className="hero-inner">
              <img className="logo" src="/assets/images/logo.png" alt="To Be Father" />

              <span className="gradient-text">La première application qui réinvente la paternité</span>

              <div className="actions">
                <a href="#apropos" className="glass-button">
                  <span className="btn-label">À propos</span>
                  <GlassSurface
                    className="glass-bg"
                    borderRadius={10}
                    borderWidth={1.5}
                    blur={12}
                    opacity={0.9}
                    brightness={1.1}
                    backgroundOpacity={0.15}
                  />
                </a>

                <a href="#prix" className="glass-button">
                  <span className="btn-label">Voir les prix</span>
                  <GlassSurface
                    className="glass-bg"
                    borderRadius={10}
                    borderWidth={1.5}
                    blur={12}
                    opacity={0.9}
                    brightness={1.1}
                    backgroundOpacity={0.15}
                  />
                </a>
              </div>
            </div>
          </section>

          {/* À propos */}
          <section className="section about-section" id="apropos">
            <div className="container about-hero">
              <h2>Pourquoi To Be Father ?</h2>
              <p className="about-lead">
                Une application et un média pensés pour revaloriser la place du père, renforcer le lien familial et offrir un
                accompagnement bienveillant à chaque étape.
              </p>
            </div>

            <div className="container about-features">
              <div className="feature">
                <div className="glass-card featured">
                  <SpotlightCard spotlightColor="rgba(0,229,255,0.22)">
                    <div className="feature-inner">
                      {/* <img src="/assets/icons/brain-circuit.svg" alt="" aria-hidden="true" /> */}
                      <h3>IA personnalisée</h3>
                      <p>Un assistant qui comprend, oriente et soutient chaque père selon sa situation.</p>
                    </div>
                  </SpotlightCard>
                </div>
              </div>

              <div className="feature">
                <div className="glass-card featured">
                  <SpotlightCard spotlightColor="rgba(0,229,255,0.22)">
                    <div className="feature-inner">
                      {/* <img src="/assets/icons/users-group.svg" alt="" aria-hidden="true" /> */}
                      <h3>Communauté & experts</h3>
                      <p>Des pères, des témoignages, et des professionnels pour avancer ensemble.</p>
                    </div>
                  </SpotlightCard>
                </div>
              </div>

              <div className="feature">
                <div className="glass-card featured">
                  <SpotlightCard spotlightColor="rgba(0,229,255,0.45)">
                    <div className="feature-inner">
                      {/* <img src="/assets/icons/heart-pulse.svg" alt="" aria-hidden="true" /> */}
                      <h3>Bien-être familial</h3>
                      <p>Des outils pour équilibrer la vie de famille et renforcer la confiance.</p>
                    </div>
                  </SpotlightCard>
                </div>
              </div>
            </div>
          </section>

          {/* Pitch long */}
          <section className="section alt" id="apropos2">
            <div className="container">
              <h2 style={{ textAlign: "center", fontWeight: 900 }}>To Be Father</h2>
              <p style={{ textAlign: "center", color: "white" }}>
                To Be Father est une application et un média dédiés à la paternité moderne, pensés pour accompagner chaque père
                dès la grossesse jusqu’aux premières années de l’enfant.
              </p>

              <h4 style={{ fontWeight: 700, marginTop: "2rem" }}>- L’essence du projet</h4>
              <h5 style={{ color: "white", fontWeight: 400 }}>
                • Revaloriser la place du père<br />• Accompagner de la grossesse aux premières années<br />• Renforcer le lien
                familial
              </h5>

              <h4 style={{ fontWeight: 700, marginTop: "1.5rem" }}>- L’innovation</h4>
              <h5 style={{ color: "white", fontWeight: 400 }}>
                • IA émotionnelle et conseils personnalisés<br />• Suivi évolutif des besoins réels
              </h5>

              <h4 style={{ fontWeight: 700, marginTop: "1.5rem" }}>- L’application</h4>
              <h5 style={{ color: "white", fontWeight: 400 }}>
                • Espace clair et sécurisé<br />• Check-lists, calendrier, notifications<br />• Gratuit + Premium
              </h5>

              <h4 style={{ fontWeight: 700, marginTop: "1.5rem" }}>- Le média</h4>
              <h5 style={{ color: "white", fontWeight: 400 }}>
                • Instagram, LinkedIn<br />• Contenus accessibles et témoignages
              </h5>

              <h4 style={{ fontWeight: 700, marginTop: "1.5rem" }}>- La vision</h4>
              <h5 style={{ color: "white", fontWeight: 400 }}>
                • Soutenir les pères, c’est soutenir la famille<br />• Parentalité équilibrée et partagée
              </h5>
            </div>
          </section>

          {/* Prix */}
          <section className="section about-section" id="prix">
            <div className="pricing-bg-word" aria-hidden>
              PRIX
            </div>

            <div className="container pricing-header">
              <h2>Choisissez votre formule</h2>
              <p>Construisez votre parcours parental avec To Be Father.</p>
            </div>

            <div className="container pricing-grid two">
              {/* Free */}
              <div className="glass-card featured">
                {/* <GlassSurface
                  className="pricing-glass"
                  saturation={0.8}
                  opacity={100}
                  redOffset={10}
                  brightness={0.5}
                /> */}
                <div className="pricing-inner">
                  <div className="price">
                    <span className="amount">GRATUIT</span>
                  </div>
                  <ul className="features">
                    <li><i></i>IA: 5 questions par jour</li>
                    <li><i></i>Suivi grossesse et premières années</li>
                    <li><i></i>Contenus essentiels</li>
                    <li><i></i>Citation du jour, interface de base</li>
                  </ul>
                  <a className="cta primary">Arrive bientôt</a>
                </div>
              </div>

              {/* Premium */}
              <div className="glass-card featured">
                {/* <GlassSurface
                  className="pricing-glass"
                  saturation={0.8}
                  opacity={1}
                  redOffset={10}
                  brightness={0.5}
                /> */}
                <div className="pricing-inner">
                  <div className="price">
                    <h2
                      style={{
                        background: "linear-gradient(90deg, #5ba8ff, #bba4ff)",
                        WebkitBackgroundClip: "text",
                        color: "transparent",
                        fontWeight: 1000,
                        fontSize: 40
                      }}
                    >
                      PREMIUM
                    </h2>
                  </div>
                  <div className="price">
                    <span className="amount">€4.99</span>
                    <span className="per">/mo</span>
                    <span className="h10"> ou </span>
                    <span className="amount2">€35,99/an</span>
                    <span>(-20%)</span>
                  </div>
                  <ul className="features">
                    <li><i></i>IA illimitée (chat et vocal)</li>
                    <li><i></i>Suivi complet et évolutif</li>
                    <li><i></i>Contenus exclusifs</li>
                    <li><i></i>Outils avancés</li>
                    <li><i></i>Communauté</li>
                    <li><i></i>Stats et reco dynamiques</li>
                    <li><i></i>Accès prioritaire aux experts</li>
                    <li><i></i>Bêtas en avant-première</li>
                    <li><i></i>Support dédié</li>
                  </ul>
                  <a href="#top" className="cta primary">TBF Premium / Arrive bientôt</a>
                </div>
              </div>
            </div>
          </section>

          {/* MEDIA */}

          <section className="section about-section2" id="media">
            <div className="pricing-bg-word" aria-hidden>
              MEDIA
            </div>

            <div className="container media-header">
              <h2>Suivez-nous</h2>
              <p>Rejoignez la communauté To Be Father.</p>
            </div>

            <div className="media-links">
              <div className="social-buttons">
                <a
                  href="https://www.instagram.com/tobefather.off"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn insta"
                >
                  <img src="/assets/images/instagram.png" alt="Instagram" />
                  <span>@tobefather.off</span>
                </a>

                <a
                  href="https://www.linkedin.com/company/tobefather/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn linkedin"
                >
                  <img src="/assets/images/linkedin.png" alt="LinkedIn" />
                  <span>To-Be-Father</span>
                </a>
              </div>
            </div>
          </section>



          {/* FAQ */}
          <section className="section about-section" id="faq">
            <div className="pricing-bg-word" aria-hidden>
              FAQ
            </div>

            <div className="container pricing-header">
              <h2>Questions Souvent Posées</h2>
              <p></p>
            </div>

            <div style={{ marginBottom: "50px" }} className="container2">
              <InfiniteScroll
                items={items}
                isTilted={false}
                tiltDirection="left"
                autoplay={true}
                autoplaySpeed={0.75}
                autoplayDirection="up"
                pauseOnHover={true}
                negativeMargin="0rem"
              />
            </div>

            <div className="faq-cta">
              <Link
                to="/faq"
                className="cta primary"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                --- Page FAQ ---
              </Link>
            </div>

          </section>
        </main>

        <footer className="footer">
          <div className="container footer-grid">
            <p>© {new Date().getFullYear()} To Be Father</p>
            <nav className="footer-links">
              <a href="#apropos">À propos</a>
              <a href="#faq">FAQ</a>
              <a href="#prix">Prix</a>
            </nav>
          </div>
        </footer>
      </div>
    </>
  );
}

/* Routes au bon endroit */
export default function App() {
  return (
    <Routes>
      {/* Utilise le contenu ci-dessus comme page d’accueil */}
      <Route path="/" element={<HomeInline />} />
      {/* Ta page FAQ existante */}
      <Route path="/faq" element={<Faq />} />
    </Routes>
  );
}
