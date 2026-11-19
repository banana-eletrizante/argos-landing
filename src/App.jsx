import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  FileText, Clock, Calendar, Map, MessageSquare, Shield, 
  Smartphone, Truck, ArrowRight, Menu, X, CheckCircle
} from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur border-b border-argos-border z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/argos-logo.jpeg" alt="ARGOS" className="h-10 object-contain" />
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-argos-muted">
          <a href="#funcionalidades" className="hover:text-black transition">Funcionalidades</a>
          <a href="#como-funciona" className="hover:text-black transition">Como Funciona</a>
          <a href="#tecnologias" className="hover:text-black transition">Tecnologias</a>
          <a href="#sobre" className="hover:text-black transition">Sobre</a>
          <a href="https://argos-sage-mu.vercel.app" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-5 py-2 rounded text-sm font-semibold hover:bg-argos-text transition">
            Acessar Sistema
          </a>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t px-6 py-4 space-y-4 text-argos-muted">
          <a href="#funcionalidades" onClick={() => setOpen(false)} className="block">Funcionalidades</a>
          <a href="#como-funciona" onClick={() => setOpen(false)} className="block">Como Funciona</a>
          <a href="#tecnologias" onClick={() => setOpen(false)} className="block">Tecnologias</a>
          <a href="#sobre" onClick={() => setOpen(false)} className="block">Sobre</a>
          <a href="https://argos-sage-mu.vercel.app" className="block bg-black text-white text-center py-2 rounded">Acessar Sistema</a>
        </div>
      )}
    </nav>
  )
}

