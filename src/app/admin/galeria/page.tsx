'use client'

import { useState } from 'react'

interface GalleryItem {
  id: string
  title: string
  date: string
  coverImage: string
  albumLink: string
  photoCount: number
}

export default function AdminGaleriaPage() {
  const [galleries, setGalleries] = useState<GalleryItem[]>([
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
  ])

  const [showModal, setShowModal] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    coverImage: '',
    albumLink: '',
    photoCount: 0,
  })

  const resetForm = () => {
    setFormData({
      title: '',
      date: '',
      coverImage: '',
      albumLink: '',
      photoCount: 0,
    })
    setEditingId(null)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (editingId) {
      setGalleries(galleries.map(g => 
        g.id === editingId ? { ...formData, id: editingId } : g
      ))
    } else {
      const newGallery: GalleryItem = {
        ...formData,
        id: Date.now().toString(),
      }
      setGalleries([newGallery, ...galleries])
    }
    
    setShowModal(false)
    resetForm()
  }

  const handleEdit = (gallery: GalleryItem) => {
    setFormData({
      title: gallery.title,
      date: gallery.date,
      coverImage: gallery.coverImage,
      albumLink: gallery.albumLink,
      photoCount: gallery.photoCount,
    })
    setEditingId(gallery.id)
    setShowModal(true)
  }

  const handleDelete = (id: string) => {
    if (confirm('Tem certeza que deseja excluir este álbum?')) {
      setGalleries(galleries.filter(g => g.id !== id))
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <a href="/" className="text-purple-600 hover:text-purple-700 text-sm font-medium mb-2 inline-flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Voltar ao site
            </a>
            <h1 className="text-3xl font-bold text-slate-800">
              Gerenciar Galeria
            </h1>
            <p className="text-slate-500 mt-1">
              Adicione álbuns de fotos para exibir no site
            </p>
          </div>
          <button
            onClick={() => { resetForm(); setShowModal(true) }}
            className="mt-4 md:mt-0 inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Novo Álbum
          </button>
        </div>

        {/* Info Box */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8">
          <div className="flex items-start gap-3">
            <span className="text-2xl">💡</span>
            <div>
              <h3 className="font-semibold text-amber-800">Como funciona:</h3>
              <p className="text-amber-700 text-sm mt-1">
                1. Faça upload das fotos em um serviço como Google Photos ou Google Drive<br/>
                2. Crie um link de compartilhamento público<br/>
                3. Adicione o álbum aqui com o link, uma foto de capa e quantidade de fotos
              </p>
            </div>
          </div>
        </div>

        {/* Gallery List */}
        <div className="space-y-4">
          {galleries.map((gallery) => (
            <div key={gallery.id} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="flex flex-col md:flex-row">
                {/* Thumbnail */}
                <div className="w-full md:w-48 h-32 md:h-auto flex-shrink-0">
                  <img 
                    src={gallery.coverImage} 
                    alt={gallery.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Info */}
                <div className="flex-1 p-4 flex flex-col justify-between">
                  <div>
                    <div className="text-sm text-purple-600 font-medium mb-1">
                      {gallery.date}
                    </div>
                    <h3 className="text-lg font-bold text-slate-800">
                      {gallery.title}
                    </h3>
                    <p className="text-slate-500 text-sm mt-1">
                      {gallery.photoCount} fotos
                    </p>
                    <a 
                      href={gallery.albumLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-700 text-sm mt-2 inline-flex items-center gap-1"
                    >
                      Ver álbum
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
                
                {/* Actions */}
                <div className="flex md:flex-col gap-2 p-4 border-t md:border-t-0 md:border-l border-slate-100">
                  <button
                    onClick={() => handleEdit(gallery)}
                    className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-4 py-2 text-sm text-slate-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    Editar
                  </button>
                  <button
                    onClick={() => handleDelete(gallery.id)}
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
        </div>

        {galleries.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl border border-slate-100">
            <span className="text-4xl mb-4 block">📷</span>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">
              Nenhum álbum cadastrado
            </h3>
            <p className="text-slate-500">
              Clique em &quot;Novo Álbum&quot; para adicionar seu primeiro álbum de fotos
            </p>
          </div>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-bold text-slate-800 mb-6">
              {editingId ? 'Editar Álbum' : 'Novo Álbum'}
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Título do Álbum
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                  placeholder="Ex: Culto de Celebração"
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Data
                </label>
                <input
                  type="text"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  required
                  placeholder="Ex: 25/02/2026"
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Imagem de Capa (URL)
                </label>
                <input
                  type="url"
                  value={formData.coverImage}
                  onChange={(e) => setFormData({ ...formData, coverImage: e.target.value })}
                  required
                  placeholder="https://..."
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                {formData.coverImage && (
                  <div className="mt-2 rounded-xl overflow-hidden h-32">
                    <img 
                      src={formData.coverImage} 
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

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Link do Álbum (Google Photos, Drive, etc.)
                </label>
                <input
                  type="url"
                  value={formData.albumLink}
                  onChange={(e) => setFormData({ ...formData, albumLink: e.target.value })}
                  required
                  placeholder="https://photos.google.com/share/..."
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Quantidade de Fotos
                </label>
                <input
                  type="number"
                  value={formData.photoCount}
                  onChange={(e) => setFormData({ ...formData, photoCount: parseInt(e.target.value) || 0 })}
                  required
                  min="1"
                  placeholder="45"
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => { setShowModal(false); resetForm() }}
                  className="flex-1 py-3 border border-slate-200 rounded-xl font-medium text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-medium transition-colors"
                >
                  {editingId ? 'Salvar' : 'Adicionar'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
