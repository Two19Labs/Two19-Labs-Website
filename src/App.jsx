import { Routes, Route } from 'react-router-dom'
import Cursor from './components/Cursor'
import Nav from './components/Nav'
import Preloader from './components/Preloader'
import ScrollManager from './components/ScrollManager'
import Home from './pages/Home'
import ServicePage from './pages/ServicePage'
import Portfolio from './pages/Portfolio'

export default function App() {
  return (
    <div className="relative min-h-screen [overflow-x:clip]">
      <Preloader />
      <Cursor />
      <ScrollManager />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/:slug" element={<ServicePage />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </div>
  )
}
