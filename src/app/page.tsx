'use client'

import Link from 'next/link'
import Image from 'next/image'
import logo from '@/app/img/logo.webp'

/* ===========================================
   PÁGINA INICIAL - HOME
   
   Esta é a página principal do site.
   Para alterar imagens, substitua os arquivos na pasta /public/img/
   =========================================== */

const CHURCH_ADDRESS = 'Rua Orlando Silva, 9 - Engenho, Itaguaí'
        {/* Gradiente de fundo */}

        // Banner principal: adicionar margin-top para mobile
        const bannerMargin = "mt-0 md:mt-0";
// Programação semanal da igreja
const schedule = [
  { day: 'Domingo', time: '18h', event: 'Culto' },
  { day: 'Quarta-feira', time: '19h', event: 'Discipulado Ative+ Teen' },
  { day: 'Quinta-feira', time: '19h', event: 'Células' },
  { day: 'Sexta-feira', time: '20h', event: 'Discipulado Ative+ Juventude' },
]

// Destaques para a home
const highlights = [
  {
    title: 'Cultos',
    description: 'Momentos de adoração e comunhão com Deus',
    href: '/eventos',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Células',
    description: 'Grupos de comunhão durante a semana',
    href: '/celulas',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Ministérios',
    description: 'Áreas de serviço e crescimento espiritual',
    href: '/ministerios',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: 'Batismo',
    description: 'Dê o próximo passo na sua fé',
    href: '/batismo',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {/* Exemplo de uso: */}
        {/* <div className={bannerMargin}><Image src={heroImage} alt="Banner" width={1200} height={600} /></div> */}
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ===========================================
          HERO SECTION
          
          Para trocar a imagem de fundo, altere a URL em backgroundImage
          ou use uma imagem local da pasta /public/img/
          Exemplo: backgroundImage: 'url(/img/hero-home.jpg)'
          =========================================== */}
        {/* Para editar o texto do banner principal (título e descrição), altere o conteúdo das tags <h1> e <p> abaixo. Para mudar a cor, altere a propriedade style={{ color: '#FFFFFF' }}. */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden mt-6 md:mt-10">
        {/* Gradiente de fundo */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800"></div>
        
        {/* Overlay decorativo */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent-500 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-400 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="relative container mx-auto px-6 text-center text-white z-10 pt-20">
          {/* Logo */}
          <div className="mb-10 mt-[33px] md:mt-16">
            <Image 
              src={logo}
              alt="Aprisco Urbano"
              className="h-36 md:h-52 w-auto mx-auto drop-shadow-2xl object-contain"
              priority
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight font-montserrat text-white">
              <span style={{ color: '#FFFFFF' }}>Bem-vindo ao Aprisco Urbano</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 text-white/90 max-w-2xl mx-auto font-light">
              <span style={{ color: '#FFFFFF' }}>
                Uma comunidade de fé, esperança e amor no coração da cidade. 
                Venha fazer parte da nossa família espiritual.
              </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link
              href="/eventos"
              className="btn-primary bg-white text-primary-700 hover:bg-primary-50 py-4 px-8 text-lg"
            >
              Ver Programação
            </Link>
            <Link 
              href="/contato"
              className="btn-secondary border-white/30 bg-white/10 text-white hover:bg-white/20 py-4 px-8 text-lg"
            >
              Entre em Contato
            </Link>
          </div>
        </div>
      </section>

      {/* Missão e Visão */}
      <section className="section bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
              <div>
                <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-6">
                  Nossa Missão
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6 leading-tight">
                  Ser igual a Jesus, fazer as mesmas coisas que Ele fez e coisas maiores ainda pelo poder do Espírito Santo.
                </h2>
                <p className="text-lg text-slate-500">Salvar, discipular, treinar e sustentar através das células.</p>
                
              </div>
              <div>
                <span className="inline-block px-4 py-2 bg-accent-100 text-accent-700 rounded-full text-sm font-semibold mb-6">
                  Nossa Visão
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6 leading-tight">
                  Cada membro, um sacerdote. Cada casa, uma extensão da igreja.
                </h2>
                <p className="text-lg text-slate-500">
                  Formando discípulos que fazem discípulos, multiplicando o Reino de Deus em cada lar e comunidade.
                </p>
              </div>
            </div>
          </div>
        </div> 
      </section>

      {/* Destaques */}
      <section className="section bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <h4 className="section-title">Conheça Nossa Igreja</h4>
            <p className="section-subtitle mx-auto">
              <span style={{ color: '#000000' }}> Descubra as diversas formas de participar da nossa comunidade</span>
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {highlights.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="card p-8 text-center group hover:border-primary-200 transition-all"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary-100 text-primary-600 flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-primary-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Programação */}
      <section className="section bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <h4 className="section-title">Programação Semanal</h4>
              <p className="section-subtitle mx-auto">
                <span style={{ color: '#000000' }}> Participe dos nossos encontros durante a semana</span>
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {schedule.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-6 rounded-2xl border border-slate-100 hover:border-primary-200 hover:shadow-md transition-all"
                >
                  <div>
                    <p className="text-sm text-primary-600 font-medium mb-1">{item.day}</p>
                    <p className="text-lg font-bold text-slate-800">{item.event}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-slate-800">{item.time}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <p className="text-slate-500 mb-2">Endereço</p>
              <p className="text-lg font-medium text-slate-700">{CHURCH_ADDRESS}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Venha nos visitar
          </h2>
          <p className="text-xl text-white/80 mb-4 max-w-2xl mx-auto">
            Todo domingo às 18h
          </p>
          <p className="text-white/60 mb-8">
            {CHURCH_ADDRESS}
          </p>
          <Link 
            href="/contato"
            className="inline-flex items-center gap-2 bg-white text-primary-700 font-bold py-4 px-8 rounded-2xl hover:bg-primary-50 transition-all duration-300 shadow-xl"
          >
            Fale Conosco
          </Link>
        </div>
      </section>
    </div>
  )
}
