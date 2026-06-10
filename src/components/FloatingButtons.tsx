import { useState, useEffect } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";

const FloatingButtons = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href="https://wa.me/5511940110722"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-28 right-8 z-50 w-14 h-14 bg-whatsapp text-primary-foreground rounded-full flex items-center justify-center shadow-lg hover:bg-whatsapp-dark hover:scale-110 hover:rotate-6 transition-all duration-300"
      >
        <MessageCircle size={26} />
      </a>

      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg hover:bg-primary-dark hover:scale-110 transition-all duration-300 animate-float border-none cursor-pointer"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </>
  );
};

export default FloatingButtons;
