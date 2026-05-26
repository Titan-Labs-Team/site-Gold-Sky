// Gold Sky — Contact Page
import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { useFadeUp } from '@/hooks/useFadeUp'

const infoCards = [
  {
    icon: Phone,
    title: 'Telefone',
    lines: ['(11) 3456-7890', '(11) 99999-9999'],
  },
  {
    icon: Mail,
    title: 'E-mail',
    lines: ['contato@goldsky.com.br', 'atendimento@goldsky.com.br'],
  },
  {
    icon: MapPin,
    title: 'Endereço',
    lines: ['Rua Oscar Freire, 123', 'Jardins, São Paulo — SP'],
  },
  {
    icon: Clock,
    title: 'Horário',
    lines: ['Seg–Sex: 10h às 19h', 'Sáb: 10h às 17h'],
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)
  const formRef = useFadeUp()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-[#FAF5EE] py-16 lg:py-20">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 text-center">
          <span className="inline-block text-[#C9A96E] text-[10px] font-sans font-bold uppercase tracking-[0.2em] mb-4">
            Atendimento
          </span>
          <h1 className="font-serif font-bold text-[#1A1A1A] text-4xl lg:text-6xl mb-4">
            Fale Conosco
          </h1>
          <p className="font-sans text-[#7A7A7A] text-base max-w-lg mx-auto">
            Estamos aqui para ajudá-lo a encontrar a peça perfeita.
          </p>
        </div>
      </section>

      <div className="gold-divider" />

      {/* Info Cards */}
      <section className="py-12 lg:py-16">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12 lg:mb-16">
            {infoCards.map(card => (
              <div key={card.title} className="bg-[#FAF5EE] p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <card.icon size={20} strokeWidth={1.5} className="text-[#2B4A2F]" />
                </div>
                <p className="text-[10px] font-sans font-bold uppercase tracking-[0.12em] text-[#1A1A1A] mb-2">
                  {card.title}
                </p>
                {card.lines.map(line => (
                  <p key={line} className="text-sm font-sans text-[#7A7A7A]">{line}</p>
                ))}
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Form */}
            <div ref={formRef} className="fade-up">
              <h2 className="font-serif font-bold text-[#1A1A1A] text-2xl lg:text-3xl mb-8">
                Envie uma Mensagem
              </h2>

              {sent && (
                <div className="mb-6 p-4 bg-[#2B4A2F]/10 border border-[#2B4A2F]/20">
                  <p className="text-sm font-sans text-[#2B4A2F] font-medium">
                    ✓ Mensagem enviada com sucesso! Retornaremos em breve.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-[10px] font-sans font-bold uppercase tracking-[0.12em] text-[#7A7A7A] mb-2">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    required
                    className="input-underline"
                    placeholder="Seu nome"
                  />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-sans font-bold uppercase tracking-[0.12em] text-[#7A7A7A] mb-2">
                      E-mail
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      required
                      className="input-underline"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-sans font-bold uppercase tracking-[0.12em] text-[#7A7A7A] mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                      className="input-underline"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-sans font-bold uppercase tracking-[0.12em] text-[#7A7A7A] mb-2">
                    Mensagem
                  </label>
                  <textarea
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    required
                    rows={4}
                    className="input-underline resize-none"
                    placeholder="Como podemos ajudá-lo?"
                  />
                </div>
                <button type="submit" className="btn-primary w-full justify-center">
                  Enviar Mensagem
                </button>
              </form>
            </div>

            {/* WhatsApp CTA + Map */}
            <div className="space-y-6">
              {/* WhatsApp Card */}
              <div className="bg-[#2B4A2F] p-8 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <MessageCircle size={20} strokeWidth={1.5} />
                  </div>
                  <p className="font-serif font-semibold text-xl">WhatsApp</p>
                </div>
                <p className="font-sans text-white/80 text-sm mb-6 leading-relaxed">
                  Prefere um atendimento mais rápido? Fale diretamente com nossa equipe pelo WhatsApp.
                </p>
                <a
                  href="https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre as joias da Gold Sky."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#2B4A2F] text-[11px] font-sans font-bold uppercase tracking-[0.12em] hover:bg-[#FAF5EE] transition-colors"
                >
                  <MessageCircle size={14} strokeWidth={1.5} />
                  Falar no WhatsApp
                </a>
              </div>

              {/* Map placeholder */}
              <div className="bg-[#FAF5EE] h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={32} strokeWidth={1} className="text-[#C9A96E] mx-auto mb-3" />
                  <p className="font-sans text-sm text-[#7A7A7A]">Rua Oscar Freire, 123</p>
                  <p className="font-sans text-sm text-[#7A7A7A]">Jardins, São Paulo — SP</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
