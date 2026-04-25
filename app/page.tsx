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
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </div>
          <button className="bg-blue-900 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-800 transition">
            Book Appointment
          </button>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://denticare.bold-themes.com/allen/wp-content/uploads/sites/17/2020/01/hero_home_01.jpg" 
            className="w-full h-full object-cover opacity-10"
            alt="Clinic Background"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto grid md:grid-group grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-pink-500 font-bold tracking-widest mb-4 uppercase text-sm">Committed To Excellence</p>
            <h1 className="text-5xl md:text-7xl font-extrabold text-blue-900 leading-tight mb-6">
              Personalized &<br /><span className="text-blue-600">Comfortable</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8 max-w-lg">
              Experience world-class dental care with our team of experts. We use the latest technology to ensure your smile stays bright and healthy.
            </p>
            <div className="flex gap-4">
              <button className="bg-pink-500 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-pink-600 transition-all hover:scale-105">
                Our Process →
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-6 rounded-3xl shadow-sm border border-blue-100">
              <div className="text-3xl mb-4">🛡️</div>
              <h3 className="font-bold text-blue-900 mb-2">Full Protection</h3>
              <p className="text-sm text-gray-600">Advanced safety protocols for every patient.</p>
            </div>
            <div className="bg-pink-50 p-6 rounded-3xl shadow-sm border border-pink-100 mt-8">
              <div className="text-3xl mb-4">✨</div>
              <h3 className="font-bold text-blue-900 mb-2">Teeth Whitening</h3>
              <p className="text-sm text-gray-600">Get a brighter smile in just one visit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Services Section --- */}
      <section id="services" className="py-20 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Specialized Services</h2>
          <div className="w-20 h-1 bg-pink-500 mx-auto"></div>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Dental Implants', 'Root Canal', 'Braces & Invisalign'].map((service, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition group">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl mb-6 group-hover:bg-blue-900 group-hover:text-white transition">
                🦷
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">{service}</h3>
              <p className="text-gray-600 mb-4">Professional treatment tailored to your specific needs by our expert dentists.</p>
              <a href="#" className="text-pink-500 font-bold hover:underline">Learn More →</a>
            </div>
          ))}
        </div>
      </section>

      {/* --- Footer --- */}
      <footer id="contact" className="bg-blue-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">DentiCare</h3>
            <p className="text-blue-200">Leading the way in dental excellence since 2010. Your smile is our priority.</p>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-pink-400">Opening Hours</h4>
            <ul className="space-y-2 text-blue-100">
              <li>Mon - Fri: 9:00 AM - 7:00 PM</li>
              <li>Saturday: 10:00 AM - 4:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-pink-400">Contact Us</h4>
            <p className="text-blue-100">123 Dental St, Medical District<br />Phone: (123) 456-7890<br />Email: hello@denticare.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
