'use client'

import { useState } from 'react'

export default function Waitlist() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !email.includes('@')) {
      setStatus('error')
      setMessage('Please enter a valid email address')
      return
    }

    setStatus('submitting')

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      if (!response.ok) throw new Error('Failed to join waitlist');

      setStatus('success')
      setMessage('We\'ll notify you when we launch.')
      setEmail('')

      // Reset after 5 seconds
      setTimeout(() => {
        setStatus('idle')
        setMessage('')
      }, 5000)
    } catch (error) {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }
  }

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-br from-brand-yellow via-yellow-400 to-yellow-500">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark mb-4 sm:mb-6">
          Be the First to Know
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-brand-darker mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
          Join our waitlist and get notified when Readless launches. Plus, early access to exclusive features!
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-xl text-base sm:text-lg focus:outline-none focus:ring-4 focus:ring-brand-dark/30 text-brand-dark placeholder-gray-600"
              disabled={status === 'submitting'}
            />
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="bg-brand-dark text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-black transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl">
            
              {status === 'submitting' ? 'Joining...' : 'Join Waitlist'}
            </button>
          </div>

          {/* Status Message */}
          {message && (
            <div className={`mt-4 p-4 rounded-xl ${
              status === 'success' 
                ? 'bg-green-100 text-green-800 border border-green-300' 
                : 'bg-red-100 text-red-800 border border-red-300'
            }`}>
              {message}
            </div>
          )}
        </form>

        {/* Benefits */}
        <div className="mt-8 sm:mt-12 grid sm:grid-cols-3 gap-4 sm:gap-6 text-brand-dark px-4">
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm sm:text-base font-semibold">Early Access</span>
          </div>
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm sm:text-base font-semibold">Exclusive Updates</span>
          </div>
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm sm:text-base font-semibold">Launch Bonuses</span>
          </div>
        </div>
      </div>
    </section>
  )
}
