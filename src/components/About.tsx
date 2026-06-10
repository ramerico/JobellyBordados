import { Award, Lightbulb, Clock } from "lucide-react";
import { motion } from "framer-motion";
import aboutImg from "@/assets/about.jpg";

const features = [
  { icon: Award, title: "Qualidade Garantida", desc: "Materiais de primeira linha e técnicas avançadas." },
  { icon: Lightbulb, title: "Criatividade e Inovação", desc: "Designs otimizados para o melhor resultado." },
  { icon: Clock, title: "Entrega no Prazo", desc: "Pontualidade e compromisso com o cliente." },
];

const About = () => (
  <section id="sobre" className="py-24 bg-secondary">
    <div className="container mx-auto px-5">
      <div className="section-heading">
        <h2>
          QUEM <span className="text-primary">SOMOS</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl md:text-4xl font-heading mb-6">
            JOBELLY: <span className="text-primary">Excelência</span> em Cada Ponto
          </h3>
          <p className="text-foreground/80 text-lg mb-6 leading-relaxed">
            Somos especializados em bordados personalizados e brindes promocionais, com mais de 17 anos de mercado. Trabalhamos com compromisso, qualidade e criatividade.
          </p>

          <div className="space-y-4 mb-8">
            {features.map((f, i) => (
              <motion.div
                key={i}
                className="feature-card"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <div className="icon-circle">
                  <f.icon size={24} />
                </div>
                <div>
                  <h4 className="font-heading font-bold mb-1">{f.title}</h4>
                  <p className="text-muted-foreground text-sm">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <a href="#contato" className="btn-primary">
            Entre em Contato
          </a>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={aboutImg}
            alt="Bordado artesanal de qualidade"
            className="w-full rounded-2xl shadow-2xl hover:scale-[1.02] transition-transform duration-500"
          />
          <div className="absolute -bottom-5 -right-5 w-40 h-40 bg-primary text-primary-foreground rounded-full flex flex-col items-center justify-center shadow-2xl animate-pulse-scale">
            <span className="text-5xl font-bold leading-none">17+</span>
            <span className="text-sm text-center mt-1">Anos de Experiência</span>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
