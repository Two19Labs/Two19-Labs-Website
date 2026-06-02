import { Routes, Route } from 'react-router-dom'
import Cursor from './components/Cursor'
import Nav from './components/Nav'
import ScrollManager from './components/ScrollManager'
import Home from './pages/Home'
import ServicePage from './pages/ServicePage'

export default function App() {
  return (
    <div className="relative min-h-screen [overflow-x:clip]">
      <Cursor />
      <ScrollManager />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/:slug" element={<ServicePage />} />
      </Routes>
    </div>
  )
}
