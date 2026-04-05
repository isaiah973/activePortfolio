import { motion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="w-full bg-white py-20 px-6 sm:px-10 lg:px-20 ">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[#0EA5A4] text-sm font-semibold tracking-[0.2em] uppercase mb-3"
        >
          Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] leading-tight mb-6"
        >
          Let’s Work Together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#475467] text-base sm:text-lg leading-8 max-w-2xl mx-auto mb-12"
        >
          I’m a full-stack engineer available for freelance projects,
          collaborations, and full-time opportunities. If you have an idea or a
          project in mind, feel free to reach out.
        </motion.p>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#F8FAFC] border border-[#E4E7EC] rounded-3xl p-6 flex items-center gap-4 text-left hover:shadow-md transition"
          >
            <div className="w-12 h-12 rounded-xl bg-[#ECFDFD] flex items-center justify-center">
              <Mail className="text-[#0EA5A4]" size={22} />
            </div>

            <div>
              <p className="text-sm text-[#667085] mb-1">Email</p>
              <a
                href="mailto:adeolaisaiah01@gmail.com"
                className="text-[#0F172A] font-semibold hover:text-[#0EA5A4] transition break-all"
              >
                adeolaisaiah01@gmail.com
              </a>
            </div>
          </motion.div>

          {/* WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="bg-[#F8FAFC] border border-[#E4E7EC] rounded-3xl p-6 flex items-center gap-4 text-left hover:shadow-md transition"
          >
            <div className="w-12 h-12 rounded-xl bg-[#ECFDFD] flex items-center justify-center">
              <MessageCircle className="text-[#0EA5A4]" size={22} />
            </div>

            <div>
              <p className="text-sm text-[#667085] mb-1">WhatsApp</p>
              <a
                href="https://wa.me/2348089386770"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0F172A] font-semibold hover:text-[#0EA5A4] transition"
              >
                +234 808 938 6770
              </a>
            </div>
          </motion.div>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <a
            href="mailto:adeolaisaiah01@gmail.com"
            className="inline-flex items-center justify-center gap-2 bg-[#0EA5A4] hover:bg-[#0B8E8D] text-white px-6 py-3 rounded-2xl font-semibold transition"
          >
            <Mail size={18} />
            Send Email
          </a>

          <a
            href="https://wa.me/2348089386770"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-[#0EA5A4] text-[#0EA5A4] hover:bg-[#ECFDFD] px-6 py-3 rounded-2xl font-semibold transition"
          >
            <MessageCircle size={18} />
            Chat on WhatsApp
          </a>
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-[#98A2B3] text-sm mt-10"
        >
          I typically respond within a few hours.
        </motion.p>
      </div>
    </section>
  );
}
