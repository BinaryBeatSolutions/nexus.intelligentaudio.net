import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accessibility, Mic, Zap, ShieldCheck,Globe, ArrowRight } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function Home() {
  return (

     <div className="flex items-center justify-center bg-zinc-50 font-sans">

      <main className="flex  w-full max-w-4xl flex-col items-center justify-center py-8 px-8  sm:items-start text-center sm:text-left gap-12">

        <Badge variant="outline" className="px-4 py-1 border-blue-200 text-blue-700 font-mono text-[10px] tracking-[0.2em] uppercase">
          Infrastruktur for universell utforming
        </Badge>

        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-slate-950">
          NEXUS<span className="text-blue-600">.</span>
        </h1>

        <p className="max-w-2xl text-xl md:text-2xl text-slate-600 font-light leading-relaxed">
          Vi bygger verdens første <span className="text-slate-950 font-medium italic underline decoration-blue-500/30">sanntids-bro</span> mellom stemme og digital skaperglede. Utviklet for å fjerne tekniske barrierer.
        </p>

              <section className="max-w-6xl mx-auto py-8">
                  <div className="grid grid-cols-1 md:grid-cols-6 gap-6">

                      {/* BOX 1: UNIVERSELL UTFORMING (Stor fokus-boks) */}
                      {/* BOX 1: VOICE-TO-COMMAND (Hovedfokus) */}
                      <div className="md:col-span-4 p-10 bg-gray-100 border-slate-200 rounded-sm flex flex-col justify-between group hover:border-blue-500/30 transition-all">
                          <div className="space-y-6">
                              <div className="w-12 h-12 bg-blue-50 rounded-sm flex items-center justify-center">
                                  <Mic className="w-6 h-6 text-blue-600" />
                              </div>
                              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                                  Fra <span className="text-blue-600 italic">tale</span> til umiddelbar <span className="text-blue-600 italic">handling.</span>
                              </h2>
                              <p className="text-slate-500 text-lg leading-relaxed max-w-2xl font-light">
                                  NEXUS oversetter komplekse stemme-intents til presise systemkommandoer på under ett millisekund.
                                  Ved å fjerne mus og tastatur som mellomledd, kan hvem som helst styre profesjonelle
                                  systemer med kun stemmen som verktøy.
                              </p>
                          </div>

                          {/* Din originaltekst som en kvalitetsgaranti / sitat */}
                          <div className="mt-12 p-4 bg-slate-50 rounded-sm border-l-4 border-blue-500">
                              <p className="text-xs text-slate-600 italic font-medium leading-relaxed">
                                  "Dette er demokratisering av skaperglede – vi fjerner de fysiske barrierene
                                  og sikrer full universell utforming (UU) i for eks. profesjonell musikkproduksjon."
                              </p>
                          </div>
                      </div>

                      {/* BOX 2: EKSTREM YTELSE (NANO Standard) */}
                      <div className="md:col-span-2 p-8 bg-slate-950 text-white border-none rounded-sm flex flex-col justify-between shadow-2xl">
                          <div className="space-y-4">
                              <Zap className="w-6 h-6 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                              <h3 className="text-xl font-bold tracking-tight">NANO Standard</h3>
                              <p className="text-slate-400 text-sm leading-relaxed">
                                  Zero-allocation arkitektur og rå minnehåndtering sikrer at systemet aldri
                                  nøler. Når hvert millisekund teller for brukeren, leverer vi nanosekunder.
                              </p>
                          </div>
                          <div className="mt-8 pt-4 border-t border-slate-800">
                              <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest">Latency: &lt; 1ms</span>
                          </div>
                      </div>

                      {/* BOX 3: GLOBAL SYNK (Cloud Edge) */}
                      <div className="md:col-span-3 p-8 bg-white border-slate-200 rounded-sm flex flex-col gap-4">
                          <Globe className="w-6 h-6 text-slate-400" />
                          <h3 className="text-xl font-bold text-slate-900 leading-tight">Globalt Bibliotek</h3>
                          <p className="text-slate-500 text-sm leading-relaxed">
                              Alle kommandoer og definisjoner synkroniseres lynraskt via <strong>Vercel Edge</strong>.
                              En løsning utviklet i ett miljø blir umiddelbart tilgjengelig for brukere over hele verden.
                          </p>
                      </div>

                      {/* BOX 4: KOMMUNE & INVESTERING */}
                      <Card className="md:col-span-3 p-8 bg-blue-600 text-white border-none rounded-sm flex flex-col justify-center text-center space-y-4">
                          <h3 className="text-2xl font-bold tracking-tight">Klar for implementering?</h3>
                          <p className="text-blue-100 text-sm">
                              Vi søker partnere for pilottesting i kommunal sektor og velferdsteknologi.
                          </p>
                          <button className="mx-auto mt-4 px-6 py-2 bg-white text-blue-600 font-bold rounded-sm text-sm hover:bg-blue-50 transition-colors">
                              Kontakt oss for demo
                          </button>
                      </Card>

                  </div>
              </section>    


              {/* ARBEIDSFLYT: FRA TANKER TIL HANDLING */}
            <section className="max-w-5xl mx-auto px-6 py-24 border-t border-slate-100">
              <div className="text-center space-y-4 mb-16">
                <h3 className="text-blue-600 font-mono text-[10px] tracking-[0.4em] uppercase font-bold text-center">
                  Arbeidsflyt.
                </h3>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-slate-950 text-center">
                  Fra tanke til <span className="italic text-slate-400 font-light underline decoration-blue-500/20">handling.</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
                {/* STEG 01 */}
                <div className="space-y-6 group">
                  <div className="text-6xl font-black text-blue-500  transition-colors duration-500">
                    01
                  </div>
                  <h4 className="text-xl font-bold text-slate-950 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                    Nevral Tolking
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed font-light">
                    Stemmekommandoen fanges opp lokalt og tolkes av <strong>Neural Engine</strong>. Vi forstår intensjonen bak ordene dine, ikke bare lydbølgene.
                  </p>
                </div>
    
                {/* STEG 02 */}
                <div className="space-y-6 group border-t md:border-t-0 md:border-l border-slate-100 md:pl-12 pt-8 md:pt-0">
                          <div className="text-6xl font-black text-blue-500  transition-colors duration-500">
                    02
                  </div>
                  <h4 className="text-xl font-bold text-slate-950 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                    NEXUS Oppslag
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed font-light">
                    Intensjonen mappes mot <strong>Shared Memory Registry</strong>. Ved å bruke nanosekunder på oppslaget, fjernes all merkbar forsinkelse.
                  </p>
                </div>

                {/* STEG 03 */}
                <div className="space-y-6 group border-t md:border-t-0 md:border-l border-slate-100 md:pl-12 pt-8 md:pt-0">
                          <div className="text-6xl font-black text-blue-500  transition-colors duration-500">
                    03
                  </div>
                  <h4 className="text-xl font-bold text-slate-950 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                    Direkte Handling
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed font-light">
                        Kommandoen utføres umiddelbart i ditt digitale miljø  .
                        NEXUS fjerner behovet for mus og tastatur, og lar stemmen din styre teknologien i sanntid.

                  </p>
                </div>
              </div>
            </section>

      </main>
    </div>
  );
}
