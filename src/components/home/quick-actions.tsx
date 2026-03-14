import { 
  CalendarDaysIcon,
  CameraIcon,
  UserGroupIcon,
  HeartIcon,
  PhoneIcon,
  MapPinIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'

const quickActions = [
  {
    name: 'Ver Eventos',
    description: 'Confira os próximos eventos e participe',
    href: '/eventos',
    icon: CalendarDaysIcon,
    color: 'bg-primary-600',
  },
  {
    name: 'Galeria de Fotos',
    description: 'Reviva os momentos especiais da nossa comunidade',
    href: '/galeria',
    icon: CameraIcon,
    color: 'bg-primary-500',
  },
  {
    name: 'Discipulados',
    description: 'Participe dos grupos de crescimento espiritual',
    href: '/discipulados',
    icon: UserGroupIcon,
    color: 'bg-primary-500',
  },
  {
    name: 'Como Ajudar',
    description: 'Descubra como fazer parte do nosso time',
    href: '/voluntarios',
    icon: HeartIcon,
    color: 'bg-accent-500',
  },
  {
    name: 'Fale Conosco',
    description: 'Entre em contato para mais informações',
    href: '/contato',
    icon: PhoneIcon,
    color: 'bg-primary-500',
  },
  {
    name: 'Como Chegar',
    description: 'Veja nossa localização e direções',
    href: '/localizacao',
    icon: MapPinIcon,
    color: 'bg-primary-700',
  },
]

export default function QuickActions() {
  return (
    <section className="py-16 bg-primary-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4 font-serif">
            Como Podemos <span className="text-gradient">Ajudar?</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore as diferentes maneiras de se envolver e crescer conosco. 
            Cada passo é uma oportunidade de fazer a diferença.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickActions.map((action) => (
            <Link 
              key={action.name}
              href={action.href}
              className="group bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
            >
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <action.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-primary-900 mb-2 group-hover:text-primary-700 transition-colors">
                    {action.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {action.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-700 via-primary-600 to-accent-500 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 font-serif">
              Primeira Vez na Igreja?
            </h3>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Sabemos que visitar uma igreja pela primeira vez pode gerar algumas dúvidas. 
              Queremos que você se sinta em casa desde o primeiro momento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/primeira-visita"
                className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                O Que Esperar
              </Link>
              <Link 
                href="/contato"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                Falar com Alguém
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}