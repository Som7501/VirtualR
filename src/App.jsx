import Navbar from './components/navbar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import WorkFlow from './components/WorkFlow'
import Prize from './components/Prize'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

const App = () => {
  return (<>
  <Navbar/>
  <div className='max-w-7xl mx-auto pt-20 px-6'>
      <HeroSection/>
      <FeatureSection/>
      <WorkFlow/>
      <Prize/>
      <Testimonials/>
      <Footer/>
  </div>
    </>
  )
}

export default App