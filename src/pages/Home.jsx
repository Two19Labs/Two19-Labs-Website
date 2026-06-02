import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import WhatWeDo from '../components/WhatWeDo'
import Services from '../components/Services'
import Industries from '../components/Industries'
import Process from '../components/Process'
import FAQ from '../components/FAQ'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <WhatWeDo />
      <Services />
      <Industries />
      <Process />
      <FAQ />
      <CTA />
      <Footer />
    </>
  )
}
