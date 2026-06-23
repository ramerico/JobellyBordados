import { useState } from "react";
import { MessageCircle, Clock, Users, Phone, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const budgetFeatures = [
  { icon: Clock,         text: "Resposta em até 24h" },
  { icon: Users,         text: "Atendimento personalizado" },
  { icon: MessageCircle, text: "Consultoria gratuita" },
  { icon: CheckCircle,   text: "Sem compromisso" },
];

const formatPhone = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
};

const Budget = () => {
  const [form, setForm] = useState({ nome: "", telefone: "", email: "", servico: "", mensagem: "" });

  const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, telefone: formatPhone(e.target.value) });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg =
      `*Orçamento — Jobelly Bordados*%0A%0A` +
      `👤 Nome: ${form.nome}%0A` +
      `📞 Telefone: ${form.telefone}%0A` +
      `📧 E-mail: ${form.email}%0A` +
      `🎁 Serviço: ${form.servico}%0A%0A` +
      `📝 Mensagem: ${form.mensagem}`;
    window.open(`https://wa.me/5511940110722?text=${msg}`, "_blank");
  };

  const inputClass =
    "w-full p-4 rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder-primary-foreground/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all";

  return (
    <section id="orcamento" className="py-24 bg-accent text-accent-foreground">
      <div className="container mx-auto px-5">
        <div className="section-heading">
          <h2 className="text-primary-foreground">
            SOLICITE SEU <span className="text-primary">ORÇAMENTO</span>
          </h2>
          <p className="text-primary-foreground/60 text-center mt-2">
            Preencha o formulário e receba uma proposta detalhada via WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-heading text-primary-foreground mb-4">
              Orçamento Rápido e Personalizado
            </h3>
            <p className="text-primary-foreground/70 mb-8 text-lg">
              Receba uma proposta detalhada via WhatsApp em até 24h. Sem compromisso.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {budgetFeatures.map((f, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-3 p-4 rounded-xl transition-all duration-300"
                  style={{ background: "rgba(255,255,255,0.05)" }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <f.icon className="text-primary flex-shrink-0" size={20} />
                  <span className="text-primary-foreground text-sm">{f.text}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-primary-foreground">
                <Phone className="text-primary" />
                <a href="tel:+5511940110722" className="text-lg font-semibold hover:text-primary transition-colors">
                  (11) 94011-0722
                </a>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground">
                <i className="fab fa-instagram text-primary text-xl" />
                <a
                  href="https://www.instagram.com/jobellybordados/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold hover:text-primary transition-colors"
                >
                  @jobellybordados
                </a>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="p-8 md:p-10 rounded-2xl backdrop-blur-md border border-primary-foreground/10"
            style={{ background: "rgba(255,255,255,0.05)" }}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="block mb-2 text-sm font-medium text-primary-foreground">Nome *</label>
                <input
                  required
                  placeholder="Seu nome"
                  value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-primary-foreground">Telefone *</label>
                <input
                  required
                  placeholder="(11) 99999-9999"
                  value={form.telefone}
                  onChange={handlePhone}
                  className={inputClass}
                />
              </div>
            </div>

            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-primary-foreground">E-mail *</label>
              <input
                type="email"
                required
                placeholder="seu@email.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputClass}
              />
            </div>

            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-primary-foreground">Serviço de Interesse *</label>
              <select
                required
                value={form.servico}
                onChange={(e) => setForm({ ...form, servico: e.target.value })}
                className={`${inputClass} bg-foreground`}
              >
                <option value="">Selecione um serviço...</option>
                <option>Bordados em Kimonos</option>
                <option>Bordados em Geral</option>
                <option>Chaveiros Personalizados</option>
                <option>Brindes Corporativos</option>
                <option>Personalizações a Laser</option>
                <option>Outros</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-primary-foreground">Descreva seu Projeto *</label>
              <textarea
                required
                rows={4}
                placeholder="Conte um pouco sobre o que você precisa: quantidade, material, cores, prazo..."
                value={form.mensagem}
                onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                className={`${inputClass} resize-none`}
              />
            </div>

            <button type="submit" className="btn-whatsapp w-full flex items-center justify-center gap-2">
              <MessageCircle size={22} />
              ENVIAR VIA WHATSAPP
            </button>
            <p className="text-center text-primary-foreground/40 text-xs mt-3">
              Você será redirecionado para o WhatsApp automaticamente.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Budget;
