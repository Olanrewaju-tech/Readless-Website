export default function Categories() {
  const categories = [
    {
      title: "Psychology",
      description: "Understand human behavior, cognitive science, and the mind",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
        </svg>
      ),
      books: ["Principles of Psychology", "Thinking Fast and Slow", "The Power of Habit"]
    },
    {
      title: "Business & Strategy",
      description: "Master entrepreneurship, leadership, and strategic thinking",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
        </svg>
      ),
      books: ["The Lean Startup", "Good to Great", "Zero to One"]
    },
    {
      title: "Philosophy & Wisdom",
      description: "Explore timeless wisdom and philosophical frameworks",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
        </svg>
      ),
      books: ["Meditations", "The Republic", "Beyond Good and Evil"]
    },
    {
      title: "Self-Improvement",
      description: "Build better habits, mindsets, and personal systems",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
        </svg>
      ),
      books: ["Atomic Habits", "The 7 Habits", "Deep Work"]
    },
    {
      title: "Power & Influence",
      description: "Learn persuasion, negotiation, and social dynamics",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
        </svg>
      ),
      books: ["48 Laws of Power", "Influence", "Art of Seduction"]
    },
    {
      title: "Money & Finance",
      description: "Build wealth, understand economics, and financial literacy",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      books: ["Think and Grow Rich", "Rich Dad Poor Dad", "The Intelligent Investor"]
    }
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark mb-3 sm:mb-4">
            Explore Our Library
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Curated book summaries across diverse categories to help you grow
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:border-brand-yellow"
            >
              {/* Icon */}
              <div className="text-brand-yellow mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                {category.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-brand-dark mb-2 group-hover:text-brand-yellow transition-colors">
                {category.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                {category.description}
              </p>

              {/* Sample Books */}
              <div className="space-y-1.5 sm:space-y-2">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Featured Books:</p>
                {category.books.map((book, bookIndex) => (
                  <div key={bookIndex} className="text-xs sm:text-sm text-gray-700 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-brand-yellow rounded-full flex-shrink-0"></div>
                    <span className="line-clamp-1">{book}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="text-center">
y            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-yellow mb-1 sm:mb-2">100+</div>
            <div className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">Book Summaries</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-yellow mb-1 sm:mb-2">10+</div>
            <div className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">Categories</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-yellow mb-1 sm:mb-2">15min</div>
            <div className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">Avg. Per Chapter</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-yellow mb-1 sm:mb-2">∞</div>
            <div className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">No Limits</div>
          </div>
        </div>
      </div>
    </section>
  )
}
