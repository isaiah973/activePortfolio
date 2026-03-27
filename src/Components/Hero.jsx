import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="w-full min-h-screen flex items-center justify-center bg-[#f8f9fc] font-[Poppins] px-6"
    >
      <div className="max-w-3xl text-center">
        {/* Small intro */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm text-teal-500 mb-4"
        >
          Hi, I’m Adeola Isaiah
        </motion.p>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-semibold text-gray-900 leading-tight"
        >
          I design & build <br />
          <span className="bg-gradient-to-r from-teal-500 to-indigo-500 text-transparent bg-clip-text">
            web applications
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-gray-500 text-base sm:text-lg leading-relaxed"
        >
          Full-stack developer specializing in React and modern UI systems. I
          create clean and responsive user-focused digital experiences.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="bg-teal-600 text-white px-6 py-3 rounded-lg text-sm font-medium shadow-md hover:bg-teal-700 transition"
          >
            View My Work →
          </a>

          <a href="/Files/Adeola Omotoyinbo CV copy (2).pdf" download>
            <button className="px-8 py-3 border border-teal-600 text-teal-600 rounded-lg hover:bg-teal-700 hover:text-white transition">
              Download CV
            </button>
          </a>
        </motion.div>

        {/* Tech stack icons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex items-center justify-center gap-6 text-gray-400 text-sm"
        >
          <span>React</span>
          <span>Tailwind</span>
          <span>Node.js</span>
          <span>MongoDB</span>
          <span>ExpressJs</span>
        </motion.div>
      </div>
    </section>
  );
}
