'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Phone, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { COMPANY_INFO } from '@/lib/constants'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 bg-gradient-to-br from-jni-green via-jni-emerald to-jni-green-deep">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-30" />
        {/* Fallback gradient overlay if image doesn't load */}
        <div className="absolute inset-0 bg-gradient-to-t from-jni-green/50 to-transparent" />
      </div>

      {/* Glass Morphism Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-card max-w-4xl mx-auto p-12"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-poppins-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            PT Jaminan Nasional Indonesia
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl font-inter-medium text-white/90 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {COMPANY_INFO.tagline}
          </motion.p>

          <motion.p
            className="text-lg text-white/80 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Solusi lengkap izin PPIU, PIHK, Akreditasi IATA, dan layanan administrasi bisnis terpercaya di Indonesia
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Button size="lg" className="glass-button text-white px-8 py-4 text-lg font-poppins-semibold">
              <Phone className="w-5 h-5 mr-2" />
              Konsultasi Gratis
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>

            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-poppins-semibold">
              <Mail className="w-5 h-5 mr-2" />
              Hubungi Kami
            </Button>
          </motion.div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="mt-16 glass-card max-w-3xl mx-auto p-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="text-white">
              <div className="text-3xl font-poppins-bold text-jni-gold mb-1">500+</div>
              <div className="text-sm font-inter-medium text-white/80">Client Puas</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-poppins-bold text-jni-gold mb-1">6+</div>
              <div className="text-sm font-inter-medium text-white/80">Tahun Pengalaman</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-poppins-bold text-jni-gold mb-1">24/7</div>
              <div className="text-sm font-inter-medium text-white/80">Support</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-poppins-bold text-jni-gold mb-1">100%</div>
              <div className="text-sm font-inter-medium text-white/80">Terpercaya</div>
            </div>
          </div>
        </motion.div>
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