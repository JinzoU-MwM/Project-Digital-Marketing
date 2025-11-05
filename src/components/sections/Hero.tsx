'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ArrowRight, Phone, Mail, Plane, FileText, Building2, Shield, Award, Clock, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Carousel } from '@/components/ui/Carousel'
import { COMPANY_INFO } from '@/lib/constants'
import { HeroBackground } from '@/components/backgrounds/HeroBackground'

const rotatingWords = ['PERIZINAN', 'ADMINISTRASI']

const serviceCards = [
  {
    icon: Plane,
    title: 'PPIU',
    description: 'Izin Penyelenggaraan Perjalanan Ibadah Umroh',
    color: 'from-blue-600 to-blue-700'
  },
  {
    icon: FileText,
    title: 'PIHK',
    description: 'Izin Penyelenggaraan Ibadah Haji Khusus',
    color: 'from-green-600 to-green-700'
  },
  {
    icon: Award,
    title: 'IATA',
    description: 'Akreditasi IATA untuk Travel Agency',
    color: 'from-purple-600 to-purple-700'
  },
  {
    icon: Building2,
    title: 'Badan Usaha',
    description: 'Pendirian & Pengurusan Badan Usaha',
    color: 'from-orange-600 to-orange-700'
  },
  {
    icon: Shield,
    title: 'Perizinan',
    description: 'Semua Jenis Izin Usaha & Operasional',
    color: 'from-red-600 to-red-700'
  },
  {
    icon: Users,
    title: 'Konsultasi',
    description: 'Konsultasi Bisnis & Hukum Lengkap',
    color: 'from-indigo-600 to-indigo-700'
  }
]

export function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length)
    }, 1500)

    return () => clearInterval(wordInterval)
  }, [])

  // Create service card elements for carousel
  const serviceCardElements = serviceCards.map((service, index) => (
    <Card key={index} className={`w-full h-full bg-gradient-to-br ${service.color} border-0 shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105`}>
      <CardContent className="flex flex-col items-center justify-center h-full p-8 text-white relative">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full blur-xl" />
        <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/10 rounded-full blur-xl" />

        <div className="mb-6 relative z-10">
          <div className="w-24 h-24 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/30">
            {(() => {
              const IconComponent = service.icon
              return <IconComponent className="w-12 h-12 text-white" />
            })()}
          </div>
        </div>

        <h3 className="text-3xl font-poppins-bold mb-4 text-center relative z-10">
          {service.title}
        </h3>

        <p className="text-lg font-inter-medium text-center text-white/90 leading-relaxed relative z-10">
          {service.description}
        </p>
      </CardContent>
    </Card>
  ))

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Hero Background */}
      <HeroBackground />

      {/* Two Container Layout */}
      <div className="relative z-10 px-4 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Container - Glowing Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-poppins-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <div className="text-4xl md:text-5xl lg:text-6xl">Solusi Tuntas</div>
              <div className="relative h-16 md:h-20 lg:h-24 my-2 flex items-center justify-start lg:justify-start">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentWordIndex}
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.8 }}
                    transition={{
                      duration: 0.1,
                      ease: "easeInOut"
                    }}
                    className="flex items-center justify-start lg:justify-start"
                  >
                    <span
                      className="font-poppins-bold text-4xl md:text-5xl lg:text-6xl animate-gold-pulse text-left"
                      style={{
                        transform: 'translateZ(0)',
                        willChange: 'transform'
                      }}
                    >
                      {rotatingWords[currentWordIndex]}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="text-3xl md:text-4xl lg:text-5xl">Travel Anda</div>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed font-inter-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Terpercaya menangani <span className="text-jni-gold font-bold">500+ klien</span> dan{' '}
              <span className="text-jni-gold font-bold">1.500+ proyek</span> selesai dengan kepuasan 100%.
              Mitra andal untuk semua kebutuhan perizinan dan administrasi bisnis Anda di Indonesia.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Button size="lg" className="bg-gradient-to-r from-jni-gold to-jni-gold/80 hover:from-jni-gold/90 hover:to-jni-gold/70 text-white px-8 py-4 text-lg font-poppins-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0">
                <Phone className="w-5 h-5 mr-2" />
                Konsultasi Gratis
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50 backdrop-blur-sm px-8 py-4 text-lg font-poppins-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <Mail className="w-5 h-5 mr-2" />
                Hubungi Kami
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="grid grid-cols-3 gap-6 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <div className="text-white">
                <div className="text-3xl font-poppins-bold text-jni-gold mb-1">500+</div>
                <div className="text-sm font-inter-medium text-white/80">Klien Puas</div>
              </div>
              <div className="text-white">
                <div className="text-3xl font-poppins-bold text-jni-gold mb-1">1.5K+</div>
                <div className="text-sm font-inter-medium text-white/80">Proyek Selesai</div>
              </div>
              <div className="text-white">
                <div className="text-3xl font-poppins-bold text-jni-gold mb-1">6+</div>
                <div className="text-sm font-inter-medium text-white/80">Tahun Pengalaman</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Container - Service Cards Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center justify-center"
          >
            <div style={{ height: '600px', position: 'relative' }} className="w-full max-w-md">
              <Carousel
                baseWidth={300}
                autoplay={true}
                autoplayDelay={3000}
                pauseOnHover={true}
                loop={true}
                round={false}
              >
                {serviceCardElements}
              </Carousel>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-jni-gold/10 rounded-full blur-xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-jni-emerald/10 rounded-full blur-xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </section>
  )
}