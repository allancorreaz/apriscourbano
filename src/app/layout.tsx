import  "./globals.css"
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
                    className="h-16 md:h-28 w-auto object-contain mb-4 md:mb-6"
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
                      <li className="flex flex-col md:flex-row md:justify-between w-full">
                        <span>Culto</span>
                        <span>Dom 18h</span>
                      </li>
                      <li className="flex flex-col md:flex-row md:justify-between w-full">
                        <span>Discipulado Ative+ Teens</span>
                        <span>Qua 19h</span>
                      </li>
                      <li className="flex flex-col md:flex-row md:justify-between w-full">
                        <span>Células</span>
                        <span>Qui 19h</span>
                      </li>
                      <li className="flex flex-col md:flex-row md:justify-between w-full">
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
                        href="https://instagram.com/igrejaapriscourbano" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white hover:text-white/80 transition-colors"
                        aria-label="Instagram"
                      >
                        <img src="/app/img/instagram-svgrepo-com.svg" alt="Instagram" className="w-6 h-6" />
                        <span className="text-sm font-medium">apriscourbano</span>
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