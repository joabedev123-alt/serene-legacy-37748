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
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-6 md:gap-8"
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
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    {plan.icon === "emerald" ? (
                      <Gem className="w-8 h-8 text-green-500" />
                    ) : plan.icon === "diamond" ? (
                      <Gem className="w-8 h-8 text-blue-500" />
                    ) : (
                      <span className="text-3xl">{plan.icon}</span>
                    )}
                    <span className="font-display">{plan.title}</span>
                  </CardTitle>
                  <CardDescription className="text-lg font-semibold text-primary mt-2">
                    💰 Apenas {plan.price} por mês
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <h3 className="font-semibold mb-3 text-foreground">Benefícios</h3>
                  <ul className="space-y-2 mb-6 flex-grow">
                    {plan.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-muted-foreground flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={() => handleWhatsAppClick(plan.title)}
                    className="w-full bg-green-600 hover:bg-green-700 text-white mt-auto"
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
