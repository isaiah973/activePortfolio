import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ServicesSection() {
  const services = [
    {
      title: "Wedding Catering",
      image: "/images/weddingtable.jpeg",
      description:
        "Elegant catering thoughtfully prepared to make your wedding celebration refined, beautiful, and unforgettable.",
    },
    {
      title: "Event Planning / Coordination",
      image: "/images/reception.jpeg",
      description:
        "Professional event coordination designed to create seamless and memorable celebrations for your guests.",
    },
    {
      title: "Luxury Canapés",
      image: "/images/slide3.jpeg",
      description:
        "Beautiful bite-sized creations crafted to impress with both flavour and elegant presentation.",
    },
    {
      title: "Mocktail Catering",
      image: "/images/slide6.jpeg",
      description:
        "Refreshing handcrafted mocktails styled to add colour, charm, and sophistication to your event.",
    },
  ];

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.14,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
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
      className=" scroll-mt-24 w-full bg-white py-10 font-poppins"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-16 lg:px-20">
        {/* SECTION INTRO */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.25 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-gold mb-3">
            What I Offer
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold text-green mb-4">
            Services Designed for Memorable Celebrations
          </h2>

          <p className="text-muted text-lg leading-8">
            From elegant wedding catering to beautifully presented canapés and
            handcrafted mocktails, every service is designed to create a refined
            and unforgettable experience for your special occasion.
          </p>
        </motion.div>

        {/* SERVICE GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.25 }}
              className="group rounded-[28px] overflow-hidden bg-cream border border-gold shadow-[0_15px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_65px_rgba(0,0,0,0.08)]"
            >
              {/* IMAGE */}
              <div className="w-full h-[220px] overflow-hidden">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                />
              </div>

              {/* CONTENT */}
              <div className="p-7 sm:p-8">
                <h3 className="text-2xl font-semibold text-green mb-3">
                  {service.title}
                </h3>

                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  whileInView={{ width: 48, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="h-[2px] bg-gold mb-4"
                />

                <p className="text-muted leading-7 mb-6">
                  {service.description}
                </p>

                {/* <motion.button
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-2 text-primary font-medium"
                >
                  Learn More
                  <ArrowUpRight size={16} />
                </motion.button> */}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
