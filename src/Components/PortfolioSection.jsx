import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PortfolioSection() {
  const filters = ["All", "Weddings", "Canapés", "Mocktails", "Events"];

  const portfolioItems = [
    {
      id: 1,
      title: "Luxury Wedding Table",
      category: "Weddings",
      image: "/images/weddingtable.jpeg",
      description:
        "An elegant wedding table arrangement styled with refined décor, soft details, and a luxurious presentation for a memorable celebration.",
    },
    {
      id: 2,
      title: "Delicious Savoury Munchies",
      category: "Canapés",
      image: "/images/slide1.jpeg",
      description:
        "A selection of flavour-packed savoury bites, beautifully prepared to delight guests during intimate gatherings and stylish events.",
    },
    {
      id: 3,
      title: "Mocktail Presentation",
      category: "Mocktails",
      image: "/images/slide6.jpeg",
      description:
        "Refreshing mocktails served with a polished presentation, adding colour, charm, and sophistication to the guest experience.",
    },
    {
      id: 4,
      title: "Wedding Setup Details",
      category: "Weddings",
      image: "/images/reception.jpeg",
      description:
        "Carefully arranged reception details designed to bring beauty, harmony, and a romantic atmosphere to the wedding setting.",
    },
    {
      id: 5,
      title: "Chef Behind The Scenes",
      category: "Events",
      image: "/images/valenawithflowers.jpeg",
      description:
        "A glimpse into the passion, creativity, and preparation that go into delivering a seamless and unforgettable event experience.",
    },
    {
      id: 6,
      title: "Plated Fine Dining",
      category: "Events",
      image: "/images/pinktable1.jpeg",
      description:
        "Beautifully plated dishes presented with elegance and attention to detail, perfect for refined dining moments at special events.",
    },
    {
      id: 7,
      title: "Signature Mocktail Bar",
      category: "Mocktails",
      image: "/images/mock1.jpeg",
      description:
        "A stylish mocktail station featuring vibrant drinks and a sophisticated setup that enhances the atmosphere of any event.",
    },
    {
      id: 8,
      title: "Event Catering Setup",
      category: "Events",
      image: "/images/slide5.jpeg",
      description:
        "A professionally styled catering display created to serve guests beautifully while adding elegance to the overall event space.",
    },
    {
      id: 9,
      title: "Reception Table Styling",
      category: "Weddings",
      image: "/images/pinktable.jpeg",
      description:
        "A graceful reception table design featuring coordinated styling, tasteful details, and a warm, celebratory wedding ambiance.",
    },
    {
      id: 10,
      title: "Scotch Eggs",
      category: "Canapés",
      image: "/images/slide2.jpeg",
      description:
        "Golden, satisfying scotch eggs prepared as a rich canapé option, combining comfort, flavour, and elegant event presentation.",
    },
    {
      id: 11,
      title: "Rich Mini Beef Burgers",
      category: "Canapés",
      image: "/images/burger.jpeg",
      description:
        "Mini beef burgers layered with rich flavour and presented as indulgent bite-sized treats for modern celebrations and receptions.",
    },
    {
      id: 12,
      title: "Crispy Prawns with Sweet Chilli Sauce",
      category: "Canapés",
      image: "/images/prawn.jpeg",
      description:
        "Crispy prawns paired with sweet chilli sauce for a bold, crowd-pleasing canapé that balances texture, flavour, and elegance.",
    },
  ];

  const [activeFilter, setActiveFilter] = useState("All");

  const filteredItems = useMemo(() => {
    if (activeFilter === "All") return portfolioItems;
    return portfolioItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <section
      id="portfolio"
      className="w-full bg-bg py-20 md:py-24 font-[Poppins] scroll-mt-24"
    >
      <div className="px-5 sm:px-10 md:px-16 lg:px-14 xl:px-20">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-2xl mx-auto text-center mb-12 flex flex-col items-center justify-content-center"
        >
          <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-gold mb-4">
            Portfolio
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-green mb-4">
            Crafted for elegant weddings, refined dining, and unforgettable
            celebrations
          </h2>

          <p className="text-sm sm:text-base text-lightText leading-7 max-w-xl">
            Explore a curated collection of wedding catering, canapés,
            mocktails, and event presentation designed with beauty, taste, and
            detail in mind.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 mb-10"
        >
          {filters.map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-all duration-300 ${
                  isActive
                    ? "bg-green text-gold border-green shadow-sm"
                    : "bg-white text-darkHeader border-[#e8ddd1] hover:bg-[#faf6f1]"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </motion.div>

        {/* Organized Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.96 }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="group rounded-[26px] overflow-hidden bg-[#F8F6F2] shadow-[0_12px_35px_rgba(0,0,0,0.06)]"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[280px] sm:h-[300px] object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute top-4 left-4">
                    <span className="inline-flex rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-darkHeader backdrop-blur-sm">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-green mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-lightText leading-6">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
