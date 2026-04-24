export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://denticare.bold-themes.com/allen/wp-content/uploads/sites/17/2020/01/hero_home_01.jpg')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-900/50 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="min-h-screen flex items-center">
          <div className="max-w-2xl py-20">
            <p className="text-pink-400 font-semibold text-lg mb-6 tracking-wide">
              Committed To Excellence
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] mb-10">
              Personalized &<br />Comfortable
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <div className="bg-white rounded-2xl p-5 flex items-center gap-4 shadow-2xl">
                <div className="bg-blue-100 p-3 rounded-xl text-2xl">🛡️</div>
                <div>
                  <p className="font-bold text-gray-900 text-lg">Full Protection</p>
                  <p className="text-sm text-gray-600">Shield against infections</p>
                </div>
              <div className="bg-white rounded-2xl p-5 flex items-center gap-4 shadow-2xl">
                <div className="bg-blue-100 p-3 rounded-xl text-2xl">👍</div>
                <div>
                  <p className="font-bold text-gray-900 text-lg">Complete Service</p>
                  <p className="text-sm text-gray-600">Leading dental care</p>
                </div>
              </div>
            </div>
            <button className="bg-pink-500 hover:bg-pink-600 text-white px-10 py-4 rounded-full font-semibold text-lg inline-flex items-center gap-3 shadow-xl transition-all hover:scale-105">
              DentiCare Process →
            </button>
          </div>
        </div>
      </div>
        )
        }
    </div>

)
  )
