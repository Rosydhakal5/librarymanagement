import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from 'react-router-dom'
import Login from './pages/auth/Login'
import AdminSignup from './pages/auth/AdminSignup'
import ResetPassword from './pages/auth/ResetPassword'
import AddBook from './pages/books/AddBook'
import Books from './pages/books/Books'
import EditBook from './pages/books/EditBook'
import Dashboard from './pages/dashboard/Dashboard'




function App() {
  
  return (
    <>
    <Routes>
    <Route path = '/' element = {<AdminSignup />} />
     <Route path = '/login' element = {<Login />} />
     <Route path = '/admin-signup' element = {<AdminSignup />} />
     <Route path = '/reset-password' element = {<ResetPassword />} />
     <Route path= '/AddBook' element = {<AddBook/>} />
     <Route path = '/books' element = {<Books />} />
     <Route path = '/edit-book' element = {<EditBook />} />

     <Route path = '/history' element = {<History />} />

     <Route path = '/dashboard' element = {<Dashboard />} />

    

    </Routes>
    </>
  )
}

export default App
