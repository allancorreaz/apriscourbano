'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRightIcon, CalendarDaysIcon, MapPinIcon } from '@heroicons/react/24/outline'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Igreja Aprisco Urbano"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-800/80 to-primary-600/70"></div>
        <div className="absolute inset-0 hero-pattern"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white container-custom py-20">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold font-serif mb-6 leading-tight">
            Bem-vindos ao
            <span className="block text-gradient mt-2">
              Aprisco Urbano
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Uma comunidade de fé, esperança e amor no coração da cidade. 
            Venha fazer parte da nossa família espiritual.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/eventos" className="btn-primary group">
              Próximos Eventos
              <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/cultos" className="btn-secondary group">
              Horários dos Cultos
              <CalendarDaysIcon className="w-5 h-5 ml-2" />
            </Link>
          </div>

          {/* Quick Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <CalendarDaysIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Próximo Culto</h3>
              <p className="text-gray-200 text-sm mb-1">Domingo, 18:00</p>
              <p className="text-gold-300 text-sm">Culto de Celebração</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <MapPinIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Localização</h3>
              <p className="text-gray-200 text-sm mb-1">Rua das Alamedas, 123</p>
              <p className="text-gold-300 text-sm">Centro, São Paulo</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <ArrowRightIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Primeira Visita?</h3>
              <p className="text-gray-200 text-sm mb-1">Venha como você está</p>
              <Link href="/primeira-visita" className="text-gold-300 text-sm hover:text-gold-200 transition-colors">
                Saiba mais →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}