import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Eventos',
  description: 'Confira os eventos e programação da Igreja Aprisco Urbano',
}

/* ===========================================
   PÁGINA DE EVENTOS
   
   Para trocar a imagem de destaque desta página:
   1. Coloque a nova imagem na pasta /public/img/
   2. Altere o caminho na variável heroImage abaixo
   
   Exemplo: const heroImage = '/img/eventos.jpg'
   =========================================== */

// Imagem de destaque da página
const heroImage = 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=1200&h=600&fit=crop'

const bannerMargin = "mt-[33px] md:mt-0";

/* ===========================================
   LISTA DE EVENTOS
   
   Para adicionar um novo evento, copie o bloco abaixo e altere os dados:
   
   {
     id: '3',                              // ID único do evento
     titulo: 'Nome do Evento',             // Título do evento
     descricao: 'Descrição do evento',     // Descrição breve
     data: '15 de Abril, 2026',            // Data do evento
     horario: '19h',                       // Horário
     local: 'Igreja Aprisco Urbano',       // Local
     status: 'aberto',                     // 'aberto' ou 'encerrado'
     imagem: '/img/evento.jpg',            // Imagem do evento (opcional)
   },
   =========================================== */

const eventos = [
  {
    id: '1',
    titulo: 'Seminário Bíblico da Fé',
    descricao: 'Estudo aprofundado das Escrituras para fortalecer sua fé e conhecimento bíblico. Um momento de aprendizado e crescimento espiritual.',
    data: 'Todo 1º sábado do mês',
    horario: '15h',
    local: 'Igreja Aprisco Urbano',
    status: 'encerrado',
    imagem: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=600&h=400&fit=crop',
  },
  {
    id: '2',
    titulo: 'Encontro com Deus',
    descricao: 'Um fim de semana de imersão na presença de Deus. Momentos de louvor, palavra e libertação espiritual.',
    data: '15-17 de Março, 2026',
    horario: 'Sexta 19h',
    local: 'A definir',
    status: 'encerrado',
    imagem: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?w=600&h=400&fit=crop',
  },
]

// Programação semanal fixa
const programacaoSemanal = [
  {
    dia: 'Domingo',
    horario: '18h',
    evento: 'Culto de Celebração',
    descricao: 'Nosso principal momento de adoração e comunhão',
  },
  {
    dia: 'Quarta-feira',
    horario: '19h',
    evento: 'Discipulado Ative+ Teens',
    descricao: 'Discipulado para adolescentes de 14 a 17 anos',
  },
  {
    dia: 'Quinta-feira',
    horario: '19h',
    evento: 'Células',
    descricao: 'Encontros em grupos pequenos nas casas',
  },
  {
    dia: 'Sexta-feira',
    horario: '20h',
    evento: 'Discipulado Ative+ Juventude',
    descricao: 'Discipulado para jovens de 18 a 27 anos',
  },
]

export default function EventosPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Eventos</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Confira nossa programação e participe dos nossos encontros
          </p>
        </div>
      </section>
          className={`relative w-full h-[260px] md:h-[400px] flex items-center justify-center mb-8 ${bannerMargin}`}
      {/* Eventos Especiais */}
      <section className="section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
              Eventos Especiais
            </span>
            <h4 className="section-title">Próximos Eventos</h4>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {eventos.map((evento) => (
              <div
                key={evento.id}
                className="card overflow-hidden"
              >
                {/* Imagem do evento */}
                {evento.imagem && (
                  <div className="h-48 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={evento.imagem} 
                      alt={evento.titulo}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                
                <div className="p-6">
                  {/* Status */}
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${
                    evento.status === 'aberto' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-red-100 text-red-700'
                  }`}>
                    {evento.status === 'aberto' ? 'Inscrições abertas' : 'Inscrições encerradas'}
                  </span>
                  
                  <h3 className="text-xl font-bold text-slate-800 mb-3">
                    {evento.titulo}
                  </h3>
                  <p className="text-slate-500 text-sm mb-4">
                    {evento.descricao}
                  </p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-slate-600">
                      <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{evento.data}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{evento.horario}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{evento.local}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programação Semanal */}
      <section className="section bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-2 bg-accent-100 text-accent-700 rounded-full text-sm font-semibold mb-4">
              Toda Semana
            </span>
            <h4 className="section-title">Programação Semanal</h4>
            <p className="section-subtitle mx-auto">
              <span style={{ color: '#000000' }}> Encontros regulares para edificação e comunhão</span>
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {programacaoSemanal.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-slate-100 hover:border-primary-200 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-sm font-medium text-primary-600">{item.dia}</span>
                  <span className="text-2xl font-bold text-slate-800">{item.horario}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{item.evento}</h3>
                <p className="text-slate-500 text-sm">{item.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Localização */}
      <section className="section">
        <div className="container mx-auto px-6 text-center">
          <h4 className="section-title mb-4">Nossa Localização</h4>
          <p className="text-lg text-slate-600 mb-2">
            Rua Orlando Silva, 9 - Engenho, Itaguaí - RJ
          </p>
          <p className="text-slate-500">
            Venha nos visitar! Estamos de portas abertas para recebê-lo.
          </p>
        </div>
      </section>
    </div>
  )
}
