import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "O que é a cremação?",
    answer:
      "A cremação é um processo de transformação do corpo em cinzas através de alta temperatura. É uma alternativa ao sepultamento tradicional, realizada com total respeito e dignidade. O processo ocorre em câmaras especiais, seguindo rigorosas normas técnicas e ambientais.",
  },
  {
    question: "Quero ser cremado. O que devo fazer?",
    answer:
      "Para optar pela cremação, você pode manifestar sua vontade em documento, testamento ou comunicar verbalmente aos familiares. No momento necessário, os familiares devem apresentar esta manifestação junto à autorização legal. Nossa equipe oferece orientação completa durante todo o processo.",
  },
  {
    question: "O crematório realiza quantas cremações simultâneas?",
    answer:
      "Por questões técnicas e de respeito, realizamos apenas uma cremação por vez em cada câmara. Cada processo é individual, garantindo a identificação e integridade das cinzas de cada pessoa. Este procedimento assegura total transparência e confiabilidade.",
  },
  {
    question: "Como ter certeza das cinzas?",
    answer:
      "Utilizamos um sistema rigoroso de identificação. Cada corpo recebe uma plaqueta metálica numerada que permanece durante todo o processo. As cinzas são recolhidas junto com esta plaqueta, garantindo identificação precisa. Todo o processo é documentado e pode ser acompanhado pela família.",
  },
  {
    question: "Qual o destino das cinzas?",
    answer:
      "As cinzas podem ser entregues aos familiares em urna adequada. As opções incluem: guarda em cinzeiro memorial, sepultamento, dispersão em local significativo (conforme legislação) ou permanência com a família. Orientamos sobre todas as possibilidades legais e respeitosas.",
  },
  {
    question: "O que é um cinzeiro?",
    answer:
      "O cinzeiro é um espaço especialmente projetado para guardar urnas com cinzas. Pode ser individual ou familiar, localizado em área memorial apropriada. Oferecemos opções com diferentes designs e acabamentos, proporcionando um local digno de homenagem e visitação.",
  },
];

const FAQ = () => {
  const handleWhatsAppContact = () => {
    const whatsappNumber = "551330958722";
    const whatsappMessage = encodeURIComponent("Olá! Tenho dúvidas sobre os serviços do Memorial Litoral.");
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, "_blank");
  };

  return (
    <section id="faq" className="py-12 sm:py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4 sm:mb-6">
            Perguntas Frequentes
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-muted-foreground px-4">
            Esclarecemos suas dúvidas sobre nossos serviços e processos.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-4 sm:px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed pt-2 pb-2">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 sm:mt-10 md:mt-12 text-center"
          >
            <p className="text-lg sm:text-xl text-muted-foreground mb-4 sm:mb-6 px-4">
              Ainda tem dúvidas?
            </p>
            <Button
              onClick={handleWhatsAppContact}
              className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground text-base sm:text-lg"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Converse conosco
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
