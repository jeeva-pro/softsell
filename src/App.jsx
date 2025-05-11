import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import WhyChooseUs from './components/WhyChooseUS'
import Testimonials from './components/Testimonials'
import ContactForm from './components/ContactForm'
import ChatWidget from './components/ChatWidget'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <div  className='font-sans'>
  <Navbar/>
  <Hero/>
  <HowItWorks/>
  <WhyChooseUs/>
  <Testimonials/>
  <ContactForm/>
  <ChatWidget/>
  <Footer/>
 </div>
    </>
  )
}

export default App
