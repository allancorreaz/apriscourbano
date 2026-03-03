// Mock data for services - replace with actual database calls when Prisma is set up

interface ServiceTime {
  id: string
  dayOfWeek: number
  time: string
  name: string
  description: string
  isActive: boolean
}

// Mock service data
const mockServices: ServiceTime[] = [
  {
    id: '1',
    dayOfWeek: 0, // Sunday
    time: '09:00',
    name: 'Culto Matutino',
    description: 'Um culto especial para começar o domingo em comunhão com Deus e a família.',
    isActive: true
  },
  {
    id: '2',
    dayOfWeek: 0, // Sunday
    time: '18:00',
    name: 'Culto de Celebração',
    description: 'Nosso principal culto de domingo à noite, com adoração e palavra.',
    isActive: true
  },
  {
    id: '3',
    dayOfWeek: 3, // Wednesday
    time: '19:30',
    name: 'Culto de Oração e Palavra',
    description: 'Um momento especial de oração e estudo da palavra durante a semana.',
    isActive: true
  }
]

export async function getNextService(): Promise<ServiceTime | null> {
  // In a real app, this would query the database
  // For now, return the Sunday evening service as default
  const today = new Date()
  const currentDay = today.getDay()
  const currentTime = today.getHours() * 60 + today.getMinutes()
  
  // Find the next service
  for (const service of mockServices) {
    if (!service.isActive) continue
    
    const [hours, minutes] = service.time.split(':').map(Number)
    const serviceTimeInMinutes = hours * 60 + minutes
    
    // If it's the same day and the service hasn't passed yet
    if (service.dayOfWeek === currentDay && serviceTimeInMinutes > currentTime) {
      return service
    }
    
    // If it's a future day this week
    if (service.dayOfWeek > currentDay) {
      return service
    }
  }
  
  // If no service found this week, return the first service of next week
  const nextWeekServices = mockServices.filter(s => s.isActive).sort((a, b) => a.dayOfWeek - b.dayOfWeek)
  return nextWeekServices[0] || null
}

export async function getAllServices(): Promise<ServiceTime[]> {
  // In a real app, this would query the database
  return mockServices.filter(service => service.isActive)
}

export async function getServiceById(id: string): Promise<ServiceTime | null> {
  // In a real app, this would query the database
  return mockServices.find(service => service.id === id) || null
}