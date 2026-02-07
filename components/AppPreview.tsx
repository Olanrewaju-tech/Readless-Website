import Image from 'next/image'

export default function AppPreview() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4">
            Experience Readless
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A beautiful, intuitive interface designed for learning on the go
          </p>
        </div>

        {/* App Screenshots */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
          {[1, 2, 3, 4, 5].map((num) => (
            <div 
              key={num}
              className="relative group"
            >
              <div className="w-48 md:w-56 lg:w-64 h-auto rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-brand-yellow/50">
                <Image
                  src={`/images/screen${num}.jpg`}
                  alt={`Readless App Screenshot ${num}`}
                  width={300}
                  height={650}
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-brand-yellow/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Feature Highlights */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-brand-dark mb-2">Focused Learning</h3>
            <p className="text-gray-600">Distraction-free reading experience designed for retention</p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">🎧</div>
            <h3 className="text-xl font-bold text-brand-dark mb-2">Audio Summaries</h3>
            <p className="text-gray-600">Listen while commuting, exercising, or multitasking</p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">📱</div>
            <h3 className="text-xl font-bold text-brand-dark mb-2">Mobile First</h3>
            <p className="text-gray-600">Beautifully optimized for iOS and Android devices</p>
          </div>
        </div>
      </div>
    </section>
  )
}
