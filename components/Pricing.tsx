export default function Pricing() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark mb-3 sm:mb-4">
            Choose Your Plan
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Inspired by Spotify—making premium content accessible to everyone
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {/* Free Tier */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-gray-200">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-brand-dark mb-2">Free</h3>
              <div className="text-4xl sm:text-5xl font-bold text-brand-dark mb-3 sm:mb-4">$0</div>
              <p className="text-sm sm:text-base text-gray-600">Perfect for curious learners</p>
            </div>

            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <li className="flex items-start gap-2 sm:gap-3">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0 mt-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-sm sm:text-base text-gray-700"><strong>Unlimited access</strong> to all book summaries</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0 mt-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-sm sm:text-base text-gray-700">Chapter-by-chapter breakdowns</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0 mt-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-sm sm:text-base text-gray-700">Smart notes & key takeaways</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0 mt-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-sm sm:text-base text-gray-700">Real-life application examples</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0 mt-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-sm sm:text-base text-gray-700">Audio summaries with ads</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 flex-shrink-0 mt-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                <span className="text-sm sm:text-base text-gray-400">No offline downloads</span>
              </li>
            </ul>

            <button className="w-full bg-gray-200 text-gray-700 font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-xl hover:bg-gray-300 transition-colors text-sm sm:text-base">
              Free Forever
            </button>
          </div>

          {/* Premium Tier */}
          <div className="bg-gradient-to-br from-brand-yellow to-yellow-500 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 relative">
            {/* Popular Badge */}
            <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 bg-brand-dark text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold">
              MOST POPULAR
            </div>

            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-brand-dark mb-2">Premium</h3>
              <div className="text-4xl sm:text-5xl font-bold text-brand-dark mb-3 sm:mb-4">
                $9.99
                <span className="text-xl sm:text-2xl font-normal">/month</span>
              </div>
              <p className="text-sm sm:text-base text-brand-dark font-medium">30% off First 1000 Users</p>
              <p className="text-sm sm:text-base text-brand-dark font-medium">For serious learners</p>
            </div>

            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <li className="flex items-start gap-2 sm:gap-3">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-brand-dark flex-shrink-0 mt-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-sm sm:text-base text-brand-dark font-medium"><strong>Everything in Free</strong></span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-brand-dark flex-shrink-0 mt-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-sm sm:text-base text-brand-dark font-medium"><strong>Ad-free experience</strong></span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-brand-dark flex-shrink-0 mt-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-sm sm:text-base text-brand-dark font-medium"><strong>Download for offline access</strong></span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-brand-dark flex-shrink-0 mt-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-sm sm:text-base text-brand-dark font-medium">Early access to new books</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-brand-dark flex-shrink-0 mt-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-sm sm:text-base text-brand-dark font-medium">Exclusive deep-dive content</span>
              </li>
              {/* <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-brand-dark flex-shrink-0 mt-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-brand-dark font-medium">Priority customer support</span>
              </li> */}
            </ul>

            <button className="w-full bg-brand-dark text-white font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-xl hover:bg-black transition-colors shadow-lg text-sm sm:text-base">
              Coming Soon
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
