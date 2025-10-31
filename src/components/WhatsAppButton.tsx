import { motion } from "framer-motion";
import whatsappIcon from "@/assets/whatsapp-icon.webp";

const WhatsAppButton = () => {
  const whatsappNumber = "5527999781195";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de mais informações sobre os serviços da Funerária Descanso Em Cristo");

  return (
    <motion.a
      href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-whatsapp/20 hover:bg-whatsapp/30 backdrop-blur-sm rounded-full p-2 sm:p-3 shadow-lg transition-all duration-300"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Contato via WhatsApp"
    >
      <img src={whatsappIcon} alt="WhatsApp" className="w-10 h-10 sm:w-12 sm:h-12" />
    </motion.a>
  );
};

export default WhatsAppButton;
