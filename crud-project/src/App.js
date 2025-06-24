import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Menu from './Components/Menu'
import Home from './pages/Home'
import Create from './pages/Create'
import Update from './pages/Update'
import NotFound from './pages/NotFound'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <BrowserRouter>
      <Menu/>
      <ToastContainer position='top-center' autoClose={4000}/>
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/create'} element={<Create/>}/>
        <Route path={'/edit/:id'} element={<Update/>}/>
        <Route path={'/*'} element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App