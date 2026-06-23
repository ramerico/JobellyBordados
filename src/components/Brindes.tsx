import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ── CANETAS ──────────────────────────────────────────────
import canetaAzul from "@/assets/brinde-caneta-azul.jpg";
import canetaSuporte from "@/assets/brinde-caneta-suporte.jpg";
import canetaMetal from "@/assets/brinde-caneta-metal.jpg";
import canetaStylus from "@/assets/brinde-caneta-stylus.jpg";
import canetaSlim from "@/assets/brinde-caneta-slim.jpg";
import canetaSoftTouch from "@/assets/brinde-caneta-softtouch.jpg";
import canetaMetalColors from "@/assets/brinde-caneta-metal-colors.jpg";
import canetaSoftTouchColors from "@/assets/brinde-caneta-softtouch-colors.jpg";
import canetaMetalSlimFosca from "@/assets/brinde-caneta-metal-slim-fosca.jpg";
import canetaMetalStylusColor from "@/assets/brinde-caneta-metal-stylus-color.jpg";
import canetaRoseGold from "@/assets/brinde-caneta-rose-gold.jpg";
import canetaBicolorRose from "@/assets/brinde-caneta-bicolor-rose.jpg";
import canetaAluminioBrilho from "@/assets/brinde-caneta-aluminio-brilho.jpg";
import canetaStylusSlim8 from "@/assets/brinde-caneta-stylus-slim-8cores.jpg";
import canetaPlasticaFosca9 from "@/assets/brinde-caneta-plastica-fosca-9cores.jpg";
import canetaRollerPremium from "@/assets/brinde-caneta-roller-premium.jpg";
import canetaMetalTrio from "@/assets/brinde-caneta-metal-trio.jpg";
import canetaMetalMatte6 from "@/assets/brinde-caneta-metal-matte-6cores.jpg";
import canetaPlasticaStylus9 from "@/assets/brinde-caneta-plastica-stylus-9cores.jpg";
import canetaPlasticaOnda10 from "@/assets/brinde-caneta-plastica-onda-10cores.jpg";
import canetaMetalTorpedo5 from "@/assets/brinde-caneta-metal-torpedo-5cores.jpg";
import canetaMetalSlim10 from "@/assets/brinde-caneta-metal-slim-10cores.jpg";
import canetaMetalGoldDuo from "@/assets/brinde-caneta-metal-gold-duo.jpg";
import canetaMetalGoldBicolor from "@/assets/brinde-caneta-metal-gold-bicolor.jpg";
import canetaMetalCaixaPreta from "@/assets/brinde-caneta-metal-caixa-preta.jpg";
import canetaStylusMatte6 from "@/assets/brinde-caneta-stylus-matte-6cores.jpg";
import canetaPlasticaAsa7 from "@/assets/brinde-caneta-plastica-asa-7cores.jpg";
import canetaMetalSuporte6 from "@/assets/brinde-caneta-metal-suporte-6cores.jpg";
// Estes arquivos têm imagem de caneta confirmada visualmente:
import canetaMochilaPreta2 from "@/assets/brinde-mochila-preta2.jpg";   // canetas coloridas stylus
import canetaMochilaPremium from "@/assets/brinde-mochila-premium.jpg"; // canetas stylus coloridas

// ── MOCHILAS & BOLSAS ────────────────────────────────────
import mochilaColorida from "@/assets/brinde-mochila-colorida.jpg";
import mochilaUsb from "@/assets/brinde-mochila-usb.jpg";
import mochilaExecutiva from "@/assets/brinde-mochila-executiva.jpg";
import mochilaPreta from "@/assets/brinde-mochila-preta.jpg";
import mochilaBolsaSport from "@/assets/brinde-mochila-bolsa-sport.jpg";
import mochilaCarbonPreta from "@/assets/brinde-mochila-carbon-preta.jpg";
import mochilaCarbonPreta2 from "@/assets/brinde-mochila-carbon-preta2.jpg";
import mochilaAzulSlim from "@/assets/brinde-mochila-azul-slim.jpg";
import mochilaExecutivaPreta from "@/assets/brinde-mochila-executiva-preta.jpg";
import bolsaSportCinza from "@/assets/brinde-bolsa-sport-cinza.jpg";
import mochila3CoresNotebook from "@/assets/brinde-mochila-3cores-notebook.jpg";
import mochilaSacoNylon8 from "@/assets/brinde-mochila-saco-nylon-8cores.jpg";
import mochilaSacolaPreto from "@/assets/brinde-sacola-cores.jpg"; // mochila preta grande

