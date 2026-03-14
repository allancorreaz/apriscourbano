'use client'

import Link from 'next/link'
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  ClockIcon
} from '@heroicons/react/24/outline'

const socialLinks = [
  { name: 'Facebook', href: '#', icon: 'facebook' },
  { name: 'Instagram', href: '#', icon: 'instagram' },
  { name: 'YouTube', href: '#', icon: 'youtube' },
  { name: 'WhatsApp', href: '#', icon: 'whatsapp' },
]

const quickLinks = [
  { name: 'Início', href: '/' },
  { name: 'Cultos', href: '/cultos' },
  { name: 'Eventos', href: '/eventos' },
  { name: 'Discipulados', href: '/discipulados' },
  { name: 'Galeria', href: '/galeria' },
]

export default function Footer() {
  return (
    <footer className="bg-[var(--primary-blue)] text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gold-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">AU</span>
              </div>
              <h3 className="text-xl font-bold font-serif text-white">Aprisco Urbano</h3> {/* cor branca */}
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Uma comunidade de fé, esperança e amor no coração da cidade. 
              Venha fazer parte da nossa família espiritual.
            </p>
                    <div className="space-y-4">
            {/* Social Links */}
            <div className="flex space-x-4">
                          <span className="text-white font-bold text-lg">AU</span>
                <Link
                        <h3 className="text-xl font-bold font-serif" style={{ color: '#FFFFFF' }}>Aprisco Urbano</h3>
                  href={social.href}
                      <p style={{ color: '#FFFFFF' }} className="text-sm leading-relaxed">
                  aria-label={social.name}
                >
                  <SocialIcon name={social.icon} />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Links Rápidos</h4> {/* cor branca */}
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 text-sm hover:text-gold-300 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
                      <h4 className="text-lg font-semibold" style={{ color: '#FFFFFF' }}>Links Rápidos</h4>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contato</h4> {/* cor branca */}
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPinIcon className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  Rua das Alamedas, 123<br />
                  Centro, São Paulo - SP<br />
                  CEP: 01000-000
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <PhoneIcon className="w-5 h-5 text-gold-400 flex-shrink-0" />
                      <h4 className="text-lg font-semibold" style={{ color: '#FFFFFF' }}>Contato</h4>
              </li>
              <li className="flex items-center space-x-3">
                <EnvelopeIcon className="w-5 h-5 text-gold-400 flex-shrink-0" />
                          <span style={{ color: '#FFFFFF' }}>
              </li>
            </ul>
          </div>

          {/* Service Times */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Horários dos Cultos</h4> {/* cor branca */}
                          <span style={{ color: '#FFFFFF' }}>(11) 99999-9999</span>
              <li className="flex items-start space-x-3">
                <ClockIcon className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                <div className="text-gray-300">
                          <span style={{ color: '#FFFFFF' }}>contato@apriscourbano.com</span>
                  <div>09:00 - Culto Matutino</div>
                  <div>18:00 - Culto Vespertino</div>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <ClockIcon className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                <div className="text-gray-300">
                  <div className="font-medium">Quarta-feira</div>
                  <div>19:30 - Culto de Oração</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[var(--primary-dark)] mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-300 text-sm">{/* copyright mantido */}
              © 2024 Aprisco Urbano. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacidade" className="text-gray-300 hover:text-gold-300 transition-colors">
                Política de Privacidade
              </Link>
              <Link href="/termos" className="text-gray-300 hover:text-gold-300 transition-colors">
                Termos de Uso
              </Link>
            </div>
          </div>
                      <p className="text-white text-sm">
                        © 2026 Igreja Aprisco Urbano. Todos os direitos reservados.
    </footer>
  )
}

function SocialIcon({ name }: { name: string }) {
  const iconClass = "w-4 h-4 fill-current"
  
  switch (name) {
    case 'facebook':
      return (
        <svg className={iconClass} viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    case 'instagram':
      return (
        <svg className={iconClass} viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.252 14.814 3.762 13.663 3.762 12.366s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718 0c-1.297 0-2.448-.49-3.323-1.297-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297z"/>
        </svg>
      )
    case 'youtube':
      return (
        <svg className={iconClass} viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    case 'whatsapp':
      return (
        <svg className={iconClass} viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
        </svg>
      )
    default:
      return null
  }
}