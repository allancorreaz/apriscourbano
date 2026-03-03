'use client'

import { useState } from 'react'

// Função para gerar link do Google Calendar
function generateCalendarLink(title: string, date: string, time: string, location: string) {
  const startDate = new Date(date + 'T' + time + ':00')
  const endDate = new Date(startDate.getTime() + 2 * 60 * 60 * 1000)
  
  const formatDate = (d: Date) => d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
  
  return `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${formatDate(startDate)}/${formatDate(endDate)}&location=${encodeURIComponent(location)}&details=${encodeURIComponent('Igreja Aprisco Urbano - Rua Orlando Silva, 9 - Engenho, Itaguaí')}`
}

// Calcula próxima data por dia da semana
function getNextDayOfWeek(dayOfWeek: number) {
  const today = new Date()
  const daysUntil = (dayOfWeek - today.getDay() + 7) % 7 || 7
  const nextDate = new Date(today)
  nextDate.setDate(today.getDate() + daysUntil)
  return nextDate
}

// Calcula primeiro sábado do mês
function getFirstSaturdayOfMonth() {
  const today = new Date()
  const firstDay = new Date(today.getFullYear(), today.getMonth() + 1, 1)
  const dayOfWeek = firstDay.getDay()
  const daysUntilSaturday = (6 - dayOfWeek + 7) % 7
  return new Date(firstDay.getFullYear(), firstDay.getMonth(), firstDay.getDate() + daysUntilSaturday)
}

function formatDateBR(date: Date) {
  return date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' })
}

function formatDateISO(date: Date) {
  return date.toISOString().split('T')[0]
}

const CHURCH_ADDRESS = 'Rua Orlando Silva, 9 - Engenho, Itaguaí'

