import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import networking from "../assets/Networking_Essentials_certificate_eyoabamare3-gmail-com_b7dab851-698e-4397-bd33-2788232151b8_page-0001.jpg";
import packet from "../assets/Introduction_to_Packet_Tracer_certificate_eyoabamare3-gmail-com_6b146a22-1178-49e6-a790-1d9d825ed9dd_page-0001.jpg";
import vmware from "../assets/Certificate_of_Completion_DCV_CTS_Data_Center_Virtualization_Core_Technical_Skills_Amare_page-0001.jpg";

const certificates = [
  {
    image: networking,
    name: "Cisco: Networking Essentials",
  },
  {
    image: packet,
    name: "Cisco: Introduction to Packet Tracer",
  },
  {
    image: vmware,
    name: "VMware IT Academy: Data Center Virtualization: Core Technical Skills",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: 'easeOut' } },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
};

const Certificates = () => {
  const [modal, setModal] = useState(null);

  // Prevent background scroll when modal is open
  React.useEffect(() => {
    if (modal !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [modal]);

  return (
    <section className="relative w-full flex flex-col items-center justify-center min-h-[60vh] py-16 bg-transparent overflow-hidden">
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-[#57564F] mb-12 text-center z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        Certificates
      </motion.h2>
      <motion.div
        className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {certificates.map((cert, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(87,86,79,0.15)" }}
            whileTap={{ scale: 1.07 }}
            className="flex flex-col items-center bg-white/80 rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 min-h-[340px] md:min-h-[400px] p-6 border-l-8 border-[#F8F3CE] cursor-pointer"
            onClick={() => setModal(cert)}
          >
            <div className="w-full h-48 md:h-56 flex items-center justify-center overflow-hidden mb-4">
              <img
                src={cert.image}
                alt={cert.name}
                className="w-full h-full object-contain rounded-xl border border-[#DDDAD0] bg-[#DDDAD0]"
              />
            </div>
            <div className="flex-1 flex items-center justify-center">
              <p className="text-center text-[#57564F] font-semibold text-lg md:text-xl px-2 leading-snug">
                {cert.name}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <AnimatePresence>
        {modal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur"
            initial="hidden"
            animate="show"
            exit="exit"
            variants={modalVariants}
          >
            <div className="absolute top-6 right-6 md:top-10 md:right-10 z-50">
              <button
                onClick={() => setModal(null)}
                className="text-white bg-[#57564F]/80 hover:bg-[#57564F] rounded-full p-2 shadow-lg focus:outline-none focus:ring-2 focus:ring-[#F8F3CE]"
                aria-label="Close"
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
              </button>
            </div>
            <motion.img
              src={modal.image}
              alt={modal.name}
              className="max-h-[80vh] max-w-[90vw] rounded-2xl border-4 border-[#F8F3CE] shadow-2xl bg-white"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
