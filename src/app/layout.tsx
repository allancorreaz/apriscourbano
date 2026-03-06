import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/layout/header'
import { SessionProvider } from '@/components/providers/session-provider'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'Aprisco Urbano - Igreja',
    template: '%s | Aprisco Urbano'
  },
  description: 'Igreja Aprisco Urbano - Cada membro, um sacerdote. Cada casa, uma extensão da igreja.',
  keywords: ['igreja', 'aprisco urbano', 'cultos', 'eventos', 'comunidade', 'fé'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="bg-white font-sans antialiased">
        <SessionProvider>
          {/* Compensação do header fixo */}
          <div className="min-h-screen flex flex-col pt-[72px] md:pt-[72px]">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            
            {/* ===========================================
                FOOTER
                Para alterar informações do rodapé, edite os dados abaixo.
                =========================================== */}
            <footer className="bg-slate-900 text-white py-16 px-6">
              <div className="container mx-auto max-w-6xl">
                {/* Logo e Info Principal */}
                <div className="flex flex-col items-center mb-12">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src="/img/logoapriscourbano.webp" 
                    alt="Aprisco Urbano" 
                    className="h-20 md:h-28 w-auto object-contain mb-6"
                    style={{ maxWidth: '180px', minWidth: '64px' }}
                  />
                  <p className="text-slate-400 text-center max-w-md">
                    Cada membro, um sacerdote. Cada casa, uma extensão da igreja.
                  </p>
                </div>

                {/* Grid de Informações */}
                <div className="grid md:grid-cols-3 gap-10 mb-12">
                  {/* Missão */}
                  <div>
                    <h3 className="text-lg font-bold mb-4 text-primary-400">Nossa Missão</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Ser igual a Jesus, fazer as mesmas coisas que Ele fez e coisas maiores ainda pelo poder do Espírito Santo. Salvar, discipular, treinar e sustentar através das células.
                    </p>
                  </div>

                  {/* Programação */}
                  <div>
                    <h3 className="text-lg font-bold mb-4 text-primary-400">Programação</h3>
                    <ul className="text-slate-400 text-sm space-y-2">
                      <li className="flex justify-between">
                        <span>Culto</span>
                        <span>Dom 18h</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Discipulado Ative+ Teens</span>
                        <span>Quarta 19h</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Células</span>
                        <span>Qui 19h</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Discip. Ative+ Juventude</span>
                        <span>Sex 20h</span>
                      </li>
                    </ul>
                  </div>

                  {/* Endereço e Contato */}
                  <div>
                    <h3 className="text-lg font-bold mb-4 text-primary-400">Localização</h3>
                    <p className="text-slate-400 text-sm mb-4">
                      Rua Orlando Silva, 9<br />
                      Engenho, Itaguaí - RJ
                    </p>
                    <div className="flex items-center gap-4">
                      <a 
                        href="https://instagram.com/igrejaapriscourbano" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white transition-colors"
                        aria-label="Instagram"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
                  © 2026 Igreja Aprisco Urbano. Todos os direitos reservados.
                </div>
              </div>
            </footer>
          </div>
        </SessionProvider>
      </body>
    </html>
  )
}