import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting seed...')
  
  // Create admin user
  const hashedPassword = await bcrypt.hash('admin123', 12)
  
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@apriscourbano.com' },
    update: {},
    create: {
      email: 'admin@apriscourbano.com',
      name: 'Administrador',
      password: hashedPassword,
      role: 'ADMIN'
    }
  })
  
  console.log('👤 Admin user created:', adminUser.email)

  // Create service times
  const serviceTimes = [
    {
      name: 'Culto Matutino',
      description: 'Um culto especial para começar o domingo em comunhão com Deus e a família.',
      dayOfWeek: 0, // Sunday
      time: '09:00',
      isActive: true
    },
    {
      name: 'Culto de Celebração',
      description: 'Nosso principal culto de domingo à noite, com adoração e palavra.',
      dayOfWeek: 0, // Sunday  
      time: '18:00',
      isActive: true
    },
    {
      name: 'Culto de Oração e Palavra',
      description: 'Um momento especial de oração e estudo da palavra durante a semana.',
      dayOfWeek: 3, // Wednesday
      time: '19:30',
      isActive: true
    }
  ]

  for (const service of serviceTimes) {
    await prisma.serviceTime.upsert({
      where: {
        id: `${service.dayOfWeek}-${service.time.replace(':', '')}`
      },
      update: {},
      create: {
        id: `${service.dayOfWeek}-${service.time.replace(':', '')}`,
        ...service
      }
    })
  }
  
  console.log('⛪ Service times created')

  // Create weekly events (discipleship groups)
  const weeklyEvents = [
    {
      name: 'Discipulado de Casais',
      description: 'Um encontro especial para casais crescerem juntos na fé e no relacionamento.',
      dayOfWeek: 6, // Saturday
      time: '19:00',
      leader: 'Pastor João e Pastora Maria',
      isActive: true
    },
    {
      name: 'Discipulado de Jovens',
      description: 'Encontro dos jovens para crescimento espiritual, comunhão e diversão.',
      dayOfWeek: 5, // Friday
      time: '19:30',
      leader: 'Pastor Pedro',
      isActive: true
    },
    {
      name: 'Discipulado de Adolescentes',
      description: 'Grupo especial para adolescentes descobrirem seu propósito em Deus.',
      dayOfWeek: 2, // Tuesday
      time: '19:00',
      leader: 'Pastora Ana',
      isActive: true
    }
  ]

  for (const event of weeklyEvents) {
    await prisma.weeklyEvent.upsert({
      where: {
        id: `weekly-${event.dayOfWeek}-${event.time.replace(':', '')}`
      },
      update: {},
      create: {
        id: `weekly-${event.dayOfWeek}-${event.time.replace(':', '')}`,
        ...event
      }
    })
  }
  
  console.log('📅 Weekly events created')

  // Create sample events
  const currentDate = new Date()
  const futureDate1 = new Date(currentDate.getTime() + (7 * 24 * 60 * 60 * 1000)) // 1 week
  const futureDate2 = new Date(currentDate.getTime() + (14 * 24 * 60 * 60 * 1000)) // 2 weeks
  const futureDate3 = new Date(currentDate.getTime() + (21 * 24 * 60 * 60 * 1000)) // 3 weeks

  const sampleEvents = [
    {
      id: 'event-1',
      name: 'Conferência de Avivamento 2024',
      description: 'Três dias de muito louvor, palavra e comunhão. Um evento especial para toda a família com preletores renomados e momentos únicos de adoração.',
      date: futureDate2,
      time: '19:00',
      location: 'Igreja Aprisco Urbano',
      image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      isPaid: true,
      price: 25.00,
      ticketsAvailable: 150,
      ticketsTotal: 150,
      isActive: true,
      createdById: adminUser.id
    },
    {
      id: 'event-2',
      name: 'Encontro de Casais',
      description: 'Um fim de semana especial para fortalecimento dos relacionamentos matrimoniais com dinâmicas, palestras e momentos de renovação.',
      date: futureDate1,
      time: '18:00',
      location: 'Hotel Fazenda Vale Verde',
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      isPaid: true,
      price: 180.00,
      ticketsAvailable: 25,
      ticketsTotal: 30,
      isActive: true,
      createdById: adminUser.id
    },
    {
      id: 'event-3',
      name: 'Evangelismo no Centro',
      description: 'Ação evangelística no centro da cidade. Venha participar dessa oportunidade de levar o amor de Cristo às pessoas.',
      date: futureDate3,
      time: '14:00',
      location: 'Praça da Sé',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      isPaid: false,
      price: null,
      ticketsAvailable: 0,
      ticketsTotal: 0,
      isActive: true,
      createdById: adminUser.id
    }
  ]

  for (const event of sampleEvents) {
    await prisma.event.upsert({
      where: { id: event.id },
      update: {},
      create: event
    })
  }
  
  console.log('🎉 Sample events created')

  // Create sample gallery
  const sampleGallery = await prisma.gallery.upsert({
    where: { id: 'gallery-1' },
    update: {},
    create: {
      id: 'gallery-1',
      name: 'Culto de Domingo - Novembro 2024',
      description: 'Fotos do culto de celebração de domingo',
      date: new Date(),
      isActive: true
    }
  })

  // Create sample gallery images
  const sampleImages = [
    'https://images.unsplash.com/photo-1507692049790-de58290a4334?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  ]

  for (let i = 0; i < sampleImages.length; i++) {
    await prisma.galleryImage.upsert({
      where: { id: `image-${i + 1}` },
      update: {},
      create: {
        id: `image-${i + 1}`,
        url: sampleImages[i],
        alt: `Foto ${i + 1} do culto`,
        galleryId: sampleGallery.id
      }
    })
  }
  
  console.log('📸 Sample gallery created')

  // Create settings
  const settings = [
    {
      key: 'church_address',
      value: 'Rua das Alamedas, 123\nCentro, São Paulo - SP\nCEP: 01000-000',
      type: 'text',
      category: 'contact'
    },
    {
      key: 'church_phone',
      value: '(11) 99999-9999',
      type: 'text',
      category: 'contact'
    },
    {
      key: 'church_email',
      value: 'contato@apriscourbano.com',
      type: 'text',
      category: 'contact'
    },
    {
      key: 'social_facebook',
      value: 'https://facebook.com/apriscourbano',
      type: 'text',
      category: 'social'
    },
    {
      key: 'social_instagram',
      value: 'https://instagram.com/apriscourbano',
      type: 'text',
      category: 'social'
    },
    {
      key: 'social_youtube',
      value: 'https://youtube.com/@apriscourbano',
      type: 'text',
      category: 'social'
    }
  ]

  for (const setting of settings) {
    await prisma.setting.upsert({
      where: { key: setting.key },
      update: {},
      create: setting
    })
  }
  
  console.log('⚙️  Settings created')

  console.log('✅ Seed completed successfully!')
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })