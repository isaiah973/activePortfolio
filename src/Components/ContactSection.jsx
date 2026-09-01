import { ArrowUpRight, Mail, MapPin, MessageCircle } from "lucide-react";
import { motion as Motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section className="bg-white px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <Motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-teal-500 p-7 text-slate-950 sm:p-12 lg:p-16">
        <div aria-hidden="true" className="absolute -right-24 -top-28 h-80 w-80 rounded-full border-[60px] border-white/10" />
        <div className="relative grid gap-14 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-900/60">Have an idea?</p>
            <h2 className="mt-8 max-w-4xl text-[clamp(3rem,7vw,6.5rem)] font-semibold leading-[0.9] tracking-[-0.065em]">Let’s make it real.</h2>
            <p className="mt-8 max-w-xl text-base leading-8 text-slate-900/70 sm:text-lg">Available for freelance projects, collaborations, and full-time opportunities. Tell me what you’re building and where you need help.</p>
          </div>
          <div className="space-y-3">
            <a href="mailto:adeolaisaiah01@gmail.com" className="group flex items-center justify-between rounded-full bg-slate-950 px-5 py-4 font-bold text-white transition hover:bg-white hover:text-slate-950"><span className="flex items-center gap-3"><Mail size={18} /> Send an email</span><ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a>
            <a href="https://wa.me/2348089386770" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between rounded-full border border-slate-900/25 px-5 py-4 font-bold transition hover:border-slate-950 hover:bg-white/30"><span className="flex items-center gap-3"><MessageCircle size={18} /> WhatsApp</span><ArrowUpRight size={18} /></a>
          </div>
        </div>

        <div className="relative mt-16 grid gap-5 border-t border-slate-900/20 pt-6 text-sm sm:grid-cols-3">
          <a href="mailto:adeolaisaiah01@gmail.com" className="flex items-center gap-2 font-semibold hover:underline"><Mail size={15} /> adeolaisaiah01@gmail.com</a>
          <p className="flex items-center gap-2 sm:justify-center"><MapPin size={15} /> Ibadan, Nigeria</p>
          <p className="text-slate-900/60 sm:text-right">Usually replies within 24 hours</p>
        </div>
      </Motion.div>
    </section>
  );
}
