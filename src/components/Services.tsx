import { motion } from "framer-motion";
import chaveiroImg from "@/assets/chaveiro-remove.png";
import kimonoImg from "@/assets/hero-1.jpg";
import bordadosImg from "@/assets/hero-2.jpg";
import brindesImg from "@/assets/hero-3.jpg";
import laserImg from "@/assets/laser-personalizacao.png";

const services = [
  {
    icon: "🥋",
    title: "Bordados em Kimonos",
    desc: "Personalização para academias, equipes e atletas.",
    items: ["Trançado", "Tecido Ripstop", "Tecido Lona"],
    dark: false,
    img: kimonoImg,
  },
  {
    icon: "🧵",
    title: "Bordados",
    desc: "Bonés, toalhas, bolsas, mochilas e muito mais.",
    items: ["Bonés e Chapéus", "Toalhas e Roupões", "Bolsas e Mochilas"],
    dark: false,
    img: bordadosImg,
  },
  {
    icon: "✈️",
    title: "Chaveiros",
    desc: "Um dos nossos carros-chefes. Personalizado para sua marca.",
    items: ["Alta Qualidade", "Personalizado", "Ideal para Brindes"],
    dark: false,
    img: chaveiroImg,
  },
  {
    icon: "🎁",
    title: "Brindes em Geral",
    desc: "Garrafas, canetas, moleskines e brindes corporativos.",
    items: ["Garrafas", "Canetas", "Moleskines", "Squeezes"],
    dark: false,
    img: brindesImg,
  },
  {
    icon: "🏷️",
    title: "Personalizações a Laser",
    desc: "Gravação a laser em placas de mochilas, canetas, garrafas e mais.",
    items: ["Mochilas", "Canetas", "Garrafas"],
    dark: false,
    img: laserImg,
  },
];

const Services = () => (
  <section id="servicos" className="py-24 bg-background">
    <div className="container mx-auto px-5">
      <div className="section-heading">
        <h2>NOSSOS <span className="text-primary">SERVIÇOS</span></h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.3 }}
            className={`rounded-2xl overflow-hidden shadow-lg border transition-all duration-500 hover:-translate-y-5 hover:shadow-2xl group bg-card text-card-foreground border-border`}
          >
            {s.img && (
              <div className="w-full h-44 overflow-hidden">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            )}
            <div className="p-8">
              <div className={`w-20 h-20 rounded-full flex items-center justify-center text-4xl mb-6 bg-primary/10`}>
                {s.icon}
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">{s.title}</h3>
              <p className="opacity-80 mb-5">{s.desc}</p>
              <ul className="space-y-3">
                {s.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-2">
                    <span className="text-primary">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
