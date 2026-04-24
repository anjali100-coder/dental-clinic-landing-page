"use client"
import { motion } from "framer-motion"
import { Shield, ThumbsUp, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image - Dental Clinic */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://denticare.bold-themes.com/allen/wp-content/uploads/sites/17/2020/01/hero_home_01.jpg')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-900/40 to-transparent"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="min-h-screen flex items-center">
          <div className="max-w-2xl py-20">
            
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-pink-400 font-semibold text-lg mb-6 tracking-wide"
            >
              Committed To Excellence
            </motion.p>
            
            <motion.h1 
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] mb-10"
            >
              Personalized &<br />Comfortable
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <div className="bg-white rounded-2xl p-5 flex items-center gap-4 shadow-2xl">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg">Full Protection</p>
                  <p className="text-sm text-gray-600">Shield against infections</p>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-5 flex items-center gap-4 shadow-2xl">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <ThumbsUp className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg">Complete Service</p>
                  <p className="text-sm text-gray-600">Leading dental care</p>
                </div>
              </div>
            </motion.div>

            <motion.button 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-pink-500 hover:bg-pink-600 text-white px-10 py-4 rounded-full font-semibold text-lg inline-flex items-center gap-3 shadow-xl transition-all"
            >
              DentiCare Process
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            
          </div>
        </div>
      </div>
          }
    </div>
  )
