import React from 'react'
import Header from './Components/Header'
import Main from './Components/Main'
import Footer from './Components/Footer'
import './App.scss'

const App = () => {
  return (
   <div className='App'>
    <Header/>
    <Main/>
    <Footer/>
   </div>
  )
}

export default App