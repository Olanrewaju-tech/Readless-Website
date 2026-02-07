export default function Categories() {
  const categories = [
    {
      title: "Psychology",
      description: "Understand human behavior, cognitive science, and the mind",
      icon: "🧠",
      books: ["Principles of Psychology", "Thinking Fast and Slow", "The Power of Habit"]
    },
    {
      title: "Business & Strategy",
      description: "Master entrepreneurship, leadership, and strategic thinking",
      icon: "💼",
      books: ["The Lean Startup", "Good to Great", "Zero to One"]
    },
    {
      title: "Philosophy & Wisdom",
      description: "Explore timeless wisdom and philosophical frameworks",
      icon: "🏛️",
      books: ["Meditations", "The Republic", "Beyond Good and Evil"]
    },
    {
      title: "Self-Improvement",
      description: "Build better habits, mindsets, and personal systems",
      icon: "🚀",
      books: ["Atomic Habits", "The 7 Habits", "Deep Work"]
    },
    {
      title: "Power & Influence",
      description: "Learn persuasion, negotiation, and social dynamics",
      icon: "👑",
      books: ["48 Laws of Power", "Influence", "Art of Seduction"]
    },
    {
      title: "Money & Finance",
      description: "Build wealth, understand economics, and financial literacy",
      icon: "💰",
      books: ["Think and Grow Rich", "Rich Dad Poor Dad", "The Intelligent Investor"]
    }
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4">
            Explore Our Library
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Curated book summaries across diverse categories to help you grow
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:border-brand-yellow"
            >
              {/* Icon */}
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                {category.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-brand-dark mb-2 group-hover:text-brand-yellow transition-colors">
                {category.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-4 leading-relaxed">
                {category.description}
              </p>

              {/* Sample Books */}
              <div className="space-y-2">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Featured Books:</p>
                {category.books.map((book, bookIndex) => (
                  <div key={bookIndex} className="text-sm text-gray-700 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-brand-yellow rounded-full"></div>
                    {book}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-brand-yellow mb-2">100+</div>
            <div className="text-gray-600 font-medium">Book Summaries</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-brand-yellow mb-2">10+</div>
            <div className="text-gray-600 font-medium">Categories</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-brand-yellow mb-2">15min</div>
            <div className="text-gray-600 font-medium">Avg. Per Chapter</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-brand-yellow mb-2">∞</div>
            <div className="text-gray-600 font-medium">No Limits</div>
          </div>
        </div>
      </div>
    </section>
  )
}
