import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoImg from "@/assets/logo.png";

const navLinks = [
  { label: "Início",      href: "#inicio" },
  { label: "Quem Somos", href: "#sobre" },
  { label: "Serviços",   href: "#servicos" },
  { label: "Brindes",    href: "#brindes" },
  { label: "Orçamento",  href: "#orcamento" },
  { label: "Portfólio",  href: "#portfolio" },
  { label: "Contato",    href: "#contato" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-400 ${
        scrolled ? "bg-accent py-3 shadow-2xl" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-5 flex justify-between items-center">
        <a href="#inicio" className="flex items-center" onClick={() => setMenuOpen(false)}>
          <img src={logoImg} alt="Jobelly Bordados" className="h-12 w-auto" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:block">
          <ul className="flex gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-primary-foreground font-semibold relative pb-2 transition-colors hover:text-primary text-sm lg:text-base ${
                    activeSection === link.href.replace("#", "") ? "text-primary" : ""
                  }`}
                  style={{ textDecoration: "none" }}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                      activeSection === link.href.replace("#", "") ? "w-full" : "w-0"
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA button desktop */}
        <a
          href="https://wa.me/5511940110722"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2 rounded-full font-semibold text-sm hover:bg-primary-dark transition-all duration-300 hover:-translate-y-0.5 shadow-md"
          style={{ textDecoration: "none" }}
        >
          <i className="fab fa-whatsapp" />
          Fale Conosco
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden text-primary-foreground text-3xl bg-transparent border-none cursor-pointer p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile overlay */}
      {menuOpen && (
        <div
          className="md:hidden fixed inset-0 top-[72px] bg-black/50 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile nav */}
      <nav
        className={`md:hidden fixed top-[72px] left-0 w-4/5 max-w-xs h-[calc(100vh-72px)] bg-accent z-50 transition-transform duration-300 shadow-2xl overflow-y-auto ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col p-8 gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`font-semibold text-lg block py-3 px-3 rounded-xl hover:bg-primary/20 transition-colors ${
                  activeSection === link.href.replace("#", "")
                    ? "text-primary bg-primary/10"
                    : "text-primary-foreground"
                }`}
                style={{ textDecoration: "none" }}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-6">
            <a
              href="https://wa.me/5511940110722"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-xl font-semibold text-base hover:bg-primary-dark transition-all"
              style={{ textDecoration: "none" }}
            >
              <i className="fab fa-whatsapp" />
              Fale Conosco via WhatsApp
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
