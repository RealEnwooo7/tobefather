"use client";
import { useState, useEffect } from "react";

const data = [
  { name: "Alexandre", quote: "Enfin un projet pensé pour les pères. Hâte de l’utiliser au quotidien !" },
  { name: "Mehdi", quote: "Clair, rassurant, utile. J’aurais aimé l’avoir pour mon premier enfant." },
  { name: "Thomas", quote: "Le média est top, ça dédramatise et informe sans juger." },
  { name: "Julien", quote: "Des checklists concrètes = zéro oubli le jour J." }
];

export default function TestimonialSlider(){
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const i = setInterval(() => setIdx(v => (v + 1) % data.length), 5000);
    return () => clearInterval(i);
  }, []);
  return (
    <div className="card p-6">
      <div className="transition animate-fadeUp">
        <p className="text-xl md:text-2xl font-display">“{data[idx].quote}”</p>
        <p className="mt-3 text-white/70">— {data[idx].name}</p>
      </div>
      <div className="flex gap-2 mt-4">
        {data.map((_, i) => (
          <button key={i} aria-label={`Témoignage ${i+1}`} className={`h-2 w-6 rounded-full ${i===idx ? "bg-white" : "bg-white/30"}`} onClick={() => setIdx(i)}></button>
        ))}
      </div>
    </div>
  )
}