export default function HomePage() {
  const nextSunday = getNextDayOfWeek(0)
  const nextTuesday = getNextDayOfWeek(2)
  const nextThursday = getNextDayOfWeek(4)
  const nextFriday = getNextDayOfWeek(5)
  const nextWednesday = getNextDayOfWeek(3)
  const firstSaturday = getFirstSaturdayOfMonth()

  const ministries = [
    {
      name: 'Ative+ Juventude',
      description: 'Grupo jovem para jovens de 18 a 27 anos',
      pastors: 'Pastores Max e Ana Machado',
      instagram: 'ativemaisjuventude',
      image: '/img/ative+juventude.webp',
    },
    {
      name: 'Ative+ Teens',
      description: 'Ministério para adolescentes de 13 a 17 anos',
      pastors: 'Pastores Douglas e Evellyn',
      instagram: 'ativemaisteen',
      image: '/img/ative+teen.webp',
    },
    {
      name: 'Ministério AU Kids',
      description: 'Ministério infantil para crianças até 12 anos',
      pastors: 'Pastores Maicon Rosa e Ana Carla',
      instagram: 'apriscourbanokids',
      image: '/img/apriscokids.webp',
    },
    {
      name: 'Ministério Ser Mulher',
      description: 'Ministério de mulheres para edificação e comunhão',
      pastors: 'Pastora Cintia Fernandes',
      instagram: 'ministeriosermulher',
      image: '/img/ministeriosermulher.webp',
    },
    {
      name: 'Ministério Lechem',
      description: 'Ação social e evangelismo. Meta mensal: 1 tonelada de alimentos!',
      pastors: 'Equipe de Voluntários',
      instagram: 'ministeriolechem',
      image: '/img/ministeriolechem.webp',
    },
  ]

  const weeklyEvents = [
    {
      name: 'Culto de Celebração',
      day: 'Domingo',
      time: '18:00',
      date: nextSunday,
      icon: '⛪',
      description: 'Nosso principal culto de adoração',
      color: 'from-violet-500 to-purple-600',
    },
    {
      name: 'Treinamento de Líderes',
      day: 'Terça-feira',
      time: '19:00',
      date: nextTuesday,
      icon: '👥',
      description: 'Somente para líderes e líderes em treinamento',
      color: 'from-amber-500 to-orange-600',
    },
    {
      name: 'Discipulado Ative+ Teens',
      day: 'Quarta-feira',
      time: '20:00',
      date: nextWednesday,
      icon: '⚡',
      description: 'Discipulado para adolescentes de 14 a 17 anos',
      color: 'from-cyan-500 to-blue-600',
    },
    {
      name: 'Células',
      day: 'Todas as Quinta-feira',
      time: '19:00',
      date: nextThursday,
      icon: '🏠',
      description: 'Encontros em grupos pequenos',
      color: 'from-emerald-500 to-teal-600',
    },
    {
      name: 'Discipulado Ative+ Juventude',
      day: 'Todas as Sexta-feira',
      time: '20:00',
      date: nextFriday,
      icon: '🔥',
      description: 'Discipulado para jovens de 18 a 27 anos',
      color: 'from-pink-500 to-rose-600',
    },
    {
      name: 'Discipulado de Casais',
      day: 'Sábado',
      time: '19:00',
      date: getNextDayOfWeek(6),
      icon: '💑',
      description: 'Líderes: Pastor Gláucio Muniz e Cintia Fernandes',
      color: 'from-red-500 to-pink-600',
    },
  ]

  const paidEvents = [
    {
      name: 'Encontro com Deus',
      description: 'Um fim de semana de imersão na presença de Deus',
      date: '15-17 de Março, 2026',
      price: 'R$ 350,00',
      status: 'Inscrições abertas',
      statusColor: 'bg-green-100 text-green-700',
      icon: '✨',
    },
    {
      name: 'Fagulha Training',
      description: 'Treinamento intensivo de evangelismo',
      date: '22-23 de Março, 2026',
      price: 'R$ 120,00',
      status: 'Inscrições abertas',
      statusColor: 'bg-green-100 text-green-700',
      icon: '🔥',
    },
    {
      name: 'Seminário Bíblico da Fé',
      description: 'Estudo aprofundado das Escrituras',
      date: `Todo 1º sábado do mês - Próximo: ${formatDateBR(firstSaturday)}`,
      price: 'R$ 80,00',
      status: 'Inscrições encerradas',
      statusColor: 'bg-red-100 text-red-700',
      icon: '📖',
    },
    {
      name: 'Retiro de Líderes',
      description: 'Capacitação e comunhão para líderes',
      date: '5-7 de Abril, 2026',
      price: 'R$ 280,00',
      status: 'Inscrições abertas',
      statusColor: 'bg-green-100 text-green-700',
      icon: '🎯',
    },
  ]

  const cells = [
    { name: 'Célula A Forja', leader: 'João Bolis', instagram: 'celula_aforja_' },
    { name: 'Célula Ekballo', leader: 'Felipe Santana', instagram: 'celulaekballoaprisco' },
    { name: 'Célula Koinonia', leader: 'Maria Silva', instagram: '' },
    { name: 'Célula Ágape', leader: 'Carlos Mendes', instagram: '' },
    { name: 'Célula Shalom', leader: 'Ana Paula', instagram: '' },
    { name: 'Célula Eben-Ezer', leader: 'Roberto Lima', instagram: '' },
  ]

  const galleries = [
    {
      id: '1',
      title: 'Culto de Celebração',
      date: '25/02/2026',
      coverImage: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&h=400&fit=crop',
      albumLink: 'https://photos.google.com/share/exemplo1',
      photoCount: 45,
    },
    {
      id: '2',
      title: 'Batismo nas Águas',
      date: '18/02/2026',
      coverImage: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&h=400&fit=crop',
      albumLink: 'https://photos.google.com/share/exemplo2',
      photoCount: 32,
    },
    {
      id: '3',
      title: 'Ação Social Lechem',
      date: '10/02/2026',
      coverImage: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&fit=crop',
      albumLink: 'https://photos.google.com/share/exemplo3',
      photoCount: 28,
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-500"></div>
        
        <div className="relative container mx-auto px-6 text-center text-white z-10">
          <div className="mb-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/img/logoapriscourbano.webp" 
              alt="Aprisco Urbano"
              className="h-32 md:h-48 w-auto mx-auto drop-shadow-2xl"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            Bem-vindos à nossa
            <span className="block bg-gradient-to-r from-amber-200 via-yellow-300 to-orange-200 bg-clip-text text-transparent">
              comunidade!
            </span>
          </h1>
          
          <p className="text-lg md:text-xl mb-10 text-white/90 max-w-2xl mx-auto leading-relaxed">
            Cada membro, um sacerdote. Cada casa, uma extensão da igreja.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={generateCalendarLink('Culto de Celebração - Aprisco Urbano', formatDateISO(nextSunday), '18:00', CHURCH_ADDRESS)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white hover:text-purple-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 hover:scale-105 shadow-xl"
            >
              <span className="text-2xl">⛪</span>
              <div className="text-left">
                <div className="text-sm opacity-80">Próximo Culto</div>
                <div className="text-lg">Domingo às 18h</div>
              </div>
            </a>
            <a 
              href="#eventos"
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold py-4 px-8 rounded-2xl hover:bg-purple-50 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              <span>📅</span>
              Ver Programação
            </a>
          </div>
        </div>
      </section>

      {/* Missão e Visão Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="text-center md:text-left">
                <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-6">
                  Nossa Missão
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6 leading-tight">
                  Ser igual a Jesus, fazer as mesmas coisas que Ele fez e coisas maiores ainda pelo poder do Espírito Santo.
                </h2>
                <p className="text-lg text-slate-600">
                  <span className="text-purple-600 font-semibold">Salvar</span> •{' '}
                  <span className="text-fuchsia-600 font-semibold">Discipular</span> •{' '}
                  <span className="text-pink-600 font-semibold">Treinar</span> •{' '}
                  <span className="text-orange-500 font-semibold">Sustentar</span>
                  <span className="block mt-2 text-slate-500">através das células</span>
                </p>
              </div>
              <div className="text-center md:text-left">
                <span className="inline-block px-4 py-2 bg-fuchsia-100 text-fuchsia-700 rounded-full text-sm font-semibold mb-6">
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

      {/* Programação Semanal */}
      <section id="eventos" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-2 bg-violet-100 text-violet-700 rounded-full text-sm font-semibold mb-4">
              Programação
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
              Eventos Semanais
            </h2>
            <p className="text-slate-500 mt-2">Clique para adicionar à sua agenda</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {weeklyEvents.map((event, index) => (
              <a
                key={index}
                href={generateCalendarLink(event.name, formatDateISO(event.date), event.time, CHURCH_ADDRESS)}
                target="_blank"
                rel="noopener noreferrer"
                className={`group bg-gradient-to-br ${event.color} rounded-2xl p-6 text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl">{event.icon}</span>
                  <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
                    📅 Agendar
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{event.name}</h3>
                <p className="text-white/80 text-sm mb-4">{event.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold">{event.day}</span>
                  <span className="text-2xl font-bold">{event.time}</span>
                </div>
                <p className="text-white/60 text-xs mt-2">
                  Próximo: {formatDateBR(event.date)}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Eventos Especiais (Pagos) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-4">
              Eventos Especiais
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
              Próximos Eventos
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {paidEvents.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-xl transition-all duration-300 hover:border-purple-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl">{event.icon}</span>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${event.statusColor}`}>
                    {event.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{event.name}</h3>
                <p className="text-slate-500 text-sm mb-4">{event.description}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-400">Data</p>
                    <p className="text-sm font-medium text-slate-700">{event.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-slate-400">Investimento</p>
                    <p className="text-lg font-bold text-purple-600">{event.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Células */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
              Vida em Comunidade
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
              Nossas Células
            </h2>
            <p className="text-slate-500 mt-2">Toda quinta-feira às 19h</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {cells.map((cell, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-5 border border-slate-100 hover:shadow-lg hover:border-emerald-200 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl text-white">🏠</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-slate-800 truncate">{cell.name}</h3>
                    <p className="text-sm text-emerald-600">Líder: {cell.leader}</p>
                    {cell.instagram && (
                      <a 
                        href={`https://instagram.com/${cell.instagram}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-slate-400 hover:text-purple-500 transition-colors"
                      >
                        @{cell.instagram}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <a
              href={generateCalendarLink('Células - Aprisco Urbano', formatDateISO(nextThursday), '19:00', CHURCH_ADDRESS)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
            >
              <span>📅</span>
              Adicionar células à agenda
            </a>
          </div>
        </div>
      </section>

      {/* Ministérios */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-2 bg-fuchsia-100 text-fuchsia-700 rounded-full text-sm font-semibold mb-4">
              Comunidade
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
              Nossos Ministérios
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {ministries.map((ministry, index) => (
              <a
                key={index}
                href={`https://instagram.com/${ministry.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100 hover:border-purple-200 flex flex-col"
              >
                <div className="h-48 relative overflow-hidden flex-shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={ministry.image}
                    alt={ministry.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-slate-800 mb-1 group-hover:text-purple-600 transition-colors">
                    {ministry.name}
                  </h3>
                  <p className="text-slate-500 text-sm mb-3 flex-1">
                    {ministry.description}
                  </p>
                  <p className="text-purple-600 font-medium text-sm mb-4">
                    {ministry.pastors}
                  </p>
                  
                  <div className="flex items-center gap-2 text-sm text-slate-400 group-hover:text-purple-500 transition-colors mt-auto">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span>@{ministry.instagram}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-14">
            <div>
              <span className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4">
                Momentos
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
                Galeria de Fotos
              </h2>
            </div>
            <a 
              href="/admin/galeria"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm text-slate-500 hover:text-purple-600 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Gerenciar fotos
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {galleries.map((gallery) => (
              <a
                key={gallery.id}
                href={gallery.albumLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100"
              >
                <div className="h-52 relative overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={gallery.coverImage} 
                    alt={gallery.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="font-medium">{gallery.photoCount} fotos</span>
                  </div>
                </div>

                <div className="p-5">
                  <div className="text-sm text-purple-600 font-medium mb-1">
                    {gallery.date}
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 group-hover:text-purple-600 transition-colors">
                    {gallery.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-500">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Venha nos visitar!
          </h2>
          <p className="text-xl text-white/80 mb-4 max-w-2xl mx-auto">
            Todo domingo às 18h
          </p>
          <p className="text-white/60 mb-8">
            📍 {CHURCH_ADDRESS}
          </p>
          <a 
            href={generateCalendarLink('Culto de Celebração - Aprisco Urbano', formatDateISO(nextSunday), '18:00', CHURCH_ADDRESS)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold py-4 px-8 rounded-2xl hover:bg-purple-50 transition-all duration-300 hover:scale-105 shadow-xl"
          >
            <span>📅</span>
            Agendar na minha agenda
          </a>
        </div>
      </section>
    </div>
  )
}
