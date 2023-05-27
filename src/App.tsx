import React from 'react'
import './App.css'
import {BrowserRouter ,Routes,Route} from 'react-router-dom'
import { About, Footer, Header, Home ,Gallery, ContactUs, ProductCard} from './components/paths'

const App:React.FC = () => {

  return (
    <>
      <BrowserRouter>
        <Header />
           <Routes>
             <Route path="/" element={<Home/>} />
             <Route path='/About' element={<About/>} />
             <Route path='/Gallery.tsx' element={<Gallery/>} />
             <Route path='/ContactUs' element={<ContactUs/>} />
             <Route path='/ProductCard' element={<ProductCard/>} />
           </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
