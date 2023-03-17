// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Footer from './components/Footer'
import NavbarComponent from './components/Navbar'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <NavbarComponent/>
    <Home/>
    <Footer/>
    </>
    
  )
}

export default App
