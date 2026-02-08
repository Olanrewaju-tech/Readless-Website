import Image from 'next/image'

export default function AppPreview() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark mb-3 sm:mb-4">
            Experience Readless
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            A beautiful, intuitive interface designed for learning on the go
          </p>
        </div>

        {/* App Screenshots */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8">
          {[1, 2, 3, 4, 5].map((num) => (
            <div 
              key={num}
              className="relative group"
            >
              <div className="w-40 sm:w-48 md:w-56 lg:w-64 h-auto rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-brand-yellow/50">
                <Image
                  src={`/images/screen${num}.jpg`}
                  alt={`Readless App Screenshot ${num}`}
                  width={300}
                  height={650}
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-brand-yellow/10 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Feature Highlights */}
        <div className="mt-12 sm:mt-16 grid sm:grid-cols-3 gap-6 sm:gap-8 px-4">
          <div className="text-center">
            <div className="flex justify-center mb-3 sm:mb-4">
              <svg className="w-12 h-12 text-brand-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-brand-dark mb-2">Focused Learning</h3>
            <p className="text-sm sm:text-base text-gray-600">Distraction-free reading experience designed for retention</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-3 sm:mb-4">
              <svg className="w-12 h-12 text-brand-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-brand-dark mb-2">Audio Summaries</h3>
            <p className="text-sm sm:text-base text-gray-600">Listen while commuting, exercising, or multitasking</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-3 sm:mb-4">
              <svg className="w-12 h-12 text-brand-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-brand-dark mb-2">Mobile First</h3>
            <p className="text-sm sm:text-base text-gray-600">Beautifully optimized for iOS and Android devices</p>
          </div>
        </div>
      </div>
    </section>
  )
}
