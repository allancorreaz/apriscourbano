'use client'

import { useState } from 'react'
import Link from 'next/link'

/* ===========================================
   PAINEL ADMINISTRATIVO - GERENCIAR EVENTOS
   
   Este painel permite gerenciar os eventos da igreja.
   
   IMPORTANTE: Este é um protótipo frontend.
   Para persistir os dados, conecte ao banco de dados.
   =========================================== */

interface Evento {
  id: string
  titulo: string
  descricao: string
  data: string
  horario: string
  local: string
  status: 'aberto' | 'encerrado'
  imagem: string
}

// Eventos iniciais (mock data)
const eventosIniciais: Evento[] = [
  {
    id: '1',
    titulo: 'Seminário Bíblico da Fé',
    descricao: 'Estudo aprofundado das Escrituras para fortalecer sua fé.',
    data: 'Todo 1º sábado do mês',
    horario: '15h',
    local: 'Igreja Aprisco Urbano',
    status: 'encerrado',
    imagem: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=600&h=400&fit=crop',
  },
  {
    id: '2',
    titulo: 'Encontro com Deus',
    descricao: 'Um fim de semana de imersão na presença de Deus.',
    data: '15-17 de Março, 2026',
    horario: 'Sexta 19h',
    local: 'A definir',
    status: 'encerrado',
    imagem: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?w=600&h=400&fit=crop',
  },
]

