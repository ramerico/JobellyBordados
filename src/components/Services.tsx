import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import chaveiroImg from "@/assets/chaveiro-remove.png";
import kimonoImg from "@/assets/hero-1.jpg";
import bordadosImg from "@/assets/hero-2.jpg";
import brindesImg from "@/assets/hero-3.jpg";
import laserImg from "@/assets/laser-personalizacao.png";

const services = [
  {
    icon: "🥋",
    title: "Bordados em Kimonos",
    desc: "Personalização para academias, equipes e atletas com acabamento de alta durabilidade.",
    items: ["Tecido Trançado", "Tecido Ripstop", "Tecido Lona"],
    img: kimonoImg,
    cta: "#orcamento",
  },
  {
    icon: "🧵",
    title: "Bordados em Geral",
    desc: "Bonés, toalhas, bolsas, mochilas e muito mais com bordados precisos e duráveis.",
    items: ["Bonés e Chapéus", "Toalhas e Roupões", "Bolsas e Mochilas"],
    img: bordadosImg,
    cta: "#orcamento",
  },
  {
    icon: "✈️",
    title: "Chaveiros Personalizados",
    desc: "Um dos nossos carros-chefes. Ideal para brindes, eventos e ações corporativas.",
    items: ["Alta Qualidade", "100% Personalizável", "Ideal para Brindes"],
    img: chaveiroImg,
    cta: "#orcamento",
  },
  {
    icon: "🎁",
    title: "Brindes Corporativos",
    desc: "Garrafas, canetas, cadernos, mochilas e muito mais para fortalecer sua marca.",
    items: ["Garrafas & Copos", "Canetas", "Cadernos & Kits"],
    img: brindesImg,
    cta: "#brindes",
  },
  {
    icon: "🏷️",
    title: "Personalizações a Laser",
    desc: "Gravação a laser em placas de mochilas, canetas, garrafas e acessórios.",
    items: ["Placas para Mochilas", "Canetas e Garrafas", "Acabamento Premium"],
    img: laserImg,
    cta: "#orcamento",
  },
];

const Services = () => (
  <section id="servicos" className="py-24 bg-background">
    <div className="container mx-auto px-5">
      <div className="section-heading">
        <h2>
          NOSSOS <span className="text-primary">SERVIÇOS</span>
        </h2>
        <p className="text-muted-foreground text-center mt-6 max-w-xl mx-auto">
          Do bordado artesanal ao brinde personalizado — soluções completas para a sua marca.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className="rounded-2xl overflow-hidden shadow-lg border border-border transition-all duration-400 hover:-translate-y-3 hover:shadow-2xl group bg-card text-card-foreground flex flex-col"
          >
            <div className="w-full h-48 overflow-hidden relative">
              <img
                src={s.img}
                alt={s.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="p-7 flex flex-col flex-1">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-5 bg-primary/10">
                {s.icon}
              </div>
              <h3 className="text-xl font-heading font-bold mb-2">{s.title}</h3>
              <p className="text-muted-foreground mb-5 text-sm leading-relaxed">{s.desc}</p>
              <ul className="space-y-2 mb-6 flex-1">
                {s.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm">
                    <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={s.cta}
                className="flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all duration-300 mt-auto"
                style={{ textDecoration: "none" }}
              >
                Solicitar orçamento <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
