import Features from "./Components/Features"
import Footer from "./Components/Footer"
import Hero from "./Components/Hero"
import HowItWorks from "./Components/HowItWorks"
import Navbar from "./Components/Navbar"
import Plans from "./Components/Plans"
import Testimonials from "./Components/Testimonials"

const App = () => {
  return (
    <main className="text-neutral-300 antialiased">
      <Navbar />
      <Hero />
      <div id="howitworks"><HowItWorks/></div>
      <div id="features"><Features/></div>
      <div id="pricing"><Plans/></div>
      <Testimonials/>
      <Footer/>
      
    </main>
  )
}

export default App