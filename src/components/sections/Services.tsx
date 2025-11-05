// src/components/sections/Services.tsx
'use client'

import { motion } from 'framer-motion'
import { Plane, Briefcase, FileText, Shield, Award, Building } from 'lucide-react'
import { Button } from '@/components/ui/button'

const services = [
  {
    icon: Plane,
    title: 'PPIU',
    description: 'Penyelenggara Perjalanan Ibadah Umrah',
    duration: '60-90 hari',
    category: 'travel'
  },
  {
    icon: Plane,
    title: 'PIHK',
    description: 'Penyelenggara Ibadah Haji Khusus',
    duration: '90-120 hari',
    category: 'travel'
  },
  {
    icon: Award,
    title: 'Akreditasi',
    description: 'Akreditasi PPIU & PIHK',
    duration: '30-45 hari',
    category: 'travel'
  },
  {
    icon: Shield,
    title: 'IATA',
    description: 'Keanggotaan IATA',
    duration: '45-60 hari',
    category: 'travel'
  },
  {
    icon: FileText,
    title: 'Pajak',
    description: 'Konsultasi dan Pengurusan Pajak',
    duration: '30-60 hari',
    category: 'business'
  },
  {
    icon: Building,
    title: 'Bank Garansi',
    description: 'Pengajuan Bank Garansi',
    duration: '45-75 hari',
    category: 'business'
  }
]

export function Services() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-jni-green/5 to-jni-emerald/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-poppins-bold text-jni-green mb-4">
            Layanan Kami
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter-medium">
            Solusi lengkap untuk kebutuhan izin travel dan administrasi bisnis Anda
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="glass-card p-6 h-full hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                <div className="w-16 h-16 bg-gradient-to-br from-jni-green to-jni-emerald rounded-xl flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow">
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-poppins-semibold text-jni-green mb-2">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-4 font-inter-medium">
                  {service.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-inter-medium text-gray-500">
                    {service.duration}
                  </span>
                  <span className={`text-xs px-3 py-1 rounded-full font-inter-medium ${
                    service.category === 'travel'
                      ? 'bg-jni-green/10 text-jni-green'
                      : 'bg-jni-gold/10 text-jni-gold'
                  }`}>
                    {service.category === 'travel' ? 'Travel' : 'Bisnis'}
                  </span>
                </div>

                <Button className="glass-button w-full text-white font-poppins-medium">
                  Pelajari Lebih Lanjut
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}