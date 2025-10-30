import { Phone, Mail, MapPin } from "lucide-react";
import logoDC from "@/assets/logo-dc.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 md:mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <img src={logoDC} alt="Funerária D.C." className="h-20 md:h-24 brightness-0 invert" />
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Tradição, respeito e cuidado. Oferecendo dignidade e tranquilidade às famílias com atendimento humanizado e estrutura completa.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <a
                href="tel:27999781195"
                className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>(27) 99978-1195</span>
              </a>
              <a
                href="tel:27997887399"
                className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>(27) 99788-7399</span>
              </a>
            </div>
            <div className="rounded overflow-hidden border border-primary-foreground/20 h-[120px] mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.234567890!2d-40.0672893!3d-19.3911234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDIzJzI4LjAiUyA0MMKwMDQnMDIuMiJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Funerária D.C."
              />
            </div>
          </div>

          {/* Address */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Nossas Unidades</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm text-primary-foreground/80">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-1" />
                <address className="not-italic">
                  <strong>MATRIZ Linhares</strong><br />
                  Av. Guacuí, 1320 - Bairro Araçá
                </address>
              </div>
              <div className="flex items-start gap-3 text-sm text-primary-foreground/80">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-1" />
                <address className="not-italic">
                  <strong>Bebedouro</strong><br />
                  Av. Benevenuto Zorzanelli, 730
                </address>
              </div>
              <div className="flex items-start gap-3 text-sm text-primary-foreground/80">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-1" />
                <address className="not-italic">
                  <strong>Sooretama</strong><br />
                  Rua Francisco, 267 - Centro
                </address>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Horário</h3>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <p>Atendimento 24 horas</p>
              <p>Todos os dias da semana</p>
              <p className="text-primary-foreground font-medium mt-4">
                Sempre disponíveis para auxiliar sua família
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/70">
              © {currentYear} Funerária D.C. — Todos os direitos reservados
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                Política de Privacidade
              </a>
              <span className="text-primary-foreground/40">|</span>
              <a
                href="#"
                className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
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
