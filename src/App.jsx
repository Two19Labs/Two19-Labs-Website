import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Pillars from './components/Pillars'
import Process from './components/Process'
import Services from './components/Services'
import Why from './components/Why'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative grain-overlay min-h-screen overflow-x-hidden">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Pillars />
        <Process />
        <Services />
        <Why />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
