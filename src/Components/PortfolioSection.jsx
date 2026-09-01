import { ArrowUpRight } from "lucide-react";
import { motion as Motion, useReducedMotion } from "framer-motion";

const projects = [
  {
    id: "01",
    title: "Voting & Ranking Platform",
    category: "Interactive platform",
    image: "/images/teswa.png",
    description:
      "A fast, intuitive competition experience that makes discovering contestants, voting, and following rankings feel effortless on every screen.",
    techStack: ["React", "JavaScript", "Tailwind CSS"],
    liveLink: "https://teswacompetition.vercel.app",
    featured: true,
  },
  {
    id: "02",
    title: "Valena Vincent",
    category: "Hospitality portfolio",
    image: "/images/valenahero.png",
    description:
      "A warm, conversion-focused portfolio for a private chef and event planner, bringing services, menus, and brand personality into one polished experience.",
    techStack: ["React", "Tailwind CSS"],
    liveLink: "https://valenavincent.vercel.app",
  },
  {
    id: "03",
    title: "Needful NG",
    category: "Donation platform",
    image: "/images/needful.png",
    description:
      "A trustworthy full-stack giving platform with streamlined authentication, campaign discovery, and donation flows.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    liveLink: "https://needfulng.com",
  },
  {
    id: "04",
    title: "Storemart",
    category: "E-commerce experience",
    image: "/images/storemart.png",
    description:
      "A complete online storefront built around clear product discovery, account management, and a frictionless shopping journey.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    liveLink: "https://storemart.vercel.app",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

function ProjectLink({ project, compact = false }) {
  return (
    <a
      href={project.liveLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${project.title} live site`}
      className={`group/link inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 ${
        compact
          ? "h-11 w-11 border border-slate-200 bg-white text-slate-900 hover:border-slate-900 hover:bg-slate-900 hover:text-white"
          : "bg-white px-5 py-3 text-sm text-slate-950 hover:bg-teal-500 hover:text-white"
      }`}
    >
      {!compact && <span>Explore live site</span>}
      <ArrowUpRight
        size={compact ? 19 : 17}
        strokeWidth={2}
        className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
      />
    </a>
  );
}

export default function PortfolioSection() {
  const reduceMotion = useReducedMotion();
  const featuredProject = projects.find((project) => project.featured);
  const supportingProjects = projects.filter((project) => !project.featured);
  const motionProps = reduceMotion
    ? {}
    : {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.18 },
      };

  return (
    <section className="relative isolate w-full overflow-hidden bg-white px-5 py-24 font-sans sm:px-8 lg:px-12 lg:py-32">
      <div aria-hidden="true" className="absolute -right-40 top-0 -z-10 h-[32rem] w-[32rem] rounded-full bg-teal-100/50 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        <Motion.header
          {...motionProps}
          variants={reveal}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 grid gap-7 border-t border-slate-200 pt-6 lg:mb-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20"
        >
          <div className="flex items-start gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-teal-500" />
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-slate-500">Selected work · 2024—26</p>
          </div>

          <div>
            <h2 className="max-w-3xl text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-slate-950">
              Digital products,
              <span className="block text-slate-400">built with purpose.</span>
            </h2>
            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              I turn ambitious ideas into clear, responsive experiences—pairing considered interfaces with dependable full-stack engineering.
            </p>
          </div>
        </Motion.header>

        <Motion.article
          {...motionProps}
          variants={reveal}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="group overflow-hidden rounded-[2rem] bg-slate-950 text-white shadow-[0_30px_80px_-40px_rgba(15,23,42,0.65)]"
        >
          <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
            <a href={featuredProject.liveLink} target="_blank" rel="noopener noreferrer" aria-label={`View ${featuredProject.title} live site`} className="relative min-h-[18rem] overflow-hidden bg-slate-800 sm:min-h-[28rem] lg:min-h-[35rem]">
              <img src={featuredProject.image} alt={`${featuredProject.title} website preview`} className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.025]" loading="eager" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent lg:bg-gradient-to-r" />
              <span className="absolute left-5 top-5 rounded-full border border-white/30 bg-slate-950/55 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] backdrop-blur-md sm:left-7 sm:top-7">Featured project</span>
            </a>

            <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12">
              <div>
                <div className="flex items-center justify-between border-b border-white/15 pb-5 text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
                  <span>{featuredProject.category}</span><span>{featuredProject.id}</span>
                </div>
                <h3 className="mt-9 text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">{featuredProject.title}</h3>
                <p className="mt-6 max-w-xl text-base leading-7 text-slate-300">{featuredProject.description}</p>
                <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-400">
                  {featuredProject.techStack.map((tech) => <span key={tech}>{tech}</span>)}
                </div>
              </div>
              <div className="mt-10"><ProjectLink project={featuredProject} /></div>
            </div>
          </div>
        </Motion.article>

        <div className="mt-7 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {supportingProjects.map((project, index) => (
            <Motion.article
              key={project.id}
              {...motionProps}
              variants={reveal}
              transition={{ duration: 0.65, delay: reduceMotion ? 0 : index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group flex min-h-full flex-col overflow-hidden rounded-[1.75rem] border border-slate-200 bg-[#f7f8fa] transition-all duration-500 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_24px_60px_-35px_rgba(15,23,42,0.45)]"
            >
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} live site`} className="relative m-3 block aspect-[16/10] overflow-hidden rounded-[1.15rem] bg-slate-200">
                <img src={project.image} alt={`${project.title} website preview`} loading="lazy" className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]" />
              </a>

              <div className="flex flex-1 flex-col p-6 pt-4 sm:p-7 sm:pt-5">
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-[0.16em] text-slate-500"><span>{project.category}</span><span>{project.id}</span></div>
                <h3 className="mt-6 text-2xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-[1.75rem]">{project.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{project.description}</p>
                <div className="mt-7 flex items-end justify-between gap-4 border-t border-slate-200 pt-5">
                  <div className="flex max-w-[75%] flex-wrap gap-x-3 gap-y-1 text-xs font-medium text-slate-500">
                    {project.techStack.map((tech) => <span key={tech}>{tech}</span>)}
                  </div>
                  <ProjectLink project={project} compact />
                </div>
              </div>
            </Motion.article>
          ))}
        </div>

        <Motion.div
          {...motionProps}
          variants={reveal}
          transition={{ duration: 0.6 }}
          className="mt-16 flex flex-col gap-5 border-t border-slate-200 pt-7 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-lg text-sm leading-6 text-slate-500">Each project is shaped around real users, business goals, and a maintainable technical foundation.</p>
          <a href="#contact" className="group inline-flex items-center gap-2 text-sm font-bold text-slate-950 transition-colors hover:text-teal-600">
            Have a project in mind?
            <ArrowUpRight size={17} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </Motion.div>
      </div>
    </section>
  );
}
