const Footer = () => (
  <footer className="bg-accent text-accent-foreground pt-20 pb-8">
    <div className="container mx-auto px-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
        <div>
          <h3 className="text-xl font-heading text-primary-foreground mb-5 pb-3 relative after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-primary">
            Jobelly Bordados
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Há mais de 17 anos oferecendo bordados e brindes personalizados com qualidade e excelência.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-heading text-primary-foreground mb-5 pb-3 relative after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-primary">
            Links Rápidos
          </h3>
          <ul className="space-y-3">
            {["Início", "Quem Somos", "Serviços", "Portfólio", "Contato"].map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase().replace(/ /g, "").replace("quemsomos", "sobre").replace("início", "inicio")}`}
                  className="text-muted-foreground hover:text-primary hover:pl-1 transition-all duration-300"
                  style={{ textDecoration: "none" }}
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-heading text-primary-foreground mb-5 pb-3 relative after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-primary">
            Serviços
          </h3>
          <ul className="space-y-3">
            {["Bordados em Kimonos", "Bordados", "Brindes & Squeezes", "Plaquetas Metálicas"].map((s) => (
              <li key={s}>
                <a
                  href="#servicos"
                  className="text-muted-foreground hover:text-primary hover:pl-1 transition-all duration-300"
                  style={{ textDecoration: "none" }}
                >
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="text-center pt-8 border-t border-primary-foreground/10 text-muted-foreground text-sm">
        © {new Date().getFullYear()} Jobelly Bordados. Todos os direitos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;

