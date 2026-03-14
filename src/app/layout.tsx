import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Header from '@/components/layout/header'
import { SessionProvider } from '@/components/providers/session-provider'
import logo from '@/app/img/logo.webp'

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
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            
            {/* ===========================================
                FOOTER
                Para alterar informações do rodapé, edite os dados abaixo.
                =========================================== */}
            <footer className="bg-slate-900 text-white py-10 px-4 md:py-16 md:px-6">
              <div className="container mx-auto max-w-6xl">
                {/* Logo e Info Principal */}
                <div className="flex flex-col items-center mb-8 md:mb-12">
                  <Image 
                    src={logo} 
                    alt="Aprisco Urbano" 
                    className="h-24 md:h-28 w-auto object-contain mb-4 md:mb-6"
                  />
                  <p className="text-white text-center max-w-md text-sm md:text-base">
                    Cada membro, um sacerdote. Cada casa, uma extensão da igreja.
                  </p>
                </div>

                {/* Grid de Informações - Mobile: stack vertical, Desktop: grid */}
                <div className="flex flex-col gap-8 md:grid md:grid-cols-3 md:gap-12 xl:gap-20 mb-8 md:mb-12 items-center md:items-start">
                  {/* Missão */}
                  <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <h3 className="text-lg font-bold mb-4 text-white self-center md:self-start">Nossa Missão</h3>
                    <p className="text-white text-sm leading-relaxed">
                      Ser igual a Jesus, fazer as mesmas coisas que Ele fez e coisas maiores ainda pelo poder do Espírito Santo. Salvar, discipular, treinar e sustentar através das células.
                    </p>
                  </div>

                  {/* Programação */}
                  <div className="flex flex-col items-center">
                    <h3 className="text-lg font-bold mb-4 text-white self-center">Programação</h3>
                    <ul className="text-white text-sm space-y-2 w-full">
                      <li className="flex flex-row justify-between w-full">
                        <span>Culto</span>
                        <span>Dom 18h</span>
                      </li>
                      <li className="flex flex-row justify-between w-full">
                        <span>Discipulado Ative+ Teens</span>
                        <span>Qua 19h</span>
                      </li>
                      <li className="flex flex-row justify-between w-full">
                        <span>Células</span>
                        <span>Qui 19h</span>
                      </li>
                      <li className="flex flex-row justify-between w-full">
                        <span>Discipulado Ative+ Juventude</span> 
                        <span>Sex 20h</span>
                      </li>
                    </ul>
                  </div>

                  {/* Endereço e Contato */}
                  <div className="flex flex-col items-center md:items-end text-center md:text-right">
                    <h3 className="text-lg font-bold mb-4 text-white self-center md:self-end">Localização</h3>
                    <p className="text-white text-sm mb-4">
                      Rua Orlando Silva, 9<br />
                      Engenho, Itaguaí - RJ
                    </p>
                    <div className="flex items-center gap-2 justify-center md:justify-end">
                      <a 
                        href="https://instagram.com/apriscourbano" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white hover:text-white/80 transition-colors"
                        aria-label="Instagram"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                        <span className="text-sm font-medium underline">apriscourbano</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-800 pt-6 md:pt-8 text-center text-slate-500 text-xs md:text-sm">
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