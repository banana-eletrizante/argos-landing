import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  FileText, Clock, Calendar, Map, MessageSquare, Shield, 
  Smartphone, Truck, Anchor, Zap, CheckCircle, ArrowRight,
  Menu, X, Compass
} from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-xl text-argos-navy">
          <Compass className="w-8 h-8 text-argos-cyan" />
          ARGOS
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#funcionalidades" className="hover:text-argos-cyan transition">Funcionalidades</a>
          <a href="#como-funciona" className="hover:text-argos-cyan transition">Como Funciona</a>
          <a href="#tecnologias" className="hover:text-argos-cyan transition">Tecnologias</a>
          <a href="#sobre" className="hover:text-argos-cyan transition">Sobre</a>
          <a href="https://argos-sage-mu.vercel.app" target="_blank" rel="noopener noreferrer" className="bg-argos-navy text-white px-5 py-2 rounded-full hover:bg-argos-cyan transition">
            Acessar Sistema
          </a>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t px-6 py-4 space-y-4">
          <a href="#funcionalidades" onClick={() => setOpen(false)} className="block">Funcionalidades</a>
          <a href="#como-funciona" onClick={() => setOpen(false)} className="block">Como Funciona</a>
          <a href="#tecnologias" onClick={() => setOpen(false)} className="block">Tecnologias</a>
          <a href="#sobre" onClick={() => setOpen(false)} className="block">Sobre</a>
          <a href="https://argos-sage-mu.vercel.app" className="block bg-argos-navy text-white text-center py-2 rounded-full">Acessar Sistema</a>
        </div>
      )}
    </nav>
  )
}

