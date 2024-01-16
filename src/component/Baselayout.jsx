import React from 'react'
import Footer from './layout/Footer'
import Header from './layout/Header'

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