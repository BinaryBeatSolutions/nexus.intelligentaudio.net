import Link from "next/link"

export const Footer = () => {
  return (
    <footer className="w-full py-16 border-t bg-black">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        
        {/* LOGO & BRANDING */}
        <div className="space-y-4">
          <div className="text-xl font-bold tracking-tighter text-white">
            NEXUS<span className="text-blue-600">ENGINE</span>
          </div>
          <p className="text-xs text-slate-500 font-medium leading-relaxed max-w-[200px]">
            Infrastruktur for universell utforming og nevral lydbehandling.
          </p>
        </div>
        
        {/* NAVIGATION / LINKS */}
        <div className="flex flex-col gap-3 text-sm">
          <span className="text-slate-600 font-bold mb-2">Ressurser</span>
            <Link href="https://github.com/BinaryBeatSolutions/IntelligentAudio.NET" target="_blank" className="text-slate-500 hover:text-blue-600 transition-colors">GitHub Repository</Link>
                  <Link href="https://github.com/BinaryBeatSolutions/IntelligentAudio.NET/blob/master/ARCHITECT.md" target="_blank" className="text-slate-500 hover:text-blue-600 transition-colors">Teknisk Dokumentasjon</Link>
            <Link href="https://intelligentaudio.net" className="text-slate-500 hover:text-blue-600 transition-colors" target="_blank">IntelligentAudio.NET</Link>
        </div>

        {/* TECH STACK / METADATA */}
        <div className="md:text-right space-y-4">
          <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
            NEXUS Infrastructure v1.0   
          </div>
          <div className="flex md:justify-end gap-3 opacity-50 grayscale hover:grayscale-0 transition-all text-white">
             <span className="text-[10px] font-bold border border-slate-300 px-2 py-1 rounded-sm italic">.NET 10 LTS</span>
             <span className="text-[10px] font-bold border border-slate-300 px-2 py-1 rounded-sm italic">VERCEL EDGE</span>
          </div>
         <div className="flex flex-col">
         <div className="font-bold tracking-tighter text-[17px] leading-none text-white">IntelligentAudio<span className="text-blue-500">.NET</span></div>
         <span className="text-[8px] font-mono text-blue-500 tracking-[0.2em] leading-none mt-1 uppercase">Neural Harmonic Network</span></div>
         </div>





      </div>
    </footer>
  )
}