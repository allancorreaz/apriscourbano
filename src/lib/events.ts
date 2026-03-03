// Mock data for events - replace with actual database calls when Prisma is set up

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
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

// Mock event data
const mockEvents: Event[] = [
  {
    id: '1',
    name: 'Conferência de Avivamento 2024',
    description: 'Três dias de muito louvor, palavra e comunhão. Um evento especial para toda a família com preletores renomados e momentos únicos de adoração.',
    date: new Date(2024, 11, 15), // December 15, 2024
    time: '19:00',
    location: 'Igreja Aprisco Urbano',
    image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    isPaid: true,
    price: 25.00,
    ticketsAvailable: 150,
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '2',
    name: 'Encontro de Casais',
    description: 'Um fim de semana especial para fortalecimento dos relacionamentos matrimoniais com dinâmicas, palestras e momentos de renovação.',
    date: new Date(2024, 11, 8), // December 8, 2024
    time: '18:00',
    location: 'Hotel Fazenda Vale Verde',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    isPaid: true,
    price: 180.00,
    ticketsAvailable: 25,
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '3',
    name: 'Evangelismo no Centro',
    description: 'Ação evangelística no centro da cidade. Venha participar dessa oportunidade de levar o amor de Cristo às pessoas.',
    date: new Date(2024, 10, 30), // November 30, 2024
    time: '14:00',
    location: 'Praça da Sé',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    isPaid: false,
    price: null,
    ticketsAvailable: 0,
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '4',
    name: 'Festa Junina da Igreja',
    description: 'Uma noite de muita diversão com comidas típicas, quadrilha, música e brincadeiras para toda a família.',
    date: new Date(2024, 5, 22), // June 22, 2024
    time: '19:00',
    location: 'Pátio da Igreja',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    isPaid: false,
    price: null,
    ticketsAvailable: 0,
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

export async function getUpcomingEvents(limit?: number): Promise<Event[]> {
  // In a real app, this would query the database
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  
  let upcomingEvents = mockEvents
    .filter(event => event.isActive && event.date >= today)
    .sort((a, b) => a.date.getTime() - b.date.getTime())
  
  if (limit) {
    upcomingEvents = upcomingEvents.slice(0, limit)
  }
  
  return upcomingEvents
}

export async function getAllEvents(): Promise<Event[]> {
  // In a real app, this would query the database
  return mockEvents
    .filter(event => event.isActive)
    .sort((a, b) => b.date.getTime() - a.date.getTime())
}

export async function getEventById(id: string): Promise<Event | null> {
  // In a real app, this would query the database
  return mockEvents.find(event => event.id === id && event.isActive) || null
}

export async function getEventsByMonth(year: number, month: number): Promise<Event[]> {
  // In a real app, this would query the database
  const startOfMonth = new Date(year, month, 1)
  const endOfMonth = new Date(year, month + 1, 0)
  
  return mockEvents
    .filter(event => 
      event.isActive && 
      event.date >= startOfMonth && 
      event.date <= endOfMonth
    )
    .sort((a, b) => a.date.getTime() - b.date.getTime())
}

export async function getEventsByWeek(startDate: Date): Promise<Event[]> {
  // In a real app, this would query the database
  const endDate = new Date(startDate)
  endDate.setDate(startDate.getDate() + 6)
  
  return mockEvents
    .filter(event => 
      event.isActive && 
      event.date >= startDate && 
      event.date <= endDate
    )
    .sort((a, b) => a.date.getTime() - b.date.getTime())
}

// Types for export
export type { Event }