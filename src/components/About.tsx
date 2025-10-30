import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight } from "lucide-react";
import aboutImage from "@/assets/chapel-vehicles.jpg";
const About = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) element.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section className="py-12 sm:py-16 md:py-24" style={{ backgroundColor: '#af8419' }}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start">
          {/* Image */}
          <motion.div initial={{
          opacity: 0,
          x: -40
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="relative">
            <img src={aboutImage} alt="Capela Mortuária do Cemitério São José - Estrutura" className="rounded-xl sm:rounded-2xl shadow-2xl w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] object-cover" />
          </motion.div>

          {/* Content */}
          <motion.div initial={{
          opacity: 0,
          x: 40
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white leading-tight">
              Mais que um serviço, um amparo com respeito e serenidade
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
              A Funerária D.C. é mais do que um local de despedida — é um espaço dedicado a acolher famílias com empatia, cuidado e dignidade. Nossa missão é oferecer tranquilidade nos momentos mais sensíveis, com uma estrutura moderna e uma equipe preparada para atender com excelência.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
              Unimos tradição e tecnologia para garantir um atendimento humano, ágil e respeitoso, cuidando de cada detalhe com sensibilidade e profissionalismo.
            </p>

            {/* Location */}
            

            <Button onClick={scrollToContact} className="bg-white text-primary hover:bg-white/90">
              Agendar visita
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default About;