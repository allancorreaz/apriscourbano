import { 
  HeartIcon, 
  UsersIcon, 
  BookOpenIcon, 
  HandRaisedIcon 
} from '@heroicons/react/24/outline'
import Image from 'next/image'

const features = [
  {
    name: 'Comunidade Unida',
    description: 'Uma família espiritual onde cada pessoa é acolhida com amor e cuidado.',
    icon: HeartIcon,
  },
  {
    name: 'Crescimento Espiritual',
    description: 'Programas e discipulados para fortalecer sua caminhada com Deus.',
    icon: BookOpenIcon,
  },
  {
    name: 'Adoração Genuína',
    description: 'Momentos de adoração que tocam o coração e transformam vidas.',
    icon: HandRaisedIcon,
  },
  {
    name: 'Impacto Social',
    description: 'Projetos sociais que levam esperança e transformação para a comunidade.',
    icon: UsersIcon,
  },
]

export default function AboutSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 rounded-full mb-6">
              <HeartIcon className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6 font-serif">
              Nossa <span className="text-gradient">Missão</span>
            </h2>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              A Igreja Aprisco Urbano é uma comunidade vibrante que existe para conectar 
              pessoas a Deus e umas às outras. Acreditamos que cada vida tem propósito 
              e valor, e nosso desejo é ver vidas transformadas pelo amor de Cristo.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature) => (
                <div key={feature.name} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-primary-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-900 mb-1">
                      {feature.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-900 mb-1">10+</div>
                <p className="text-gray-600 text-sm">Anos de Ministério</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-900 mb-1">500+</div>
                <p className="text-gray-600 text-sm">Membros</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-900 mb-1">50+</div>
                <p className="text-gray-600 text-sm">Ministérios</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Main Image */}
              <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1507692049790-de58290a4334?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Comunidade da Igreja Aprisco Urbano"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100 max-w-xs">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary-700 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">AU</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-900">Aprisco Urbano</h4>
                    <p className="text-gray-600 text-sm">Transformando vidas desde 2013</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}