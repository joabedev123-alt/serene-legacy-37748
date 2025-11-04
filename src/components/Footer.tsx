import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import logoDC from "@/assets/logo-dc.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-8 sm:py-10 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8 md:mb-12">
          {/* Brand */}
          <div className="space-y-3 sm:space-y-4 text-center sm:text-left">
            <img src={logoDC} alt="Funerária Descanso Em Cristo" className="h-16 sm:h-20 md:h-24 brightness-0 invert mx-auto sm:mx-0" />
            <p className="text-primary-foreground/80 text-base sm:text-lg md:text-xl leading-relaxed">
              Tradição, respeito e cuidado. Oferecendo dignidade e tranquilidade às famílias com atendimento humanizado e estrutura completa.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-3 sm:space-y-4 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4">Contato</h3>
            <div className="space-y-2 sm:space-y-3">
              <a
                href="tel:27999781195"
                className="flex items-center gap-2 sm:gap-3 text-base sm:text-lg md:text-xl text-primary-foreground/80 hover:text-primary-foreground transition-colors justify-center sm:justify-start"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0" />
                <span>(27) 99978-1195</span>
              </a>
              <a
                href="tel:27997887399"
                className="flex items-center gap-2 sm:gap-3 text-base sm:text-lg md:text-xl text-primary-foreground/80 hover:text-primary-foreground transition-colors justify-center sm:justify-start"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0" />
                <span>(27) 99788-7399</span>
              </a>
              <a
                href="https://www.instagram.com/funerariadc?igsh=MXg2OGZydTFpY2Vrdw%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 sm:gap-3 text-base sm:text-lg md:text-xl text-primary-foreground/80 hover:text-primary-foreground transition-colors justify-center sm:justify-start"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0" />
                <span>Instagram</span>
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 sm:gap-3 text-base sm:text-lg md:text-xl text-primary-foreground/80 hover:text-primary-foreground transition-colors justify-center sm:justify-start"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0" />
                <span>Facebook</span>
              </a>
            </div>
            <div className="rounded overflow-hidden border border-primary-foreground/20 h-[100px] sm:h-[120px] mt-3 sm:mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.234567890!2d-40.0672893!3d-19.3911234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDIzJzI4LjAiUyA0MMKwMDQnMDIuMiJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Funerária Descanso Em Cristo"
              />
            </div>
          </div>

          {/* Address */}
          <div className="space-y-3 sm:space-y-4 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4">Nossas Unidades</h3>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-start gap-2 sm:gap-3 text-base sm:text-lg md:text-xl text-primary-foreground/80 justify-center sm:justify-start">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0 mt-1" />
                <address className="not-italic text-left">
                  <strong>MATRIZ Linhares</strong><br />
                  Av. Guacuí, 1320 - Bairro Araçá
                </address>
              </div>
              <div className="flex items-start gap-2 sm:gap-3 text-base sm:text-lg md:text-xl text-primary-foreground/80 justify-center sm:justify-start">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0 mt-1" />
                <address className="not-italic text-left">
                  <strong>Bebedouro</strong><br />
                  Av. Benevenuto Zorzanelli, 730
                </address>
              </div>
              <div className="flex items-start gap-2 sm:gap-3 text-base sm:text-lg md:text-xl text-primary-foreground/80 justify-center sm:justify-start">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0 mt-1" />
                <address className="not-italic text-left">
                  <strong>Sooretama</strong><br />
                  Rua Francisco, 267 - Centro
                </address>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-3 sm:space-y-4 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4">Horário</h3>
            <div className="space-y-1.5 sm:space-y-2 text-base sm:text-lg md:text-xl text-primary-foreground/80">
              <p>Atendimento 24 horas</p>
              <p>Todos os dias da semana</p>
              <p className="text-primary-foreground font-medium mt-3 sm:mt-4">
                Sempre disponíveis para auxiliar sua família
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-base sm:text-lg md:text-xl text-primary-foreground/70 text-center md:text-left">
              © {currentYear} Funerária Descanso Em Cristo — Todos os direitos reservados
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <a
                href="#"
                className="text-base sm:text-lg md:text-xl text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                Política de Privacidade
              </a>
              <span className="text-primary-foreground/40">|</span>
              <a
                href="#"
                className="text-base sm:text-lg md:text-xl text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
