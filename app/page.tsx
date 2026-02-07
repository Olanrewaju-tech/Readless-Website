import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import AppPreview from '@/components/AppPreview'
import Features from '@/components/Features'
import Pricing from '@/components/Pricing'
import Categories from '@/components/Categories'
import Waitlist from '@/components/Waitlist'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Readless - Understand the human mind, one chapter at a time',
  description: 'Book summaries that help you understand the human mind and improve your life. Chapter-by-chapter insights from psychology, business, philosophy, and more.',
  keywords: 'book summaries, self-improvement, psychology, business books, philosophy, personal development',
  openGraph: {
    title: 'Readless - Book Summaries Made Accessible',
    description: 'Understanding the human mind, one chapter at a time',
    url: 'https://getreadless.tech',
    siteName: 'Readless',
    type: 'website',
  },
}

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <AppPreview />
      <div id="features">
        <Features />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <div id="categories">
        <Categories />
      </div>
      <div id="waitlist">
        <Waitlist />
      </div>
      <Footer />
    </main>
  )
}
