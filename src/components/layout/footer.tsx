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

{/* ABOUT */}

<div className="space-y-4">

<div className="flex items-center space-x-3">

<div className="w-10 h-10 bg-gold-500 rounded-lg flex items-center justify-center">
<span className="text-[#FFFFFF] font-bold text-lg">AU</span>
</div>

<h3 className="text-xl font-bold font-serif" style={{color:'#FFFFFF'}}>
Aprisco Urbano
</h3>

</div>

<p className="text-[#FFFFFF] text-sm leading-relaxed">
Uma comunidade de fé, esperança e amor no coração da cidade.
Venha fazer parte da nossa família espiritual.
</p>

<div className="flex space-x-4">

{socialLinks.map((social) => (

<Link
key={social.name}
href={social.href}
aria-label={social.name}
className="text-[#FFFFFF] hover:text-gold-300 transition-colors"
>

<SocialIcon name={social.icon} />

</Link>

))}

</div>

</div>

{/* QUICK LINKS */}

<div className="space-y-4">

<h4 className="text-lg font-semibold">
Links Rápidos
</h4>

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

))}

</ul>

</div>

{/* CONTACT */}

<div className="space-y-4">

<h4 className="text-lg font-semibold">
Contato
</h4>

<ul className="space-y-3 text-sm">

<li className="flex items-start space-x-3">

<MapPinIcon className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />

<span className="text-gray-300">

Rua das Alamedas, 123 <br />
Centro, São Paulo - SP <br />
CEP: 01000-000

</span>

</li>

<li className="flex items-center space-x-3">

<PhoneIcon className="w-5 h-5 text-gold-400 flex-shrink-0" />

<span className="text-gray-300">
(11) 99999-9999
</span>

</li>

<li className="flex items-center space-x-3">

<EnvelopeIcon className="w-5 h-5 text-gold-400 flex-shrink-0" />

<span className="text-gray-300">
contato@apriscourbano.com
</span>

</li>

</ul>

</div>

{/* SERVICE TIMES */}

<div className="space-y-4">

<h4 className="text-lg font-semibold">
Horários dos Cultos
</h4>

<ul className="space-y-3 text-sm">

<li className="flex items-start space-x-3">

<ClockIcon className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />

<div className="text-gray-300">

<div className="font-medium">
Domingo
</div>

<div>
09:00 - Culto Matutino
</div>

<div>
18:00 - Culto Vespertino
</div>

</div>

</li>

<li className="flex items-start space-x-3">

<ClockIcon className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />

<div className="text-gray-300">

<div className="font-medium">
Quarta-feira
</div>

<div>
19:30 - Culto de Oração
</div>

</div>

</li>

</ul>

</div>

</div>

{/* BOTTOM BAR */}

<div className="border-t border-[var(--primary-dark)] mt-12 pt-8">

<div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">

<p className="text-gray-300 text-sm">
© 2026 Igreja Aprisco Urbano. Todos os direitos reservados.
</p>

<div className="flex space-x-6 text-sm">

<Link
href="/privacidade"
className="text-gray-300 hover:text-gold-300 transition-colors"
>
Política de Privacidade
</Link>

<Link
href="/termos"
className="text-gray-300 hover:text-gold-300 transition-colors"
>
Termos de Uso
</Link>

</div>

</div>

</div>

</div>

</footer>

)
}

function SocialIcon({ name }: { name: string }) {

const iconClass = "w-4 h-4 fill-current"

switch (name) {

case 'facebook':
return ( <svg className={iconClass} viewBox="0 0 24 24"> <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/> </svg>
)

case 'instagram':
return ( <svg className={iconClass} viewBox="0 0 24 24"> <path d="M12 2.2c3.2 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.65.069 4.81 0 3.159-.011 3.543-.069 4.809-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.65.069-4.85.069-3.2 0-3.584-.011-4.849-.069-3.259-.149-4.771-1.7-4.919-4.919C2.212 15.543 2.2 15.159 2.2 12c0-3.16.012-3.544.07-4.81C2.418 3.9 3.933 2.354 7.188 2.21 8.454 2.152 8.838 2.14 12 2.14z"/> </svg>
)

case 'youtube':
return ( <svg className={iconClass} viewBox="0 0 24 24"> <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"/> </svg>
)

case 'whatsapp':
return ( <svg className={iconClass} viewBox="0 0 24 24"> <path d="M12.04 2C6.58 2 2.16 6.41 2.16 11.86c0 1.89.49 3.73 1.43 5.34L2 22l4.96-1.56a9.82 9.82 0 005.08 1.39h.01c5.46 0 9.88-4.41 9.88-9.86S17.5 2 12.04 2z"/> </svg>
)

default:
return null

}

}
