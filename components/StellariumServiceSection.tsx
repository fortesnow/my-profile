import React from "react"

import { TextGlitch } from "@/components/ui/text-glitch-effect"

export const StellariumServiceSection: React.FC = () => {
  return (
    <section className="mt-16 mb-8" id="services">
      <div className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-slate-950/60 px-6 py-16 shadow-2xl backdrop-blur-xl sm:px-10">
        <div className="pointer-events-none absolute inset-0 opacity-60 [background:radial-gradient(circle_at_center,_rgba(56,189,248,0.25),_transparent_65%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(56,189,248,0.12)_0%,rgba(168,85,247,0.08)_50%,rgba(14,165,233,0.12)_100%)]" />
        <div className="relative flex flex-col items-center gap-8">
          <TextGlitch
            text="SERVICE"
            hoverText="VIEW SERVICES"
            href="/services"
            className="items-center text-center uppercase tracking-[0.35em] text-white !text-[min(20vw,4.5rem)] sm:!text-[min(14vw,5.5rem)] lg:!text-[min(10vw,6rem)]"
          />
        </div>
      </div>
    </section>
  )
}
