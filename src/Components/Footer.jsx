import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-gray-300 font-[Poppins]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid md:grid-cols-4 gap-10">
        {/* BRAND */}
        <div>
          <h2 className="text-xl font-semibold text-white">
            Adeola <span className="text-teal-400 italic">Isaiah</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-400">
            Full-stack developer focused on building modern, scalable, and
            user-friendly web applications.
          </p>
        </div>

        {/* NAVIGATION */}
        <div>
          <h3 className="text-white font-medium mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#home" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-white transition">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-white transition">
                Skills
              </a>
            </li>
            <li>
              <a href="#portfolio" className="hover:text-white transition">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-white font-medium mb-4">Services</h3>
          <ul className="space-y-3 text-sm">
            <li>Web Development</li>
            <li>Frontend Development</li>
            <li>Backend Development</li>
            <li>API Integration</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-white font-medium mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li>Email: adeolaisaiah01@gmail.com</li>
            <li>Phone: +2348089386770</li>
            <li>Ibadan, Nigeria</li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} Adeola Isaiah. All rights reserved.
          </p>

          <div className="flex gap-5">
            <a href="#" className="hover:text-white transition">
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/isaiah973"
              className="hover:text-white transition"
            >
              <FaGithub />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
