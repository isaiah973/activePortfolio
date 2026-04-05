import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiRedux,
  SiJsonwebtokens,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "React", icon: <FaReact /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Redux", icon: <SiRedux /> },
    { name: "MongoDB Atlas", icon: <SiMongodb /> },
    { name: "MongoDB Compass", icon: <SiMongodb /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "JWT", icon: <SiJsonwebtokens /> },
  ];

  return (
    <section
      className="w-full py-24 bg-[#f8f9fc] font-[Poppins]"
      style={{ transform: "translateZ(0)" }} // 🔥 stabilizes rendering
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold text-gray-900"
        >
          My{" "}
          <span className="bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent">
            Skills
          </span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-4 text-gray-500 max-w-xl mx-auto"
        >
          Technologies and tools I use to build modern and scalable
          applications.
        </motion.p>

        {/* Grid */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.04 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 flex flex-col items-center justify-center shadow-sm transition-colors duration-300 hover:bg-gray-50"
              style={{ transform: "translateZ(0)" }} // 🔥 prevents flicker
            >
              {/* Icon */}
              <div className="text-3xl mb-3 text-gray-700 transition-colors duration-300 hover:text-teal-600">
                {skill.icon}
              </div>

              {/* Name */}
              <p className="text-sm text-gray-700">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
