import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const FloatingButtons = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* WhatsApp flutuante */}
      <a
        href="https://wa.me/5511940110722?text=Olá! Gostaria de solicitar um orçamento."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-28 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 group"
        style={{ backgroundColor: "hsl(142 70% 49%)" }}
        aria-label="WhatsApp"
        title="Fale conosco no WhatsApp"
      >
        <i className="fab fa-whatsapp text-2xl text-white group-hover:rotate-6 transition-transform duration-300" />
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full animate-ping opacity-30" style={{ backgroundColor: "hsl(142 70% 49%)" }} />
      </a>

      {/* Scroll to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-8 right-6 z-50 w-14 h-14 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg hover:bg-primary-dark hover:scale-110 transition-all duration-300 border-none cursor-pointer ${
          showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Voltar ao topo"
      >
        <ArrowUp size={22} />
      </button>
    </>
  );
};

export default FloatingButtons;
