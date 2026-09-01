import { Code2, Database, Layers3, ServerCog } from "lucide-react";
import { motion as Motion } from "framer-motion";

const groups = [
  { number: "01", title: "Interface", icon: Layers3, description: "Responsive interfaces with strong visual hierarchy, accessibility, and intuitive interaction.", tools: ["React", "JavaScript", "Tailwind CSS", "HTML", "CSS"] },
  { number: "02", title: "Backend", icon: ServerCog, description: "Reliable server-side systems, clear APIs, secure authentication, and maintainable business logic.", tools: ["Node.js", "Express.js", "REST APIs", "JWT"] },
  { number: "03", title: "Data & workflow", icon: Database, description: "Practical data modelling and a modern workflow that keeps products stable as they grow.", tools: ["MongoDB", "Atlas", "Git", "GitHub"] },
];

export default function Skills() {
  return (
    <section className="bg-[#f7f8fa] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Motion.header initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid gap-7 border-t border-slate-300 pt-6 lg:grid-cols-2 lg:gap-20">
          <p className="flex items-start gap-3 text-xs font-bold uppercase tracking-[0.22em] text-slate-500"><Code2 size={15} className="text-teal-600" /> Capabilities</p>
          <div><h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[1] tracking-[-0.055em] text-slate-950">The tools are only useful when the thinking is sound.</h2><p className="mt-7 max-w-2xl text-base leading-8 text-slate-600">I choose technology around the problem, combining a focused JavaScript stack with product judgment and careful execution.</p></div>
        </Motion.header>

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {groups.map((group, index) => {
            const Icon = group.icon;
            return (
              <Motion.article key={group.title} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="group flex min-h-[27rem] flex-col rounded-[1.75rem] border border-slate-200 bg-white p-7 transition duration-500 hover:-translate-y-1 hover:shadow-[0_25px_60px_-40px_rgba(15,23,42,.5)] sm:p-8">
                <div className="flex items-center justify-between"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-950 text-white transition group-hover:bg-teal-600"><Icon size={21} /></span><span className="text-xs font-bold tracking-[0.18em] text-slate-400">{group.number}</span></div>
                <h3 className="mt-10 text-2xl font-semibold tracking-[-0.035em] text-slate-950">{group.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{group.description}</p>
                <div className="mt-auto flex flex-wrap gap-2 pt-10">{group.tools.map((tool) => <span key={tool} className="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600">{tool}</span>)}</div>
              </Motion.article>
            );
          })}
        </div>

        <div className="mt-14 grid gap-7 border-y border-slate-300 py-8 sm:grid-cols-3">
          {["Discover", "Design & build", "Refine & launch"].map((step, index) => <div key={step} className="flex items-center gap-4"><span className="text-xs font-bold text-teal-600">0{index + 1}</span><span className="font-semibold text-slate-900">{step}</span></div>)}
        </div>
      </div>
    </section>
  );
}
