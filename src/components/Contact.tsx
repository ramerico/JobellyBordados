import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";

const contactItems = [
  { icon: MapPin, title: "Endereço", lines: ["São Paulo - SP"] },
  { icon: Phone, title: "Telefone", lines: ["(11) 94011-0722"], link: "tel:+5511940110722" },
  { icon: Mail, title: "E-mail", lines: ["contato@jobellybordados.com.br"], link: "mailto:contato@jobellybordados.com.br" },
  { icon: Clock, title: "Horário", lines: ["Seg - Sex: 8h às 18h"] },
];

const Contact = () => (
  <section id="contato" className="py-24 bg-background">
    <div className="container mx-auto px-5">
      <div className="section-heading">
        <h2>
          ENTRE EM <span className="text-primary">CONTATO</span>
        </h2>
      </div>

      <div className="max-w-2xl mx-auto">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {contactItems.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-5 p-6 bg-secondary rounded-2xl transition-all duration-300 hover:translate-x-3 hover:shadow-lg"
            >
              <div className="icon-circle">
                <item.icon size={24} />
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

          <div className="flex gap-4 pt-4">
            {[
              { icon: "fab fa-instagram", href: "#", title: "Instagram" },
              { icon: "fab fa-facebook", href: "#", title: "Facebook" },
              { icon: "fab fa-whatsapp", href: "https://wa.me/5511940110722", title: "WhatsApp" },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center hover:bg-primary hover:-translate-y-2 transition-all duration-300"
                title={s.title}
              >
                <i className={s.icon} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Contact;
