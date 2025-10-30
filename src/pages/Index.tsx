import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Cremation from "@/components/Cremation";
import PromotionalBanners from "@/components/PromotionalBanners";
import MemorialGroup from "@/components/MemorialGroup";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Cremation />
        <PromotionalBanners />
        <MemorialGroup />
        <FAQ />
        <section id="contato" className="py-16 md:py-24" style={{ backgroundColor: '#af8419' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-center text-white mb-8 md:mb-12">
                Entre em Contato
              </h2>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
