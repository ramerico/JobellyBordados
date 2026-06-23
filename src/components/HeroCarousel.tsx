import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import chaveiroImg from "@/assets/chaveiro-remove.png";

const slides = [
  {
    image: hero1,
    title: "Bordados de Alta Qualidade",
    subtitle: "Há mais de 17 anos transformando ideias em arte personalizada",
  },
  {
    image: hero2,
    title: "Brindes Personalizados",
    subtitle: "Garrafas, canetas, moleskines e muito mais para sua marca",
  },
  {
    image: chaveiroImg,
    title: "Chaveiros",
    subtitle: "Um dos nossos carros-chefes — personalizado para sua marca",
  },
  {
    image: hero3,
    title: "Personalizações a Laser",
    subtitle: "Placas de mochilas, canetas, garrafas e muito mais",
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 3500);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="inicio" className="relative w-full h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[current].image})` }}
        >
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 100%)" }} />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 flex items-center justify-center h-full text-center text-primary-foreground px-5">
        <motion.div
          key={`content-${current}`}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight drop-shadow-lg">
            {slides[current].title}
          </h1>
          <p className="text-lg md:text-xl mb-10 opacity-90">
            {slides[current].subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#orcamento" className="btn-primary">Solicitar Orçamento</a>
            <a href="#portfolio" className="btn-outline-white">Ver Portfólio</a>
          </div>
        </motion.div>
      </div>

      <button onClick={prev} className="absolute left-5 md:left-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full flex items-center justify-center text-primary-foreground backdrop-blur-md transition-all duration-300 hover:bg-primary hover:scale-110 cursor-pointer border-none" style={{ background: "rgba(0,0,0,0.4)" }}>
        <ChevronLeft size={28} />
      </button>
      <button onClick={next} className="absolute right-5 md:right-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full flex items-center justify-center text-primary-foreground backdrop-blur-md transition-all duration-300 hover:bg-primary hover:scale-110 cursor-pointer border-none" style={{ background: "rgba(0,0,0,0.4)" }}>
        <ChevronRight size={28} />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-4">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`w-3.5 h-3.5 rounded-full border-none cursor-pointer transition-all duration-300 ${i === current ? "bg-primary scale-130" : "bg-primary-foreground/50"}`} />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
