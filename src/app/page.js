"use client"

import Benefits from "../components/Benefits"
import Calculator from "../components/Calculator"
import FeatureSections from "../components/Features"
import Hero from "../components/Hero"
import References from "../components/References"
import Testimonials from "../components/Testimonials"
import FAQSection from "../components/Faqs"
import StatsSection from "../components/Stats"


export default function Home() {

  return (
    <div className="h-full">
      <Hero />
      <div id="features"></div>
      <FeatureSections />
      <Testimonials />
      <div id="benefits"></div>
      <Benefits />
      <div id="faqs"></div>
      <FAQSection />
    </div>
  )
}
