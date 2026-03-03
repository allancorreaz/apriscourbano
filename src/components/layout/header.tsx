'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useSession, signOut } from 'next-auth/react'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, UserIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Início', href: '/' },
  { name: 'Cultos', href: '/cultos' },
  { name: 'Eventos', href: '/eventos' },
  { name: 'Discipulados', href: '/discipulados' },
  { name: 'Galeria', href: '/galeria' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const { data: session } = useSession()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Disclosure as="nav" className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      {({ open }) => (
        <>
          <div className="container-custom">
            <div className="relative flex h-16 items-center justify-between">
              {/* Logo */}
              <div className="flex flex-shrink-0 items-center">
                <Link href="/" className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                    {/* Placeholder for logo - replace with actual logo */}
                    <span className="text-white font-bold text-xl">AU</span>
                  </div>
                  <div className="hidden sm:block">
                    <h1 className={`text-xl font-bold font-serif ${
                      scrolled ? 'text-primary-900' : 'text-white'
                    }`}>
                      Aprisco Urbano
                    </h1>
                  </div>
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        scrolled
                          ? 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                          : 'text-white hover:text-gold-300 hover:bg-white/10'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* User Menu & Mobile menu button */}
              <div className="flex items-center space-x-4">
                {/* User Menu */}
                {session?.user ? (
                  <div className="relative">
                    <div className="flex items-center space-x-2">
                      <UserIcon className={`h-5 w-5 ${scrolled ? 'text-gray-700' : 'text-white'}`} />
                      <button
                        onClick={() => signOut()}
                        className={`text-sm ${
                          scrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-gold-300'
                        }`}
                      >
                        Sair
                      </button>
                    </div>
                  </div>
                ) : (
                  <Link
                    href="/auth/login"
                    className={`text-sm font-medium ${
                      scrolled 
                        ? 'text-gray-700 hover:text-primary-600' 
                        : 'text-white hover:text-gold-300'
                    }`}
                  >
                    Admin
                  </Link>
                )}

                {/* Mobile menu button */}
                <div className="md:hidden">
                  <Disclosure.Button className={`inline-flex items-center justify-center rounded-md p-2 ${
                    scrolled
                      ? 'text-gray-700 hover:bg-primary-50 hover:text-primary-600'
                      : 'text-white hover:bg-white/10 hover:text-gold-300'
                  } focus:outline-none focus:ring-2 focus:ring-primary-500`}>
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 bg-white/95 backdrop-blur-md shadow-lg">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}