import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Update from './pages/Update'
import { Route, Routes } from 'react-router-dom'


function App() {
  

  return (
    <>
    <Routes>
      <Route element={<Home/>} path='/'></Route>
      <Route element={<Update/>} path='/update'></Route>
    </Routes>
    </>
  )
}

export default App
