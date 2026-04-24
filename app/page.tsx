export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 max-w-7xl mx-auto">
        <div className="md:w-1/2 space-y-6">
          <p className="text-pink-500 font-semibold">Committed To Excellence</p>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Personalized &<br />Comfortable
          </h1>
          <div className="flex gap-4 pt-4">
            <div className="bg-white p-4 rounded-xl shadow-md flex items-center gap-3">
              <div className="bg-blue-100 p-2 rounded-lg">🛡️</div>
              <div>
                <p className="font-bold">Full Protection</p>
                <p className="text-sm text-gray-600">Shield against infections</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md flex items-center gap-3">
              <div className="bg-blue-100 p-2 rounded-lg">👍</div>
              <div>
                <p className="font-bold">Complete Service</p>
                <p className="text-sm text-gray-600">Leading dental care</p>
              </div>
            </div>
          </div>
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 mt-6">
            DentiCare Process →
          </button>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img 
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600" 
            alt="Doctor" 
            className="rounded-3xl w-full max-w-md mx-auto"
          />
        </div>
      </section>
    </div>
  )
}
