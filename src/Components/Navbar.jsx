import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Skills", id: "skills" },
    { name: "Contact", id: "contact" },
    { name: "About", id: "about" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      if (window.scrollY < 120) {
        setActiveSection("home");
      }
    };

    const sectionIds = navLinks.map((link) => link.id);
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        if (window.scrollY < 120) {
          setActiveSection("home");
          return;
        }

        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-88px 0px -55% 0px",
        threshold: 0.15,
      },
    );

    sections.forEach((section) => observer.observe(section));
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMobileMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav
      className={`sticky top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-[72px]">
          <a
            href="#home"
            onClick={closeMobileMenu}
            className="text-[19px] font-semibold text-[#0F172A] tracking-tight"
          >
            Adeola
            <span className="text-teal-400 italic">Isaiah</span>
          </a>

          <ul className="hidden md:flex items-center gap-10 text-[14.5px] text-gray-600">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <li key={link.id} className="relative group">
                  <a
                    href={`#${link.id}`}
                    className={`transition-colors duration-300 ${
                      isActive
                        ? "text-teal-600 font-medium"
                        : "hover:text-gray-900"
                    }`}
                  >
                    {link.name}
                  </a>

                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] rounded-full bg-teal-600 transition-all duration-300 ${
                      isActive
                        ? "w-full opacity-100"
                        : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                    }`}
                  />
                </li>
              );
            })}
          </ul>

          <a
            href="#contact"
            className="hidden md:inline-flex bg-teal-600 text-white px-5 py-2.5 rounded-full text-[14px] font-medium hover:bg-teal-700 transition"
          >
            Hire Me
          </a>

          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden text-gray-800"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-96 pb-4" : "max-h-0"
          }`}
        >
          <div className="mt-2 rounded-2xl bg-white shadow-md p-5 flex flex-col gap-5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={closeMobileMenu}
                  className={`text-left transition ${
                    isActive
                      ? "text-teal-600 font-medium"
                      : "text-gray-700 hover:text-teal-600"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}

            <a
              href="#contact"
              onClick={closeMobileMenu}
              className="mt-2 bg-teal-600 text-white px-4 py-2.5 rounded-full text-sm text-center"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
