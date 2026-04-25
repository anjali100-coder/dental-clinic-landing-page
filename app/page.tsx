import React from 'react';

export default function Home() {
  return (
    <>
      {/* External CSS aur Fonts load karne ke liye */}
      <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&display=swap" rel="stylesheet" />

      <div style={{ fontFamily: "'Montserrat', sans-serif" }} className="min-h-screen bg-white">
        
        {/* --- Navigation --- */}
        <nav className="fixed top-0 w-full z-50 bg-white shadow-md px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-black text-blue-900 uppercase">
            Denti<span className="text-pink-500">Care</span>
          </div>
          <div className="hidden md:flex gap-8 font-bold text-xs uppercase tracking-widest text-gray-500">
            <a href="#" className="hover:text-pink-500">Home</a>
            <a href="#" className="hover:text-pink-500">Services</a>
          </div>
          <button className="bg-pink-500 text-white px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest">
            Book Now
          </button>
        </nav>

        {/* --- Hero Section --- */}
        <section className="relative h-screen flex items-center justify-center text-center md:text-left md:justify-start px-6">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://denticare.bold-themes.com/allen/wp-content/uploads/sites/17/2020/01/hero_home_01.jpg" 
              className="w-full h-full object-cover"
              alt="Clinic"
            />
            <div className="absolute inset-0 bg-blue-900 bg-opacity-40"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto w-full">
            <p className="text-pink-400 font-bold tracking-widest uppercase mb-4">
              Committed To Excellence
            </p>
            <h1 className="text-5xl md:text-8xl font-black text-white leading-none mb-10">
              Personalized &<br />Comfortable
            </h1>
            <div className="flex flex-col md:flex-row gap-4">
              <button className="bg-white text-blue-900 px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-pink-500 hover:text-white transition">
                Our Services
              </button>
              <button className="border-2 border-white text-white px-10 py-5 rounded-full font-black uppercase tracking-widest">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* --- Highlight Cards --- */}
        <section className="relative z-20 -mt-20 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-600 p-10 text-white rounded-xl shadow-2xl">
            <h3 className="text-2xl font-bold mb-4 uppercase">Expert Dentists</h3>
            <p className="opacity-80">World-class dental care experts.</p>
          </div>
          <div className="bg-pink-500 p-10 text-white rounded-xl shadow-2xl">
            <h3 className="text-2xl font-bold mb-4 uppercase">Modern Tools</h3>
            <p className="opacity-80">Painless treatment technology.</p>
          </div>
          <div className="bg-blue-900 p-10 text-white rounded-xl shadow-2xl">
            <h3 className="text-2xl font-bold mb-4 uppercase">24/7 Care</h3>
            <p className="opacity-80">We are always here for you.</p>
          </div>
        </section>

      </div>
    </>
  );
}
