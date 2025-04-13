
import { Suspense } from 'react'
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import NavBar from './components/NavBar/NavBar'
import PricingOptions from './components/PricingOptions/PricingOptions'

const pricingPromise = fetch('pricingData.json').then(res=>res.json())

function App() {
  

  return (
    <>
      
      
<header>
  <DaisyNav></DaisyNav>
  <NavBar></NavBar>
</header>
<main>
  <Suspense fallback={<span className="loading loading-ball loading-lg"></span>}>
<PricingOptions pricingPromise={pricingPromise}></PricingOptions>
  </Suspense>
</main>
     
    
    </>
  )
}

export default App
