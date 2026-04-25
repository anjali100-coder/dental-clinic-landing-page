import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-3xl font-black text-blue-900 tracking-tighter">
            DENTI<span className="text-pink-500">CARE</span>
          </div>
          <div className="hidden md:flex gap-10 font-bold text-sm uppercase tracking-widest text-gray-600">
            <a href="#" className="hover:text-pink-500 transition">Home</a>
            <a href="#services" className="hover:text-pink-500 transition">Services</a>
            <a href="#contact" className="hover:text-pink-500 transition">Contact</a>
          </div>
          <button className="bg-pink-500 text-white px-7 py-3 rounded-full font-bold text-sm uppercase shadow-lg shadow-pink-200">
            Book Now
          </button>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img src="https://denticare.bold-themes.com/allen/wp-content/uploads/sites/17/2020/01/hero_home_01.jpg" className="w-full h-full object-cover" alt="Clinic" />
          <div className="absolute inset-0 bg-blue-900/40"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <p className="text-pink-400 font-bold tracking-[0.3em] uppercase mb-4">Committed To Excellence</p>
          <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight mb-8">Personalized & Comfortable</h1>
          <button className="bg-white text-blue-900 px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-pink-500 hover:text-white transition-all">Our Services</button>
        </div>
      </section>
    </div>
  );
}
