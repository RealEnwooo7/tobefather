"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export type FAQ = { q: string; a: string };

export default function FAQAccordion({ items }: { items: FAQ[] }){
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-3">
      {items.map((it, i) => (
        <div key={i} className="card">
          <button
            className="w-full flex items-center justify-between px-4 py-3"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="text-left font-medium">{it.q}</span>
            <ChevronDown className={`transition ${open === i ? "rotate-180" : ""}`} />
          </button>
          {open === i && <div className="px-4 pb-4 text-white/80">{it.a}</div>}
        </div>
      ))}
    </div>
  )
}
