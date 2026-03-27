import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  Instagram,
  CalendarDays,
  MessageCircle,
} from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full bg-[#F8F6F2] py-20 md:py-24 font-[Poppins] scroll-mt-24"
    >
      <div className="px-5 sm:px-10 md:px-16 lg:px-14 xl:px-20">
        <div className="flex justify-center">
          {/* CENTERED CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.2 }}
            className="w-full max-w-2xl text-center"
          >
            <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-gold mb-4">
              Contact / Booking
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-green mb-5">
              Let’s bring elegance and flavour to your special event
            </h2>

            <p className="text-sm sm:text-base text-lightText leading-7 mb-10">
              Whether you are planning an intimate gathering, a wedding
              reception, or a stylish private event, I would love to help create
              a dining experience that feels beautifully curated and memorable.
              Get in touch and let’s start planning.
            </p>

            {/* CONTACT CARDS */}
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-4 rounded-2xl bg-white px-5 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.04)] justify-center">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F4EBDD]">
                  <Phone className="h-5 w-5 text-green" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-lightText mb-1">Phone</p>
                  <a
                    href="tel:+447415260053"
                    className="text-base font-semibold text-green hover:opacity-80 transition"
                  >
                    +44 7415 260053
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl bg-white px-5 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.04)] justify-center">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F4EBDD]">
                  <Mail className="h-5 w-5 text-green" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-lightText mb-1">Email</p>
                  <a
                    href="mailto:valleyscateringuk@gmail.com"
                    className="text-base font-semibold text-green hover:opacity-80 transition"
                  >
                    valleyscateringuk@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl bg-white px-5 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.04)] justify-center">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F4EBDD]">
                  <CalendarDays className="h-5 w-5 text-green" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-lightText mb-1">Availability</p>
                  <p className="text-base font-semibold text-green">
                    Open for weddings, private dining & special events
                  </p>
                </div>
              </div>
            </div>

            {/* INSTAGRAM */}
            <div className="mb-8">
              <p className="text-sm font-semibold text-green mb-3">
                Follow on Instagram
              </p>

              <a
                href="https://instagram.com/valecanapesuk_"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-white border border-[#E8DDD1] px-5 py-3 text-green hover:-translate-y-1 transition"
              >
                <Instagram size={18} />
                @valecanapesuk_
              </a>
            </div>

            {/* WHATSAPP BUTTON */}
            <a
              href="https://wa.me/447415260053"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-green text-gold px-7 py-3.5 text-sm font-medium hover:opacity-90 transition"
            >
              <MessageCircle size={18} />
              Book via WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
