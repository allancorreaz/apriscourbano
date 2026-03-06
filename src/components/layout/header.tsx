'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useSession, signOut } from 'next-auth/react'
import { usePathname } from 'next/navigation'

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
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { data: session } = useSession()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Fecha o menu mobile ao mudar de página
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <header 
      className={`w-full z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? 'bg-white shadow-md' 
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex h-18 items-center justify-between border-b bg-gradient-to-r from-orange-400 via-red-300 to-blue-400">
          {/* Logo substitui texto */}
          <Link href="/" className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/img/logoapriscourbano.webp" 
              alt="Aprisco Urbano" 
              className="h-14 md:h-18 w-auto object-contain"
              style={{ maxWidth: '180px', minWidth: '48px' }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'bg-primary-100 text-primary-700'
                    : 'text-slate-600 hover:text-primary-600 hover:bg-slate-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* User Menu & Mobile button */}
          <div className="flex items-center gap-4">
            {/* Admin Link (só aparece para usuários logados) */}
            {session?.user && (
              <Link
                href="/admin/eventos"
                className="hidden md:flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-700"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Painel Admin
              </Link>
            )}

            {/* Auth button */}
            {session?.user ? (
              <button
                onClick={() => signOut()}
                className="hidden md:block text-sm text-slate-500 hover:text-slate-700"
              >
                Sair
              </button>
            ) : (
              <Link
                href="/auth/login"
                className="hidden md:block text-sm text-slate-500 hover:text-slate-700"
              >
                Login
              </Link>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-neutral-700 hover:bg-neutral-100 border border-neutral-200"
              aria-label="Menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100">
          <nav className="container mx-auto px-6 py-4 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-4 py-3 rounded-lg text-base font-semibold transition-colors ${
                  isActive(item.href)
                    ? 'bg-neutral-100 text-neutral-900 border border-neutral-200'
                    : 'text-neutral-700 hover:bg-neutral-50 border border-transparent'
                } font-montserrat`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Admin link no mobile */}
            {session?.user && (
              <>
                <hr className="my-2 border-neutral-200" />
                <Link
                  href="/admin/eventos"
                  className="block px-4 py-3 rounded-lg text-base font-semibold text-neutral-900 font-montserrat"
                >
                  Painel Admin
                </Link>
                <button
                  onClick={() => signOut()}
                  className="block w-full text-left px-4 py-3 rounded-lg text-base font-medium text-neutral-500 font-montserrat"
                >
                  Sair
                </button>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  )
}