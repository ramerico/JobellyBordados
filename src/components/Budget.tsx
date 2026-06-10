import { useState } from "react";
import { MessageCircle, Clock, Users, Phone } from "lucide-react";
import { motion } from "framer-motion";

const budgetFeatures = [
  { icon: Clock, text: "Resposta rápida" },
  { icon: Users, text: "Atendimento personalizado" },
  { icon: MessageCircle, text: "Consultoria gratuita" },
];

const Budget = () => {
  const [form, setForm] = useState({ nome: "", telefone: "", email: "", servico: "", mensagem: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `*Orçamento Jobelly Bordados*%0A%0ANome: ${form.nome}%0ATelefone: ${form.telefone}%0AE-mail: ${form.email}%0AServiço: ${form.servico}%0AMensagem: ${form.mensagem}`;
    window.open(`https://wa.me/5511940110722?text=${msg}`, "_blank");
  };

  return (
    <section id="orcamento" className="py-24 bg-accent text-accent-foreground">
      <div className="container mx-auto px-5">
        <div className="section-heading">
          <h2 className="text-primary-foreground">
            SOLICITE SEU <span className="text-primary">ORÇAMENTO</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-heading text-primary-foreground mb-6">
              Orçamento Rápido e Personalizado
            </h3>
            <p className="text-primary-foreground/70 mb-8 text-lg">
              Receba uma proposta detalhada via WhatsApp em até 24h.
            </p>

            <div className="space-y-4 mb-8">
              {budgetFeatures.map((f, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-4 p-3 rounded-xl transition-all duration-300 hover:translate-x-3"
                  style={{ background: "rgba(255,255,255,0.05)" }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <f.icon className="text-primary" size={22} />
                  <span className="text-primary-foreground">{f.text}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center gap-3 text-primary-foreground">
              <Phone className="text-primary" />
              <span className="text-lg font-semibold">WhatsApp: (11) 94011-0722</span>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="p-10 rounded-2xl backdrop-blur-md border border-primary-foreground/10"
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
                  value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  className="w-full p-4 rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground focus:border-primary focus:outline-none transition-all"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-primary-foreground">Telefone *</label>
                <input
                  required
                  value={form.telefone}
                  onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                  className="w-full p-4 rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground focus:border-primary focus:outline-none transition-all"
                />
              </div>
            </div>

            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-primary-foreground">E-mail *</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full p-4 rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground focus:border-primary focus:outline-none transition-all"
              />
            </div>

            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-primary-foreground">Serviço *</label>
              <select
                required
                value={form.servico}
                onChange={(e) => setForm({ ...form, servico: e.target.value })}
                className="w-full p-4 rounded-xl border border-primary-foreground/20 bg-foreground text-primary-foreground focus:border-primary focus:outline-none transition-all"
              >
                <option value="">Selecione...</option>
                <option>Bordados em Kimonos</option>
                <option>Bordados</option>
                <option>Chaveiro Remove Before Flight</option>
                <option>Brindes em Geral</option>
                <option>Personalizações a Laser</option>
                <option>Outros</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-primary-foreground">Descreva seu Projeto *</label>
              <textarea
                required
                rows={4}
                value={form.mensagem}
                onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                className="w-full p-4 rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground focus:border-primary focus:outline-none transition-all resize-none"
              />
            </div>

            <button type="submit" className="btn-whatsapp">
              <MessageCircle size={22} />
              ENVIAR VIA WHATSAPP
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Budget;
