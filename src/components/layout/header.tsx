'use client'

import Link from 'next/link'

/* ===========================================
   HEADER - MENU DE NAVEGAÇÃO
   
   Para alterar os itens do menu, edite o array 'navigation' abaixo.
   Cada item possui:
   - name: texto exibido no menu
   - href: caminho da página
=========================================== */

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Eventos', href: '/eventos' },
  { name: 'Ministérios', href: '/ministerios' },
  { name: 'Células', href: '/celulas' },
  { name: 'Batismo', href: '/batismo' },
  { name: 'Ofertas', href: '/ofertas' },
  { name: 'Contato', href: '/contato' },
]

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[var(--primary-dark)] via-[var(--primary-blue)] to-[var(--primary-light)] shadow-lg">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/img/logoapriscourbano.webp"
            alt="Aprisco Urbano"
            className="h-12 md:h-16 w-auto object-contain"
            style={{ maxWidth: '180px', minWidth: '48px' }}
          />
        </Link>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex items-center gap-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-4 py-2 rounded-lg text-base font-semibold text-white hover:bg-[var(--primary-mid)] transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

      </div>
    </header>
  )
}