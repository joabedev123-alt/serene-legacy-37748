import { motion } from "framer-motion";
import heroBackground from "@/assets/hero-background.jpg";
import logoDC from "@/assets/logo-dc.png";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${heroBackground})`,
          }}
        />
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-start justify-center max-w-4xl"
        >
          <img src={logoDC} alt="Funerária Descanso em Cristo" className="w-40 sm:w-48 md:w-64 lg:w-72 mb-4 sm:mb-6 md:mb-8" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold mb-3 sm:mb-4 md:mb-6 leading-tight" style={{ color: '#daa520' }}>
            Funerária Descanso Em Cristo
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 font-light">
            Sempre cuidando de quem você tanto ama
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
