import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  const highlights = [
    "Bespoke Menus",
    "Elegant Presentation",
    "Wedding Expertise",
    "Fresh Ingredients",
  ];

  return (
    <section
      id="about"
      className="w-full bg-white py-20 md:py-24 font-[Poppins] overflow-hidden scroll-mt-24"
    >
      <div className="px-5 sm:px-10 md:px-16 lg:px-14 xl:px-20">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
          {/* LEFT IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.25 }}
            className="relative "
          >
            <p className="lg:hidden text-center text-xs sm:text-sm uppercase tracking-[0.25em] text-gold mb-9">
              Valena Vincent
            </p>
            <div className="relative max-w-xl">
              <div className="absolute -top-5 -left-5 hidden sm:block w-32 h-32 rounded-[28px] bg-[#F6EFE7]" />
              <div className="absolute -bottom-5 -right-5 hidden sm:block w-40 h-40 rounded-[32px] border border-[#E7D9C8]" />

              <div className="relative overflow-hidden rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
                <img
                  src="/images/valena.jpeg"
                  alt="Chef portrait"
                  className="w-full h-[420px] sm:h-[520px] object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.25 }}
            className="max-w-2xl"
          >
            <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-gold mb-4">
              About
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-green mb-5">
              Creating elevated dining experiences for weddings and special
              events
            </h2>

            <p className="text-sm sm:text-base text-lightText leading-7 mb-5">
              Valena Vincent is a chef and wedding event caterer known for
              blending refined presentation with thoughtful flavours. From
              intimate gatherings to elegant wedding celebrations, every menu is
              designed to suit the atmosphere, style, and story of each event.
            </p>

            <p className="text-sm sm:text-base text-lightText leading-7 mb-8">
              With a strong eye for detail and a passion for beautiful food
              styling, she creates experiences that feel polished, warm, and
              memorable. Clients trust her not only for delicious dishes, but
              for professionalism, creativity, and the ability to deliver with
              care on important occasions.
            </p>

            {/* HIGHLIGHTS */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 rounded-2xl border border-[#EEE3D7] bg-[#FCF9F5] px-4 py-4"
                >
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                  <span className="text-sm sm:text-base font-medium text-green">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
