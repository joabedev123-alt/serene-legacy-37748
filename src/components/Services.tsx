import { motion } from "framer-motion";
import {
  Flame,
  Home,
  Church,
  Building2,
  Box,
  Sparkles,
  Shield,
  Coffee,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const services = [
  {
    icon: Flame,
    name: "Crematório",
    description: "Processo de cremação com respeito e transparência",
  },
  {
    icon: Home,
    name: "Salas de Velório",
    description: "Ambientes acolhedores e privativos para despedidas",
  },
  {
    icon: Church,
    name: "Espaço de Cerimônias",
    description: "Locais preparados para homenagens significativas",
  },
  {
    icon: Building2,
    name: "Ossuários",
    description: "Espaços dignos para guarda de restos mortais",
  },
  {
    icon: Box,
    name: "Lóculos Individuais",
    description: "Compartimentos individuais para sepultamento",
  },
  {
    icon: Sparkles,
    name: "Cinzeiro",
    description: "Locais apropriados para guarda de urnas",
  },
  {
    icon: Shield,
    name: "Segurança 24h",
    description: "Monitoramento e proteção contínua",
  },
  {
    icon: Coffee,
    name: "Cafeteria & Lounge",
    description: "Espaço de conforto para familiares",
  },
];

const Services = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-3 sm:mb-4 md:mb-6">
            Serviços Completos
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground px-4">
            Estrutura moderna e acolhedora para atender todas as suas necessidades
            com dignidade e respeito.
          </p>
        </motion.div>

        {/* Services Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <CarouselItem key={service.name} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                   <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className="group relative bg-card p-4 sm:p-5 rounded-lg border border-border hover:border-secondary/50 transition-all duration-300 hover:shadow-lg h-full"
                  >
                    <div className="flex flex-col items-center text-center space-y-2 sm:space-y-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary/10 rounded-full flex items-center justify-center group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-secondary group-hover:text-secondary-foreground transition-colors duration-300" />
                      </div>
                      <h3 className="text-sm sm:text-base font-semibold text-foreground">
                        {service.name}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default Services;
