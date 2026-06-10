import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import canetaAzul from "@/assets/brinde-caneta-azul.jpg";
import canetaSuporte from "@/assets/brinde-caneta-suporte.jpg";
import canetaMetal from "@/assets/brinde-caneta-metal.jpg";
import canetaStylus from "@/assets/brinde-caneta-stylus.jpg";
import canetaSlim from "@/assets/brinde-caneta-slim.jpg";
import canetaSoftTouch from "@/assets/brinde-caneta-softtouch.jpg";
import canetaTransparente from "@/assets/brinde-caneta-transparente.jpg";

import mochilaColorida from "@/assets/brinde-mochila-colorida.jpg";
import mochilaUsb from "@/assets/brinde-mochila-usb.jpg";
import mochilaExecutiva from "@/assets/brinde-mochila-executiva.jpg";
import mochilaPreta from "@/assets/brinde-mochila-preta.jpg";
import mochilaPreta2 from "@/assets/brinde-mochila-preta2.jpg";
import mochilaPremium from "@/assets/brinde-mochila-premium.jpg";

import cadernoPena from "@/assets/brinde-caderno-caneta.jpg";
import cadernoPena2 from "@/assets/brinde-caderno-eco.jpg";
import blocoNotas from "@/assets/brinde-bloco-notas.jpg";

import garrafaTermica from "@/assets/brinde-garrafa-termica.jpg";
import bolsaViagem from "@/assets/brinde-bolsa-viagem.jpg";
import sacolaCores from "@/assets/brinde-sacola-cores.jpg";
import sacolaAlgodao from "@/assets/brinde-sacola-algodao.jpg";

type Category = "todos" | "canetas" | "mochilas" | "cadernos" | "outros";

const allItems = [
  { cat: "canetas" as Category, img: canetaAzul, title: "Caneta Plástica Premium", desc: "Corpo translúcido com clip metálico" },
  { cat: "canetas" as Category, img: canetaSuporte, title: "Caneta com Suporte Celular", desc: "3 em 1: escreve, stylus e apoio para celular" },
  { cat: "canetas" as Category, img: canetaMetal, title: "Caneta Metálica Executiva", desc: "Acabamento brilhante em diversas cores" },
  { cat: "canetas" as Category, img: canetaStylus, title: "Caneta Stylus Color", desc: "Ponta touch screen e corpo colorido" },
  { cat: "canetas" as Category, img: canetaSlim, title: "Caneta Slim Bicolor", desc: "Design fino com clip preto e corpo colorido" },
  { cat: "canetas" as Category, img: canetaSoftTouch, title: "Caneta Soft Touch", desc: "Acabamento suave com ponta stylus" },
  { cat: "canetas" as Category, img: canetaTransparente, title: "Caneta Transparente Grip", desc: "Corpo cristal com grip acanalado" },
  { cat: "mochilas" as Category, img: mochilaColorida, title: "Mochila Casual", desc: "Leve e resistente, disponível em 3 cores" },
  { cat: "mochilas" as Category, img: mochilaUsb, title: "Mochila com USB", desc: "Saída USB integrada para carregar dispositivos" },
  { cat: "mochilas" as Category, img: mochilaExecutiva, title: "Mochila Executiva", desc: "Acabamento couro sintético premium" },
  { cat: "mochilas" as Category, img: mochilaPreta, title: "Mochila Profissional", desc: "Múltiplos compartimentos, ideal para notebooks" },
  { cat: "mochilas" as Category, img: mochilaPreta2, title: "Mochila Corporativa Plus", desc: "Alta capacidade para uso diário" },
  { cat: "mochilas" as Category, img: mochilaPremium, title: "Mochila Premium Bicolor", desc: "Tecido + PU, alça de couro sintético" },
  { cat: "cadernos" as Category, img: cadernoPena, title: "Caderno com Caneta", desc: "Kit caderno emborrachado + caneta inclusa" },
  { cat: "cadernos" as Category, img: cadernoPena2, title: "Caderno Ecológico", desc: "Capa kraft reciclada, espiral e caneta eco" },
  { cat: "cadernos" as Category, img: blocoNotas, title: "Bloco de Notas Colorido", desc: "Com marcadores adesivos e caneta eco" },
  { cat: "outros" as Category, img: garrafaTermica, title: "Garrafa Térmica Inox", desc: "Mantém temperatura por até 24h, 6 cores" },
  { cat: "outros" as Category, img: bolsaViagem, title: "Bolsa de Viagem", desc: "Espaçosa, leve e resistente, 3 cores" },
  { cat: "outros" as Category, img: sacolaCores, title: "Sacola Nylon Colorida", desc: "Cordão duplo, 8 cores vibrantes" },
  { cat: "outros" as Category, img: sacolaAlgodao, title: "Sacola Algodão + Cortiça", desc: "Sustentável, base em cortiça natural" },
];

const categories: { key: Category; label: string; emoji: string }[] = [
  { key: "todos", label: "Todos", emoji: "🎁" },
  { key: "canetas", label: "Canetas", emoji: "✒️" },
  { key: "mochilas", label: "Mochilas & Bolsas", emoji: "🎒" },
  { key: "cadernos", label: "Cadernos", emoji: "📓" },
  { key: "outros", label: "Garrafas & Sacolas", emoji: "🫙" },
];

const Brindes = () => {
  const [active, setActive] = useState<Category>("todos");

  const filtered = active === "todos" ? allItems : allItems.filter((i) => i.cat === active);

  return (
    <section id="brindes" className="py-24 bg-muted/30">
      <div className="container mx-auto px-5">
        <div className="section-heading">
          <h2>
            NOSSOS <span className="text-primary">BRINDES</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-3 text-center">
            Personalizamos com bordado, gravação a laser ou impressão. Ideal para eventos corporativos, brindes promocionais e kits exclusivos.
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => setActive(c.key)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
                active === c.key
                  ? "bg-primary text-primary-foreground border-primary shadow-lg scale-105"
                  : "bg-background text-foreground border-border hover:border-primary hover:text-primary"
              }`}
            >
              {c.emoji} {c.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <AnimatePresence>
            {filtered.map((item, i) => (
              <motion.div
                key={item.img}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25, delay: i * 0.03 }}
                className="group bg-card rounded-2xl overflow-hidden shadow-md border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="aspect-square overflow-hidden bg-white">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-heading font-bold text-sm leading-tight mb-1">{item.title}</h4>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <div className="text-center mt-14">
          <p className="text-muted-foreground mb-5 text-lg">
            Não encontrou o que precisa? Temos muito mais opções!
          </p>
          <a
            href="#orcamento"
            className="inline-block bg-primary text-primary-foreground font-bold px-8 py-4 rounded-full shadow-lg hover:opacity-90 transition-opacity text-base"
          >
            🎁 Solicitar Catálogo Completo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Brindes;
