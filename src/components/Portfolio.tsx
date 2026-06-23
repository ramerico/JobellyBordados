import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import aboutImg from "@/assets/about.jpg";
import chaveiroImg from "@/assets/chaveiro-remove.png";
import laserImg from "@/assets/laser-personalizacao.png";
import brindeCaneta from "@/assets/brinde-caneta-metal-gold-duo.jpg";
import brindeGarrafa from "@/assets/brinde-copo-wine-tumbler.jpg";
import brindeMochila from "@/assets/brinde-mochila-saco-cordao.jpg";

const categories = ["Todos", "Bordados", "Kimonos", "Chaveiros", "Brindes", "Personalizações a Laser"];

const items = [
  { id: 1,  img: hero1,        title: "Kimono KIHON",                   desc: "Reino Jiu Jitsu",                            cat: "Kimonos" },
  { id: 2,  img: hero1,        title: "Team Alex Silva",                 desc: "Judô e Jiu Jitsu",                           cat: "Kimonos" },
  { id: 3,  img: hero1,        title: "Alliance",                        desc: "30 anos de Jiu Jitsu",                       cat: "Kimonos" },
  { id: 4,  img: aboutImg,     title: "Gracie Barra",                    desc: "Carlos Gracie Jr.",                          cat: "Bordados" },
  { id: 5,  img: aboutImg,     title: "Toalhas e Roupões Bordados",      desc: "Bordados em toalha, roupão, mochila e mais", cat: "Bordados" },
  { id: 6,  img: hero2,        title: "Bordados Corporativos",           desc: "Uniformes e peças personalizadas",           cat: "Bordados" },
  { id: 7,  img: chaveiroImg,  title: "Chaveiro Remove Before Flight",   desc: "GOL, SporTV, Grupo Mendes",                  cat: "Chaveiros" },
  { id: 8,  img: chaveiroImg,  title: "Chaveiro Personalizado",          desc: "Para a sua marca e evento",                  cat: "Chaveiros" },
  { id: 9,  img: brindeCaneta, title: "Canetas Metal Gold Duo",          desc: "Brindes corporativos premium",               cat: "Brindes" },
  { id: 10, img: brindeGarrafa,title: "Copo Wine Tumbler",               desc: "Garrafas e copos personalizados",            cat: "Brindes" },
  { id: 11, img: brindeMochila,title: "Mochila Saco Cordão",             desc: "Mochilas e bolsas personalizadas",           cat: "Brindes" },
  { id: 12, img: hero3,        title: "Brindes em Geral",                desc: "Multilaser, Bradesco Seguros e mais",        cat: "Brindes" },
  { id: 13, img: laserImg,     title: "Gravação a Laser",                desc: "Placas de mochilas, canetas, garrafas",      cat: "Personalizações a Laser" },
  { id: 14, img: laserImg,     title: "Personalização Premium",          desc: "Detalhes que fazem a diferença",             cat: "Personalizações a Laser" },
];

const Portfolio = () => {
  const [filter, setFilter] = useState("Todos");
  const filtered = filter === "Todos" ? items : items.filter((i) => i.cat === filter);

  return (
    <section id="portfolio" className="py-24 bg-secondary">
      <div className="container mx-auto px-5">
        <div className="section-heading">
          <h2>
            NOSSO <span className="text-primary">PORTFÓLIO</span>
          </h2>
          <p className="text-muted-foreground text-center mt-2 max-w-xl mx-auto">
            Confira alguns dos nossos trabalhos. Cada projeto é único, feito com cuidado e excelência.
          </p>
        </div>

        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 border-none cursor-pointer ${
                filter === cat
                  ? "bg-primary text-primary-foreground shadow-lg -translate-y-1"
                  : "bg-background text-foreground hover:bg-primary hover:text-primary-foreground hover:-translate-y-1 shadow"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence>
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="relative rounded-2xl overflow-hidden h-64 shadow-lg group cursor-pointer"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent/95 via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <span className="text-primary text-xs font-semibold uppercase tracking-wider mb-1">{item.cat}</span>
                  <h4 className="text-primary-foreground text-lg font-heading font-bold mb-0.5">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/jobellybordados/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            style={{ textDecoration: "none" }}
          >
            <i className="fab fa-instagram text-lg" />
            Ver mais no Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
