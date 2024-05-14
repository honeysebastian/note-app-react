import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Update from './pages/Update'
import { Route, Routes } from 'react-router-dom'


function App() {
  const [editNote,setEditNote]=useState([])
  

  return (
    <>
    <Routes>
      <Route element={<Home setEditNote={setEditNote} />} path='/'></Route>
      <Route element={<Update editNote={editNote} />} path='/update'></Route>
    </Routes>
    </>
  )
}

export default App