// ── CADERNOS & KITS ──────────────────────────────────────
import cadernoPena from "@/assets/brinde-caderno-caneta.jpg";
import blocoNotas from "@/assets/brinde-bloco-notas.jpg";
import kitCadernoCaneta from "@/assets/brinde-kit-caderno-caneta.jpg";
import cadernoColors10 from "@/assets/brinde-caderno-colors-10cores.jpg";
import blocoKraftSticky from "@/assets/brinde-bloco-kraft-sticky.jpg";
import kitCanetaCadernoPreto from "@/assets/brinde-kit-caneta-caderno-preto.jpg";
import cadernoTexturaSticky from "@/assets/brinde-caderno-textura-sticky.jpg";
import cadernoPu8Cores from "@/assets/brinde-caderno-pu-8cores.jpg";
import cadernoGeometricoColorido from "@/assets/brinde-caderno-geometrico-colorido.jpg";
import cadernoTecidoElastico from "@/assets/brinde-caderno-tecido-elastico.jpg";
import cadernoPu4Cores from "@/assets/brinde-caderno-pu-4cores.jpg";
import cadernoBotaoMetal6 from "@/assets/brinde-caderno-botao-metal-6cores.jpg";
import cadernoPlanner from "@/assets/brinde-caderno-planner-sticky.jpg";
import cadernoPuElastico5 from "@/assets/brinde-caderno-pu-elastico-5cores.jpg";
import kitCadernoExecutivo from "@/assets/brinde-kit-caderno-caneta-executivo.jpg";

// ── GARRAFAS & COPOS ─────────────────────────────────────
import garrafaTermica from "@/assets/brinde-garrafa-termica.jpg";
import garrafaInoxColors from "@/assets/brinde-garrafa-inox-colors.jpg";
import garrafaTermicaHandle from "@/assets/brinde-garrafa-termica-handle.jpg";
import garrafaSportWide from "@/assets/brinde-garrafa-sport-wide.jpg";
import garrafaInoxSlim from "@/assets/brinde-garrafa-inox-slim.jpg";
import garrafaSqueezeColors from "@/assets/brinde-garrafa-squeeze-colors.jpg";
import garrafaWideMouth from "@/assets/brinde-garrafa-wide-mouth.jpg";
import copoTumblerColors from "@/assets/brinde-copo-tumbler-colors.jpg";
import garrafaAlcaLateral from "@/assets/brinde-garrafa-com-alca-lateral.jpg";
import copoWineTumbler from "@/assets/brinde-copo-wine-tumbler.jpg";
import garrafaMosquetao4 from "@/assets/brinde-garrafa-mosquetao-4cores.jpg";
import garrafaSqueezePastel7 from "@/assets/brinde-garrafa-squeeze-pastel-7cores.jpg";
import garrafaSmartLedTemp from "@/assets/brinde-garrafa-smart-led-temp.jpg";
import copoTermicoCafe10 from "@/assets/brinde-copo-termico-cafe-10cores.jpg";
import copoTermicoInox7 from "@/assets/brinde-copo-termico-inox-7cores.jpg";
import garrafaSportBico4 from "@/assets/brinde-garrafa-sport-bico-4cores.jpg";
import copoStanleyAlca7 from "@/assets/brinde-copo-stanley-alca-7cores.jpg";
import garrafaCanetaTransp from "@/assets/brinde-caneta-transparente.jpg"; // arquivo contém garrafa sport com alças

// ── SACOLAS ──────────────────────────────────────────────
import bolsaViagem from "@/assets/brinde-bolsa-viagem.jpg";
import sacolaAlgodao from "@/assets/brinde-sacola-algodao.jpg";
import mochilaSacoCortica from "@/assets/brinde-mochila-saco-cortica.jpg";
import mochilaSacoCordao from "@/assets/brinde-mochila-saco-cordao.jpg";

