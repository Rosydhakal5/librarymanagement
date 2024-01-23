import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Baselayout = ({ children }) => {
  return (
    <>
    <Header />
    <main className = "main-content"> {children} </main>
    <Footer />
    </>
  )
}

export default Baselayout;