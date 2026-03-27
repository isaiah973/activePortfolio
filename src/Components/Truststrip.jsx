import { Wine, GlassWater, UtensilsCrossed, CalendarHeart } from "lucide-react";
import { motion } from "framer-motion";

export default function TrustStrip() {
  const items = [
    {
      icon: CalendarHeart,
      title: "Wedding Catering",
      text: "Elegant catering tailored for unforgettable wedding celebrations.",
    },
    {
      icon: UtensilsCrossed,
      title: "Luxury Canapés",
      text: "Beautiful bite-sized creations designed to impress every guest.",
    },
    {
      icon: GlassWater,
      title: "Signature Mocktails",
      text: "Refreshing handcrafted mocktails styled for modern events.",
    },
    {
      icon: Wine,
      title: "Private Events",
      text: "Thoughtfully prepared menus for intimate and special occasions.",
    },
  ];

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 45 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 25 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="services"
      className="w-full bg-white py-16 sm:py-20 lg:py-24 font-[Poppins]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-16 lg:px-14 xl:px-20">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-14"
          variants={textVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-gold mb-3">
            What I Offer
          </p>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-darkHeader leading-tight mb-4">
            Curated Services for Beautiful Celebrations
          </h2>

          <p className="text-sm sm:text-base text-lightText leading-7">
            From elegant wedding catering to handcrafted canapés and mocktails,
            every detail is thoughtfully prepared to create a refined and
            memorable event experience.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="group rounded-[26px] bg-bg border border-green shadow-[0_15px_40px_rgba(0,0,0,0.05)] px-6 py-8 sm:px-7 sm:py-9 hover:shadow-[0_22px_55px_rgba(0,0,0,0.08)]"
              >
                <motion.div
                  whileHover={{ scale: 1.08, rotate: 2 }}
                  transition={{ duration: 0.25 }}
                  className="w-14 h-14 rounded-full bg-[#0B3D2E]/[0.06] flex items-center justify-center mb-6"
                >
                  <Icon size={26} className="text-[#C6A55E]" />
                </motion.div>

                <h3 className="text-xl font-semibold text-[#1F1F1F] mb-3">
                  {item.title}
                </h3>

                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  whileInView={{ width: 48, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="h-[2px] bg-[#C6A55E] rounded-full mb-4"
                />

                <p className="text-sm sm:text-[15px] leading-7 text-[#5F5F5F]">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
