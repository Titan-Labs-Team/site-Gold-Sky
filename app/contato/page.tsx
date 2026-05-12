'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'

const contactInfo = [
  {
    icon: MapPin,
    title: 'Endereço',
    content: 'Rua das Joias, 123 - Centro',
    subcontent: 'São Paulo - SP, 01310-100',
    href: 'https://maps.google.com',
  },
  {
    icon: Phone,
    title: 'Telefone',
    content: '(11) 9999-9999',
    subcontent: '(11) 3333-3333',
    href: 'tel:+5511999999999',
  },
  {
    icon: Mail,
    title: 'E-mail',
    content: 'contato@goldsky.com.br',
    subcontent: 'atendimento@goldsky.com.br',
    href: 'mailto:contato@goldsky.com.br',
  },
  {
    icon: Clock,
    title: 'Horário de Funcionamento',
    content: 'Segunda a Sexta: 9h às 19h',
    subcontent: 'Sábado: 9h às 14h',
    href: null,
  },
]

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast.success('Mensagem enviada com sucesso!', {
      description: 'Entraremos em contato em breve.',
    })

    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    })
    setIsSubmitting(false)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-cream-50">
        <div className="container mx-auto px-4 py-8 lg:py-12">
          <Breadcrumbs items={[{ label: 'Contato' }]} />

          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <h1 className="font-serif text-3xl font-bold text-charcoal lg:text-4xl">
                Fale Conosco
              </h1>
              <p className="mt-4 text-warm-gray">
                Estamos aqui para ajudar. Entre em contato conosco através dos
                canais abaixo ou envie uma mensagem.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {contactInfo.map((info) => (
                <div
                  key={info.title}
                  className="rounded-lg bg-white p-6 text-center shadow-sm"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-cream-100 text-charcoal">
                    <info.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-medium text-charcoal">{info.title}</h3>
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="mt-2 block text-sm text-warm-gray transition-colors hover:text-gold-600"
                    >
                      {info.content}
                      {info.subcontent && (
                        <>
                          <br />
                          {info.subcontent}
                        </>
                      )}
                    </a>
                  ) : (
                    <p className="mt-2 text-sm text-warm-gray">
                      {info.content}
                      {info.subcontent && (
                        <>
                          <br />
                          {info.subcontent}
                        </>
                      )}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-16 grid gap-12 lg:grid-cols-2">
              {/* Contact Form */}
              <div className="rounded-lg bg-white p-6 shadow-sm lg:p-8">
                <h2 className="font-serif text-2xl font-semibold text-charcoal">
                  Envie uma Mensagem
                </h2>
                <p className="mt-2 text-sm text-warm-gray">
                  Preencha o formulário abaixo e retornaremos em até 24 horas.
                </p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Seu nome completo"
                        required
                        className="bg-cream-50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="seu@email.com"
                        required
                        className="bg-cream-50"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(11) 99999-9999"
                        className="bg-cream-50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Assunto *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Como podemos ajudar?"
                        required
                        className="bg-cream-50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Escreva sua mensagem aqui..."
                      rows={5}
                      required
                      className="bg-cream-50 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-black text-white hover:bg-gray-900"
                  >
                    {isSubmitting ? (
                      'Enviando...'
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Enviar Mensagem
                      </>
                    )}
                  </Button>
                </form>
              </div>

              {/* Map Placeholder & WhatsApp CTA */}
              <div className="space-y-6">
                {/* Map */}
                <div className="overflow-hidden rounded-lg bg-cream-200">
                  <div className="aspect-[4/3] flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="mx-auto h-12 w-12 text-warm-gray" />
                      <p className="mt-4 text-warm-gray">
                        Mapa do Google Maps
                      </p>
                      <p className="mt-1 text-sm text-warm-gray">
                        Rua das Joias, 123 - Centro, São Paulo
                      </p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <div className="rounded-lg bg-green-50 p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-white">
                      <MessageCircle className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-medium text-charcoal">
                        Prefere WhatsApp?
                      </h3>
                      <p className="mt-1 text-sm text-warm-gray">
                        Fale diretamente com nossa equipe pelo WhatsApp. Resposta
                        rápida e atendimento personalizado.
                      </p>
                      <a
                        href="https://wa.me/5511999999999?text=Olá! Gostaria de mais informações sobre os produtos da Gold Sky."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center justify-center rounded-md bg-green-500 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-green-600"
                      >
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Chamar no WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
