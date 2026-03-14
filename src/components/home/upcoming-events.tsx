import { CalendarDaysIcon, ClockIcon, MapPinIcon, TicketIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface Event {
  id: string
  name: string
  description: string
  date: Date
  time: string
  location: string
  image: string | null
  isPaid: boolean
  price: number | null
  ticketsAvailable: number
}

interface UpcomingEventsProps {
  events: Event[]
}

export default function UpcomingEvents({ events }: UpcomingEventsProps) {
  if (!events || events.length === 0) {
    return (
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4 font-serif">
              Próximos Eventos
            </h2>
            <p className="text-gray-600 mb-8">
              Não há eventos programados no momento. Fique ligado nas nossas redes sociais!
            </p>
            <Link href="/eventos" className="btn-outline">
              Ver Todos os Eventos
            </Link>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4 font-serif">
            Próximos Eventos
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Participe dos nossos eventos especiais e momentos de comunhão. 
            Cada encontro é uma oportunidade de crescimento espiritual.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        <div className="text-center">
          <Link href="/eventos" className="btn-outline">
            Ver Todos os Eventos
          </Link>
        </div>
      </div>
    </section>
  )
}

function EventCard({ event }: { event: Event }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all group">
      {/* Event Image */}
      <div className="relative h-48 bg-gradient-to-br from-primary-100 to-accent-50">
        {event.image ? (
          <Image
            src={event.image}
            alt={event.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <CalendarDaysIcon className="w-12 h-12 text-primary-300" />
          </div>
        )}
        
        {/* Price Badge */}
        {event.isPaid && event.price && (
          <div className="absolute top-4 right-4">
            <div className="bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              R$ {event.price.toFixed(2).replace('.', ',')}
            </div>
          </div>
        )}
        
        {!event.isPaid && (
          <div className="absolute top-4 right-4">
            <div className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Gratuito
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary-900 mb-3 group-hover:text-primary-700 transition-colors line-clamp-2">
          {event.name}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {event.description}
        </p>

        {/* Event Details */}
        <div className="space-y-2 mb-6">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <CalendarDaysIcon className="w-4 h-4 text-accent-500" />
            <span>{format(event.date, "d 'de' MMMM 'de' yyyy", { locale: ptBR })}</span>
          </div>
          
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <ClockIcon className="w-4 h-4 text-accent-500" />
            <span>{event.time}</span>
          </div>
          
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <MapPinIcon className="w-4 h-4 text-accent-500" />
            <span>{event.location}</span>
          </div>

          {event.isPaid && event.ticketsAvailable > 0 && (
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <TicketIcon className="w-4 h-4 text-accent-500" />
              <span>{event.ticketsAvailable} ingressos disponíveis</span>
            </div>
          )}
        </div>

        {/* CTA Button */}
        <div className="flex space-x-2">
          <Link 
            href={`/eventos/${event.id}`}
            className="flex-1 bg-primary-600 hover:bg-primary-700 text-white text-center py-2 px-4 rounded-lg transition-colors text-sm font-medium"
          >
            Ver Detalhes
          </Link>
          
          {event.isPaid && event.ticketsAvailable > 0 && (
            <Link 
              href={`/eventos/${event.id}/checkout`}
              className="bg-accent-500 hover:bg-accent-600 text-white py-2 px-4 rounded-lg transition-colors text-sm font-medium"
            >
              Comprar
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}