import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contato',
  description: 'Entre em contato com a Igreja Aprisco Urbano',
}

/* ===========================================
   PÁGINA DE CONTATO
   
   Para atualizar as informações de contato,
   edite as variáveis abaixo.
   =========================================== */

// Informações de contato
const endereco = {
  rua: 'Rua Orlando Silva, 9',
  bairro: 'Engenho',
  cidade: 'Itaguaí',
  estado: 'RJ',
  cep: '23812-000',
}

const telefone = '(21) 99999-9999' // Altere para o telefone da igreja
const email = 'contato@apriscourbano.com.br' // Altere para o email da igreja
const instagram = 'apriscourbano'

// Horários de funcionamento
const horarios = [
  { dia: 'Domingo', horario: '17h às 21h' },
  { dia: 'Terça-feira', horario: '18h às 21h' },
  { dia: 'Quinta-feira', horario: '18h às 21h' },
  { dia: 'Sábado', horario: '18h às 21h' },
]

export default function ContatoPage() {
  const enderecoCompleto = `${endereco.rua}, ${endereco.bairro}, ${endereco.cidade} - ${endereco.estado}`
  const whatsappLink = `https://wa.me/55${telefone.replace(/\D/g, '')}`
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(enderecoCompleto)}`

  return (
    <div className="min-h-screen bg-white">
      {/* Hero da página */}
      <section className="page-hero mt-[43px] md:mt-0" style={{
        backgroundImage: "linear-gradient(to bottom, rgba(30, 58, 95, 0.94), rgba(15, 23, 42, 0.97)), url('https://images.unsplash.com/photo-1465101046530-73398c7f0d09?w=1200&h=600&fit=crop')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        <div className="page-hero-content">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contato</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Estamos aqui para ajudá-lo
          </p>
        </div>
      </section>

      {/* Informações de contato */}
      <section className="section">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Informações */}
              <div>
                <h4 className="section-title mb-8">Fale Conosco</h4>
                
                <div className="space-y-6">
                  {/* Endereço */}
                  <a 
                    href={mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 mb-1">Endereço</p>
                      <p className="text-slate-800 font-medium">
                        {endereco.rua}<br />
                        {endereco.bairro}, {endereco.cidade} - {endereco.estado}<br />
                        CEP: {endereco.cep}
                      </p>
                      <p className="text-primary-600 text-sm mt-2 group-hover:underline">
                        Ver no Google Maps
                      </p>
                    </div>
                  </a>
                  
                  {/* WhatsApp (oculto) */}
                  <a 
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors group hidden"
                    style={{ display: 'none' }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 group-hover:bg-green-600 group-hover:text-white transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 mb-1">WhatsApp</p>
                      <p className="text-slate-800 font-medium">{telefone}</p>
                      <p className="text-green-600 text-sm mt-2 group-hover:underline">
                        Enviar mensagem
                      </p>
                    </div>
                  </a>
                  
                  {/* Email */}
                  <a 
                    href={`mailto:${email}`}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 mb-1">E-mail</p>
                      <p className="text-slate-800 font-medium">{email}</p>
                    </div>
                  </a>
                  
                  {/* Instagram */}
                  <a 
                    href={`https://instagram.com/${instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center flex-shrink-0 group-hover:bg-pink-600 group-hover:text-white transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 mb-1">Instagram</p>
                      <p className="text-slate-800 font-medium">@{instagram}</p>
                      <p className="text-pink-600 text-sm mt-2 group-hover:underline">
                        Seguir no Instagram
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              
              {/* Horários */}
              <div>
                <h2 className="section-title mb-8">Horários de Funcionamento</h2>
                
                <div className="bg-slate-50 rounded-2xl p-8">
                  <div className="space-y-4">
                    {horarios.map((item, index) => (
                      <div 
                        key={index}
                        className="flex items-center justify-between py-3 border-b border-slate-200 last:border-0"
                      >
                        <span className="font-medium text-slate-800">{item.dia}</span>
                        <span className="text-slate-600">{item.horario}</span>
                      </div>
                    ))}
                  </div>
                  
                  <p className="text-sm text-slate-500 mt-6">
                    * Os horários podem variar em datas especiais e feriados.
                  </p>
                </div>
                
                {/* Mapa placeholder */}
                <div className="mt-8">
                  <a 
                    href={mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-64 bg-slate-100 rounded-2xl overflow-hidden relative group"
                  >
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-200">
                      <div className="text-center">
                        <svg className="w-12 h-12 mx-auto text-slate-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <p className="text-slate-500">Clique para abrir no Google Maps</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-primary-600/0 group-hover:bg-primary-600/10 transition-colors"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Venha nos visitar
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Estamos de portas abertas para recebê-lo!
          </p>
          <p className="text-white/90 text-lg">
            Todo domingo às 18h
          </p>
        </div>
      </section>
    </div>
  )
}
