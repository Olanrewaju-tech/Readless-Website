export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Choose Your Book",
      description: "Browse our library of psychology, business, philosophy, and self-improvement books",
      icon: "📚"
    },
    {
      number: "02",
      title: "Read Chapter Summaries",
      description: "Get bite-sized insights from each chapter, saving hours of reading time",
      icon: "📖"
    },
    {
      number: "03",
      title: "Take Smart Notes",
      description: "Review key takeaways after each chapter for quick reference and retention",
      icon: "📝"
    },
    {
      number: "04",
      title: "Apply in Real Life",
      description: "Implement practical examples and turn knowledge into action immediately",
      icon: "💡"
    }
  ]

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn faster, retain more, and apply knowledge immediately
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center font-bold text-brand-dark text-lg shadow-lg">
                {step.number}
              </div>

              {/* Icon */}
              <div className="text-6xl mb-4 mt-4">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-brand-dark mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
