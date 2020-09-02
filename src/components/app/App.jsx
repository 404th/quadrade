import React from 'react'
import './App.css'
//COMPONENTS
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Routes from '../../Routes'

const App = () => {
  return (
    <div>
      <Header />
      <Routes />
      <Footer />
    </div>
  )
}

export default App