import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Batismo',
  description: 'Saiba mais sobre o batismo nas águas na Igreja Aprisco Urbano',
}

/* ===========================================
   PÁGINA DE BATISMO
   
   Para trocar a imagem de destaque desta página:
   1. Coloque a nova imagem na pasta /public/img/
   2. Altere o caminho na variável heroImage abaixo
   
   Exemplo: const heroImage = '/img/batismo.jpg'
   =========================================== */

const heroImage = 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=1200&h=600&fit=crop'

// Etapas para o batismo
const etapas = [
  {
    numero: '01',
    titulo: 'Aceite Jesus',
    descricao: 'O primeiro passo é aceitar Jesus Cristo como seu Senhor e Salvador pessoal.',
  },
  {
    numero: '02',
    titulo: 'Participe do Curso',
    descricao: 'Participe do curso de batismo para entender o significado e a importância desse passo.',
  },
  {
    numero: '03',
    titulo: 'Seja Batizado',
    descricao: 'Dê esse passo público de fé e declare sua nova vida em Cristo Jesus.',
  },
]

// Significados do batismo
const significados = [
  {
    titulo: 'Morte para o pecado',
    descricao: 'O batismo simboliza a morte da nossa velha natureza pecaminosa.',
  },
  {
    titulo: 'Ressurreição em Cristo',
    descricao: 'Ao sair das águas, simbolizamos nossa nova vida em Jesus Cristo.',
  },
  {
    titulo: 'Identificação com Cristo',
    descricao: 'Nos identificamos publicamente com a morte, sepultamento e ressurreição de Jesus.',
  },
  {
    titulo: 'Obediência à Palavra',
    descricao: 'Seguimos o mandamento de Jesus de sermos batizados em nome do Pai, do Filho e do Espírito Santo.',
  },
]

export default function BatismoPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Batismo</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Um passo de fé e obediência a Jesus Cristo
          </p>
        </div>
      </section>

      {/* O que é o batismo */}
      <section className="section">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h4 className="section-title mb-6">O que é o batismo?</h4>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              O batismo nas águas é um mandamento de Jesus Cristo e uma demonstração pública da nossa fé. Quando somos batizados, declaramos que morremos para o pecado e ressuscitamos para uma nova vida em Cristo.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Não é o batismo que nos salva, mas é um ato de obediência daqueles que já foram salvos pela graça mediante a fé em Jesus Cristo.
            </p>
          </div>
        </div>
      </section>

      {/* Significado */}
      <section className="section bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
              Significado
            </span>
            <h4 className="section-title">O que o batismo representa</h4>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {significados.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-slate-100 hover:border-primary-200 hover:shadow-lg transition-all"
              >
                <h3 className="text-lg font-bold text-slate-800 mb-2">{item.titulo}</h3>
                <p className="text-slate-500 text-sm">{item.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Versículo */}
      <section className="section">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-2xl md:text-3xl font-medium text-slate-700 italic mb-6">
              &ldquo;Portanto, vão e façam discípulos de todas as nações, batizando-os em nome do Pai e do Filho e do Espírito Santo.&rdquo;
            </blockquote>
            <p className="text-primary-600 font-semibold">Mateus 28:19</p>
          </div>
        </div>
      </section>

      {/* Como se preparar */}
      <section className="section bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-2 bg-accent-100 text-accent-700 rounded-full text-sm font-semibold mb-4">
              Próximos Passos
            </span>
            <h4 className="section-title">Como me preparar para o batismo?</h4>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {etapas.map((etapa, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary-600 text-white flex items-center justify-center text-xl font-bold">
                  {etapa.numero}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{etapa.titulo}</h3>
                <p className="text-slate-500">{etapa.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Próximas datas */}
      <section className="section">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h4 className="section-title mb-6">Próximas datas de batismo</h4>
            <div className="bg-primary-50 rounded-2xl p-8 border border-primary-100">
              <p className="text-lg text-slate-600 mb-4">
                As datas de batismo são divulgadas periodicamente.
              </p>
              <p className="text-slate-500">
                Entre em contato conosco para saber quando será o próximo batismo e como você pode participar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Quer ser batizado?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e dê esse passo importante na sua caminhada com Cristo
          </p>
          <a 
            href="/contato"
            className="inline-flex items-center gap-2 bg-white text-primary-700 font-bold py-4 px-8 rounded-2xl hover:bg-primary-50 transition-all duration-300 shadow-xl"
          >
            Quero me Batizar
          </a>
        </div>
      </section>
    </div>
  )
}
