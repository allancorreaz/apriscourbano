// Margin-top para o primeiro texto/banner logo abaixo do header
const bannerMargin = "mt-[33px] md:mt-0";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Células',
  description: 'Conheça as células da Igreja Aprisco Urbano - pequenos grupos de comunhão',
}

/* ===========================================
   PÁGINA DE CÉLULAS
   
   Para trocar a imagem de destaque desta página:
   1. Coloque a nova imagem na pasta /public/img/
   2. Altere o caminho na variável heroImage abaixo
   
   Exemplo: const heroImage = '/img/celulas.jpg'
   =========================================== */

const heroImage = 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&h=600&fit=crop'

/* ===========================================
   LISTA DE CÉLULAS
   
   Para adicionar uma nova célula, copie o bloco abaixo:
   
   {
     nome: 'Nome da Célula',
     lider: 'Nome do Líder',
     bairro: 'Nome do Bairro',
     dia: 'Quinta-feira',
     horario: '19h',
     instagram: 'nomeusuario',  // sem @ (opcional)
   },
   =========================================== */

const celulas = [
  {
    nome: 'Célula A Forja',
    lider: 'João Bolis',
    bairro: 'Centro',
    endereco: 'Rua Tietê, 2602 - Estrela do Céu, Itaguaí, RJ - 23820-780',
    dia: 'Quinta-feira',
    horario: '19h',
    instagram: 'celula_aforja_',
  },
  {
    nome: 'Célula Ekballo',
    lider: 'Felipe Santana',
    bairro: 'Engenho',
    endereco: 'Rua do Engenho, 45, Engenho, Itaguaí, RJ',
    dia: 'Quinta-feira',
    horario: '19h',
    instagram: 'celulaekballoaprisco',
  },
  {
    nome: 'Célula Koinonia',
    lider: 'Maria Silva',
    bairro: 'Vila Geny',
    endereco: 'Av. Geny, 200, Vila Geny, Itaguaí, RJ',
    dia: 'Quinta-feira',
    horario: '19h',
    instagram: '',
  },
  {
    nome: 'Célula Ágape',
    lider: 'Carlos Mendes',
    bairro: 'Brisamar',
    endereco: 'Rua Brisamar, 88, Brisamar, Itaguaí, RJ',
    dia: 'Quinta-feira',
    horario: '19h',
    instagram: '',
  },
  {
    nome: 'Célula Shalom',
    lider: 'Ana Paula',
    bairro: 'Centro',
    endereco: 'Rua Central, 50, Centro, Itaguaí, RJ',
    dia: 'Quinta-feira',
    horario: '19h',
    instagram: '',
  },
  {
    nome: 'Célula Eben-Ezer',
    lider: 'Roberto Lima',
    bairro: 'Coroa Grande',
    endereco: 'Rua Coroa Grande, 10, Coroa Grande, Itaguaí, RJ',
    dia: 'Quinta-feira',
    horario: '19h',
    instagram: '',
  },
]

// Benefícios de participar das células
const beneficios = [
  {
    titulo: 'Comunhão',
    descricao: 'Relacionamentos profundos e verdadeiros com irmãos na fé',
    icone: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    titulo: 'Crescimento',
    descricao: 'Estudo da Palavra de Deus e crescimento espiritual contínuo',
    icone: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    titulo: 'Oração',
    descricao: 'Intercessão e apoio mútuo nas necessidades e desafios',
    icone: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    titulo: 'Evangelismo',
    descricao: 'Oportunidade de alcançar amigos e familiares para Cristo',
    icone: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
]

export default function CelulasPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero da página */}
      <section 
        className="page-hero relative"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(30, 58, 95, 0.94), rgba(15, 23, 42, 0.97)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="page-hero-content">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Células</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Pequenos grupos que fazem uma grande diferença
          </p>
        </div>
      </section>

      {/* O que são células */}
      <section className="section">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h4 className={`section-title mb-6 ${bannerMargin}`}>O que s&atilde;o as c&eacute;lulas?</h4>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              As células são pequenos grupos que se reúnem semanalmente nas casas para comunhão, oração e estudo da Palavra de Deus. É uma forma de fortalecer relacionamentos e crescer espiritualmente em um ambiente acolhedor e familiar.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Na nossa igreja, acreditamos que cada casa pode ser uma extensão da igreja. Por isso, incentivamos todos os membros a participarem de uma célula e experimentarem o poder da comunhão em pequenos grupos.
            </p>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="section bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
              Por que participar?
            </span>
            <h4 className="section-title">Benefícios de participar</h4>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {beneficios.map((beneficio, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center border border-slate-100 hover:border-primary-200 hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary-100 text-primary-600 flex items-center justify-center">
                  {beneficio.icone}
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{beneficio.titulo}</h3>
                <p className="text-slate-500 text-sm">{beneficio.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lista de Células */}
      <section className="section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-2 bg-accent-100 text-accent-700 rounded-full text-sm font-semibold mb-4">
              Nossas Células
            </span>
            <h4 className="section-title">Encontre uma célula perto de você</h4>
            <p className="section-subtitle mx-auto">
              <span style={{ color: '#000000' }}>Todas as células se reúnem às quintas-feiras às 19h</span>
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {celulas.map((celula, index) => (
              <div
                key={index}
                className="card p-6"
              >
                <h3 className="text-lg font-bold text-slate-800 mb-2">{celula.nome}</h3>
                <div className="space-y-2 text-sm mb-4">
                  <div className="flex items-center gap-2 text-slate-600">
                    <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span>Líder: {celula.lider}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{celula.bairro}</span>
                  </div>
                  <div className="flex items-center gap-2 text-primary-700">
                    <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                      <circle cx="12" cy="9" r="2.5" />
                    </svg>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(celula.endereco)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-primary-light"
                    >
                      {celula.endereco}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{celula.dia} às {celula.horario}</span>
                  </div>
                </div>
                
                {celula.instagram && (
                  <a 
                    href={`https://instagram.com/${celula.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-primary-600 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    @{celula.instagram}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Quer participar de uma célula?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e vamos te conectar com uma célula próxima de você
          </p>
          <a 
            href="/contato"
            className="inline-flex items-center gap-2 bg-white text-primary-700 font-bold py-4 px-8 rounded-2xl hover:bg-primary-50 transition-all duration-300 shadow-xl"
          >
            Quero Participar
          </a>
        </div>
      </section>
    </div>
  )
}