function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-argos-navy via-slate-900 to-argos-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-argos-cyan rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-argos-yellow rounded-full blur-3xl opacity-30" />
      </div>
      <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial="initial" animate="animate" variants={stagger}>
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm mb-6">
            <Anchor className="w-4 h-4 text-argos-cyan" />
            Sistema Portuário Inteligente
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
            ARGOS
            <span className="block text-argos-cyan">Gerenciamento de Cargas Portuárias</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl text-slate-300 mb-8 max-w-lg">
            Centralize documentos, elimine filas físicas, agende janelas com precisão e acompanhe tudo em tempo real. A operação portuária do futuro, hoje.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
            <a href="https://argos-sage-mu.vercel.app" target="_blank" rel="noopener noreferrer" className="bg-argos-cyan text-argos-navy font-semibold px-8 py-4 rounded-full hover:scale-105 transition inline-flex items-center gap-2">
              Acessar o Sistema <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#funcionalidades" className="border border-white/30 px-8 py-4 rounded-full hover:bg-white/10 transition">
              Conhecer Funcionalidades
            </a>
          </motion.div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-8 shadow-2xl">
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: FileText, label: "Documentos", value: "100%" },
                { icon: Clock, label: "Fila Virtual", value: "0 min" },
                { icon: Calendar, label: "Agendamentos", value: "Smart" },
                { icon: Map, label: "Mapa Live", value: "RT" },
              ].map((item, i) => (
                <div key={i} className="bg-white/10 rounded-2xl p-4 text-center">
                  <item.icon className="w-8 h-8 mx-auto mb-2 text-argos-cyan" />
                  <div className="font-bold text-2xl">{item.value}</div>
                  <div className="text-xs text-slate-300">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Features() {
  const features = [
    { icon: FileText, title: "Gestão de Documentos", desc: "Controle completo de documentos de carga, status em tempo real, uploads seguros e fluxo de aprovações integrado." },
    { icon: Clock, title: "Fila Virtual", desc: "Elimine filas físicas. Motoristas e transportadoras acompanham a posição na fila digitalmente, com notificações automáticas." },
    { icon: Calendar, title: "Janelas de Agendamento", desc: "Agende horários de descarga/carga de forma inteligente, com controle de capacidade por terminal e tipo de carga." },
    { icon: Map, title: "Mapa Interativo", desc: "Visualize posições de veículos, rotas e status geográfico em tempo real com integração de mapas modernos." },
    { icon: MessageSquare, title: "Chat Geral", desc: "Comunicação unificada entre operadores, transportadoras e motoristas em um único canal seguro." },
    { icon: Shield, title: "Autenticação Segura", desc: "Login com CPF e CNPJ mascarados automaticamente, controle de permissões por perfil (admin, transportadora, motorista)." },
    { icon: Smartphone, title: "App para Motoristas", desc: "Aplicativo dedicado para acompanhamento de viagens, localização e simulações de navegação." },
    { icon: Truck, title: "Operação Completa", desc: "Da chegada do veículo à liberação da carga: tudo registrado, rastreável e otimizado." },
  ]

  return (
    <section id="funcionalidades" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-argos-navy mb-4">Funcionalidades Completas</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">Tudo o que um porto moderno precisa para operar com eficiência, transparência e menos papel.</p>
        </motion.div>
        <motion.div 
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:shadow-xl hover:border-argos-cyan/30 transition-all"
            >
              <div className="w-12 h-12 bg-argos-cyan/10 rounded-xl flex items-center justify-center mb-4">
                <f.icon className="w-6 h-6 text-argos-cyan" />
              </div>
              <h3 className="font-bold text-lg text-argos-navy mb-2">{f.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
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
    <section id="como-funciona" className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-bold text-center text-argos-navy mb-16">
          Como o ARGOS Transforma a Operação
        </motion.h2>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              <div className="text-6xl font-black text-argos-cyan/20 mb-2">{s.n}</div>
              <h3 className="font-bold text-xl text-argos-navy mb-2">{s.title}</h3>
              <p className="text-slate-600">{s.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 -right-4 text-argos-cyan">
                  <ArrowRight />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Tech() {
  const techs = ["Vite + React 19", "Tailwind CSS 4", "Leaflet Maps", "PHP 8.3 + MySQL", "Axios + React Router", "Vercel + Render", "Autenticação JWT/Cookie", "App Flutter Mobile"]

  return (
    <section id="tecnologias" className="py-24 px-6 bg-argos-navy text-white">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-bold mb-6">
          Stack Tecnológico Moderno
        </motion.h2>
        <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
          Construído com as melhores tecnologias para performance, escalabilidade e experiência de usuário premium.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {techs.map((t, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white/10 border border-white/20 px-5 py-3 rounded-full text-sm font-medium"
            >
              {t}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="sobre" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-4xl md:text-5xl font-bold text-argos-navy mb-6">Sobre o Projeto</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            O <strong>ARGOS</strong> nasceu como Trabalho de Conclusão de Curso (TCC) com o objetivo de resolver problemas reais do setor portuário brasileiro: congestionamento de filas, excesso de documentação em papel e falta de comunicação integrada entre os atores da cadeia logística.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            Desenvolvido com arquitetura moderna (frontend Vite + React, backend PHP com procedures MySQL), o sistema demonstra aplicação prática de boas práticas de engenharia de software, UX/UI profissional e integração de tecnologias contemporâneas.
          </p>
          <div className="inline-flex items-center gap-2 text-argos-cyan font-semibold">
            <CheckCircle className="w-5 h-5" />
            Pronto para demonstração e evolução contínua
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-argos-cyan to-teal-500 text-argos-navy">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-bold mb-6">
          Experimente o ARGOS
        </motion.h2>
        <p className="text-xl mb-8 opacity-90">
          Acesse o sistema completo e veja na prática como a operação portuária pode ser mais inteligente.
        </p>
        <a href="https://argos-sage-mu.vercel.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-argos-navy text-white font-semibold px-10 py-5 rounded-full text-lg hover:scale-105 transition">
          Acessar Sistema Agora <ArrowRight />
        </a>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2 text-white font-bold text-xl">
          <Compass className="w-6 h-6 text-argos-cyan" />
          ARGOS
        </div>
        <div className="text-sm text-center md:text-left">
          Sistema de Gerenciamento de Transporte de Cargas Portuárias<br />
          Desenvolvido como TCC • 2026
        </div>
        <a href="https://argos-sage-mu.vercel.app" className="text-argos-cyan hover:underline">argos-sage-mu.vercel.app</a>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen">
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