type Category = "todos" | "canetas" | "mochilas" | "cadernos" | "garrafas" | "outros";

const allItems = [
  // ── CANETAS ──
  { cat: "canetas" as Category, img: canetaAzul,             title: "Caneta Plástica Translúcida",     desc: "Corpo translúcido colorido com clip metálico" },
  { cat: "canetas" as Category, img: canetaSuporte,          title: "Caneta com Suporte Celular",      desc: "3 em 1: escreve, stylus e apoio para celular" },
  { cat: "canetas" as Category, img: canetaMetal,            title: "Caneta Metálica Executiva",       desc: "Acabamento brilhante em diversas cores" },
  { cat: "canetas" as Category, img: canetaStylus,           title: "Caneta Metálica com Stylus",      desc: "Ponta touch screen, clip prateado, 6 cores" },
  { cat: "canetas" as Category, img: canetaSlim,             title: "Caneta Slim Soft Touch",          desc: "Acabamento emborrachado, clip preto, 5 cores" },
  { cat: "canetas" as Category, img: canetaSoftTouch,        title: "Caneta Soft Touch Colorida",      desc: "Corpo macio com ponta stylus inclusa" },
  { cat: "canetas" as Category, img: canetaMetalColors,      title: "Caneta Metálica Fosca 9 Cores",   desc: "Alumínio fosco, clip prateado, 9 cores" },
  { cat: "canetas" as Category, img: canetaSoftTouchColors,  title: "Caneta Soft Touch Slim",          desc: "Corpo emborrachado, clip preto, 5 cores" },
  { cat: "canetas" as Category, img: canetaMetalSlimFosca,   title: "Caneta Metal Slim Tons Neutros",  desc: "Acabamento matte premium, 9 tons neutros" },
  { cat: "canetas" as Category, img: canetaMetalStylusColor, title: "Caneta Metal Stylus Vibrante",    desc: "Ponta touch screen, detalhes pretos, 6 cores" },
  { cat: "canetas" as Category, img: canetaRoseGold,         title: "Caneta Metálica Rosé Gold",       desc: "Detalhes dourados rosé, 3 cores elegantes" },
  { cat: "canetas" as Category, img: canetaBicolorRose,      title: "Caneta Bicolor Rosé Gold",        desc: "Corpo bicolor preto + cor, clip rosé gold, 6 opções" },
  { cat: "canetas" as Category, img: canetaAluminioBrilho,   title: "Caneta Alumínio Brilhante",       desc: "Acabamento espelhado, clip prateado, 9 cores" },
  { cat: "canetas" as Category, img: canetaStylusSlim8,      title: "Caneta Stylus Slim 8 Cores",      desc: "Ponta touch, corpo metálico fino, 8 cores" },
  { cat: "canetas" as Category, img: canetaPlasticaFosca9,   title: "Caneta Plástica Fosca 9 Cores",   desc: "Clip metálico elegante, 9 cores vibrantes" },
  { cat: "canetas" as Category, img: canetaRollerPremium,    title: "Caneta Roller Executiva",         desc: "Escrita suave, corpo metálico, preto/preto/prata" },
  { cat: "canetas" as Category, img: canetaMetalTrio,        title: "Caneta Metálica Clássica",        desc: "Clip largo, disponível em prata, branco e preto" },
  { cat: "canetas" as Category, img: canetaMetalMatte6,      title: "Caneta Metal Matte 6 Cores",      desc: "Acabamento fosco, ponta prateada, 6 cores" },
  { cat: "canetas" as Category, img: canetaPlasticaStylus9,  title: "Caneta Plástica Stylus 9 Cores",  desc: "Clip decorativo, ponta stylus, 9 cores" },
  { cat: "canetas" as Category, img: canetaPlasticaOnda10,   title: "Caneta Plástica Onda 10 Cores",   desc: "Clip em onda, ponta stylus, 10 cores vibrantes" },
  { cat: "canetas" as Category, img: canetaMetalTorpedo5,    title: "Caneta Metal Torpedo 5 Cores",    desc: "Corpo cônico largo, detalhe duplo, 5 cores" },
  { cat: "canetas" as Category, img: canetaMetalSlim10,      title: "Caneta Metal Slim 10 Cores",      desc: "Alumínio fosco, clip prateado, 10 cores" },
  { cat: "canetas" as Category, img: canetaMetalGoldDuo,     title: "Caneta Metálica Gold Clássica",   desc: "Detalhes dourados, disponível em preto e prata" },
  { cat: "canetas" as Category, img: canetaMetalGoldBicolor, title: "Caneta Metálica Gold Bicolor",    desc: "Clip dourado rosé, 2 cores elegantes" },
  { cat: "canetas" as Category, img: canetaMetalCaixaPreta,  title: "Caneta Metal em Estojo Premium",  desc: "Caneta metálica preta fosca em estojo presente" },
  { cat: "canetas" as Category, img: canetaStylusMatte6,     title: "Caneta Stylus Matte 6 Cores",     desc: "Acabamento fosco, ponta stylus e clip preto, 6 cores" },
  { cat: "canetas" as Category, img: canetaPlasticaAsa7,     title: "Caneta Plástica com Asa 7 Cores", desc: "Clip em asa, corpo metálico fosco, 7 cores" },
  { cat: "canetas" as Category, img: canetaMetalSuporte6,    title: "Caneta Metal com Suporte 6 Cores", desc: "Clip tipo suporte, detalhe duplo, 6 cores" },
  { cat: "canetas" as Category, img: canetaMochilaPreta2,    title: "Caneta Corporativa Plus",         desc: "Caneta metálica colorida com stylus, várias cores" },
  { cat: "canetas" as Category, img: canetaMochilaPremium,   title: "Caneta Premium Bicolor",          desc: "Caneta stylus colorida com clip prateado, várias cores" },

  // ── MOCHILAS & BOLSAS ──
  { cat: "mochilas" as Category, img: mochilaColorida,        title: "Mochila Casual",                 desc: "Leve e resistente, disponível em 3 cores" },
  { cat: "mochilas" as Category, img: mochilaUsb,             title: "Mochila com Saída USB",          desc: "Saída USB integrada para carregar dispositivos" },
  { cat: "mochilas" as Category, img: mochilaExecutiva,       title: "Mochila Executiva PU",           desc: "Revestimento couro sintético, visual premium" },
  { cat: "mochilas" as Category, img: mochilaPreta,           title: "Mochila Saco Colorida",          desc: "Mochila saco leve, cordão duplo, várias cores vibrantes" },
  { cat: "mochilas" as Category, img: mochilaBolsaSport,      title: "Kit Mochila + Bolsa Sport",      desc: "Mochila preta e bolsa de viagem azul marinho" },
  { cat: "mochilas" as Category, img: mochilaCarbonPreta,     title: "Mochila Carbon Cinza",           desc: "Textura carbon, compartimento notebook, cinza" },
  { cat: "mochilas" as Category, img: mochilaCarbonPreta2,    title: "Mochila Carbon Preta",           desc: "Textura carbon, toda preta, visual sofisticado" },
  { cat: "mochilas" as Category, img: mochilaAzulSlim,        title: "Mochila Slim Azul Marinho",      desc: "Perfil slim, zíper lateral, base em PU" },
  { cat: "mochilas" as Category, img: mochilaExecutivaPreta,  title: "Mochila Executiva Reforçada",    desc: "Alta capacidade, bolsos laterais em mesh, preta" },
  { cat: "mochilas" as Category, img: bolsaSportCinza,        title: "Bolsa Sport Cinza",              desc: "Bolsa de academia bicolor cinza/preta, bolso frontal" },
  { cat: "mochilas" as Category, img: mochila3CoresNotebook,  title: "Mochila Notebook 3 Cores",       desc: "Compartimento notebook, bolso frontal, azul/cinza/preto" },
  { cat: "mochilas" as Category, img: mochilaSacoNylon8,      title: "Mochila Saco Nylon 8 Cores",     desc: "Tecido nylon leve, zíper frontal, cordão duplo, 8 cores" },
  { cat: "mochilas" as Category, img: mochilaSacolaPreto,     title: "Mochila Notebook Preta",         desc: "Mochila executiva grande com múltiplos bolsos" },

  // ── CADERNOS & KITS ──
  { cat: "cadernos" as Category, img: cadernoPena,            title: "Caderno com Caneta",             desc: "Kit caderno emborrachado + caneta inclusa" },
  { cat: "cadernos" as Category, img: bolsaViagem,            title: "Caderno Ecológico",              desc: "Capa kraft reciclada, espiral e caneta eco" },
  { cat: "cadernos" as Category, img: blocoNotas,             title: "Bloco de Notas Colorido",        desc: "Com marcadores adesivos e caneta eco" },
  { cat: "cadernos" as Category, img: kitCadernoCaneta,       title: "Kit Caderno Executivo",          desc: "Capa dura em caixa presente com caneta" },
  { cat: "cadernos" as Category, img: cadernoColors10,        title: "Caderno Color 10 Cores",         desc: "Capa emborrachada com elástico, 10 cores" },
  { cat: "cadernos" as Category, img: blocoKraftSticky,       title: "Bloco Kraft com Sticky Notes",   desc: "Espiral duplo, caneta eco e marcadores coloridos" },
  { cat: "cadernos" as Category, img: kitCanetaCadernoPreto,  title: "Kit Premium Caneta + Caderno",   desc: "Caneta metálica e caderno preto em caixa presente" },
  { cat: "cadernos" as Category, img: cadernoTexturaSticky,   title: "Caderno Textura com Sticky",     desc: "Capa texturizada, marcadores coloridos, 3 cores" },
  { cat: "cadernos" as Category, img: cadernoPu8Cores,        title: "Caderno PU 8 Cores",             desc: "Capa em PU com porta-caneta e elástico, 8 cores" },
  { cat: "cadernos" as Category, img: cadernoGeometricoColorido, title: "Caderno Geométrico Colorido", desc: "Capa com estampa geométrica vibrante e elástico amarelo" },
  { cat: "cadernos" as Category, img: cadernoTecidoElastico,  title: "Caderno Tecido Premium",         desc: "Capa em tecido texturizado, placa metálica, 3 cores" },
  { cat: "cadernos" as Category, img: cadernoPu4Cores,        title: "Caderno PU 4 Cores",             desc: "Capa PU lisa, elástico duplo e porta-caneta, 4 cores" },
  { cat: "cadernos" as Category, img: cadernoBotaoMetal6,     title: "Caderno Botão Metálico 6 Cores", desc: "Fechamento em botão metálico, capa macia, 6 cores" },
  { cat: "cadernos" as Category, img: cadernoPlanner,         title: "Caderno Planner Organizador",    desc: "Capa rígida azul, janela interna, sticky notes coloridos" },
  { cat: "cadernos" as Category, img: cadernoPuElastico5,     title: "Caderno PU com Elástico 5 Cores", desc: "Capa PU macia, elástico e marcador couro, 5 cores" },
  { cat: "cadernos" as Category, img: kitCadernoExecutivo,    title: "Kit Executivo Caderno + Caneta", desc: "Caderno PU e caneta metálica em caixa presente, 2 cores" },

  // ── GARRAFAS & COPOS ──
  { cat: "outros" as Category,   img: garrafaTermica,         title: "Bolsa de Viagem Sport",          desc: "Bolsa espaçosa, leve e resistente, 3 cores" },
  { cat: "garrafas" as Category, img: garrafaInoxColors,      title: "Garrafa Inox Cobra",             desc: "Formato slim elegante, 7 cores vibrantes" },
  { cat: "garrafas" as Category, img: garrafaTermicaHandle,   title: "Garrafa Térmica com Alça",       desc: "Tampa com pegador, inox interno, 6 cores" },
  { cat: "garrafas" as Category, img: garrafaSportWide,       title: "Garrafa Sport Boca Larga",       desc: "Tampa com trava e bico, 6 cores" },
  { cat: "garrafas" as Category, img: garrafaInoxSlim,        title: "Garrafa Inox Slim",              desc: "Design clássico, aço inox externo, 6 cores" },
  { cat: "garrafas" as Category, img: garrafaSqueezeColors,   title: "Squeeze Inox Pastel",            desc: "Cores suaves e modernas, 7 opções" },
  { cat: "garrafas" as Category, img: garrafaWideMouth,       title: "Squeeze Wide Mouth",             desc: "Tampa com alça, várias cores vibrantes" },
  { cat: "garrafas" as Category, img: copoTumblerColors,      title: "Copo Tumbler Térmico",           desc: "Tampa acrílica, inox dupla parede, 5 cores" },
  { cat: "garrafas" as Category, img: garrafaAlcaLateral,     title: "Garrafa com Alça Lateral",       desc: "Tampa flip com alça, acabamento matte, 5 cores" },
  { cat: "garrafas" as Category, img: copoWineTumbler,        title: "Copo Wine Tumbler",              desc: "Formato taça, inox dupla parede, 5 cores" },
  { cat: "garrafas" as Category, img: garrafaMosquetao4,      title: "Garrafa Inox com Mosquetão",     desc: "Corpo cilíndrico matte, mosquetão lateral, 4 cores" },
  { cat: "garrafas" as Category, img: garrafaSqueezePastel7,  title: "Squeeze Pastel Boca Larga",      desc: "Tampa flip, cores pastel suaves, 7 opções" },
  { cat: "garrafas" as Category, img: garrafaSmartLedTemp,    title: "Garrafa Smart com LED",          desc: "Display LED de temperatura na tampa, inox premium" },
  { cat: "garrafas" as Category, img: copoTermicoCafe10,      title: "Copo Térmico Café 10 Cores",     desc: "Estilo coffee-to-go, tampa rosca, 10 cores" },
  { cat: "garrafas" as Category, img: copoTermicoInox7,       title: "Copo Térmico Inox 7 Cores",      desc: "Tampa com trava flip, inox escovado, 7 cores" },
  { cat: "garrafas" as Category, img: garrafaSportBico4,      title: "Garrafa Sport com Bico 4 Cores", desc: "Tampa com bico dobrável e alça, inox, 4 cores" },
  { cat: "garrafas" as Category, img: copoStanleyAlca7,       title: "Copo Stanley com Alça",          desc: "Grande capacidade, alça integrada, canudo, 7 cores" },
  { cat: "garrafas" as Category, img: garrafaCanetaTransp,    title: "Garrafa Sport com Alças",        desc: "Alças laterais, tampas coloridas, 5 cores pastel" },

  // ── SACOLAS ──
  { cat: "outros" as Category, img: sacolaAlgodao,            title: "Sacola Algodão + Cortiça",       desc: "Sustentável, base em cortiça natural" },
  { cat: "outros" as Category, img: mochilaSacoCortica,       title: "Mochila Saco Ecológica",         desc: "Algodão com base em cortiça, estilo minimalista" },
  { cat: "outros" as Category, img: mochilaSacoCordao,        title: "Mochila Saco com Cordão",        desc: "Bolso frontal em mesh, saída para fone, 5 cores" },
];

const categories: { key: Category; label: string; emoji: string }[] = [
  { key: "todos",    label: "Todos",             emoji: "🎁" },
  { key: "canetas",  label: "Canetas",           emoji: "✒️" },
  { key: "mochilas", label: "Mochilas & Bolsas", emoji: "🎒" },
  { key: "cadernos", label: "Cadernos & Kits",   emoji: "📓" },
  { key: "garrafas", label: "Garrafas & Copos",  emoji: "🧴" },
  { key: "outros",   label: "Sacolas",           emoji: "🛍️" },
];

const Brindes = () => {
  const [active, setActive] = useState<Category>("todos");
  const filtered = active === "todos" ? allItems : allItems.filter((i) => i.cat === active);

  return (
    <section id="brindes" className="py-24 bg-muted/30">
      <div className="container mx-auto px-5">
        <div className="section-heading">
          <h2>NOSSOS <span className="text-primary">BRINDES</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-3 text-center">
            Personalizamos com bordado, gravação a laser ou impressão. Ideal para eventos corporativos, brindes promocionais e kits exclusivos.
          </p>
        </div>

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

        <div className="text-center mt-14">
          <p className="text-muted-foreground mb-5 text-lg">Não encontrou o que precisa? Temos muito mais opções!</p>
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