export default function AdminEventosPage() {
  const [eventos, setEventos] = useState<Evento[]>(eventosIniciais)
  const [modalAberto, setModalAberto] = useState(false)
  const [eventoEditando, setEventoEditando] = useState<Evento | null>(null)
  const [formData, setFormData] = useState<Omit<Evento, 'id'>>({
    titulo: '',
    descricao: '',
    data: '',
    horario: '',
    local: 'Igreja Aprisco Urbano',
    status: 'aberto',
    imagem: '',
  })

  const abrirModal = (evento?: Evento) => {
    if (evento) {
      setEventoEditando(evento)
      setFormData({
        titulo: evento.titulo,
        descricao: evento.descricao,
        data: evento.data,
        horario: evento.horario,
        local: evento.local,
        status: evento.status,
        imagem: evento.imagem,
      })
    } else {
      setEventoEditando(null)
      setFormData({
        titulo: '',
        descricao: '',
        data: '',
        horario: '',
        local: 'Igreja Aprisco Urbano',
        status: 'aberto',
        imagem: '',
      })
    }
    setModalAberto(true)
  }

  const fecharModal = () => {
    setModalAberto(false)
    setEventoEditando(null)
  }

  const salvarEvento = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (eventoEditando) {
      // Editar evento existente
      setEventos(eventos.map(ev => 
        ev.id === eventoEditando.id 
          ? { ...formData, id: eventoEditando.id }
          : ev
      ))
    } else {
      // Criar novo evento
      const novoEvento: Evento = {
        ...formData,
        id: Date.now().toString(),
      }
      setEventos([novoEvento, ...eventos])
    }
    
    fecharModal()
  }

  const excluirEvento = (id: string) => {
    if (confirm('Tem certeza que deseja excluir este evento?')) {
      setEventos(eventos.filter(ev => ev.id !== id))
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-12">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <Link 
              href="/"
              className="text-primary-600 hover:text-primary-700 text-sm font-medium mb-2 inline-flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Voltar ao site
            </Link>
            <h1 className="text-3xl font-bold text-slate-800">
              Gerenciar Eventos
            </h1>
            <p className="text-slate-500 mt-1">
              Adicione, edite ou remova eventos da igreja
            </p>
          </div>
          <button
            onClick={() => abrirModal()}
            className="mt-4 md:mt-0 btn-primary"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Novo Evento
          </button>
        </div>

        {/* Info Box */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h3 className="font-semibold text-blue-800">Como usar</h3>
              <p className="text-blue-700 text-sm mt-1">
                Clique em &quot;Novo Evento&quot; para adicionar um evento. Você pode editar ou excluir eventos existentes usando os botões de ação.
                Os eventos aparecerão automaticamente na página de Eventos do site.
              </p>
            </div>
          </div>
        </div>

        {/* Lista de Eventos */}
        <div className="space-y-4">
          {eventos.map((evento) => (
            <div 
              key={evento.id} 
              className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">
                {/* Imagem */}
                {evento.imagem && (
                  <div className="w-full md:w-48 h-32 md:h-auto flex-shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={evento.imagem} 
                      alt={evento.titulo}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                
                {/* Informações */}
                <div className="flex-1 p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className={`inline-block px-2 py-1 rounded text-xs font-semibold mb-2 ${
                        evento.status === 'aberto' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-red-100 text-red-700'
                      }`}>
                        {evento.status === 'aberto' ? 'Inscrições abertas' : 'Inscrições encerradas'}
                      </span>
                      <h3 className="text-lg font-bold text-slate-800">
                        {evento.titulo}
                      </h3>
                      <p className="text-slate-500 text-sm mt-1">
                        {evento.descricao}
                      </p>
                      <div className="flex flex-wrap gap-4 mt-3 text-sm text-slate-600">
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {evento.data}
                        </span>
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {evento.horario}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Ações */}
                <div className="flex md:flex-col gap-2 p-4 border-t md:border-t-0 md:border-l border-slate-100">
                  <button
                    onClick={() => abrirModal(evento)}
                    className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-4 py-2 text-sm text-slate-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    Editar
                  </button>
                  <button
                    onClick={() => excluirEvento(evento.id)}
                    className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-4 py-2 text-sm text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                    Excluir
                  </button>
                </div>
              </div>
            </div>
          ))}
          
          {eventos.length === 0 && (
            <div className="text-center py-12 bg-white rounded-xl border border-slate-100">
              <svg className="w-12 h-12 mx-auto text-slate-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                Nenhum evento cadastrado
              </h3>
              <p className="text-slate-500">
                Clique em &quot;Novo Evento&quot; para adicionar seu primeiro evento
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {modalAberto && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-bold text-slate-800 mb-6">
              {eventoEditando ? 'Editar Evento' : 'Novo Evento'}
            </h2>
            
            <form onSubmit={salvarEvento} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Título do Evento *
                </label>
                <input
                  type="text"
                  value={formData.titulo}
                  onChange={(e) => setFormData({ ...formData, titulo: e.target.value })}
                  required
                  placeholder="Ex: Conferência de Jovens"
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Descrição *
                </label>
                <textarea
                  value={formData.descricao}
                  onChange={(e) => setFormData({ ...formData, descricao: e.target.value })}
                  required
                  rows={3}
                  placeholder="Descreva o evento..."
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Data *
                  </label>
                  <input
                    type="text"
                    value={formData.data}
                    onChange={(e) => setFormData({ ...formData, data: e.target.value })}
                    required
                    placeholder="Ex: 15 de Março"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Horário *
                  </label>
                  <input
                    type="text"
                    value={formData.horario}
                    onChange={(e) => setFormData({ ...formData, horario: e.target.value })}
                    required
                    placeholder="Ex: 19h"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Local *
                </label>
                <input
                  type="text"
                  value={formData.local}
                  onChange={(e) => setFormData({ ...formData, local: e.target.value })}
                  required
                  placeholder="Ex: Igreja Aprisco Urbano"
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Status das Inscrições
                </label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value as 'aberto' | 'encerrado' })}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="aberto">Inscrições abertas</option>
                  <option value="encerrado">Inscrições encerradas</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  URL da Imagem (opcional)
                </label>
                <input
                  type="url"
                  value={formData.imagem}
                  onChange={(e) => setFormData({ ...formData, imagem: e.target.value })}
                  placeholder="https://exemplo.com/imagem.jpg"
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <p className="text-xs text-slate-500 mt-1">
                  Cole a URL de uma imagem da internet ou deixe em branco
                </p>
                
                {formData.imagem && (
                  <div className="mt-2 rounded-xl overflow-hidden h-32">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={formData.imagem} 
                      alt="Preview" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                      }}
                    />
                  </div>
                )}
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={fecharModal}
                  className="flex-1 px-4 py-3 border border-slate-200 text-slate-700 rounded-xl hover:bg-slate-50 transition-colors font-medium"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="flex-1 btn-primary"
                >
                  {eventoEditando ? 'Salvar Alterações' : 'Criar Evento'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
