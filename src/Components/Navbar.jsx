import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", id: "about" },
  { name: "Work", id: "portfolio" },
  { name: "Expertise", id: "skills" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    const sections = ["home", ...navLinks.map(({ id }) => id)]
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length) setActiveSection(visible[0].target.id);
      },
      { rootMargin: "-25% 0px -65% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => { observer.disconnect(); window.removeEventListener("scroll", handleScroll); };
  }, []);

  return (
    <nav aria-label="Main navigation" className={`sticky top-0 z-50 border-b transition-all duration-300 ${isScrolled ? "border-slate-200 bg-white/90 backdrop-blur-xl" : "border-transparent bg-[#f7f8fa]"}`}>
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <a href="#home" onClick={() => setMenuOpen(false)} className="flex items-center gap-3 font-bold tracking-[-0.03em] text-slate-950">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-slate-950 text-sm text-white">AI</span>
          <span>Adeola Isaiah</span>
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`} className={`relative py-2 text-sm font-semibold transition ${activeSection === link.id ? "text-teal-600" : "text-slate-500 hover:text-slate-950"}`}>
              {link.name}
              {activeSection === link.id && <span className="absolute inset-x-0 -bottom-[21px] h-0.5 bg-teal-500" />}
            </a>
          ))}
        </div>

        <a href="mailto:adeolaisaiah01@gmail.com" className="group hidden items-center gap-2 rounded-full bg-slate-950 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-teal-600 md:inline-flex">Start a project <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a>
        <button type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)} className="grid h-10 w-10 place-items-center rounded-full border border-slate-300 text-slate-900 md:hidden">{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
      </div>

      <div className={`overflow-hidden border-slate-200 bg-white transition-all duration-300 md:hidden ${menuOpen ? "max-h-96 border-t" : "max-h-0"}`}>
        <div className="space-y-1 px-5 py-5 sm:px-8">
          {navLinks.map((link, index) => (
            <a key={link.id} href={`#${link.id}`} onClick={() => setMenuOpen(false)} className="flex items-center justify-between border-b border-slate-100 py-4 text-xl font-semibold text-slate-950"><span>{link.name}</span><span className="text-xs text-slate-400">0{index + 1}</span></a>
          ))}
          <a href="mailto:adeolaisaiah01@gmail.com" className="mt-4 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white">Start a project <ArrowUpRight size={16} /></a>
        </div>
      </div>
    </nav>
  );
}
