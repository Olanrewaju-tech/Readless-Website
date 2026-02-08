export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Choose Your Book",
      description: "Browse our library of psychology, business, philosophy, and self-improvement books",
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      number: "02",
      title: "Read Chapter Summaries",
      description: "Get bite-sized insights from each chapter, saving hours of reading time",
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </svg>
      )
    },
    {
      number: "03",
      title: "Take Smart Notes",
      description: "Review key takeaways after each chapter for quick reference and retention",
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
        </svg>
      )
    },
    {
      number: "04",
      title: "Apply in Real Life",
      description: "Implement practical examples and turn knowledge into action immediately",
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
        </svg>
      )
    }
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 px-6 sm:px-8 md:px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn faster, retain more, and apply knowledge immediately
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 sm:p-8 mx-2 sm:mx-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative"
            >
              {/* Step Number */}
              <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 bg-brand-yellow rounded-full flex items-center justify-center font-bold text-brand-dark text-base sm:text-lg shadow-lg">
                {step.number}
              </div>

              {/* Icon */}
              <div className="text-brand-yellow mb-3 sm:mb-4 mt-3 sm:mt-4 flex justify-center">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-brand-dark mb-2 sm:mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
