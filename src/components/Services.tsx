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
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-3 sm:mb-4 md:mb-6">
            Serviços Completos
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground px-4">
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
                    className="group relative bg-card p-5 sm:p-6 md:p-8 rounded-lg border border-border hover:border-secondary/50 transition-all duration-300 hover:shadow-lg h-full"
                  >
                    <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-secondary/10 rounded-full flex items-center justify-center group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                        <Icon className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-secondary group-hover:text-secondary-foreground transition-colors duration-300" />
                      </div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground">
                        {service.name}
                      </h3>
                      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
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
