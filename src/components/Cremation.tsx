import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileText, DollarSign, Flame } from "lucide-react";

const Cremation = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="cremacao" className="py-12 sm:py-16 md:py-24" style={{ backgroundColor: '#af8419' }}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8"
        >
          {/* Icon */}
          <div className="flex justify-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary/10 rounded-full flex items-center justify-center">
              <Flame className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white px-4">
            Cremação com respeito e transparência
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto px-4">
            O processo de cremação é conduzido com máximo respeito e dignidade.
            Nossa equipe especializada garante transparência em cada etapa,
            oferecendo às famílias a tranquilidade e o acolhimento necessários.
          </p>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-10 md:mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card p-4 sm:p-6 rounded-lg sm:rounded-xl border border-border"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                Processo Transparente
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Acompanhamento completo de todas as etapas com total clareza
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card p-4 sm:p-6 rounded-lg sm:rounded-xl border border-border"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                <Flame className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                Equipamentos Modernos
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Tecnologia de ponta para um processo seguro e eficiente
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-card p-4 sm:p-6 rounded-lg sm:rounded-xl border border-border sm:col-span-2 md:col-span-1"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                Planos Acessíveis
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Diversas opções que se adequam às necessidades das famílias
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Cremation;
