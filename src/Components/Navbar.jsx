import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "portfolio" },
    { name: "Experience", id: "experience" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.pageYOffset - 80;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });

    setActiveSection(id);
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const scrollPosition = window.scrollY + 120;

      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (!section) return;

        if (
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(link.id);
        }
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/70 backdrop-blur-xl shadow-[0_2px_20px_rgba(0,0,0,0.05)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-[72px]">
          {/* LOGO */}
          <h1 className="text-[18px] font-semibold text-teal-900 cursor-pointer tracking-tight">
            Adeola Isaiah
          </h1>

          {/* DESKTOP NAV */}
          <ul className="hidden md:flex items-center gap-10 text-[14.5px] text-gray-600 font-normal">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <li key={link.name} className="relative">
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className={`cursor-pointer transition-all duration-300 ${
                      isActive ? "text-purple-600" : "hover:text-gray-900"
                    }`}
                  >
                    {link.name}
                  </button>

                  {/* underline (hover + active) */}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] rounded-full bg-purple-600 transition-all duration-300 ${
                      isActive
                        ? "w-full opacity-100"
                        : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                    }`}
                  />
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <button
            onClick={() => scrollToSection("contact")}
            className="hidden md:inline-flex cursor-pointer bg-teal-600 text-white px-5 py-2.5 rounded-full text-[14px] font-medium shadow-sm hover:bg-teal-700 transition-all duration-300"
          >
            Hire Me
          </button>

          {/* MOBILE ICON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden cursor-pointer text-gray-800"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            menuOpen ? "max-h-96 pb-4" : "max-h-0"
          }`}
        >
          <div className="mt-2 rounded-2xl bg-white shadow-lg p-5 flex flex-col gap-5">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className="text-left text-gray-700 hover:text-purple-600 transition cursor-pointer"
              >
                {link.name}
              </button>
            ))}

            <button
              onClick={() => scrollToSection("contact")}
              className="mt-2 bg-purple-600 text-white px-4 py-2.5 rounded-full text-sm cursor-pointer"
            >
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
