import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* --- Navigation Bar --- */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-900 flex items-center gap-2">
            <span className="text-pink-500">Denti</span>Care
          </div>
          <div className="hidden md:flex gap-8 font-medium text-gray-700">
            <a href="#" className="hover:text-blue-600">Home</a>
            <a href="#services" className="hover:text-blue-600">Services</a>
            <a href="#contact" clas…
[11:28 pm, 25/04/2026] Anjali Sharma: https://denticare.bold-themes.com/allen/
[11:31 pm, 25/04/2026] Dad: import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* --- Navigation --- */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-3xl font-black text-blue-900 tracking-tighter">
            DENTI<span className="text-pink-500">CARE</span>
          </div>
          <div className="hidden md:flex gap-10 font-bold text-sm uppercase tracking-widest text-gray-600">
            <a href="#" className="hover:text-pink-500 transition">Home</a>
            <a href="#services" className="hover:text-pink-500 transition">Services</a>
            <a href="#about" className="hover:text-pink-500 transition">About</a>
            <a href="#contact" className="hover:text-pink-500 transition">Contact</a>
          </div>
          <button className="bg-pink-500 text-white px-7 py-3 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-blue-900 transition-all shadow-lg shadow-pink-200">
            Book Now
          </button>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://denticare.bold-themes.com/allen/wp-content/uploads/sites/17/2020/01/hero_home_01.jpg" 
            className="w-full h-full object-cover"
            alt="Clinic"
          />
          <div className="absolute inset-0 bg-blue-900/40"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <p className="text-pink-400 font-bold tracking-[0.3em] uppercase mb-4 drop-shadow-md">
              Committed To Excellence
            </p>
            <h1 className="text-6xl md:text-8xl font-bold text-white leading-[1.05] mb-8 drop-shadow-xl">
              Personalized &<br />
              <span className="text-white/90">Comfortable</span>
            </h1>
            <div className="flex flex-wrap gap-6">
              <button className="bg-white text-blue-900 px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-pink-500 hover:text-white transition-all transform hover:-translate-y-1">
                Our Services
              </button>
              <button className="border-2 border-white text-white px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-white hover:text-blue-900 transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- Features Cards --- */}
      <section className="relative z-20 -mt-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-0 shadow-2xl rounded-3xl overflow-hidden">
          <div className="bg-blue-600 p-12 text-white hover:bg-blue-700 transition">
            <div className="text-4xl mb-6">🦷</div>
            <h3 className="text-2xl font-bold mb-4">Certified Dentists</h3>
            <p className="opacity-80">Our team consists of highly qualified professionals with years of experience.</p>
          </div>
          <div className="bg-pink-500 p-12 text-white hover:bg-pink-600 transition border-x border-white/10">
            <div className="text-4xl mb-6">🛡️</div>
            <h3 className="text-2xl font-bold mb-4">New Technology</h3>
            <p className="opacity-80">We use the latest digital tools to ensure painless and precise treatments.</p>
          </div>
          <div className="bg-blue-900 p-12 text-white hover:bg-black transition">
            <div className="text-4xl mb-6">⏰</div>
            <h3 className="text-2xl font-bold mb-4">24/7 Accept</h3>
            <p className="opacity-80">Emergency dental care is available around the clock for our regular patients.</p>
          </div>
        </div>
      </section>

      {/* --- Services Section --- */}
      <section id="services" className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-pink-500 font-bold tracking-widest uppercase">Our Services</span>
            <h2 className="text-5xl font-bold text-blue-900 mt-4">What We Do Best</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: 'General Dentistry', icon: '✨' },
              { title: 'Orthodontics', icon: '💎' },
              { title: 'Teeth Whitening', icon: '🌟' },
              { title: 'Dental Implants', icon: '🔩' },
              { title: 'Oral Surgery', icon: '🏥' },
              { title: 'Root Canal', icon: '🩺' }
            ].map((s, i) => (
              <div key={i} className="bg-white p-10 rounded-2xl hover:shadow-2xl transition-all border-b-4 border-transparent hover:border-pink-500 group">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{s.icon}</div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">{s.title}</h3>
                <p className="text-gray-500 mb-6">Quality care for your teeth and gums using modern techniques.</p>
                <button className="text-pink-500 font-bold uppercase tracking-widest text-xs hover:text-blue-900">Read More +</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Simple Footer --- */}
      <footer id="contact" className="bg-blue-900 py-20 px-6 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Ready for a better smile?</h2>
          <p className="text-blue-200 mb-10 text-xl">Book your appointment today and get 20% off on your first visit.</p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <div className="bg-white/10 p-6 rounded-xl">
              <p className="text-pink-400 font-bold">Call Us</p>
              <p className="text-2xl">+1 (123) 456-7890</p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl">
              <p className="text-pink-400 font-bold">Visit Us</p>
              <p className="text-2xl">Medical District, NY</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
