import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { motion as Motion, useReducedMotion } from "framer-motion";

const technologies = ["React", "Tailwind CSS", "Node.js", "MongoDB", "Express.js"];

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const reveal = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 22 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
        };

  return (
    <section className="relative isolate flex min-h-[calc(100svh-72px)] items-center justify-center overflow-hidden bg-[#f7f8fa] px-5 py-16 text-center sm:px-8 lg:px-12">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/3 -z-10 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-200/30 blur-3xl sm:h-[44rem] sm:w-[44rem]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-35 [background-image:linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
      />

      <div className="mx-auto flex w-full max-w-5xl flex-col items-center">
        <Motion.div
          {...reveal()}
          className="inline-flex items-center gap-2.5 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-600 shadow-sm backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500" />
          </span>
          Hi, I’m Adeola Isaiah
        </Motion.div>

        <Motion.h1
          {...reveal(0.08)}
          className="mt-7 max-w-5xl text-[clamp(3.2rem,8vw,7rem)] font-semibold leading-[0.91] tracking-[-0.065em] text-slate-950"
        >
          I design & build
          <span className="mt-2 block bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 bg-clip-text pb-2 text-transparent">
            web applications.
          </span>
        </Motion.h1>

        <Motion.p
          {...reveal(0.16)}
          className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg"
        >
          Full-stack developer specializing in React and modern UI systems. I
          create fast, responsive, and user-focused digital experiences.
        </Motion.p>

        <Motion.div
          {...reveal(0.24)}
          className="mt-9 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row"
        >
          <a
            href="#portfolio"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-slate-950/10 transition hover:-translate-y-0.5 hover:bg-teal-600 sm:w-auto"
          >
            View my work
            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
          <a
            href="/files/Adeola Omotoyinbo CV copy (2).pdf"
            download
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-300 bg-white/80 px-6 py-3.5 text-sm font-bold text-slate-900 backdrop-blur transition hover:-translate-y-0.5 hover:border-slate-900 sm:w-auto"
          >
            <Download size={16} /> Download CV
          </a>
        </Motion.div>

        <Motion.div
          {...reveal(0.32)}
          className="mt-12 flex max-w-3xl flex-wrap items-center justify-center gap-x-6 gap-y-3 border-y border-slate-200 py-4 text-xs font-semibold text-slate-500 sm:text-sm"
        >
          {technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </Motion.div>

        <Motion.a
          {...reveal(0.4)}
          href="#about"
          aria-label="Scroll to about section"
          className="group mt-10 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-slate-400 transition hover:text-slate-900"
        >
          Scroll to explore
          <span className="grid h-9 w-9 place-items-center rounded-full border border-slate-300 bg-white transition group-hover:border-slate-900">
            <ArrowDown size={15} className="transition-transform group-hover:translate-y-0.5" />
          </span>
        </Motion.a>
      </div>
    </section>
  );
}
