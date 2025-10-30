import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Send } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // WhatsApp integration
    const whatsappNumber = "551330958722";
    const whatsappMessage = encodeURIComponent(
      `Nome: ${formData.name}\nEmail: ${formData.email}\nTelefone: ${formData.phone}\nMensagem: ${formData.message}`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, "_blank");

    toast.success("Mensagem enviada com sucesso! ✅");
    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsLoading(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-card/95 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-2xl border border-border">
      <h3 className="text-xl sm:text-2xl font-display font-semibold text-foreground mb-4 sm:mb-6">
        Entre em contato
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            type="text"
            name="name"
            placeholder="Nome completo"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-background"
          />
        </div>
        <div>
          <Input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-background"
          />
        </div>
        <div>
          <Input
            type="tel"
            name="phone"
            placeholder="Telefone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="bg-background"
          />
        </div>
        <div>
          <Textarea
            name="message"
            placeholder="Sua mensagem"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="bg-background resize-none"
          />
        </div>
        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-primary hover:bg-accent"
        >
          {isLoading ? (
            "Enviando..."
          ) : (
            <>
              <Send className="w-4 h-4 mr-2" />
              Enviar mensagem
            </>
          )}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
