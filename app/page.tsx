import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accessibility, Mic, Zap, ShieldCheck } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-4xl flex-col items-center justify-center py-32 px-8 bg-white dark:bg-black sm:items-start text-center sm:text-left gap-12">

        <Badge variant="outline" className="px-4 py-1 border-blue-200 text-blue-700 bg-blue-50/50 font-mono text-[10px] tracking-[0.2em] uppercase">
          Infrastruktur for universell utforming
        </Badge>

        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-slate-950 dark:text-white">
          NEXUS<span className="text-blue-600">.</span>
        </h1>

        <p className="max-w-2xl text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-light leading-relaxed">
          Vi bygger verdens første <span className="text-slate-950 dark:text-white font-medium italic underline decoration-blue-500/30">sanntids-bro</span> mellom stemme og digital skaperglede. Utviklet for å fjerne tekniske barrierer.
        </p>

      
      </main>
    </div>
  );
}
