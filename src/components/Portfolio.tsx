import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import aboutImg from "@/assets/about.jpg";
import chaveiroImg from "@/assets/chaveiro-remove.png";
import laserImg from "@/assets/laser-personalizacao.png";

const categories = ["Todos", "Bordados", "Kimonos", "Chaveiro Remove", "Brindes em Geral", "Personalizações a Laser"];

const items = [
  { id: 1,  img: hero1,       title: "Kimono KIHON",                   desc: "Reino Jiu Jitsu",                           cat: "Kimonos" },
  { id: 2,  img: hero1,       title: "Team Alex Silva",                 desc: "Judo e Jiu Jitsu",                          cat: "Kimonos" },
  { id: 3,  img: hero1,       title: "Alliance",                        desc: "30 anos de Jiu Jitsu",                      cat: "Kimonos" },
  { id: 4,  img: aboutImg,    title: "Gracie Barra",                    desc: "Carlos Gracie Jr.",                         cat: "Bordados" },
  { id: 5,  img: aboutImg,    title: "Toalhas e Roupões Bordados",      desc: "Bordados em Toalha, Roupão, Mochila e mais", cat: "Bordados" },
  { id: 6,  img: chaveiroImg, title: "Chaveiro Remove — Clientes",      desc: "GOL, sportv, Grupo Mendes",                 cat: "Chaveiro Remove" },
  { id: 7,  img: chaveiroImg, title: "Chaveiro Remove — Personalizado", desc: "Personalizado para sua marca",              cat: "Chaveiro Remove" },
  { id: 8,  img: hero2,       title: "Brindes em Geral",                desc: "Garrafas, Canetas, Moleskines e mais",      cat: "Brindes em Geral" },
  { id: 9,  img: hero2,       title: "Brindes Corporativos",            desc: "Multilaser, Bradesco Seguros e mais",       cat: "Brindes em Geral" },
  { id: 10, img: laserImg,    title: "Gravação a Laser",                desc: "Placas de mochilas, canetas, garrafas",     cat: "Personalizações a Laser" },
];

const Portfolio = () => {
  const [filter, setFilter] = useState("Todos");
  const filtered = filter === "Todos" ? items : items.filter((i) => i.cat === filter);

  return (
    <section id="portfolio" className="py-24 bg-secondary">
      <div className="container mx-auto px-5">
        <div className="section-heading">
          <h2>NOSSO <span className="text-primary">PORTFÓLIO</span></h2>
        </div>

        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setFilter(cat)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 border-none cursor-pointer shadow-md ${filter === cat ? "bg-primary text-primary-foreground -translate-y-1" : "bg-background text-foreground hover:bg-primary hover:text-primary-foreground hover:-translate-y-1"}`}>
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative rounded-2xl overflow-hidden h-72 shadow-lg group cursor-pointer"
              >
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-accent/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-7">
                  <h4 className="text-primary-foreground text-xl font-heading font-bold mb-1">{item.title}</h4>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
