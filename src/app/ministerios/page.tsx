import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ministérios',
  description: 'Conheça os ministérios da Igreja Aprisco Urbano e como você pode servir',
}

/* ===========================================
   PÁGINA DE MINISTÉRIOS
   
   Para trocar a imagem de destaque desta página:
   1. Coloque a nova imagem na pasta /public/img/
   2. Altere o caminho na variável heroImage abaixo
   
   Exemplo: const heroImage = '/img/ministerios.jpg'
   =========================================== */

const heroImage = 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=1200&h=600&fit=crop'

/* ===========================================
   LISTA DE MINISTÉRIOS
   
   Para adicionar um novo ministério, copie o bloco abaixo:
   
   {
     nome: 'Nome do Ministério',
     descricao: 'Descrição do ministério',
     lider: 'Nome do Líder',
     instagram: 'nomeusuario',  // sem @
     imagem: '/img/ministerio.jpg',
   },
   =========================================== */

const ministerios = [
  {
    nome: 'Ative+ Juventude',
    descricao: 'Ministério voltado para jovens de 18 a 27 anos. Um espaço de comunhão, crescimento espiritual e desenvolvimento de liderança para a juventude.',
    lider: 'Pastores Max e Ana Machado',
    instagram: 'ativemaisjuventude',
    imagem: '/img/ative+juventude.webp',
  },
  {
    nome: 'Ative+ Teens',
    descricao: 'Ministério para adolescentes de 13 a 17 anos. Encontros dinâmicos com palavra, louvor e comunhão para a nova geração.',
    lider: 'Pastores Douglas e Evellyn',
    instagram: 'ativemaisteen',
    imagem: '/img/ative+teen.webp',
  },
  {
    nome: 'AU Kids',
    descricao: 'Ministério infantil para crianças até 12 anos. Ensino bíblico de forma lúdica e divertida, formando a próxima geração.',
    lider: 'Pastores Maicon Rosa e Ana Carla',
    instagram: 'apriscourbanokids',
    imagem: '/img/apriscokids.webp',
  },
  {
    nome: 'Ser Mulher',
    descricao: 'Ministério de mulheres para edificação, comunhão e fortalecimento da fé feminina. Encontros que transformam vidas.',
    lider: 'Pastora Cintia Fernandes',
    instagram: 'ministeriosermulher',
    imagem: '/img/ministeriosermulher.webp',
  },
  {
    nome: 'Lechem',
    descricao: 'Ministério de ação social e evangelismo. Meta mensal: 1 tonelada de alimentos para famílias carentes da comunidade.',
    lider: 'Equipe de Voluntários',
    instagram: 'ministeriolechem',
    imagem: '/img/ministeriolechem.webp',
  },
]

/* ===========================================
   ÁREAS DE SERVIÇO
   
   Para adicionar uma nova área, copie o bloco:
   
   {
     nome: 'Nome da Área',
     descricao: 'Descrição da área',
   },
   =========================================== */

const areasDeServico = [
  {
    nome: 'Louvor',
    descricao: 'Equipe de músicos e cantores que lideram a adoração nos cultos',
  },
  {
    nome: 'Mídia',
    descricao: 'Responsáveis pela transmissão, som, iluminação e projeção',
  },
  {
    nome: 'Intercessão',
    descricao: 'Guerreiros de oração que sustentam a igreja em oração',
  },
  {
    nome: 'Recepção',
    descricao: 'Equipe que acolhe e recebe os visitantes com amor',
  },
  {
    nome: 'Diaconia',
    descricao: 'Servem nas necessidades práticas da igreja e dos membros',
  },
  {
    nome: 'Consolidação',
    descricao: 'Acompanham os novos convertidos em seus primeiros passos na fé',
  },
]

export default function MinisteriosPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero da página */}
      <section 
        className="page-hero relative"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(109, 40, 217, 0.9), rgba(109, 40, 217, 0.95)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="page-hero-content">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Ministérios</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Descubra como você pode servir e fazer parte da nossa comunidade
          </p>
        </div>
      </section>

      {/* Introdução */}
      <section className="section">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title mb-6">Sirva com seus dons</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Na Igreja Aprisco Urbano, acreditamos que cada membro é um sacerdote e tem um papel importante no corpo de Cristo. Os ministérios são áreas onde você pode usar seus dons e talentos para servir a Deus e ao próximo.
            </p>
          </div>
        </div>
      </section>

      {/* Ministérios */}
      <section className="section bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
              Nossos Ministérios
            </span>
            <h2 className="section-title">Conheça nossos ministérios</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {ministerios.map((ministerio, index) => (
              <div
                key={index}
                className="card overflow-hidden group"
              >
                {ministerio.imagem && (
                  <div className="h-48 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={ministerio.imagem} 
                      alt={ministerio.nome}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-3">
                    {ministerio.nome}
                  </h3>
                  <p className="text-slate-500 text-sm mb-4">
                    {ministerio.descricao}
                  </p>
                  <p className="text-primary-600 font-medium text-sm mb-4">
                    {ministerio.lider}
                  </p>
                  
                  {ministerio.instagram && (
                    <a 
                      href={`https://instagram.com/${ministerio.instagram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-primary-600 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      @{ministerio.instagram}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Áreas de Serviço */}
      <section className="section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-2 bg-accent-100 text-accent-700 rounded-full text-sm font-semibold mb-4">
              Áreas de Serviço
            </span>
            <h2 className="section-title">Onde você pode servir</h2>
            <p className="section-subtitle mx-auto">
              Diversas oportunidades para usar seus talentos no Reino de Deus
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {areasDeServico.map((area, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl border border-slate-100 hover:border-primary-200 hover:shadow-md transition-all"
              >
                <h3 className="text-lg font-bold text-slate-800 mb-2">{area.nome}</h3>
                <p className="text-slate-500 text-sm">{area.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Quer fazer parte de um ministério?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra onde você pode servir
          </p>
          <a 
            href="/contato"
            className="inline-flex items-center gap-2 bg-white text-primary-700 font-bold py-4 px-8 rounded-2xl hover:bg-primary-50 transition-all duration-300 shadow-xl"
          >
            Fale Conosco
          </a>
        </div>
      </section>
    </div>
  )
}
