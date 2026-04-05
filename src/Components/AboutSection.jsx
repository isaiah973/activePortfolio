import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="w-full bg-[#F8FAFC] py-20 px-6 sm:px-10 lg:px-20 font-[Poppins]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT (TEXT) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-teal-500 text-sm font-semibold tracking-[0.2em] uppercase mb-4"
          >
            About Me
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6"
          >
            A Full-Stack Developer Focused on Building Clean & Scalable Web
            Applications
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 leading-8 mb-6"
          >
            I am a full-stack developer with a strong focus on creating modern,
            responsive, and user-friendly web applications. I specialize in
            building seamless front-end interfaces with React and developing
            scalable back-end systems using Node.js and MongoDB.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-600 leading-8 mb-6"
          >
            My goal is to transform ideas into functional digital products that
            are not only visually appealing but also efficient, secure, and easy
            to use. I enjoy solving real-world problems and continuously
            improving my skills to stay aligned with modern development
            standards.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex gap-8 mt-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900">40+</h3>
              <p className="text-gray-500 text-sm">Projects Built</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900">4+</h3>
              <p className="text-gray-500 text-sm">Years Experience</p>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT (CARD) */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            What I Do
          </h3>

          <ul className="space-y-4 text-gray-600">
            <li>✔ Build responsive web applications</li>
            <li>✔ Develop full-stack systems (MERN stack)</li>
            <li>✔ Create modern UI/UX interfaces</li>
            <li>✔ Integrate APIs and backend services</li>
            <li>✔ Optimize performance and scalability</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