function Hero() {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
      <div className="absolute inset-0">
        <img src="/login-porto.jpg" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial="initial" animate="animate" variants={{ animate: { transition: { staggerChildren: 0.1 } } }}>
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-white px-4 py-1.5 rounded text-sm mb-6 border border-white/20">
            Sistema Portuário
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 font-title">
            ARGOS
            <span className="block text-2xl md:text-3xl font-medium mt-2 opacity-90">Gerenciamento de Cargas Portuárias</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg text-white/90 mb-8 max-w-lg">
            Centralize documentos, elimine filas físicas, agende janelas com precisão e acompanhe tudo em tempo real.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
            <a href="https://argos-sage-mu.vercel.app" target="_blank" rel="noopener noreferrer" className="bg-white text-black font-semibold px-8 py-3.5 rounded hover:bg-argos-bg transition inline-flex items-center gap-2">
              Acessar o Sistema <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#funcionalidades" className="border border-white text-white px-8 py-3.5 rounded hover:bg-white/10 transition">
              Conhecer Funcionalidades
            </a>
          </motion.div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="hidden lg:block"
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6">
            <img src="/argos-logo.jpeg" alt="ARGOS Logo" className="h-16 mb-6 mx-auto object-contain" />
            <div className="grid grid-cols-2 gap-3 text-white text-sm">
              <div className="bg-white/10 rounded p-3 text-center">Documentos</div>
              <div className="bg-white/10 rounded p-3 text-center">Fila Virtual</div>
              <div className="bg-white/10 rounded p-3 text-center">Agendamentos</div>
              <div className="bg-white/10 rounded p-3 text-center">Mapa</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Features() {
  const features = [
    { icon: FileText, title: "Gestão de Documentos", desc: "Controle completo de documentos de carga, status em tempo real, uploads seguros e fluxo de aprovações." },
    { icon: Clock, title: "Fila Virtual", desc: "Elimine filas físicas. Acompanhe a posição na fila digitalmente com notificações automáticas." },
    { icon: Calendar, title: "Janelas de Agendamento", desc: "Agende horários de forma inteligente, com controle de capacidade por terminal e tipo de carga." },
    { icon: Map, title: "Mapa Interativo", desc: "Visualize posições de veículos, rotas e status geográfico em tempo real." },
    { icon: MessageSquare, title: "Chat Geral", desc: "Comunicação unificada entre operadores, transportadoras e motoristas." },
    { icon: Shield, title: "Autenticação Segura", desc: "Login com CPF e CNPJ mascarados. Controle de permissões por perfil." },
    { icon: Smartphone, title: "App para Motoristas", desc: "Acompanhamento de viagens, localização e simulações de navegação." },
    { icon: Truck, title: "Operação Completa", desc: "Da chegada do veículo à liberação da carga: tudo registrado e rastreável." },
  ]

  return (
    <section id="funcionalidades" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-2 w-2 bg-black rounded-sm" />
            <h2 className="text-3xl md:text-4xl font-semibold font-title text-black">Funcionalidades</h2>
          </div>
          <p className="text-lg text-argos-muted max-w-2xl mx-auto">Tudo o que a operação portuária precisa, no mesmo visual do sistema.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="border border-argos-border rounded bg-argos-bg p-5 hover:shadow-sm transition"
            >
              <div className="w-10 h-10 bg-white border border-argos-border rounded flex items-center justify-center mb-4">
                <f.icon className="w-5 h-5 text-black" />
              </div>
              <h3 className="font-semibold text-black mb-2">{f.title}</h3>
              <p className="text-sm text-argos-muted leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  const steps = [
    { n: "01", title: "Acesso Seguro", desc: "Login com CPF ou CNPJ. Perfis diferenciados para cada ator da operação." },
    { n: "02", title: "Gestão Documental", desc: "Envie, acompanhe e aprove documentos de forma digital e organizada." },
    { n: "03", title: "Fila e Agendamento", desc: "Entre na fila virtual ou reserve janela de horário com previsibilidade." },
    { n: "04", title: "Acompanhamento Live", desc: "Mapa, chat e status em tempo real até a conclusão da operação." },
  ]

  return (
    <section id="como-funciona" className="py-20 px-6 bg-argos-bg2">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <div className="h-2 w-2 bg-black rounded-sm" />
          <h2 className="text-3xl md:text-4xl font-semibold font-title">Como o ARGOS Funciona</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white border border-argos-border rounded p-6"
            >
              <div className="text-3xl font-bold text-argos-muted/40 mb-2 font-title">{s.n}</div>
              <h3 className="font-semibold text-black mb-2">{s.title}</h3>
              <p className="text-sm text-argos-muted">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Tech() {
  const techs = ["Vite + React", "Tailwind CSS", "Leaflet", "PHP 8.3 + MySQL", "Axios", "React Router", "Vercel + Render", "App Flutter"]

  return (
    <section id="tecnologias" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-2 w-2 bg-black rounded-sm" />
          <h2 className="text-3xl md:text-4xl font-semibold font-title">Stack Tecnológico</h2>
        </div>
        <p className="text-argos-muted mb-10">A mesma base do sistema ARGOS.</p>
        <div className="flex flex-wrap justify-center gap-3">
          {techs.map((t, i) => (
            <span key={i} className="border border-argos-border bg-argos-bg px-4 py-2 rounded text-sm font-medium">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="sobre" className="py-20 px-6 bg-argos-bg">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-2 w-2 bg-black rounded-sm" />
          <h2 className="text-3xl md:text-4xl font-semibold font-title">Sobre o Projeto</h2>
        </div>
        <p className="text-argos-muted leading-relaxed mb-4">
          O <strong>ARGOS</strong> foi desenvolvido como Trabalho de Conclusão de Curso (TCC) para resolver problemas reais do setor portuário: filas, documentação em papel e comunicação fragmentada.
        </p>
        <p className="text-argos-muted leading-relaxed mb-6">
          Usa a mesma arquitetura e o mesmo design do sistema em produção: frontend Vite + React, backend PHP com procedures MySQL, e o visual alinhado ao Figma original.
        </p>
        <div className="inline-flex items-center gap-2 text-black font-medium">
          <CheckCircle className="w-5 h-5" />
          Pronto para demonstração
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="py-16 px-6 bg-black text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold font-title mb-4">Experimente o ARGOS</h2>
        <p className="text-white/70 mb-8">Acesse o sistema completo e veja a operação em ação.</p>
        <a href="https://argos-sage-mu.vercel.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-black font-semibold px-8 py-4 rounded hover:bg-argos-bg transition">
          Acessar Sistema Agora <ArrowRight />
        </a>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-argos-bg2 border-t border-argos-border py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <img src="/argos-logo.jpeg" alt="ARGOS" className="h-8 object-contain" />
        <div className="text-sm text-argos-muted text-center">
          Sistema de Gerenciamento de Transporte de Cargas Portuárias<br />
          TCC • 2026
        </div>
        <a href="https://argos-sage-mu.vercel.app" className="text-sm text-black hover:underline">argos-sage-mu.vercel.app</a>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-argos-bg">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Tech />
      <About />
      <CTA />
      <Footer />
    </div>
  )
}
