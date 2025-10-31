import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import logoDC from "@/assets/logo-dc.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const whatsappNumber = "5527999781195";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de mais informações sobre os serviços da Funerária Descanso Em Cristo");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-1">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center cursor-pointer -my-2"
            onClick={() => scrollToSection("home")}
          >
            <img src={logoDC} alt="Funerária Descanso Em Cristo" className="h-20 sm:h-24 md:h-32 lg:h-40 object-contain" />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            <button
              onClick={() => scrollToSection("home")}
              className="text-base font-medium text-foreground hover:text-secondary transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("cremacao")}
              className="text-base font-medium text-foreground hover:text-secondary transition-colors"
            >
              Cremação
            </button>
            <button
              onClick={() => scrollToSection("grupo")}
              className="text-base font-medium text-foreground hover:text-secondary transition-colors"
            >
              Grupo
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-base font-medium text-foreground hover:text-secondary transition-colors"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-base font-medium text-foreground hover:text-secondary transition-colors"
            >
              Contato
            </button>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-2">
            <Button
              onClick={() => scrollToSection("contato")}
              className="bg-primary hover:bg-secondary"
            >
              Fale Conosco
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-foreground"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden mt-2 pb-2 border-t border-border pt-2"
          >
            <nav className="flex flex-col gap-2">
              <button
                onClick={() => scrollToSection("home")}
                className="text-base font-medium text-foreground hover:text-secondary transition-colors text-left"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("cremacao")}
                className="text-base font-medium text-foreground hover:text-secondary transition-colors text-left"
              >
                Cremação
              </button>
              <button
                onClick={() => scrollToSection("grupo")}
                className="text-base font-medium text-foreground hover:text-secondary transition-colors text-left"
              >
                Grupo
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-base font-medium text-foreground hover:text-secondary transition-colors text-left"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-base font-medium text-foreground hover:text-secondary transition-colors text-left"
              >
                Contato
              </button>
              <Button
                onClick={() => scrollToSection("contato")}
                className="bg-primary hover:bg-secondary w-full"
              >
                Fale Conosco
              </Button>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;
