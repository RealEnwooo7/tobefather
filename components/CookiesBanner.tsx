"use client";
import { useEffect, useState } from "react";

export default function CookiesBanner(){
  const [show, setShow] = useState(false);
  useEffect(() => {
    const ok = localStorage.getItem("tbf_cookies_ok");
    if (!ok) setShow(true);
  }, []);
  if (!show) return null;
  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-lg z-50 card p-4">
      <p className="text-sm text-white/80">
        Nous utilisons des cookies d’analytics anonymisés pour améliorer l’expérience.{" "}
        <a href="/confidentialite" className="underline">En savoir plus</a>.
      </p>
      <div className="mt-3 flex gap-3">
        <button className="btn btn-primary" onClick={() => { localStorage.setItem("tbf_cookies_ok", "1"); setShow(false);}}>Accepter</button>
        <button className="btn btn-ghost" onClick={() => setShow(false)}>Refuser</button>
      </div>
    </div>
  )
}
