import { ArrowUpRight, Check } from "lucide-react";
import { motion as Motion } from "framer-motion";

const services = [
  ["Frontend development", "Responsive, accessible interfaces that feel considered on every device."],
  ["Backend engineering", "Secure APIs, authentication, databases, and scalable application logic."],
  ["Product collaboration", "Practical technical thinking from the first idea through launch and iteration."],
];

export default function AboutSection() {
  return (
    <section className="bg-slate-950 px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:gap-24">
          <Motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}>
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-teal-300"><span className="h-2 w-2 rounded-full bg-teal-400" /> About me</p>
            <div className="mt-12 grid grid-cols-2 gap-4">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6"><strong className="text-4xl font-semibold tracking-[-0.05em]">40<span className="text-teal-300">+</span></strong><p className="mt-2 text-sm text-white/50">Projects built</p></div>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6"><strong className="text-4xl font-semibold tracking-[-0.05em]">4<span className="text-teal-300">+</span></strong><p className="mt-2 text-sm text-white/50">Years building</p></div>
            </div>
            <a href="#contact" className="group mt-7 inline-flex items-center gap-2 text-sm font-bold text-white hover:text-teal-300">Let’s work together <ArrowUpRight size={17} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a>
          </Motion.div>

          <Motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h2 className="max-w-4xl text-[clamp(2.5rem,5vw,4.8rem)] font-semibold leading-[1.02] tracking-[-0.055em]">I bridge thoughtful design and dependable engineering.</h2>
            <p className="mt-8 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">I’m a full-stack developer who cares about the whole product—not only whether it works, but whether it feels clear, earns trust, and remains easy to improve. I use React, Node.js, and MongoDB to build experiences that are useful from the first click.</p>
          </Motion.div>
        </div>

        <div className="mt-20 grid border-t border-white/15 lg:grid-cols-3">
          {services.map(([title, description], index) => (
            <Motion.article key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="border-b border-white/15 py-8 lg:border-b-0 lg:border-r lg:px-8 lg:first:pl-0 lg:last:border-r-0">
              <div className="flex items-center gap-3"><span className="grid h-8 w-8 place-items-center rounded-full bg-teal-400/15 text-teal-300"><Check size={15} /></span><h3 className="font-semibold">{title}</h3></div>
              <p className="mt-4 max-w-sm text-sm leading-7 text-white/50">{description}</p>
            </Motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
