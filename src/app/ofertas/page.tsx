import type { Metadata } from 'next'
import CopyButton from '@/components/ui/copy-button'

export const metadata: Metadata = {
  title: 'Ofertas',
  description: 'Contribua com a Igreja Aprisco Urbano - Ofertas e Dízimos',
}

/* ===========================================
   PÁGINA DE OFERTAS
   
   Para atualizar as informações de PIX:
   1. Altere a chave PIX na variável chavePix abaixo
   2. Para adicionar QR Code, coloque a imagem em /public/img/
      e descomente a seção de QR Code no código
   =========================================== */

// Chave PIX da igreja
const chavePix = 'igrejaapriscourbano@gmail.com'

// Nome do titular
const nomeTitular = 'Igreja Evangélica Aprisco Urbano'

// Banco
const banco = 'Sicoob'

export default function OfertasPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Banner principal com imagem de fundo */}
      {/* HERO BANNER DA PÁGINA OFERTAS */}
      <section
        className="relative w-full h-[260px] md:h-[400px] flex items-center justify-center mb-8"
        style={{
          backgroundImage: "url('/img/aprisco_urbano_4k-copia.jpg')", // Caminho correto para imagem
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center">
          {/* Título do banner sempre branco */}
          <h1 className="text-4xl md:text-5xl font-bold" style={{ color: '#FFFFFF', textShadow: '0 2px 8px #000' }}>Ofertas</h1>
        </div>
      </section>

      {/* Introdução */}
      <section className="section">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title mb-6">Por que contribuir?</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              A contribuição é um ato de adoração e gratidão a Deus. Através dos dízimos e ofertas, sustentamos a obra do Senhor, mantemos nossas atividades e alcançamos mais vidas para Cristo.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Sua contribuição faz a diferença! Cada oferta é usada com responsabilidade e transparência para o avanço do Reino de Deus.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Dízimo protege seus bens (Malaquias 3:10) e ofertas são sementes para colheitas futuras (2 Coríntios 9:6-7).
            </p>
          </div>
        </div>
      </section>

      {/* Versículo */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-xl md:text-2xl font-medium text-slate-700 italic mb-6">
              &ldquo;Cada um dê conforme determinou em seu coração, não com pesar ou por obrigação, pois Deus ama quem dá com alegria.&rdquo;
            </blockquote>
            <p className="text-primary-600 font-semibold">2 Coríntios 9:7</p>
          </div>
        </div>
      </section>

      {/* PIX */}
      <section className="section">
        <div className="container mx-auto px-6">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
                Contribuição via PIX
              </span>
              <h2 className="section-title">Faça sua contribuição</h2>
            </div>
            
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
              {/* Informações do PIX */}
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-slate-500 mb-1">Chave PIX</p>
                  <div className="flex items-center gap-3">
                    <p className="text-lg font-semibold text-slate-800 flex-1 break-all">
                      {chavePix}
                    </p>
                    <CopyButton text={chavePix} title="Copiar chave PIX" />
                  </div>
                </div>
                
                <hr className="border-slate-100" />
                
                <div>
                  <p className="text-sm text-slate-500 mb-1">Nome do titular</p>
                  <p className="text-lg font-semibold text-slate-800">{nomeTitular}</p>
                </div>
                
                <div>
                  <p className="text-sm text-slate-500 mb-1">Banco</p>
                  <p className="text-lg font-semibold text-slate-800">{banco}</p>
                </div>
              </div>
              
              {/* ===========================================
                  QR CODE
                  
                  Para adicionar o QR Code:
                  1. Gere o QR Code do PIX
                  2. Salve a imagem em /public/img/qrcode-pix.png
                  3. Descomente o bloco abaixo
                  =========================================== */}
              {/*
              <div className="mt-8 pt-8 border-t border-slate-100 text-center">
                <p className="text-sm text-slate-500 mb-4">Ou escaneie o QR Code</p>
                <img 
                  src="/img/qrcode-pix.png" 
                  alt="QR Code PIX"
                  className="w-48 h-48 mx-auto"
                />
              </div>
              */}
            </div>
            
            <p className="text-center text-slate-500 text-sm mt-6">
              Após realizar sua contribuição, você pode enviar o comprovante para a secretaria da igreja.
            </p>
          </div>
        </div>
      </section>

      {/* Outras formas */}
      <section className="section bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title mb-6">Outras formas de contribuir</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 border border-slate-100">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">Presencialmente</h3>
                <p className="text-slate-500 text-sm">
                  Durante os cultos, você pode contribuir através das ofertas e dízimos coletados.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 border border-slate-100">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">Transferência Bancária</h3>
                <p className="text-slate-500 text-sm">
                  Entre em contato com a secretaria para obter os dados bancários para transferência.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Dúvidas sobre contribuição?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Entre em contato com nossa secretaria
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
