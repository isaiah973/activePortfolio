import { ArrowUp, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-950 px-5 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <a href="#home" className="inline-flex items-center gap-3 text-lg font-bold tracking-[-0.03em]"><span className="grid h-10 w-10 place-items-center rounded-full bg-white text-sm text-slate-950">AI</span>Adeola Isaiah</a>
            <p className="mt-6 max-w-md text-sm leading-7 text-white/50">Full-stack developer creating clear, reliable digital products from interface to infrastructure.</p>
          </div>
          <div className="grid grid-cols-2 gap-8 text-sm">
            <div><p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-white/35">Explore</p><div className="space-y-3">{[["About", "#about"], ["Work", "#portfolio"], ["Expertise", "#skills"], ["Contact", "#contact"]].map(([label, href]) => <a key={label} href={href} className="block text-white/65 transition hover:text-white">{label}</a>)}</div></div>
            <div><p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-white/35">Connect</p><div className="space-y-3"><a href="https://github.com/isaiah973" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/65 transition hover:text-white"><FaGithub /> GitHub</a><a href="mailto:adeolaisaiah01@gmail.com" className="flex items-center gap-2 text-white/65 transition hover:text-white">Email <ArrowUpRight size={14} /></a><a href="https://wa.me/2348089386770" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/65 transition hover:text-white">WhatsApp <ArrowUpRight size={14} /></a></div></div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-5 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Adeola Isaiah. Designed and built with care.</p>
          <a href="#home" className="inline-flex items-center gap-2 font-bold uppercase tracking-[0.14em] text-white/65 transition hover:text-white">Back to top <ArrowUp size={14} /></a>
        </div>
      </div>
    </footer>
  );
}
