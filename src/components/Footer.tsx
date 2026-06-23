import logoImg from "@/assets/logo.png";

const quickLinks = [
  { label: "Início",      href: "#inicio" },
  { label: "Quem Somos", href: "#sobre" },
  { label: "Serviços",   href: "#servicos" },
  { label: "Brindes",    href: "#brindes" },
  { label: "Portfólio",  href: "#portfolio" },
  { label: "Contato",    href: "#contato" },
];

const serviceLinks = [
  "Bordados em Kimonos",
  "Bordados em Geral",
  "Chaveiros Personalizados",
  "Brindes Corporativos",
  "Personalizações a Laser",
];

const socials = [
  { icon: "fab fa-instagram", href: "https://www.instagram.com/jobellybordados/", label: "Instagram" },
  { icon: "fab fa-facebook",  href: "https://www.facebook.com/jobellybordados",   label: "Facebook" },
  { icon: "fab fa-whatsapp",  href: "https://wa.me/5511940110722",                label: "WhatsApp" },
];

const Footer = () => (
  <footer className="bg-accent text-accent-foreground pt-20 pb-8">
    <div className="container mx-auto px-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

        {/* Brand */}
        <div className="lg:col-span-1">
          <a href="#inicio">
            <img src={logoImg} alt="Jobelly Bordados" className="h-12 w-auto mb-5 brightness-0 invert" />
          </a>
          <p className="text-muted-foreground leading-relaxed text-sm mb-5">
            Há mais de 17 anos oferecendo bordados e brindes personalizados com qualidade e excelência em São Paulo.
          </p>
          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <i className={`${s.icon} text-sm`} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-base font-heading text-primary-foreground mb-5 pb-3 relative after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-primary">
            Links Rápidos
          </h3>
          <ul className="space-y-2">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-muted-foreground hover:text-primary hover:pl-2 transition-all duration-300 text-sm"
                  style={{ textDecoration: "none" }}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-base font-heading text-primary-foreground mb-5 pb-3 relative after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-primary">
            Nossos Serviços
          </h3>
          <ul className="space-y-2">
            {serviceLinks.map((s) => (
              <li key={s}>
                <a
                  href="#servicos"
                  className="text-muted-foreground hover:text-primary hover:pl-2 transition-all duration-300 text-sm"
                  style={{ textDecoration: "none" }}
                >
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h3 className="text-base font-heading text-primary-foreground mb-5 pb-3 relative after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-primary">
            Contato
          </h3>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <i className="fas fa-map-marker-alt text-primary mt-0.5" />
              São Paulo — SP
            </li>
            <li className="flex items-start gap-2">
              <i className="fab fa-whatsapp text-primary mt-0.5" />
              <a href="tel:+5511940110722" className="hover:text-primary transition-colors">
                (11) 94011-0722
              </a>
            </li>
            <li className="flex items-start gap-2">
              <i className="fas fa-envelope text-primary mt-0.5" />
              <a href="mailto:contato@jobellybordados.com.br" className="hover:text-primary transition-colors break-all">
                contato@jobellybordados.com.br
              </a>
            </li>
            <li className="flex items-start gap-2">
              <i className="fas fa-clock text-primary mt-0.5" />
              Seg–Sex: 8h às 18h
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center pt-8 border-t border-primary-foreground/10 text-muted-foreground text-sm">
        © {new Date().getFullYear()} Jobelly Bordados. Todos os direitos reservados.
        <span className="mx-2">·</span>
        Desenvolvido com ❤️ para sua marca.
      </div>
    </div>
  </footer>
);

export default Footer;
