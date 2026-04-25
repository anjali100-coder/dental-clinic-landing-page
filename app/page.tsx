import React from 'react';

export default function Home() {
  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      {/* External Resources */}
      <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white shadow-sm px-10 py-5 flex justify-between items-center">
        <div className="text-2xl font-black tracking-tighter text-blue-900">
          DENTI<span className="text-pink-500">CARE</span>
        </div>
        <div className="hidden md:flex gap-10 text-xs font-bold uppercase tracking-widest text-gray-400">
          <a href="#" className="hover:text-blue-900">Home</a>
          <a href="#" className="hover:text-blue-900">Services</a>
          <a href="#" className="hover:text-blue-900">Doctors</a>
        </div>
        <button className="bg-pink-500 text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-blue-900 transition-all shadow-lg">
          Book Appointment
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center px-10 md:px-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://denticare.bold-themes.com/allen/wp-content/uploads/sites/17/2020/01/hero_home_01.jpg" 
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.7)' }}
            alt="Dental Clinic"
          />
        </div>
        
        <div className="relative z-10 max-w-4xl">
          <p className="text-pink-400 font-bold tracking-[0.3em] uppercase mb-6">
            Committed To Excellence
          </p>
          <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight mb-10">
            Personalized &<br />Comfortable
          </h1>
          <div className="flex gap-6">
            <button className="bg-white text-blue-900 px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-pink-500 hover:text-white transition-all shadow-2xl">
              Our Process →
            </button>
          </div>
        </div>
      </section>

      {/* Features - Overlapping Style like Bold Themes */}
      <section className="relative z-20 -mt-20 px-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-0 shadow-2xl rounded-2xl overflow-hidden">
        <div className="bg-blue-600 p-12 text-white border-r border-blue-500">
          <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">Certified Dentists</h3>
          <p className="opacity-70 text-sm leading-relaxed">Our team of experts ensures you get the best dental care possible.</p>
        </div>
        <div className="bg-pink-500 p-12 text-white border-r border-pink-400">
          <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">New Technology</h3>
          <p className="opacity-70 text-sm leading-relaxed">Advanced tools for a painless and comfortable experience.</p>
        </div>
        <div className="bg-blue-900 p-12 text-white">
          <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">Accepting Patients</h3>
          <p className="opacity-70 text-sm leading-relaxed">We are currently accepting new patients. Book your slot today.</p>
        </div>
      </section>

      {/* Spacing for bottom */}
      <div className="py-20"></div>
    </div>
  );
}
