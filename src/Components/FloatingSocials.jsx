import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

export default function FloatingSocials() {
  return (
    <div className="fixed right-4 bottom-5 sm:right-6 sm:bottom-6 z-[999] flex flex-col gap-3">
      <motion.a
        href="https://wa.me/+2348089386770"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ opacity: 0, y: 30, scale: 0.85 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4 }}
        whileHover={{ y: -4, scale: 1.06 }}
        whileTap={{ scale: 0.96 }}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_14px_30px_rgba(0,0,0,0.18)]"
      >
        <FaWhatsapp size={28} />
      </motion.a>

      {/* <motion.a
        href="https://instagram.com/valecanapesuk_"
        target="_blank"
        rel="noreferrer"
        aria-label="Visit Instagram page"
        initial={{ opacity: 0, y: 30, scale: 0.85 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.45, delay: 0.08 }}
        whileHover={{ y: -4, scale: 1.06 }}
        whileTap={{ scale: 0.96 }}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#E1306C] border border-[#eadfd3] shadow-[0_14px_30px_rgba(0,0,0,0.14)]"
      >
        <FaInstagram size={26} />
      </motion.a> */}
    </div>
  );
}
