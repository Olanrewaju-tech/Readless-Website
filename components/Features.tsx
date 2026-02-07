export default function Features() {
  const features = [
    {
      icon: "📚",
      title: "Chapter-by-Chapter Summaries",
      description: "Break down complex books into digestible, bite-sized chapters you can consume in minutes"
    },
    {
      icon: "📝",
      title: "Smart Notes & Key Takeaways",
      description: "Get the most important points highlighted and saved for easy review and reference"
    },
    {
      icon: "💡",
      title: "Real-Life Applications",
      description: "Practical examples showing exactly how to apply what you've learned in your daily life"
    },
    {
      icon: "🎧",
      title: "Audio Summaries",
      description: "Listen to summaries while commuting, working out, or doing chores"
    },
    {
      icon: "♾️",
      title: "Unlimited Access",
      description: "No artificial limits on learning explore as many books as you want, even on the free tier"
    },
    {
      icon: "🌍",
      title: "Learn Anywhere",
      description: "Access your library from any device, online or offline (Premium)"
    }
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-brand-dark to-brand-darker text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need to Learn Smarter
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Powerful features that transform how you consume and retain knowledge
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/10"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-brand-yellow">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
