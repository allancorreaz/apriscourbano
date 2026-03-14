import { CalendarDaysIcon, ClockIcon, MapPinIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface ServiceTime {
  id: string
  dayOfWeek: number
  time: string
  name: string
  description: string
  isActive: boolean
}

interface NextServiceProps {
  service: ServiceTime | null
}

export default function NextService({ service }: NextServiceProps) {
  if (!service) {
    return null
  }

  const getNextServiceDate = (dayOfWeek: number) => {
    const today = new Date()
    const currentDay = today.getDay()
    const daysUntilService = (dayOfWeek - currentDay + 7) % 7
    const nextServiceDate = new Date(today)
    nextServiceDate.setDate(today.getDate() + (daysUntilService === 0 ? 7 : daysUntilService))
    return nextServiceDate
  }

  const nextServiceDate = getNextServiceDate(service.dayOfWeek)
  const daysOfWeek = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']

  return (
    <section className="py-16 bg-gradient-to-r from-primary-50 via-primary-100 to-accent-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 rounded-full mb-6">
            <CalendarDaysIcon className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4 font-serif">
            Próximo Culto
          </h2>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              {/* Service Info */}
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-primary-900 mb-2">
                  {service.name}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Date & Time */}
              <div className="space-y-4">
                <div className="flex items-center justify-center md:justify-start space-x-3">
                  <CalendarDaysIcon className="w-6 h-6 text-accent-500" />
                  <div className="text-left">
                    <p className="font-semibold text-primary-900">
                      {daysOfWeek[service.dayOfWeek]}
                    </p>
                    <p className="text-gray-600">
                      {format(nextServiceDate, "d 'de' MMMM", { locale: ptBR })}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center justify-center md:justify-start space-x-3">
                  <ClockIcon className="w-6 h-6 text-accent-500" />
                  <div className="text-left">
                    <p className="font-semibold text-primary-900">
                      {service.time}
                    </p>
                    <p className="text-gray-600">Horário de Brasília</p>
                  </div>
                </div>

                <div className="flex items-center justify-center md:justify-start space-x-3">
                  <MapPinIcon className="w-6 h-6 text-accent-500" />
                  <div className="text-left">
                    <p className="font-semibold text-primary-900">
                      Igreja Aprisco Urbano
                    </p>
                    <p className="text-gray-600">Rua das Alamedas, 123</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <div className="bg-accent-50 rounded-xl p-6 mb-6 border border-accent-200">
                  <div className="text-4xl font-bold text-accent-600 mb-1">
                    {Math.ceil((nextServiceDate.getTime() - Date.now()) / (1000 * 60 * 60 * 24))}
                  </div>
                  <p className="text-accent-700 font-medium">
                    {Math.ceil((nextServiceDate.getTime() - Date.now()) / (1000 * 60 * 60 * 24)) === 1 ? 'dia' : 'dias'}
                  </p>
                </div>
                
                <Link 
                  href="/cultos"
                  className="btn-primary w-full justify-center"
                >
                  Ver Todos os Horários
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}