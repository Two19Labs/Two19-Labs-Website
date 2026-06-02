import Seo from '../components/Seo'
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
      <Seo
        title="Two19 Labs — Custom Software & AI Automation Agency"
        description="Two19 Labs builds custom software, AI-powered workflows, and automation systems from scratch. A technology and digital transformation agency. No templates. No off-the-shelf solutions."
        path="/"
      />
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
