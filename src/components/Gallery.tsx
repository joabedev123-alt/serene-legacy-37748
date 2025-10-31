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
import carouselImg1 from "@/assets/imagens do carossel/WhatsApp Image 2025-10-30 at 20.08.09 (1).jpeg";
import carouselImg2 from "@/assets/imagens do carossel/WhatsApp Image 2025-10-30 at 20.08.09 (2).jpeg";
import carouselImg3 from "@/assets/imagens do carossel/WhatsApp Image 2025-10-30 at 20.08.09.jpeg";
import carouselImg4 from "@/assets/imagens do carossel/WhatsApp Image 2025-10-30 at 20.08.10.jpeg";
import carouselImg5 from "@/assets/imagens do carossel/WhatsApp Image 2025-10-30 at 20.08.11.jpeg";
import carouselImg6 from "@/assets/imagens do carossel/WhatsApp Image 2025-10-30 at 20.08.13.jpeg";
import carouselImg7 from "@/assets/imagens do carossel/WhatsApp Image 2025-10-30 at 20.08.14.jpeg";
import carouselImg8 from "@/assets/imagens do carossel/WhatsApp Image 2025-10-30 at 20.08.31 (1).jpeg";
import carouselImg9 from "@/assets/imagens do carossel/WhatsApp Image 2025-10-30 at 20.08.31 (2).jpeg";
import carouselImg10 from "@/assets/imagens do carossel/WhatsApp Image 2025-10-30 at 20.08.31.jpeg";
import carouselImg11 from "@/assets/imagens do carossel/WhatsApp Image 2025-10-30 at 20.08.32 (1).jpeg";
import carouselImg12 from "@/assets/imagens do carossel/WhatsApp Image 2025-10-30 at 20.08.32.jpeg";
import carouselImg13 from "@/assets/imagens do carossel/WhatsApp Image 2025-10-30 at 20.08.38.jpeg";
import carouselImg14 from "@/assets/imagens do carossel/WhatsApp Image 2025-10-30 at 20.08.39.jpeg";

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
  {
    src: carouselImg1,
    type: "image",
  },
  {
    src: carouselImg2,
    type: "image",
  },
  {
    src: carouselImg3,
    type: "image",
  },
  {
    src: carouselImg4,
    type: "image",
  },
  {
    src: carouselImg5,
    type: "image",
  },
  {
    src: carouselImg6,
    type: "image",
  },
  {
    src: carouselImg7,
    type: "image",
  },
  {
    src: carouselImg8,
    type: "image",
  },
  {
    src: carouselImg9,
    type: "image",
  },
  {
    src: carouselImg10,
    type: "image",
  },
  {
    src: carouselImg11,
    type: "image",
  },
  {
    src: carouselImg12,
    type: "image",
  },
  {
    src: carouselImg13,
    type: "image",
  },
  {
    src: carouselImg14,
    type: "image",
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
    <section className="py-12 sm:py-16 md:py-24" style={{ backgroundColor: '#af8419' }}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-3 sm:mb-4 md:mb-6 px-4">
            Nossa Estrutura
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 px-4">
            Conheça nossa estrutura projetada para oferecer conforto e serenidade.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl"
          >
            {images[currentIndex].type === "image" ? (
              <img
                src={images[currentIndex].src}
                alt="Estrutura da Funerária Descanso Em Cristo"
                className="w-full h-[280px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[650px] object-contain"
              />
            ) : (
              <video
                src={images[currentIndex].src}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-[280px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[650px] object-cover"
              />
            )}
          </motion.div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-1 sm:left-2 md:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Imagem anterior"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-1 sm:right-2 md:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Próxima imagem"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-6 md:mt-8">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary w-6 sm:w-8"
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
