
import './App.css'
import { Header } from './layout/Header'
import { Hero } from './pages/Hero'
import { RandomInfo } from './pages/RandomInfo'
import {About} from "./pages/About.jsx"
import { Product } from './pages/Product.jsx'
import YellowStrip from './pages/YellowStrip.jsx'
import FaqSection from './pages/FaqSection.jsx'
import Footer from './layout/Footer.jsx'

function App() {


  return (
    <>
      <div>
    <Header/>
    <Hero/>
    <RandomInfo/>
    <About/>
    <Product/>
    <YellowStrip/>
    <FaqSection/>
    <Footer/>
      </div>
     
    </>
  )
}

export default App
