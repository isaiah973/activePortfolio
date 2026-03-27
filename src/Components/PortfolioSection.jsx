import { ExternalLink, Github } from "lucide-react";

export default function PortfolioSection() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Store",
      category: "Full-Stack Web Application",
      image: "/images/project1.jpg",
      description:
        "A modern e-commerce platform built with a responsive frontend and backend functionality for product management, authentication, and user interaction.",
      techStack: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
      liveLink: "https://your-project-link.com",
      githubLink: "https://github.com/yourusername/project-one",
    },
    {
      id: 2,
      title: "Authentication System",
      category: "Frontend + Backend Project",
      image: "/images/project2.jpg",
      description:
        "A secure login and registration system with user authentication, protected routes, and clean user experience across devices.",
      techStack: ["React", "Tailwind CSS", "Express.js", "MongoDB"],
      liveLink: "https://your-project-link.com",
      githubLink: "https://github.com/yourusername/project-two",
    },
    {
      id: 3,
      title: "Voting & Ranking Platform",
      category: "Interactive Frontend Project",
      image: "/images/project3.jpg",
      description:
        "An interactive voting and ranking interface designed for smooth user engagement, intuitive navigation, and a polished modern layout.",
      techStack: ["React", "JavaScript", "Tailwind CSS"],
      liveLink: "https://your-project-link.com",
      githubLink: "https://github.com/yourusername/project-three",
    },
  ];

  return (
    <section
      id="projects"
      className="w-full bg-[#F5F5F7] py-20 px-6 sm:px-10 lg:px-20 font-sans"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-[#0EA5A4] font-semibold tracking-wide uppercase text-sm mb-3">
            Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] leading-tight mb-5">
            Selected Projects & Web Solutions
          </h2>
          <p className="text-[#667085] text-base sm:text-lg leading-8">
            A collection of web applications I have designed and built as a
            full-stack developer, focused on clean user experience, responsive
            interfaces, and functional backend systems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-3xl overflow-hidden border border-[#E5E7EB] shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Project Image */}
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </a>

              {/* Content */}
              <div className="p-6">
                <p className="text-sm font-medium text-[#0EA5A4] mb-2">
                  {project.category}
                </p>

                <h3 className="text-2xl font-bold text-[#0F172A] mb-3">
                  {project.title}
                </h3>

                <p className="text-[#667085] leading-7 text-sm sm:text-base mb-5">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full bg-[#F0FDFA] text-[#0F766E] text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#0EA5A4] hover:bg-[#08918f] text-white px-4 py-2.5 rounded-xl font-semibold transition"
                  >
                    View Project
                    <ExternalLink size={18} />
                  </a>

                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#0F172A] hover:text-[#0EA5A4] font-semibold transition"
                  >
                    Code
                    <Github size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="text-center mt-14">
          <p className="text-[#667085] text-base">
            These projects reflect my approach to building modern, scalable, and
            user-focused digital products.
          </p>
        </div>
      </div>
    </section>
  );
}
