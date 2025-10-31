import { motion } from "framer-motion";
import { Clock, Shield, Award } from "lucide-react";

const MemorialGroup = () => {
  return (
    <section id="grupo" className="py-12 sm:py-16 md:py-24" style={{ backgroundColor: '#af8419' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4 sm:space-y-6 text-center"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight px-4">
              Funerária Descanso Em Cristo
            </h2>
            <p className="text-xl sm:text-2xl md:text-3xl text-primary font-semibold px-4">
              Tradição, respeito e cuidado em cada despedida.
            </p>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white leading-relaxed px-4">
              A Funerária Descanso Em Cristo é referência em serviços funerários, oferecendo atendimento humanizado e estrutura completa para acolher famílias com dignidade e serenidade.
              Com anos de experiência e compromisso com a excelência, unimos sensibilidade, profissionalismo e tecnologia para proporcionar um amparo verdadeiro em todos os momentos.
            </p>

            {/* Trust Badges */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-10 md:mt-12">
              <div className="flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-6 bg-card rounded-lg border border-border">
                <Clock className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary" />
                <div className="text-center">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground mb-1">
                    Atendimento 24 horas
                  </h3>
                  <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
                    Disponíveis a qualquer momento para auxiliar sua família
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-6 bg-card rounded-lg border border-border">
                <Shield className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary" />
                <div className="text-center">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground mb-1">
                    Credenciamento Nacional
                  </h3>
                  <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
                    Reconhecimento e confiança em todo território brasileiro
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-6 bg-card rounded-lg border border-border sm:col-span-2 md:col-span-1">
                <Award className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary" />
                <div className="text-center">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground mb-1">
                    Excelência em Serviços
                  </h3>
                  <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
                    Compromisso com qualidade e respeito em cada atendimento
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MemorialGroup;
