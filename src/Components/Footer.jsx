import { Instagram, Mail, Phone } from "lucide-react";

export default function Footer() {
  const goHome = (e) => {
    e.preventDefault();
    window.location.reload();
  };

  return (
    <footer className="w-full bg-[#1F1F1F] text-white font-[Poppins] pt-16 pb-8">
      <div className="px-5 sm:px-10 md:px-16 lg:px-14 xl:px-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* BRAND */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gold">
              Valena Vincent
            </h3>

            <p className="text-sm text-white/70 leading-7 mb-6">
              Creating elegant dining experiences for weddings, private events,
              and special celebrations with refined presentation and
              unforgettable taste.
            </p>

            <a
              href="https://wa.me/447415260053"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-green text-gold px-5 py-3 text-sm font-medium hover:opacity-90 transition"
            >
              Book via WhatsApp
            </a>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-sm font-semibold text-gold uppercase tracking-widest mb-5">
              Quick Links
            </h4>

            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition">
                  Services
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
            <h4 className="text-sm font-semibold text-gold uppercase tracking-widest mb-5">
              Services
            </h4>

            <ul className="space-y-3 text-sm text-white/70">
              <li>Wedding Catering</li>
              <li>Private Dining</li>
              <li>Canapés Service</li>
              <li>Mocktail Experience</li>
              <li>Event Catering</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-sm font-semibold text-gold uppercase tracking-widest mb-5">
              Contact
            </h4>

            <div className="space-y-4 text-sm text-white/70">
              <div className="flex items-center gap-3">
                <Phone size={16} />
                <a
                  href="tel:+447415260053"
                  className="hover:text-white transition"
                >
                  +44 7415 260053
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={16} />
                <a
                  href="mailto:valleyscateringuk@gmail.com"
                  className="hover:text-white transition"
                >
                  valleyscateringuk@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Instagram size={16} />
                <a
                  href="https://instagram.com/valecanapesuk_"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition"
                >
                  @valecanapesuk_
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-[1px] bg-white/10 mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <p>
            © {new Date().getFullYear()} Valena Vincent. All rights reserved.
          </p>

          <p>Designed & built with care</p>
        </div>
      </div>
    </footer>
  );
}
