import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Contact", id: "contact" },
  ];

  const goToSection = (id) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("home");
      return;
    }

    const el = document.getElementById(id);
    if (!el) return;

    const navbar = document.querySelector("nav");
    const navbarHeight = navbar ? navbar.offsetHeight : 72;

    const y =
      el.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });

    setActiveSection(id);
  };

  const scrollToSection = (id) => {
    if (menuOpen) {
      setMenuOpen(false);
      setTimeout(() => {
        goToSection(id);
      }, 300);
    } else {
      goToSection(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      if (window.scrollY < 120) {
        setActiveSection("home");
        return;
      }

      const scrollPosition = window.scrollY + 140;
      let currentSection = "home";

      navLinks.forEach((link) => {
        if (link.id === "home") return;

        const section = document.getElementById(link.id);
        if (!section) return;

        if (
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          currentSection = link.id;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-[72px]">
          <button
            onClick={() => scrollToSection("home")}
            className="text-[19px] font-semibold text-[#0F172A] cursor-pointer tracking-tight"
          >
            Adeola
            <span className="text-teal-400 italic">Isaiah</span>
          </button>

          <ul className="hidden md:flex items-center gap-10 text-[14.5px] text-gray-600">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <li key={link.name} className="relative group">
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className={`cursor-pointer transition-colors duration-300 ${
                      isActive
                        ? "text-teal-600 font-medium"
                        : "hover:text-gray-900"
                    }`}
                  >
                    {link.name}
                  </button>

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

          <button
            onClick={() => scrollToSection("contact")}
            className="hidden md:inline-flex cursor-pointer bg-teal-600 text-white px-5 py-2.5 rounded-full text-[14px] font-medium hover:bg-teal-700 transition"
          >
            Hire Me
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden cursor-pointer text-gray-800"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            menuOpen ? "max-h-96 pb-4" : "max-h-0"
          }`}
        >
          <div className="mt-2 rounded-2xl bg-white shadow-md p-5 flex flex-col gap-5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-left transition cursor-pointer ${
                    isActive
                      ? "text-teal-600 font-medium"
                      : "text-gray-700 hover:text-teal-600"
                  }`}
                >
                  {link.name}
                </button>
              );
            })}

            <button
              onClick={() => scrollToSection("contact")}
              className="mt-2 bg-teal-600 text-white px-4 py-2.5 rounded-full text-sm cursor-pointer"
            >
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
