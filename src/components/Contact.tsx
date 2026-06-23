import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";

const contactItems = [
  {
    icon: MapPin,
    title: "Endereço",
    lines: ["São Paulo — SP"],
  },
  {
    icon: Phone,
    title: "Telefone / WhatsApp",
    lines: ["(11) 94011-0722"],
    link: "tel:+5511940110722",
  },
  {
    icon: Mail,
    title: "E-mail",
    lines: ["contato@jobellybordados.com.br"],
    link: "mailto:contato@jobellybordados.com.br",
  },
  {
    icon: Clock,
    title: "Horário de Atendimento",
    lines: ["Seg – Sex: 8h às 18h", "Sáb: 8h às 12h"],
  },
];

const socials = [
  {
    icon: "fab fa-instagram",
    href: "https://www.instagram.com/jobellybordados/",
    label: "Instagram",
    color: "hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500",
  },
  {
    icon: "fab fa-facebook",
    href: "https://www.facebook.com/jobellybordados",
    label: "Facebook",
    color: "hover:bg-blue-600",
  },
  {
    icon: "fab fa-whatsapp",
    href: "https://wa.me/5511940110722",
    label: "WhatsApp",
    color: "hover:bg-green-500",
  },
];

const Contact = () => (
  <section id="contato" className="py-24 bg-background">
    <div className="container mx-auto px-5">
      <div className="section-heading">
        <h2>
          ENTRE EM <span className="text-primary">CONTATO</span>
        </h2>
        <p className="text-muted-foreground text-center mt-2 max-w-xl mx-auto">
          Estamos prontos para atender você. Escolha a melhor forma de falar conosco.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Contact cards */}
        <motion.div
          className="space-y-5"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          {contactItems.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-5 p-6 bg-secondary rounded-2xl transition-all duration-300 hover:translate-x-2 hover:shadow-lg"
            >
              <div className="icon-circle flex-shrink-0">
                <item.icon size={22} />
              </div>
              <div>
                <h4 className="font-heading font-bold mb-1">{item.title}</h4>
                {item.lines.map((line, j) =>
                  item.link ? (
                    <a key={j} href={item.link} className="text-primary hover:underline block">
                      {line}
                    </a>
                  ) : (
                    <p key={j} className="text-muted-foreground">{line}</p>
                  )
                )}
              </div>
            </div>
          ))}

          {/* Social links */}
          <div className="pt-2">
            <p className="font-heading font-bold mb-4 text-sm uppercase tracking-wider text-muted-foreground">
              Redes Sociais
            </p>
            <div className="flex gap-3">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center ${s.color} hover:text-white hover:-translate-y-2 transition-all duration-300`}
                  title={s.label}
                  aria-label={s.label}
                >
                  <i className={`${s.icon} text-lg`} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Quick contact CTA */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-accent rounded-2xl p-10 text-accent-foreground flex flex-col gap-6 justify-center"
        >
          <div className="text-5xl text-center">💬</div>
          <h3 className="text-2xl font-heading font-bold text-primary-foreground text-center">
            Prefere falar pelo WhatsApp?
          </h3>
          <p className="text-primary-foreground/70 text-center text-lg">
            Clique no botão abaixo e fale diretamente com a nossa equipe. Respondemos em minutos!
          </p>
          <a
            href="https://wa.me/5511940110722?text=Olá! Gostaria de solicitar um orçamento."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-center flex items-center justify-center gap-2"
            style={{ textDecoration: "none" }}
          >
            <i className="fab fa-whatsapp text-xl" />
            Iniciar Conversa no WhatsApp
          </a>

          <div className="border-t border-primary-foreground/10 pt-6 text-center">
            <p className="text-primary-foreground/50 text-sm">Ou envie um e-mail para:</p>
            <a
              href="mailto:contato@jobellybordados.com.br"
              className="text-primary font-semibold hover:underline"
            >
              contato@jobellybordados.com.br
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Contact;
