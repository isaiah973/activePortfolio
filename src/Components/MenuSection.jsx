import { motion } from "framer-motion";
import { useState } from "react";

export default function MenuSection() {
  const menus = [
    "/images/menu1.jpeg",
    "/images/menu2.jpeg",
    "/images/menu3.jpeg",
    "/images/menu4.jpeg",
  ];

  const [activeImage, setActiveImage] = useState(null);

  return (
    <section
      id="menu"
      className="w-full bg-white py-20 md:py-24 font-[Poppins] scroll-mt-24"
    >
      <div className="px-5 sm:px-10 md:px-16 lg:px-14 xl:px-20">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-gold mb-4">
            Menu
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-green mb-4">
            Curated menus crafted for taste, elegance, and experience
          </h2>

          <p className="text-sm sm:text-base text-lightText leading-7">
            Explore a selection of thoughtfully designed menus featuring
            canapés, signature dishes, and beautifully presented options for
            weddings and special events.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {menus.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => setActiveImage(img)}
            >
              <div className="overflow-hidden rounded-[24px] bg-[#F8F6F2] shadow-[0_12px_35px_rgba(0,0,0,0.06)]">
                <img
                  src={img}
                  alt={`Menu ${index + 1}`}
                  className="w-full h-[300px] object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      {activeImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-[9999] p-4"
          onClick={() => setActiveImage(null)}
        >
          <img
            src={activeImage}
            alt="Menu preview"
            className="max-w-full max-h-full rounded-[20px]"
          />
        </div>
      )}
    </section>
  );
}
