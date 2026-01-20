import React from 'react'
import './App.css'

// Hooks
import useScrollEffect from './assets/hooks/useScrollEffect.js'

// Components
import Navbar from './assets/components/Navbar.jsx'
import Footer from './assets/components/Footer.jsx'

// Pages
import Home from './pages/home/home.jsx'

const App = () => {
    useScrollEffect();

    return (
        <div>
            <Navbar />
            <Home />
            <Footer />
        </div>
    )
}

export default App
