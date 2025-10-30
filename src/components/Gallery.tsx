import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import galleryChurchVehicle from "@/assets/gallery-church-vehicle.jpg";
import galleryNightVehicle from "@/assets/gallery-night-vehicle.jpg";
import galleryFlowersPink from "@/assets/gallery-flowers-pink.jpg";
import galleryFlowersYellow from "@/assets/gallery-flowers-yellow.jpg";
import galleryVideo1 from "@/assets/gallery-video-1.mp4";
import galleryVideo2 from "@/assets/gallery-video-2.mp4";
import galleryVideo3 from "@/assets/gallery-video-3.mp4";

const images = [
  {
    src: gallery1,
    type: "image",
  },
  {
    src: gallery2,
    type: "image",
  },
  {
    src: gallery3,
    type: "image",
  },
  {
    src: galleryChurchVehicle,
    type: "image",
  },
  {
    src: galleryNightVehicle,
    type: "image",
  },
  {
    src: galleryFlowersPink,
    type: "image",
  },
  {
    src: galleryFlowersYellow,
    type: "image",
  },
  {
    src: galleryVideo1,
    type: "video",
  },
  {
    src: galleryVideo2,
    type: "video",
  },
  {
    src: galleryVideo3,
    type: "video",
  },
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="py-24" style={{ backgroundColor: '#af8419' }}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4 md:mb-6 px-4">
            Nossa Estrutura
          </h2>
          <p className="text-base md:text-lg text-white/90 px-4">
            Conheça nossa estrutura projetada para oferecer conforto e serenidade.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            {images[currentIndex].type === "image" ? (
              <img
                src={images[currentIndex].src}
                alt="Estrutura da Funerária D.C."
                className="w-full h-[300px] md:h-[400px] object-cover"
              />
            ) : (
              <video
                src={images[currentIndex].src}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-[300px] md:h-[400px] object-cover"
              />
            )}
          </motion.div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Imagem anterior"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-primary" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Próxima imagem"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-primary" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-muted hover:bg-primary/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
