import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import hero1 from "@/assets/hero-1.jpg";

const stats = [
  { value: 17, suffix: "+", label: "Anos de Experiência" },
  { value: 500, suffix: "+", label: "Clientes Satisfeitos" },
  { value: 10000, suffix: "+", label: "Peças Entregues" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-5xl md:text-6xl font-bold text-primary-light leading-none mb-3">
      {count.toLocaleString()}{suffix}
    </div>
  );
};

const Stats = () => (
  <section
    className="py-24 relative bg-fixed bg-cover bg-center"
    style={{ backgroundImage: `url(${hero1})` }}
  >
    <div className="absolute inset-0 bg-accent/80" />
    <div className="container mx-auto px-5 relative z-10">
      <div className="flex flex-col md:flex-row justify-around gap-10">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            className="text-center text-primary-foreground"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
          >
            <Counter target={s.value} suffix={s.suffix} />
            <p className="text-xl font-medium">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Stats;

