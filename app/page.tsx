import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* --- Desktop & Mobile Navigation --- */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 px-4 py-3">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-black text-blue-900 tracking-tighter">
            DENTI<span className="text-pink-500">CARE</span>
          </div>
          <div className="hidden md:flex gap-8 font-bold text-xs uppercase tracking-widest text-gray-500">
            <a href="#" className="hover:text-pink-500 transition">Home</a>
            <a href="#services" className="hover:text-pink-500 transition">Services</a>
          </div>
          <button className="bg-pink-500 text-white px-5 py-2 rounded-full font-bold text-xs uppercase hover:bg-blue-900 transition-all shadow-md">
            Book Now
          </button>
        </div>
      </nav>

      {/* --- Premium Hero Section --- */}
      <section className="relative h-[80vh] md:h-screen flex items-center pt-10">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://denticare.bold-themes.com/allen/wp-content/uploads/sites/17/2020/01/hero_home_01.jpg" 
            className="w-full h-full object-cover"
            alt="Clinic"
          />
          <div className="absolute inset-0 bg-blue-900/40"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl text-center md:text-left">
            <p className="text-pink-400 font-bold tracking-[0.2em] uppercase mb-4 text-sm md:text-base">
              Committed To Excellence
            </p>
            <h1 className="text-4xl md:text-7xl font-extrabold text-white leading-tight mb-8 drop-shadow-lg">
              Personalized &<br />
              <span className="text-white/90">Comfortable</span>
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-white text-blue-900 px-8 py-4 rounded-full font-black uppercase tracking-widest text-sm hover:bg-pink-500 hover:text-white transition-all shadow-xl">
                Our Services
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-black uppercase tracking-widest text-sm hover:bg-white hover:text-blue-900 transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- Professional Cards Section --- */}
      <section className="relative z-20 -mt-12 md:-mt-24 px-4 pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-600 p-8 text-white rounded-2xl shadow-xl hover:-translate-y-2 transition-transform">
            <h3 className="text-xl font-bold mb-3">Certified Dentists</h3>
            <p className="text-sm opacity-90 leading-relaxed">Experience world-class care from our board-certified experts.</p>
          </div>
          <div className="bg-pink-500 p-8 text-white rounded-2xl shadow-xl hover:-translate-y-2 transition-transform">
            <h3 className="text-xl font-bold mb-3">Modern Clinic</h3>
            <p className="text-sm opacity-90 leading-relaxed">Equipped with the latest technology for painless treatments.</p>
          </div>
          <div className="bg-blue-900 p-8 text-white rounded-2xl shadow-xl hover:-translate-y-2 transition-transform">
            <h3 className="text-xl font-bold mb-3">Easy Booking</h3>
            <p className="text-sm opacity-90 leading-relaxed">Schedule your visit in minutes with our online portal.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
