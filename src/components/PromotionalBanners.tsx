import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Gem } from "lucide-react";
import { Button } from "@/components/ui/button";

const PromotionalBanners = () => {
  const whatsappNumber = "5527999781195";
  
  const handleWhatsAppClick = (planTitle: string) => {
    const message = encodeURIComponent(`Olá! Gostaria de mais informações sobre o ${planTitle}.`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  const plans = [
    {
      icon: "🏅",
      title: "PLANO DE ASSISTÊNCIA FAMILIAR – OURO",
      price: "R$ 52,00",
      benefits: [
        "O titular pode adicionar mais 04 dependentes ao seu plano sem custo algum.",
        "Urna padrão envernizada, 1,90 m de altura, com varão e visor.",
        "Ornamentação do óbito com flores naturais ou artificiais.",
        "Translado terrestre de carro com até 250 km para buscar ou levar o óbito.",
        "Jogo de castiçal para velório.",
        "01 coroa de flor natural ou artificial.",
        "Velas, véu e manto para velório.",
        "Livro de presença para velório.",
      ],
    },
    {
      icon: "diamond",
      title: "PLANO DE ASSISTÊNCIA FAMILIAR – DIAMANTE",
      price: "R$ 70,00",
      benefits: [
        "O titular pode adicionar mais 06 dependentes ao seu plano sem custo algum.",
        "Urna padrão luxo.",
        "Ornamentação do óbito com flores naturais ou artificiais.",
        "Translado terrestre de carro com até 500 km para buscar ou levar o óbito.",
        "Jogo de castiçal para velório.",
        "01 coroa de flor natural ou artificial.",
        "Velas, véu e manto para velório.",
        "Livro de presença para velório.",
        "Auxílio lanche / Coffee break.",
        "Conjunto de roupa masculina ou feminina para vestir o óbito.",
        "Ônibus para cortejo fúnebre nos cemitérios São José, Cemitério do Centro de Linhares e Cemitério Planalto.",
      ],
    },
    {
      icon: "emerald",
      title: "PLANO DE ASSISTÊNCIA FAMILIAR – ESMERALDA",
      price: "R$ 100,00",
      benefits: [
        "O titular pode adicionar mais 9 dependentes ao seu plano sem custo algum.",
        "Urna luxo.",
        "Higienização e preparo do óbito para velório com fornecimento de remédio.",
        "Translado de até 700 km dentro do estado do Espírito Santo.",
        "Jogo de castiçal para velório.",
        "01 coroa de flor natural ou artificial.",
        "Velas, véu e manto para velório.",
        "Livro de presença para velório.",
        "Auxílio lanche / Coffee break.",
        "Conjunto de roupa masculina ou feminina para vestir o óbito.",
        "Ônibus para cortejo fúnebre nos cemitérios São José, Cemitério do Centro de Linhares e Cemitério Planalto.",
      ],
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow flex flex-col">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="flex items-start sm:items-center gap-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl flex-col sm:flex-row">
                    <div className="flex-shrink-0">
                      {plan.icon === "emerald" ? (
                        <Gem className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-green-500" />
                      ) : plan.icon === "diamond" ? (
                        <Gem className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-blue-500" />
                      ) : (
                        <span className="text-3xl sm:text-4xl md:text-5xl">{plan.icon}</span>
                      )}
                    </div>
                    <span className="font-display text-left">{plan.title}</span>
                  </CardTitle>
                  <CardDescription className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary mt-2">
                    💰 Apenas {plan.price} por mês
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3 text-foreground">Benefícios</h3>
                  <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 flex-grow">
                    {plan.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-base sm:text-lg md:text-xl text-muted-foreground flex items-start">
                        <span className="mr-2 text-primary flex-shrink-0 text-lg sm:text-xl">•</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={() => handleWhatsAppClick(plan.title)}
                    className="w-full bg-green-600 hover:bg-green-700 text-white mt-auto text-lg sm:text-xl md:text-2xl py-3 sm:py-4 md:py-5"
                  >
                    Contratar via WhatsApp
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PromotionalBanners;
